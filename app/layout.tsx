import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
import Nav from "./ui/Nav";
import Whatsapp from "./ui/Whatsapp";

export const metadata: Metadata = {
  title: "Estudio Mugica",
  description: "Estudio Contable Mugica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen static bg-slate-600">
          <Nav />
          {children}
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            Footer
          </footer>
          <div className="absolute bottom-10 right-10">
            <Whatsapp />
          </div>
        </div>
      </body>
    </html>
  );
}
