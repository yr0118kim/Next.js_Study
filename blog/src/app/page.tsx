import Image from "next/image";
import Hero from "./components/Hero";
import FeaturedPosts from "./components/FeaturedPosts";
import CarouselPosts from "./components/CarouselPosts";

export default function HomePage() {
  return (
    <section>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}
      <CarouselPosts></CarouselPosts>
    </section>
  );
}
