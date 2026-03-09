import type { MetadataRoute } from 'next'

const BASE_URL = "https://postcards-never-sent.vercel.app"

const robots = (): MetadataRoute.Robots => {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "DotBot"],
                disallow: "/"
            }
        ],
        sitemap: `${BASE_URL}/sitemap.xml`
    }
}

export default robots