import prisma from "@/app/lib/prisma";

const PostPageId = async ({ params }: any) => {
    const post = await prisma.post.findUnique({
        where: {
            id: Number(params.id)
        }
    });

    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <h1 className="text-3xl font-semibold">{post?.title}</h1>
            <p>{post?.content}</p>
        </main>
    );
}

export default PostPageId;