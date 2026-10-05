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
  alternates: {
    canonical: "https://www.route66washpo.com/",
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: "Route 66 Car Wash",
    image: "https://www.route66washpo.com/images/hero-main.jpeg",
    url: "https://www.route66washpo.com",
    telephone: "+19096200356",
    priceRange: "$19.99 - $29.99",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1650 W Holt Ave",
      addressLocality: "Pomona",
      addressRegion: "CA",
      postalCode: "91768",
      addressCountry: "US",
    },
    sameAs: [
      // paste this location's actual Facebook / Instagram / X / Yelp URLs here
    ],
  };

  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}