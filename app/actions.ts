"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { postcardStamp } from "@/components/postcards/PostcardStamp"

export interface CreatePostcardInput {
    from: string
    to: string
    text: string
    selectedStamp: postcardStamp
}

export const createPostcard = async (data: CreatePostcardInput) => {
    try {
        const newMessage = await prisma.postcard.create({
            data: {
                from: data.from,
                to: data.to,
                message: data.text,
                stampText: data.selectedStamp
            },
        })

        revalidatePath("/")
        return { success: true, id: newMessage.id }
    } catch (error) {
        return { success: false, error: "Database submission failed" }
    }
}

export const getPostcards = async () => {
    try {
        const result = await prisma.postcard.findMany({})

        revalidatePath("/")
        return { success: true, result: result }
    } catch (error) {
        return { success: false, error: "Database fetching failed" }
    }
}