import AppBar from "./components/appbar";
import Footer from "./components/footer";
import "./globals.css";
import { hankenGrotesk } from "./utils/fonts";

export const metadata = {
  title: "Nauzet's Portfolio",
  description: "Nauzet Hernández Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`mx-auto max-w-6xl ${hankenGrotesk.className}`}>
        <AppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
