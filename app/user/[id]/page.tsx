import prisma from "@/app/lib/prisma";
import Image from "next/image";
import { createPost } from "@/app/actions/actions";

const UserPageId = async ({ params }: any) => {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(params.id)
        }
    });

    return (
        <main className="w-full">
            <div className="w-full border border-b-slate-300 grid justify-items-center py-2">
                <h1 className="text-3xl font-semibold">{user?.name}</h1>

                {user?.photo ? (
                    <Image src={`/${user.photo}`} alt={`${user?.name}`} width={100} height={100} />
                ) : (
                    <p>Nenhuma foto foi encontrada.</p>
                )}
                
                <p>{user?.email}</p>
            </div>
            
            <div className="w-full border border-b-slate-300 grid justify-items-center py-2">
                <h2 className="text-3xl font-semibold mb-2">Criar Postagem</h2>
                <form action={createPost} className="flex flex-col gap-y-2 w-[300px]">
                    <input type="hidden" name="authorId" value={user?.id}/>
                    <input type="text" name="title" placeholder="Título" className="px-2 py-1 rounded-sm"/>
                    <textarea name="content" rows={5} placeholder="Conteúdo" className="px-2 py-1 rounded-sm"/>
                    <label htmlFor="published">Publicar? <input type="checkbox" name="published"/></label>
                    <button type="submit" className="bg-slate-300 py-2 rounded-md">Criar Postagem</button>
                </form>
            </div>
        </main>
    );
}

export default UserPageId;