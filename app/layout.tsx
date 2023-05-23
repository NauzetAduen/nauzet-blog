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
        className={`mx-auto max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-6xl ${hankenGrotesk.className} flex h-full min-h-full flex-col`}
      >
        <AppBar />
        <main className="flex flex-1 items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
