import { getNoneFeaturedPosts } from "../service/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function CarouselPosts() {
  const posts = await getNoneFeaturedPosts();

  return (
    <section>
      <h2>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
