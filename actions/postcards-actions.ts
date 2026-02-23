"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { postcardStamp } from "@/components/postcards/PostcardStamp"
import { cache } from "react"

export interface CreatePostcardInput {
    from: string
    to: string
    text: string
    selectedStamp: postcardStamp
}

export const createPostcard = async (data: CreatePostcardInput) => {
    try {
        if (!data.from || !data.to || !data.text || !data.selectedStamp) {
            return { success: false, error: "All fields are required!" }
        } else if (data.text.length > 400) {
            return { success: false, error: "Text cannot be longer than 400 characters!" }
        } else if (data.from.length > 20 || data.to.length > 20) {
            return { success: false, error: "'From' and 'To' fields cannot be longer than 20 characters!" }
        }

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
        const result = await prisma.postcard.findMany({
            orderBy: { createdAt: "desc" }
        })

        if (!result) {
            return { success: true, result: null }
        }

        return { success: true, result: result }
    } catch (error) {
        return { success: false, error: "Database fetching failed" }
    }
}

export const getPostcard = cache(async (id: number) => {
    try {
        const result = await prisma.postcard.findUnique({ where: { id } })

        if (!result) {
            return { success: true, result: null }
        }

        return { success: true, result: result }
    } catch (error) {
        return { success: false, error: "Database fetching failed" }
    }
})