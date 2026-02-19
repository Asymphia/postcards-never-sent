export type Section = {
    id: number
    title: string
    content: string
}

export const SECTIONS: Section[] = [
    {
        id: 1,
        title: "About Postcards Never Sent",
        content: `Postcards Never Sent ("the Website", "we", "us") is an anonymous platform where users can share messages they never had the chance to send. These messages are publicly displayed and intended to exist without ownership, response, or destination.

By using this Website, you agree to these Terms and Conditions.`,
    },
    {
        id: 2,
        title: "Eligibility",
        content: `You may use this Website if you are at least 13 years old (or the minimum legal age required in your country). By submitting a postcard, you confirm that you meet this requirement.`,
    },
    {
        id: 3,
        title: "Anonymous Use",
        content: `- You may submit postcards without creating an account or authenticating your identity.
- Messages are shared anonymously.
- We do not verify the identity of authors or recipients.

Once submitted, a postcard cannot be edited or deleted by the user.`,
    },
    {
        id: 4,
        title: "Content You Submit",
        content: `When submitting a postcard, you may provide:

- A sender name ("From")
- A recipient name ("To")
- The message text

You are solely responsible for the content you submit.

By submitting content, you confirm that:

- You have the right to share the text
- The content does not violate any laws
- The content does not infringe on the rights of others`,
    },
    {
        id: 5,
        title: "Prohibited Content",
        content: `You agree not to submit content that includes:

- Hate speech, harassment, or threats
- Explicit sexual content
- Content promoting violence, self-harm, or illegal activity
- Personal data of real individuals (such as addresses, phone numbers, emails)
- Content that is abusive, defamatory, or otherwise inappropriate`,
    },
    {
        id: 6,
        title: "Content Moderation & Removal",
        content: `- Postcards cannot be edited or deleted by their authors.
- The Website owner reserves the right to remove any postcard that is deemed offensive, inappropriate, or in violation of these Terms.
- If you believe a postcard contains inappropriate content, offensive language, or personal information, you may report it using the icon (!) on the single postcard page. Provide the reason and optional details, and we will review it.
- Removal may occur without prior notice and without notifying the author of the postcard.
- This moderation exists solely to protect the community and the purpose of the project.`,
    },
    {
        id: 7,
        title: "Bug Reporting",
        content: `- We provide a "Report a Bug" form to collect issues with the Website.
- When you report a bug, we only store what happened, on which device, which browser, and on which page.
- We do **not** store personal information such as emails or IP addresses.
- Your report helps us improve the Website while keeping your anonymity.`,
    },
    {
        id: 8,
        title: "Data & Privacy",
        content: `We respect anonymity and minimal data usage.

- We do not store personal user data.
- We do not collect accounts, emails, IP addresses, or tracking identifiers for postcard submissions.
- The only data stored is the content you voluntarily submit to a postcard or a bug report.

Users may contact us via email for support, but emails are not linked to postcards or bug reports.`,
    },
    {
        id: 9,
        title: "Ownership & License",
        content: `- You retain ownership of the text you submit.
- By submitting a postcard, you grant us a non-exclusive, royalty-free license to display, store, and share the content as part of the Website.

Postcards are intended to remain on the Website indefinitely unless removed under moderation rules.`,
    },
    {
        id: 10,
        title: "Emotional Content Disclaimer",
        content: `Postcards Never Sent may contain emotionally intense or sensitive content.
We do not provide mental health or crisis support. If you are in distress, please seek help from a qualified professional or local support services.`,
    },
    {
        id: 11,
        title: "Limitation of Liability",
        content: `We are not responsible for:
- How users interpret content on the Website
- Emotional responses triggered by reading or submitting postcards
- Any loss, damage, or harm resulting from use of the Website

Use of the Website is entirely at your own risk.`,
    },
    {
        id: 12,
        title: "Changes of These Terms",
        content: `We may update these Terms from time to time. Continued use of the Website after changes means you accept the updated Terms.`,
    },
    {
        id: 13,
        title: "Reporting & Contact",
        content: `- To report a postcard, click the (!) icon on the single postcard page, select a reason, and optionally add details.
- To report a bug with the Website, use the "Report a Bug" form — we only store technical details (what happened, on which device, page, etc.), not personal information.
- There is no direct contact form; all reporting is anonymous and helps us improve the platform while keeping your privacy.`,
    }
]