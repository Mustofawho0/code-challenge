import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/core/Navbar";
import Footer from "~/components/core/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - Clone FHCI BUMN",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
