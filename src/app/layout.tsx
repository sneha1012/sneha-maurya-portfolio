import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const basePath =
  process.env.NODE_ENV === "production" ? "/sneha-maurya-portfolio" : "";

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: `${basePath}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
        <footer className="border-t border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.02]">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between">
            <div className="mb-4 text-sm text-[var(--foreground)]/80">
              <p>© {new Date().getFullYear()} {aboutMe.name}.</p>
              {aboutMe.secretDescription && (
                <p className="text-xs mt-4 opacity-80">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
            <div className="mb-4">
              <p className="text-sm opacity-70">
                Built with{" "}
                <a
                  href="https://github.com/tovacinni/research-website-template"
                  className="underline hover:opacity-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  research-website-template
                </a>
                .
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
