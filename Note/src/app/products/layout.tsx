import Link from "next/link";
import styles from "./layout.module.css";
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
