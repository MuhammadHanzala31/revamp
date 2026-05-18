import type { Metadata } from "next";
import "./globals.css";
import { aeonik, neueMontreal } from "./fonts";
import Navbar from "./(componenets)/Navbar";
import 'remixicon/fonts/remixicon.css'
import Footer from "./(componenets)/Footer";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


export const metadata: Metadata = {
  title: "Sispn Tech",
  description: "Sispn Tech agency fot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${aeonik.variable} ${neueMontreal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        {children}
        <Footer/>
        </body>
    </html>
  );
}
