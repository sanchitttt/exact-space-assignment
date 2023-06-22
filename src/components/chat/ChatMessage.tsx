import { ChatMessageProps } from "../../redux/types"
import ChatMessageUserDetails from "./ChatMessageUserDetails"


function ChatMessage({ username, message, likes, image, initials, bgColor, timestamp }: ChatMessageProps) {
    return (
        <div className='flex items-center justify-start'>
            <div className='w-[85%] ml-[10px] flex gap-[20px]'>
                <ChatMessageUserDetails
                    image={image}
                    message={message}
                    likes={likes}
                    initials={initials}
                    bgColor={bgColor}
                    timestamp={timestamp}
                    username={username}
                />
            </div>

        </div>
    )
}

export default ChatMessage