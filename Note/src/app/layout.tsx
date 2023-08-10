import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import { Inter, Nanum_Gothic } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <h1>Demo Note App</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
