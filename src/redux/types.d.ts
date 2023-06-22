interface PostMessage {
    username: string,
    likes: number,
    message: string,
    image?: string,
    initials: string,
    bgColor: `#${string}`,
    timestamp: string,
}


export type ChatMessageProps = PostMessage