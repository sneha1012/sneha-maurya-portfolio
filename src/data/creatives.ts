export interface Creative {
  imageUrl: string;
  caption?: string;
}

const galleryFiles = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "WhatsApp Image 2026-02-03 at 20.19.21.jpeg",
  "WhatsApp Image 2026-02-03 at 20.20.25.jpeg",
  "WhatsApp Image 2026-02-03 at 20.20.58.jpeg",
  "WhatsApp Image 2026-02-03 at 20.22.45.jpeg",
  "WhatsApp Image 2026-02-03 at 20.23.11.jpeg",
  "WhatsApp Image 2026-02-03 at 20.23.34.jpeg",
  "WhatsApp Image 2026-02-03 at 20.23.51.jpeg",
  "WhatsApp Image 2026-02-03 at 20.24.52.jpeg",
  "WhatsApp Image 2026-02-03 at 20.25.15.jpeg",
  "WhatsApp Image 2026-02-03 at 20.25.29.jpeg",
  "WhatsApp Image 2026-02-03 at 20.26.02.jpeg",
  "WhatsApp Image 2026-02-03 at 20.26.33.jpeg",
  "WhatsApp Image 2026-02-03 at 20.27.25.jpeg",
];

export const creativesData: Creative[] = galleryFiles.map((file) => ({
  imageUrl: `/gallery/${encodeURIComponent(file)}`,
}));
