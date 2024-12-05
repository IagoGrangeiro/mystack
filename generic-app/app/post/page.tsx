// import Image from "next/image";

import prisma from "@/app/lib/prisma";
import Link from "next/link";

const PostPage = async () => {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h1 className="text-3xl">Posts page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}><Link href={`/post/${post.id}`}>{post.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default PostPage;