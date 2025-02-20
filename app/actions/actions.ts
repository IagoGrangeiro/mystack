"use server";

import prisma from "@/app/lib/prisma"

export const registerUser = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const born = formData.get("born") as string;
    const password = formData.get("password") as string;

    await prisma.user.create({
        data: {
            username,
            email,
            born,
            password
        }
    })
}