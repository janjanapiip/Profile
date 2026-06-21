#!/usr/bin/env python3
"""Generate Yuphi favicon assets matching the site's K-vibe / pastel theme."""

from __future__ import annotations

import io
import math
import struct
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT_SVG = ROOT / "public" / "favicon.svg"
OUT_ICO = ROOT / "public" / "favicon.ico"
OUT_APPLE = ROOT / "public" / "apple-touch-icon.png"

# Theme colors from src/styles/global.css
SKY_SOFT = "#e5f1fb"
NAVY_DEEP = "#1e2a4a"
PINK_PASTEL = "#fad2e1"
YELLOW_SOFT = "#fff4bd"
CLOUD_WHITE = "#ffffff"

# High-resolution render target, then downscaled for crisp ICO sizes.
RENDER_SIZE = 512


def star_points(cx: float, cy: float, outer: float, inner: float, points: int = 4) -> list[tuple[float, float]]:
    """Return polygon points for a star / sparkle shape."""
    pts: list[tuple[float, float]] = []
    for i in range(points * 2):
        angle = math.pi / 2 + i * math.pi / points
        radius = outer if i % 2 == 0 else inner
        pts.append((cx + radius * math.cos(angle), cy + radius * math.sin(angle)))
    return pts


def draw_y_favicon(size: int, *, hi_res: bool = False) -> Image.Image:
    """Draw the Yuphi favicon at the requested pixel size."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    scale = size / RENDER_SIZE

    def s(value: float) -> float:
        return value * scale

    # Background: soft sky circle with a subtle white border ring.
    cx, cy, r = size / 2, size / 2, size * 0.48
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=SKY_SOFT)
    draw.ellipse(
        [cx - r + s(6), cy - r + s(6), cx + r - s(6), cy + r - s(6)],
        outline=CLOUD_WHITE,
        width=max(1, int(s(10))),
    )

    # "Y" letter drawn with rounded strokes (geometric approximation).
    stroke = s(44)
    # Vertical stem from (256, 232) down to (256, 400) on the 512 canvas.
    x_stem = s(256)
    y_stem_top = s(232)
    y_stem_bottom = s(400)
    draw.line(
        [(x_stem, y_stem_top), (x_stem, y_stem_bottom)],
        fill=NAVY_DEEP,
        width=max(1, int(stroke)),
    )

    # Left arm: from stem top to (144, 112).
    draw.line(
        [(x_stem, y_stem_top), (s(144), s(112))],
        fill=NAVY_DEEP,
        width=max(1, int(stroke)),
    )

    # Right arm: from stem top to (368, 112).
    draw.line(
        [(x_stem, y_stem_top), (s(368), s(112))],
        fill=NAVY_DEEP,
        width=max(1, int(stroke)),
    )

    # Round caps at the three endpoints.
    cap_r = stroke / 2
    for px, py in [(x_stem, y_stem_bottom), (s(144), s(112)), (s(368), s(112))]:
        draw.ellipse([px - cap_r, py - cap_r, px + cap_r, py + cap_r], fill=NAVY_DEEP)

    # Pink pastel sparkle accent near upper right.
    sparkle_pts = star_points(s(392), s(136), s(34), s(12), points=4)
    draw.polygon(sparkle_pts, fill=PINK_PASTEL)

    # Tiny yellow dot accent near lower left.
    dot_r = s(18)
    draw.ellipse(
        [s(132) - dot_r, s(388) - dot_r, s(132) + dot_r, s(388) + dot_r],
        fill=YELLOW_SOFT,
    )

    return img


def generate_svg() -> str:
    """Return the SVG source for the favicon."""
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <!-- Soft sky circle background -->
  <circle cx="64" cy="64" r="60" fill="#e5f1fb"/>
  <circle cx="64" cy="64" r="54" fill="none" stroke="#ffffff" stroke-width="3"/>

  <!-- Cute rounded "Y" monogram -->
  <g stroke="#1e2a4a" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <line x1="64" y1="58" x2="64" y2="100"/>
    <line x1="64" y1="58" x2="36" y2="28"/>
    <line x1="64" y1="58" x2="92" y2="28"/>
  </g>

  <!-- Pink sparkle accent -->
  <path d="M98 34 L100.5 41.5 L108 44 L100.5 46.5 L98 54 L95.5 46.5 L88 44 L95.5 41.5 Z" fill="#fad2e1"/>

  <!-- Yellow dot accent -->
  <circle cx="33" cy="97" r="4.5" fill="#fff4bd"/>
</svg>
"""


def main() -> None:
    # Render at high resolution, then downscale to requested ICO sizes.
    hi_res = draw_y_favicon(RENDER_SIZE, hi_res=True)

    ico_sizes = [16, 32, 48, 64, 128]

    # Build a multi-resolution ICO manually so each size is pre-rendered
    # (Pillow's ICO save only stores one PNG frame).
    png_frames: list[bytes] = []
    for target in ico_sizes:
        frame = hi_res.resize((target, target), Image.Resampling.LANCZOS)
        buf = io.BytesIO()
        frame.save(buf, format="PNG")
        png_frames.append(buf.getvalue())

    out = io.BytesIO()
    count = len(ico_sizes)
    # ICO header: reserved, type (1=icon), count.
    out.write(struct.pack("<HHH", 0, 1, count))
    # ICO directory: 16 bytes per entry.
    data_offset = 6 + 16 * count
    for size, data in zip(ico_sizes, png_frames):
        out.write(
            struct.pack(
                "<BBBBHHII",
                size if size < 256 else 0,  # width
                size if size < 256 else 0,  # height
                0,  # colors (0 = >256)
                0,  # reserved
                1,  # color planes
                32,  # bits per pixel
                len(data),
                data_offset,
            )
        )
        data_offset += len(data)
    for data in png_frames:
        out.write(data)

    OUT_ICO.parent.mkdir(parents=True, exist_ok=True)
    OUT_ICO.write_bytes(out.getvalue())

    # Apple touch icon: 180x180 with slight padding so iOS rounded corners
    # don't clip the design.
    apple = Image.new("RGBA", (180, 180), (0, 0, 0, 0))
    apple_icon = hi_res.resize((156, 156), Image.Resampling.LANCZOS)
    apple.paste(apple_icon, ((180 - 156) // 2, (180 - 156) // 2), apple_icon)
    apple.save(OUT_APPLE, format="PNG")

    OUT_SVG.write_text(generate_svg(), encoding="utf-8")

    print(f"Wrote {OUT_SVG}")
    print(f"Wrote {OUT_ICO} with sizes {ico_sizes}")
    print(f"Wrote {OUT_APPLE}")


if __name__ == "__main__":
    main()
