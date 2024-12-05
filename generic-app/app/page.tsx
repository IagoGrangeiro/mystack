// import Image from "next/image";

import Link from "next/link";
import prisma from "@/app/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: {
      published: true
    }
  });

  return (
    <div>
      <main className="w-full">
        <div className="container max-w-4xl m-auto">
          {posts.map(post => 
              <div key={post.id} className="flex flex-col border-b border-b-slate-300">
                <div className="pt-2">
                  Por <Link href={"/user/" + post.authorId}>{post.authorId}</Link> às
                </div>
                  <h2 className="font-bold">{post.title}</h2>
                  <p className="pl-2">{post.content}</p>
              </div>
          )}
        </div>
      </main>
    </div>
  );
}
