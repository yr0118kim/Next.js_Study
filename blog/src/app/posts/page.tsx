import FilterablePosts from "../components/FilterablePosts";
import { getAllPosts } from "../service/posts";

export default async function PostPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <FilterablePosts posts={posts} categories={categories}>
      포스트들!
    </FilterablePosts>
  );
}
