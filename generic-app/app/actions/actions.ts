"use server";

import prisma from "@/app/lib/prisma"

export const createPost = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const authorIdString = formData.get("authorId") as string;
    const published = formData.get("published") === "on";

    // Converter authorId para Int
    const authorId = parseInt(authorIdString);

    await prisma.post.create({
        data: {
            title,
            content,
            authorId,
            published
        }
    })
}