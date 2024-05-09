import Image from "next/image";
import { sql } from "@vercel/postgres";

export default async function PostsPage() {
  const posts = await sql`SELECT FROM posts`;

  return (
    <div>
      <h1>Posts</h1>
      {posts.rows.map((posts) => {
        return (
          <div key={post.id}>
            <h3>{posts.title}</h3>
            <p>{posts.content}</p>
          </div>
        );
      })}
    </div>
  );
}

//  <h3>First Post</h3>
// <p>This is the content of the first post</p>
// <h3>Second Post</h3>
// <p>This is the content of the second post</p>
// <h3>Third Post</h3>
// <p>This is the content of the third post</p>
