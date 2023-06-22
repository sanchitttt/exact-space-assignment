interface PostMessage {
    username: string,
    likes: number,
    message: string,
    image?: string,
    initials: string,
    bgColor: `#${string}`,
    timestamp: string,
    reactions?: Record<string, number>[] | null;
}


export type ChatMessageProps = PostMessage