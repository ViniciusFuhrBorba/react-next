import { PostCard } from "../PostCard";
import "./styles.css";

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        title={post.title}
        body={post.body}
        cover={post.cover}
        id={post.id}
        key={post.id}
      />
    ))}
  </div>
);
