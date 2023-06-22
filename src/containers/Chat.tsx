import ChatInput from '../components/chat/ChatInput';
import ChatHeader from '../components/chat/ChatHeader';
import { useAppSelector } from '../hooks';
import ChatMessage from '../components/chat/ChatMessage';


function ChatContainer() {
    const { messages } = useAppSelector((state) => state.chat)
    return (
        <div className='desktop:w-[80%] mobile:w-[100%] flex items-center relative justify-center bg-white w-[100%] h-[100vh] '>
            <div className='w-[100%] h-[100%] flex flex-col items-start'>
                <ChatHeader />
                <ChatInput />
                <div className={`w-[96%] mt-[15px] desktop:h-[85%] mobile:h-[74%] gap-[15px] flex flex-col overflow-y-scroll items-start`}
                    id='chat-messages-main'
                >
                    {messages.map((item) => {
                        return <ChatMessage
                            reactions={item.reactions ? item.reactions : null}
                            message={item.message}
                            username={item.username}
                            likes={item.likes}
                            initials={item.initials}
                            bgColor={item.bgColor as `#${string}`}
                            timestamp={item.timestamp}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChatContainer;