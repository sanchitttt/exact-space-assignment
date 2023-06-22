import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useEffect, useState } from "react"
import chatSlice from "../../redux/chatSlice";
import { useAppDispatch } from "../../hooks";
import { USERS_LIST, generateDateTimestamp, randomUser } from "../../utils/utils";
import ChatMessageUserDetails from "./ChatMessageUserDetails";
import TextareaAutosize from 'react-textarea-autosize';

function ChatInput() {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [showMentionTippy, setShowMentionTippy] = useState(false);
  const { postMessage } = chatSlice.actions;
  const dispatch = useAppDispatch();

  const emojiClickHandler = (emojiData: EmojiClickData) => {
    setMessage(message => message + emojiData.emoji)
  }

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setShowEmoji(false)
        setShowMentionTippy(false)
      }
    })
    return () => {
      document.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setShowEmoji(false)
          setShowMentionTippy(false)
        }
      })
    }
  })

  const messageInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value[e.target.value.length - 1] === '@') {
      setMessage(e.target.value)
      setShowMentionTippy(true);
    }
    else {
      if (showMentionTippy) setShowMentionTippy(false);
      setMessage(e.target.value);
    }
  }

  const mentionHandler = (_e: React.MouseEvent, name: string) => {
    setMessage(message => message + name)
    setShowMentionTippy(false);
  }

  const sendMessage = () => {
    if (message.length) {
      const { username, bgColor, initials } = randomUser();
      setMessage('')
      setShowEmoji(false);
      dispatch(postMessage({
        username,
        bgColor: bgColor as `#${string}`,
        initials,
        message: message,
        likes: 0,
        timestamp: generateDateTimestamp(),
      }))
    }
  }


  return (
    <div className='z-[1000] bg-white flex items-center justify-center w-[100%] absolute bottom-0 left-0'>
      <div className={`relative flex items-center w-[95%] justify-between border-[1px] px-[15px] border-[#F2F2F2] rounded-full`}>
        <TextareaAutosize
          className={`resize-hidden flex overflow-hidden  py-[15px] w-[85%]`}
          value={message}
          cols={50}
          onChange={messageInputHandler}
          placeholder="Type a message"
        />
        <div className='flex items-center gap-[20px]'>
          <div
            id='emoji-picker-show-icon'
            onClick={() => setShowEmoji(!showEmoji)}
          >{!showEmoji ?
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Antu_face-smile-big.svg/1280px-Antu_face-smile-big.svg.png'
              width='32px'
              height='32px'
              alt='add emoji'
              className='cursor-pointer'
            /> :
            <img
              src='https://i.ibb.co/WDQJw67/error-close-svgrepo-com.png'
              width='32px'
              height='32px'
              alt='add emoji'
              className='cursor-pointer'
            />}
          </div>
          <div className='cursor-pointer'
            onClick={sendMessage}
          >
            <svg width='32px' height={'32px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12L4 4L6 12M20 12L4 20L6 12M20 12H6" stroke="#21978B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
        </div>
        {showEmoji && <div className='absolute right-0 bottom-[75px]' id='emoji-picker-container'>
          <EmojiPicker onEmojiClick={emojiClickHandler} />
        </div>}
        {showMentionTippy && <div className='absolute bottom-[60px] w-[85%] flex flex-col gap-[10px] border-[1px] border-lightGrey justify-center '>
          {USERS_LIST.map((item) => {
            return <div
              className='flex p-[5px] hover:bg-lightGrey cursor-pointer'
              onClick={(e) => mentionHandler(e, item.username)}
            >
              <ChatMessageUserDetails
                username={item.username}
                bgColor={item.bgColor as `#${string}`}
                initials={item.initials}
                likes={0}
              />
            </div>
          })}
        </div>}
      </div>
    </div>
  )
}

export default ChatInput