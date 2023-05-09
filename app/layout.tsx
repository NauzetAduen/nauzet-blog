import AppBar from "./components/appbar";
import Footer from "./components/footer";
import "./globals.css";
import { hankenGrotesk } from "./utils/fonts";

export const metadata = {
  title: "Nauzet's Portfolio",
  description: "Nauzet Hernández portfolio and blog.",
  applicationName: "Nauzet Hernández portfolio and blog",
  authors: { name: "Nauzet Hernández", url: "https://nauzet.vercel.app" },
  creator: "Nauzet Hernández",
  generator: "Next.js",
  keywords: [
    "Software engineer",
    "Flutter",
    "Blog",
    "Portfolio",
    "Software development",
    "Personal project",
    "Next.js",
    "React",
  ],
  formatDetection: { telephone: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`mx-auto max-w-6xl ${hankenGrotesk.className} flex min-h-full flex-col`}
      >
        <AppBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
