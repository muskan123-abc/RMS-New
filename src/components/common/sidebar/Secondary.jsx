import React from 'react'
import { ArrowDownIcon, GlobalIcon, PlusIcon, UsersIcon } from '../icons/sidebar/SideBar'
import { MessegeList } from '../../../utils/Helper'

const Secondary = () => {
    return (
        <div className='w-[241px] bg-[#1F1A13] '>
            <div className='opacity-70 hover:opacity-100 flex items-center justify-between hover:bg-gradient-to-r from-white/10 to-white/10 cursor-pointer transition-all ease-linear duration-200 py-3 px-[14px] hover:border-t border-t border-transparent hover:border-white/20'>
                <div className='flex items-center'>
                    <GlobalIcon />
                    <h2 className='ff_poppins text-sm leading-[118.75%] text-white ms-2'>My communities</h2>
                </div>
                <ArrowDownIcon />
            </div>
            <div className='opacity-70 hover:opacity-100 flex items-center justify-between hover:bg-gradient-to-r from-white/10 to-white/10 cursor-pointer transition-all ease-linear duration-200 py-3 px-[14px] hover:border-t border-t border-transparent hover:border-white/20'>
                <div className='flex items-center'>
                    <UsersIcon />
                    <h2 className='ff_poppins text-sm leading-[118.75%] text-white ms-2'>My friends</h2>
                </div>
                <ArrowDownIcon />
            </div>
            <div className='border-t border-t-white/20  '>
                <div className='opacity-70 flex items-center justify-between py-5 px-[15px]'>
                    <h2 className='ff_poppins text-sm leading-[118.75%] text-white ms-2 uppercase '>Direct Message</h2>
                    <div className="cursor-pointer" >
                        <PlusIcon />
                    </div>
                </div>
                <div className='overflow-y-auto h-[calc(100vh-150px)] custom__Scroll_bar'>
                    {MessegeList.map((obj, index) => {
                        return (
                            <div key={index} className='py-2 flex items-center gap-2 px-[15px] opacity-80 hover:opacity-100 hover:bg-gradient-to-r from-white/10 to-white/10 cursor-pointer transition-all ease-linear duration-200'>
                                <img className='w-6 h-6' src={obj.image} alt="profile_img" />
                                <h2 className='ff_poppins text-sm leading-[118.75%] text-white'>{obj.title}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Secondary


