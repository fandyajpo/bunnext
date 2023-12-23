import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Drawer from "@/components/Layout/Drawer";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fandytestdomain.my.id/"),
  title: "Fandy Test Domain",
  description: "fandy domain test",

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
    description: "fandy domain test",
    type: "website",
  },
  twitter: {
    title: "Fandy Test Domain",
    description: "fandy domain test",
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
      <head>
        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BG002TSTCV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >{` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-BG002TSTCV');`}</Script>
      </head>
      <body className={inter.className}>
        <Drawer title="Fandy Ahmad">{children}</Drawer>
        <SpeedInsights />
      </body>
    </html>
  );
}
