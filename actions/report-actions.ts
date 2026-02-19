"use server"

import prisma from "@/lib/prisma"
import { ReportReason } from "@prisma/client"

export type ActionResponse = {
    success: boolean
    submitted?: boolean
    error?: string | null
}

export const reportPostcard = async (postcardId: number, prevState: unknown, formData: FormData): Promise<ActionResponse> => {
    try {
        const reason = String(formData.get("reason") ?? "").toUpperCase().trim() as ReportReason
        const details = formData.get("details") ? String(formData.get("details")).trim() : null

        if(!reason) {
            return { success: false, submitted: true, error: "Please fill required field." }
        }

        if(details && details.length > 1200) {
            return { success: false, submitted: true, error: "Details cannot be longer than 1200 characters." }
        }

        await prisma.postcardReport.create({
            data: {
                postcard: {
                    connect: { id: postcardId }
                },
                reason,
                details
            }
        })

        return { success: true, submitted: true }
    } catch (error) {
        return { success: false, submitted: true, error: "Server error. Please try again later." }
    }
}