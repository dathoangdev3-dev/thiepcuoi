import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Thiệp Cưới - Hoàng Đạt & Đỗ Mai",
  description: "Trân trọng kính mời bạn đến dự lễ cưới của chúng tôi",
  openGraph: {
    title: "Thiệp Cưới - Hoàng Đạt & Đỗ Mai",
    description: "Trân trọng kính mời bạn đến dự lễ cưới của chúng tôi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${cormorant.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
