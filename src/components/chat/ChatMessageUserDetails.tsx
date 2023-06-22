import { useState } from 'react'
import Avatar from '../Avatar'

function ChatMessageUserDetails({ image, initials, bgColor, username, timestamp, message, likes }: {
    image?: string,
    initials: string,
    bgColor: `#${string}`,
    username: string,
    timestamp?: string,
    message?: string
    likes: number
}) {
    console.log(message)
    const [likesAmount, setLikesAmount] = useState(likes);
    const [showLikes, setShowLikes] = useState(() => likesAmount > 0);
    return (
        <div className='flex items-start gap-[10px] cursor-default transition'
            onMouseOver={() => {
                if (!showLikes) setShowLikes(true)
            }}
            onMouseLeave={() => {
                if (likesAmount <= 0) setShowLikes(false);
            }}

        >
            {image ? <img
                src={image}
                alt='profile-icon'
                width='32px'
                height='32px'
            /> :
                <div className='mt-[5px]'>
                    <Avatar initials={initials} bgColor={bgColor} />
                </div>
            }
            <div className='flex flex-col relative '>
                <h1 className='font-normal'>{username}</h1>
                {message && timestamp && <div><h6 className='text-[11px] font-light'>{timestamp}</h6>
                    <div className='w-[100%] relative bg-[#f4f4f4] min-w-[90px] py-[10px] pl-[15px] mt-[5px] rounded-r-[10px]'

                    >
                        {message}
                    </div>

                </div>}
                {showLikes && message && timestamp ? <div className='bottom-0 right-0'>
                    <div className='flex cursor-pointer '>
                        <div className='flex items-center gap-[2px] justify-center w-[50px] px-[10px] bg-lightGrey rounded-full mt-[1px] transition hover:bg-[#1DA1F2] hover:text-white'
                            onClick={() => setLikesAmount(likesAmount => likesAmount + 1)}
                        >
                            <p>&#x1F44D;</p>
                            <div className='text-[15px]'

                            >{likesAmount}</div>
                        </div>
                    </div>
                </div>
                    : <div className='bottom-0 right-0'>
                        <div className='h-[25px] w-[10px]' />
                    </div>}
            </div>
        </div>
    )
}

export default ChatMessageUserDetails