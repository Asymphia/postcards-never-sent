import type { MetadataRoute } from "next"
import { getPostcards } from "@/actions/postcards-actions"

const BASE_URL = "https://postcards-never-sent.vercel.app"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const postcards = await getPostcards()
    const postcardsList = postcards.result ?? []

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${BASE_URL}/create`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${BASE_URL}/terms-and-conditions`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5 },
        {
            url: `${BASE_URL}/postcards`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9
        },
    ]

    const dynamicPages: MetadataRoute.Sitemap = postcardsList.map((postcard) => ({
        url: `${BASE_URL}/postcards/${postcard.id}`,
        lastModified: postcard.createdAt ? new Date(postcard.createdAt) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }))

    return [...staticPages, ...dynamicPages]
}