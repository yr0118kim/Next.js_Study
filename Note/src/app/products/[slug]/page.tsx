import NotFoundPage from "@/app/not-found";
import GoProductsButton from "@/components/GoProductsButton";
import { getProduct, getProducts } from "@/service/product";
import Image from "next/image";
export const revalidate = 3; // SSG -> ISR로 3초마다 업데이트 하게 하는 코드
type Props = {
  params: {
    slug: string;
  };
};
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  // 서버 파일에 있는 데이터 중 해당제품의 정보를 찾아서 그걸 보여줌

  if (!product) {
    redirect('/products')
    // NotFoundPage();

  }
  return (
    <>
      <h1>{product?.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product?.image}`}
        alt=""
        width="300"
        height="300"
      ></Image>
      <GoProductsButton></GoProductsButton>
    </>
  );
}
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름:${params.slug}`,
  };
}
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id, // 위에있는 props 형식과 같게!
  }));
}
