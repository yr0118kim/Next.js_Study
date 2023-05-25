type Props = {
  params: {
    slug: string;
  };
};
export default function ContactPage({ params }: Props) {
  return <h1>{params.slug} 제품 설명 페이지</h1>;
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(product => ({
    slug:product // 위에있는 props 형식과 같게!
  }))
}