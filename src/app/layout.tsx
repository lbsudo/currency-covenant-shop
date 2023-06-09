import "./globals.css";
import { Product } from "../types";
import { Providers } from "./providers";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Currency Covenant Shop",
  description: "The Official Store of The Covenant",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={roboto.className} lang="en">
      <head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
        <div
          hidden
          id="snipcart"
          data-api-key={process.env.SNIPCART_API_KEY}
          data-config-modal-style="side"
        />
      </body>
    </html>
  );
}
