import {  Inter, Dela_Gothic_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--body-font",
  subsets: ["latin"],
});

const deltaGothic = Dela_Gothic_One({
  variable: "--heading-font",
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "Retro",
  description: "Play Retro Games for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${deltaGothic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
