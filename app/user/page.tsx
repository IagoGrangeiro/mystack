// import Image from "next/image";

import prisma from "@/app/lib/prisma";
import Link from "next/link";

const UserPage = async () => {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1 className="text-3xl">Users page</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}><Link href={`/user/${user.id}`}>{user.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;