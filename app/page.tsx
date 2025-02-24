// import Image from "next/image";

import Link from "next/link";
import prisma from "@/app/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <main className="w-full">
        <div className="container max-w-4xl m-auto">
          {users.map(user => 
              <div key={user.id} className="flex flex-col border-b border-b-slate-300">
                {user.username}
              </div>
          )}
        </div>
      </main>
    </div>
  );
}
