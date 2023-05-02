import AppBar from "./components/appbar";
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
      <body className={`max-w-6xl mx-auto ${hankenGrotesk.className}`}>
        <AppBar />
        {children}
      </body>
    </html>
  );
}
