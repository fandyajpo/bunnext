import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fandytestdomain.my.id/"),
  title: "Fandy Test Domain",
  description: "Generated by NextJS",

  keywords: [
    "fandy test domain",
    "fandy test",
    "fandy domain",
    "domain fandy test",
    "test fandy",
  ],
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["fandyglitch3@gmail.com"],
    },
  },
  appLinks: {
    web: {
      url: "https://fandytestdomain.my.id/",
      should_fallback: true,
    },
  },
  category: "education",
  openGraph: {
    emails: "fandyglitch3@gmail.com",
    url: "https://fandytestdomain.my.id/",
    siteName: "Fandy Test Domain",
    title: "Fandy Test Domain",
    description: "Generated by NextJS",
    type: "website",
  },
  twitter: {
    title: "Fandy Test Domain",
    description: "Generated by NextJS",
  },
  creator: "Fanvercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
