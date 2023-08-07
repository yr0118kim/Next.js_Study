import { getProducts } from "@/service/product";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import MeowArticle from "@/components/MeowArticle";
import clothesImage from "../../../public/clothes.jpg";

export const revalidate = 3; // SSG -> ISR로 3초마다 업데이트 하게 하는 코드

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    //next: { revalidate: 3 }, // 3초마다 ISR로 새로고침, 0이 된다면 서버사이드 렌더링이 됨
    cache: "no-store",
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <Image src={clothesImage} alt="Clothes" priority />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle></MeowArticle>
    </>
  );
}
