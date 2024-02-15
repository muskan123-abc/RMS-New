import React, { useState } from 'react'
import { AnnouncementsIcon, ArrowDownIcon, FriendsIcon, GlobalIcon, NitroIcon, PlusIcon, ResourcesIcon, ShopIcon, UsersIcon } from '../icons/sidebar/SideBar'
import { messegeList } from '../../../utils/Helper'
import { Link } from 'react-router-dom';

const Secondary = () => {
    const [activedropdown, setActivedropdown] = useState({
        communities: false,
        friends: false,
    });

    const handleClick = (type) => {
        setActivedropdown(prevState => ({
            communities: type === 'communities' ? !prevState.communities : false,
            friends: type === 'friends' ? !prevState.friends : false,
        }));
    };

    return (
        <div className='w-full max-w-[241px] bg-[#1F1A13] h-full'>
            <div onClick={() => handleClick('communities')} className='opacity-70 hover:opacity-100 flex items-center justify-between hover:bg-gradient-to-r from-white/10 to-white/10 cursor-pointer transition-all ease-linear duration-200 py-3 max-[375px]:px-2 px-[14px] hover:border-t border-t border-transparent hover:border-white/20'>
                <div className='flex items-center'>
                    <GlobalIcon />
                    <h2 className='ff_poppins max-[375px]:text-xs text-sm leading-[118.75%] text-white ms-2'>My communities</h2>
                </div>
                <div className={` transition-all duration-300 ease-linear ${activedropdown.communities ? "rotate-180" : ""}`}>
                    <ArrowDownIcon />
                </div>
            </div>
            <div className={`transition-max-height overflow-hidden duration-300  ${activedropdown.communities ? "max-h-[88px] " : "max-h-0"}`}>
                <Link hrefLang='#' className='flex items-center opacity-70 hover:opacity-100 transition-all ease-linear duration-200  ps-[15px] pt-[18px] cursor-pointer'>
                    <AnnouncementsIcon />
                    <h2 className='ff_poppins max-[375px]:text-xs text-sm  leading-[118.75%] text-white ms-3'>Announcements</h2>
                </Link>
                <Link hrefLang='#' className='flex items-center opacity-70 hover:opacity-100 transition-all ease-linear duration-200  ps-[15px] pt-4 pb-[18px] cursor-pointer'>
                    <ResourcesIcon />
                    <h2 className='ff_poppins max-[375px]:text-xs text-sm  leading-[118.75%] text-white ms-3'>Resources</h2>
                </Link>
            </div>
            <div onClick={() => handleClick('friends')} className='opacity-70 hover:opacity-100 flex items-center justify-between hover:bg-gradient-to-r from-white/10 to-white/10 cursor-pointer transition-all ease-linear duration-200 py-3 max-[375px]:px-2 px-[14px] hover:border-t border-t border-transparent hover:border-white/20'>
                <div className='flex items-center'>
                    <UsersIcon />
                    <h2 className='ff_poppins max-[375px]:text-xs text-sm leading-[118.75%] text-white ms-2'>My friends</h2>
                </div>
                <div className={` transition-all duration-300 ease-linear ${activedropdown.friends ? "rotate-180" : ""}`}>
                    <ArrowDownIcon />
                </div>
            </div>
            <div className={`transition-max-height overflow-hidden duration-300  ${activedropdown.friends ? "max-h-[120px] " : "max-h-0"}`}>
                <Link hrefLang='#' className='flex items-center opacity-70 hover:opacity-100 transition-all ease-linear duration-200  ps-[15px] pt-[18px] cursor-pointer'>
                    <FriendsIcon />
                    <h2 className='ff_poppins max-[375px]:text-xs text-sm  leading-[118.75%] text-white ms-3'>Friends</h2>
                </Link>
                <Link hrefLang='#' className='flex items-center opacity-70 hover:opacity-100 transition-all ease-linear duration-200  ps-[15px] pt-4 pb-[18px] cursor-pointer'>
                    <NitroIcon />
                    <h2 className='ff_poppins max-[375px]:text-xs text-sm  leading-[118.75%] text-white ms-3'>Nitro</h2>
                </Link>
                <Link hrefLang='#' className='flex items-center opacity-70 hover:opacity-100 transition-all ease-linear duration-200  ps-[15px]  pb-[18px] cursor-pointer'>
                    <ShopIcon />
                    <h2 className='ff_poppins max-[375px]:text-xs text-sm  leading-[118.75%] text-white ms-3'>Shop</h2>
                </Link>
            </div>
            <div className='border-t border-t-white/20'>
                <div className='opacity-70 flex items-center justify-between py-5 max-[375px]:px-2 px-[15px]'>
                    <h2 className='ff_poppins max-[375px]:text-xs text-sm  leading-[118.75%] text-white ms-2 uppercase '>Direct Message</h2>
                    <div className="hover:rotate-90 duration-200 ease-linear transition-all cursor-pointer"  >
                        <PlusIcon />
                    </div>
                </div>
                <div className='overflow-y-auto custom__Scroll_bar' style={{ height: activedropdown.communities ? 'calc(100vh - 315px)' : (activedropdown.friends ? 'calc(100vh - 350px)' : 'calc(100vh - 225px)') }}>
                    {messegeList.map((obj, index) => {
                        return (
                            <div key={index} className='py-2 flex items-center gap-2 max-[375px]:px-2 px-[15px] opacity-80 hover:opacity-100 hover:bg-gradient-to-r from-white/10 to-white/10  transition-all ease-linear duration-200 '>
                                <img className='w-6 h-6 ' src={obj.image} alt="profile_img" />
                                <h2 className='ff_poppins max-[375px]:text-xs text-sm leading-[118.75%] text-white'>{obj.title}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Secondary
