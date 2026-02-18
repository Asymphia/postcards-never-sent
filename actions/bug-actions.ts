"use server"

import prisma from "@/lib/prisma"

export type ActionResponse = {
    success: boolean
    submitted?: boolean
    error?: string | null
}

export const reportBug = async (prevState: unknown, formData: FormData): Promise<ActionResponse> => {
    try {
        const whatHappened = String(formData.get("whatHappened") ?? "").trim()
        const device = String(formData.get("device") ?? "").toUpperCase().trim()
        const browser = String(formData.get("browser") ?? "").trim()
        const page = String(formData.get("page") ?? "").trim()
        const details = formData.get("details") ? String(formData.get("details")).trim() : null
        const agreement = formData.get("agreement")

        if (!whatHappened || !device || !browser || !page) {
            return { success: false, submitted: true, error: "Please fill required fields." }
        }

        if(!agreement) {
            return { success: false, submitted: true, error: "You must accept terms & conditions." }
        }

        const allowedDevices = new Set(["PHONE", "TABLET", "PC", "OTHER"])
        if (!allowedDevices.has(device)) {
            return { success: false, submitted: true, error: "Invalid device value." }
        }

        if(details && details.length > 1200) {
            return { success: false, submitted: true, error: "Details cannot be longer than 1200 characters." }
        }

        if(whatHappened.length > 30 || browser.length > 30 || page.length > 30) {
            return { success: false, submitted: true, error: "Fields cannot be longer than 30 characters." }
        }

        const newBugReport = await prisma.bugReport.create({
            data: {
                whatHappened,
                device: device as any,
                browser,
                page,
                details: details || null
            }
        })

        return { success: true, submitted: true }
    } catch (error) {
        return { success: false, submitted: true, error: "Server error. Please try again later." }
    }
}