import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Route 66 Car Wash | Pomona, CA",
  description:
    "Express drive-thru car wash in Pomona, CA. Fast, automated tunnel washes with unlimited monthly memberships starting at $19.99.",
  icons: { icon: "/images/logo-new.png" },
  openGraph: {
    title: "Route 66 Car Wash | Pomona, CA",
    description:
      "Fast express drive-thru car wash on Route 66 in Pomona, CA. Unlimited monthly memberships starting at $19.99.",
    images: ["/images/hero-main.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
