import React from 'react'
import Image from 'next/image'
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from 'react-icons/fi'

const FeedCard: React.FC = () => {
    return (
        <div className='border-b-[1px] border-slate-500 p-4'>
            <div className='grid grid-cols-12'>
                <div className='col-span-1'>
                    <Image
                        src='https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'
                        alt="user icon"
                        width={50}
                        height={50}
                        className='rounded-full'
                    />
                </div>
                <div className='col-span-11 px-4'>
                    <h5>Anas Iqbal</h5>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error harum expedita ratione doloremque tempore ipsam, laboriosam esse dignissimos repellat consequuntur vero quae praesentium exercitationem dolor repellendus, aspernatur numquam, et ipsa! Architecto, voluptatem?
                    </p>
                    <div className='flex justify-between mt-5'>
                        <div> <FiMessageCircle /> </div>
                        <div> <FiRepeat /> </div>
                        <div> <FiHeart /> </div>
                        <div> <FiUpload /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedCard