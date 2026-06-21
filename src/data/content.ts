export interface PricingStyle {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly color: string;
  readonly features: readonly string[];
}

export type VideoPlatform = "instagram" | "tiktok";

export interface StyleVideo {
  readonly platform: VideoPlatform;
  readonly videoUrl: string;
  readonly gifUrl?: string;
  readonly label?: string;
}

export interface StyleFeature {
  readonly text: string;
  readonly icon: string;
}

export interface StyleShowcaseItem {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly features: readonly StyleFeature[];
  readonly layout: "text-left" | "text-center" | "text-right";
  readonly videos: readonly StyleVideo[];
}

export interface StyleShowcase {
  readonly heading: string;
  readonly title: string;
  readonly subtitle: string;
  readonly styles: readonly StyleShowcaseItem[];
}

export type KitchenPlatform = "instagram" | "tiktok";

export interface KitchenAccount {
  readonly platform: KitchenPlatform;
  readonly handle: string;
  readonly profileUrl: string;
  readonly embedUrl: string;
}

export interface KitchenSection {
  readonly heading: string;
  readonly subtitle: string;
  readonly accounts: readonly KitchenAccount[];
}

export type OrderStepIcon =
  | "pick-style"
  | "fill-brief"
  | "secure-slot"
  | "send-ingredients"
  | "cooking-time"
  | "tasting-review"
  | "payment-delivery";

export interface OrderStep {
  readonly n: string;
  readonly title: string;
  readonly description: string;
  readonly icon: OrderStepIcon;
}

export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly value: string;
}

export interface AboutCategory {
  readonly label: string;
  readonly colorClass: string;
}

export interface SiteContent {
  readonly meta: {
    readonly title: string;
    readonly description: string;
    readonly siteUrl: string;
    readonly keywords: readonly string[];
    readonly author: string;
    readonly twitterHandle: string;
    readonly image: string;
    readonly imageAlt: string;
  };
  readonly hero: {
    readonly subtitle: string;
    readonly title: string;
    readonly highlight: string;
    readonly description: string;
  };
  readonly about: {
    readonly heading: string;
    readonly greeting: string;
    readonly intro: {
      readonly before: string;
      readonly categories: readonly AboutCategory[];
      readonly after: string;
    };
    readonly paragraphs: readonly string[];
    readonly contacts: readonly ContactLink[];
  };
  readonly orderFlow: {
    readonly heading: string;
    readonly steps: readonly OrderStep[];
  };
  readonly pricing: {
    readonly heading: string;
    readonly subtitle: string;
    readonly styles: readonly PricingStyle[];
  };
  readonly orderForm: {
    readonly heading: string;
    readonly title: string;
    readonly subtitle: string;
    readonly whatsappNumber: string;
    readonly submitLabel: string;
    readonly note: string;
    readonly platforms: readonly string[];
  };
  readonly styleShowcase: StyleShowcase;
  readonly kitchenSection: KitchenSection;
  readonly contact: {
    readonly subtitle: string;
    readonly heading: string;
    readonly description: string;
    readonly links: readonly ContactLink[];
  };
  readonly footer: {
    readonly name: string;
  };
}

export const siteContent = {
  meta: {
    title: "Yuphi — Video Editor",
    description:
      "Yuphi (Shimazaki Miyu) — Video editor untuk konten Kecantikan, Makanan & Minuman, dan Gaya Hidup. Layanan editing bilingual dengan estetika K-vibe / Jepang.",
    siteUrl: "https://miyu.fiqri.dev",
    keywords: [
      "video editor",
      "video editor Indonesia",
      "freelance video editor",
      "editor video",
      "K-vibe video editor",
      "Jepang aesthetic",
      "beauty content editor",
      "food and beverage video",
      "lifestyle video editor",
      "bilingual video editor",
      "TikTok editor",
      "Instagram Reels editor",
      "Shimazaki Miyu",
      "Yuphi",
    ],
    author: "Shimazaki Miyu",
    twitterHandle: "@miyureiss20",
    image: "/assets/og-image.png",
    imageAlt:
      "Yuphi — Portfolio Video Editor Shimazaki Miyu dengan estetika K-vibe / Jepang",
  },
  hero: {
    subtitle: "♡ PORTFOLIO VIDEO EDITOR ♡",
    title: "Shimazaki",
    highlight: "Miyu",
    description:
      "Mengubah footage mentah menjadi cerita visual yang menarik dan dreamy ✦ Spesialisasi di bidang Kecantikan, Makanan & Minuman, dan Gaya Hidup dengan estetika K-vibe / Jepang.",
  },
  about: {
    heading: "♡ TENTANG AKU",
    greeting: "Halo, Aku Miyu!",
    intro: {
      before:
        "Halo, Yuphi di sini! Aku adalah Video Editor yang bersemangat mengubah footage mentahmu menjadi cerita visual yang menarik dan dinamis. Dengan ketajaman detail dan estetika, aku spesialis mengedit konten ",
      categories: [
        { label: "Kecantikan", colorClass: "bg-yellow-soft" },
        { label: "Makanan & Minuman", colorClass: "bg-pink-pastel" },
        { label: "Gaya Hidup", colorClass: "bg-blue-pale" },
      ],
      after: " — termasuk konten bilingual dan estetika K-vibe / Jepang.",
    },
    paragraphs: [
      "Tujuanku adalah membantu kreator dan brand menarik perhatian audiens melalui pacing yang pas, pemilihan audio yang tepat, dan storytelling yang kreatif. Mari wujudkan visimu! ✨",
    ],
    contacts: [
      {
        label: "Email",
        href: "mailto:shimazaki.miyu20@gmail.com",
        value: "shimazaki.miyu20@gmail.com",
      },
      {
        label: "Telepon",
        href: "https://wa.me/62895388924697",
        value: "+62 895-3889-24697",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/miyureiss20",
        value: "@miyureiss20",
      },
      {
        label: "TikTok",
        href: "https://tiktok.com/@miyureiss20",
        value: "@miyureiss20",
      },
    ],
  },
  orderFlow: {
    heading: "♡ CARA ORDER",
    steps: [
      {
        n: "01",
        icon: "pick-style",
        title: "Pilih Gaya Kamu",
        description:
          "Pilih paket editing yang paling cocok. Mau request khusus? Silakan tanya aja!",
      },
      {
        n: "02",
        icon: "fill-brief",
        title: "Isi Brief",
        description:
          "Isi form order dengan detail. Semakin jelas brief-nya, hasil video bakal makin sesuai ekspektasi.",
      },
      {
        n: "03",
        icon: "secure-slot",
        title: "Amankan Jadwal",
        description:
          "Bayar DP min. 50% untuk mengunci jadwal editing kamu, dan jangan lupa kirim bukti transfernya ya.",
      },
      {
        n: "04",
        icon: "send-ingredients",
        title: "Kirim Bahan",
        description:
          "Upload footage mentah ke Google Drive. Pastikan file sudah urut dan rapi supaya proses edit bisa lebih sat-set.",
      },
      {
        n: "05",
        icon: "cooking-time",
        title: "Waktu Memasak",
        description:
          "Proses editing membutuhkan waktu 3-5 hari, dihitung sejak footage & brief aku terima dengan lengkap.",
      },
      {
        n: "06",
        icon: "tasting-review",
        title: "Cicipi & Revisi",
        description:
          "Aku akan kirim preview video sesuai tanggal kesepakatan. Kalau ada yang kurang pas, kamu punya jatah revisi gratis 2x.",
      },
      {
        n: "07",
        icon: "payment-delivery",
        title: "Pembayaran & Pengiriman",
        description:
          "Setelah video di-ACC dan lunas, file final HD akan dikirim via GDrive. Videomu siap upload dan viral!",
      },
    ],
  },
  pricing: {
    heading: "♡ DAFTAR HARGA",
    subtitle: "Semua harga per menit (IDR) ✦",
    styles: [
      {
        id: "style-1",
        name: "Style 1",
        price: "60.000",
        color: "var(--color-blue-pale)",
        features: [
          "Editing Dasar (Potong-potong & perapihan video)",
          "Penambahan Teks / Judul Standar",
          "Musik Latar (BGM) & Efek Suara (SFX) Standar",
          "Penyesuaian warna & audio dasar",
        ],
      },
      {
        id: "style-2",
        name: "Style 2",
        price: "100.000",
        color: "var(--color-yellow-soft)",
        features: [
          "Semua fitur di Style 1",
          "+ Subtitle (Pilihan 1 atau 2 bahasa)",
        ],
      },
      {
        id: "style-3",
        name: "Style 3",
        price: "120.000",
        color: "var(--color-pink-pastel)",
        features: [
          "Semua fitur di Style 1 dan 2",
          "+ Efek Visual & Transisi Dinamis (Editing Lanjutan)",
          "+ Elemen Meme Viral & SFX Trending",
        ],
      },
      {
        id: "style-4",
        name: "Style 4",
        price: "150.000",
        color: "var(--color-blue-pale)",
        features: [
          "Semua fitur di Style 1, 2, dan 3",
          "+ Penambahan B-Roll (sisipan foto/video/ilustrasi)",
          "+ Animasi Kustom & Editing Kompleks",
        ],
      },
    ],
  },
  orderForm: {
    heading: "♡ FORM ORDER",
    title: "Isi Brief Kamu",
    subtitle:
      "Lengkapi detail di bawah, lalu kirim langsung ke WhatsApp-ku. Semakin jelas brief-nya, hasil video makin sesuai ekspektasi ✦",
    whatsappNumber: "62895388924697",
    submitLabel: "Kirim ke WhatsApp",
    note: "Tombol akan membuka WhatsApp dengan brief yang sudah terisi otomatis. Belum ada yang terkirim sampai kamu menekan kirim di WhatsApp.",
    platforms: ["TikTok", "Instagram Reels", "TikTok & Instagram", "Lainnya"],
  },
  contact: {
    subtitle: "ありがとう · 감사합니다",
    heading: "Terima Kasih\nBanyak!",
    description: "Siap mewujudkan ceritamu? Mari ngobrol ♡",
    links: [
      {
        label: "Kirim Email",
        href: "mailto:shimazaki.miyu20@gmail.com",
        value: "shimazaki.miyu20@gmail.com",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/miyureiss20",
        value: "@miyureiss20",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/62895388924697",
        value: "+62 895-3889-24697",
      },
    ],
  },
  styleShowcase: {
    heading: "♡ DAFTAR HARGA",
    title: "Daftar Harga",
    subtitle:
      "Semua harga per menit (IDR). Pilih style editing yang paling cocok buat konten kamu ✦",
    styles: [
      {
        id: "style-1",
        name: "Style 1",
        price: "60.000",
        features: [
          {
            text: "Basic Editing (Cut-to-cut & perapihan video)",
            icon: "M9.5 4C7.57 4 6 5.57 6 7.5S7.57 11 9.5 11 13 9.43 13 7.5 11.43 4 9.5 4zm0 2c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6zM6 13l4 7h2l-4-7H6zm8 0l4 7h2l-4-7h-2z",
          },
          {
            text: "Penambahan Teks / Judul Standar",
            icon: "M5 4v3h2.5V17H5v3h9v-3H11.5V7H14V4H5z",
          },
          {
            text: "Background Music (BGM) & Sound Effect (SFX) Standar",
            icon: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
          },
          {
            text: "Penyesuaian warna & audio dasar",
            icon: "M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z",
          },
        ],
        layout: "text-left",
        videos: [
          {
            platform: "tiktok",
            videoUrl:
              "https://www.tiktok.com/@miyur.home20/video/7625838235008257301",
            gifUrl: "/assets/gifs/style-1-1.gif",
          },
          {
            platform: "tiktok",
            videoUrl:
              "https://www.tiktok.com/@miyur.home20/video/7441522981282663688",
            gifUrl: "/assets/gifs/style-1-2.gif",
          },
        ],
      },
      {
        id: "style-2",
        name: "Style 2",
        price: "100.000",
        features: [
          {
            text: "Semua fitur di Style 1",
            icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
          },
          {
            text: "+ Subtitle (Pilihan 1 atau 2 bahasa)",
            icon: "M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
          },
        ],
        layout: "text-right",
        videos: [
          {
            platform: "tiktok",
            videoUrl:
              "https://www.tiktok.com/@miyureiss20/video/7573309928048168212",
            gifUrl: "/assets/gifs/style-2-1.gif",
          },
          {
            platform: "tiktok",
            videoUrl:
              "https://www.tiktok.com/@miyureiss20/video/7618045836458593556",
            gifUrl: "/assets/gifs/style-2-2.gif",
          },
        ],
      },
      {
        id: "style-3",
        name: "Style 3",
        price: "120.000",
        features: [
          {
            text: "Semua fitur di Style 1 dan 2",
            icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
          },
          {
            text: "+ Efek Visual & Transisi Dinamis (Advanced Editing)",
            icon: "M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z",
          },
          {
            text: "+ Elemen Meme Viral & SFX Trending (Cocok untuk konten sosmed yang engaging)",
            icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z",
          },
        ],
        layout: "text-center",
        videos: [
          {
            platform: "tiktok",
            videoUrl:
              "https://www.tiktok.com/@miyureiss20/video/7641425603232550151",
            gifUrl: "/assets/gifs/style-3-1.gif",
          },
          {
            platform: "tiktok",
            videoUrl:
              "https://www.tiktok.com/@miyureiss20/video/7642220027051101461",
            gifUrl: "/assets/gifs/style-3-2.gif",
          },
        ],
      },
      {
        id: "style-4",
        name: "Style 4",
        price: "150.000",
        features: [
          {
            text: "Semua fitur di Style 1, 2, dan 3",
            icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
          },
          {
            text: "+ Penambahan B-Roll (Sisipan foto/video/gambar ilustrasi untuk memperjelas konteks)",
            icon: "M18 4v1h-2V4H8v1H6V4H4v16h2v-1h2v1h8v-1h2v1h2V4h-2z",
          },
          {
            text: "+ Custom Animation & Complex Editing (Bebas request efek rumit sesuai kebutuhan)",
            icon: "M7.5 5.6L5 7l1.4-2.5L5 2l2.5 1.4L10 2 8.6 4.5 10 7 7.5 5.6zm12 9.8L22 17l-1.4-2.5L22 12l-2.5 1.4L17 12l1.4 2.5L17 17l2.5-1.6zM22 2l-1.4 2.5L22 7l-2.5-1.4L17 7l1.4-2.5L17 2l2.5 1.4L22 2zM9.5 22l1.4-2.5L9.5 17l2.5 1.4L14.5 17l-1.4 2.5 1.4 2.5-2.5-1.4-2.5 1.4z",
          },
        ],
        layout: "text-center",
        videos: [
          {
            platform: "tiktok",
            videoUrl:
              "https://www.tiktok.com/@dmozesalon/video/7594711251763186951",
            gifUrl: "/assets/gifs/style-4-1.gif",
          },
          {
            platform: "tiktok",
            videoUrl:
              "https://www.tiktok.com/@shimookasalon/video/7643647370470657300",
            gifUrl: "/assets/gifs/style-4-2.gif",
          },
        ],
      },
    ],
  },
  kitchenSection: {
    heading: "More from the Kitchen",
    subtitle:
      "Intip hasil edit terbaru, behind-the-scenes, dan moodboard langsung dari akun media sosial ✦",
    accounts: [
      {
        platform: "tiktok",
        handle: "@miyureiss20",
        profileUrl: "https://www.tiktok.com/@miyureiss20",
        embedUrl: "https://www.tiktok.com/embed/@miyureiss20",
      },
      {
        platform: "instagram",
        handle: "@miyureiss20",
        profileUrl: "https://www.instagram.com/miyureiss20",
        embedUrl: "https://www.instagram.com/miyureiss20/embed",
      },
    ],
  },
  footer: {
    name: "Shimazaki Miyu",
  },
} as const satisfies SiteContent;
