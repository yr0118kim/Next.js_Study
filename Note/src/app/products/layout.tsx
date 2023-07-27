import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 확인해 보세요",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <head />
    //   <body>
    //     <header className={styles.header}>
    //       <nav>
    //         <a href="">여성옷</a>
    //         <a href="">남성옷</a>
    //       </nav>
    //     </header>
    //     {children}
    //   </body>
    // </html>
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <a href="/products/men">남성옷</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
