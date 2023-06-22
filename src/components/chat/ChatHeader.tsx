import { useAppSelector } from "../../hooks"

function ChatHeader() {
    const { users } = useAppSelector((state) => state.chat)
    return (
        <div className='w-[100%]  py-[15px] border-b-[1px] border-lightGrey flex items-center justify-start'>
            <div className='flex mx-[15px] gap-[10px] w-[90%] items-center space-between'>
                <div>
                    <img
                        src='https://i.ibb.co/5MTts8g/image.png'
                        alt='group-icon'
                        className="rounded-full w-[32px] h-[32px]"
                    />
                </div>
                <div className='flex flex-col mobile:max-w-[200px] desktop:max-w-[500px]'>
                    <h1 className='font-semibold'>Crio.do Group</h1>
                    <h6 className='font-light text-[14px]'>This channel is for group discussion</h6>
                </div>
            </div>
            <div className='w-[100px] flex justify-center items-center mobile:flex-col desktop:flex-row gap-[10px]'>
                <div className='text-[14px] text-[#84848c]'>{users.length} | 100</div>
                <svg
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g strokeWidth={0} />
                    <g strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                        stroke="#84848c"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    )
}

export default ChatHeader