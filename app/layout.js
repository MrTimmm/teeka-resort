// Merge the `metadata` and `viewport` exports and <html lang="en"> into your existing
// layout. Keep your own font setup (font-joane / font-raleway) and globals.css import.
import Footer from "./components/Footer";
import "./globals.css";
import { site } from "./lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Teeka Resort Suites & Spa | Hotel in Lakeside, Pokhara, Nepal",
    template: "%s | Teeka Resort Pokhara",
  },
  description: site.description,
  keywords: [
    "Teeka Resort",
    "hotel in Lakeside Pokhara",
    "Pokhara hotels",
    "resort in Pokhara Nepal",
    "family hotel Pokhara",
    "honeymoon suite Pokhara",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: "Teeka Resort Suites & Spa | Hotel in Lakeside, Pokhara",
    description: site.description,
    locale: "en_US",
    images: [{ url: site.heroImage, width: 1920, height: 1080, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teeka Resort Suites & Spa | Lakeside, Pokhara",
    description: site.description,
    images: [site.heroImage],
  },
  other: {
    "geo.placename": "Pokhara",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#2B140C" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}

        <Footer />
      </body>
    </html>
  );
}