import React from 'react';


const Avatar = React.memo(({ bgColor, initials }: { bgColor: `#${string}`, initials: string }) => {
    return <div className={`w-[32px] h-[32px] text-[14px] rounded-full uppercase flex items-center justify-center text-white`}
        style={{ backgroundColor: bgColor }}
    >
        {initials}
    </div>
})
export default Avatar