"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { postcardStamp } from "@/components/postcards/PostcardStamp"

interface CreateMessageInput {
    from: string
    to: string
    text: string
    selectedStamp: postcardStamp
}

export const createMessage = async (data: CreateMessageInput) => {
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