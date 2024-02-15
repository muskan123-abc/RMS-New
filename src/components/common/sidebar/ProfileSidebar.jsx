import React from 'react'
import ProfileImg from "../../../assets/images/sidebar/profile_img.png"
import { sideList, sideTopList } from "../../../utils/Helper"
import { Link, useLocation } from 'react-router-dom'
const ProfileSidebar = ({ setShowSidebar }) => {
  const location = useLocation();
  return (
    <>
      <div className='w-full max-[375px]:max-w-[150px] max-w-[173px] h-full bg-[#373022] pb-4 overflow-y-auto custom_Scroll_none'>
        <div className='pt-5 pb-[10px] flex justify-center'>
          <img className='w-14 h-[57px]' src={ProfileImg} alt="profile-img" />
        </div>
        <h2 className='ff_poppins max-[375px]:text-base text-lg leading-[156%] text-white  text-center mb-5'>Floyd Miles</h2>
        {sideTopList.map((obj, index) => {
          return (
            <div key={index}>
              <div className='flex items-center justify-between max-[375px]:mx-2 mx-[10px] py-[10px] border-b border-[#59554C]'>
                <h2 className='ff_poppins leading-[118.75%] max-[375px]:text-xs text-sm text-white/80'>{obj.title}</h2>
                <p className='ff_poppins leading-[118.75%] max-[375px]:text-xs text-sm text-white/80'>{obj.rank}</p>
              </div>
            </div>
          )
        })}
        <div className='mt-6'>
          {sideList.map((obj, index) => {
            const isActive = location.pathname === obj.url;
            return (
              <div key={index} className={`max-[375px]:ps-3 ps-4 mb-[10px] opacity-80 hover:opacity-100 hover:border-l-2 border-l-2 border-transparent hover:border-white/25 hover:bg-gradient-to-r from-white/10 to-white/10 cursor-pointer transition-all ease-linear duration-200 ${isActive ? 'hover:opacity-100 hover:border-l-2 border-l-2 border-transparent hover:border-white/25 hover:bg-gradient-to-r from-white/10 to-white/10 cursor-pointer transition-all ease-linear duration-200' : ''}`}>
                <Link to={obj.url} className='py-[10px] flex items-center gap-2 '
                onClick={() => setShowSidebar(false)}
                >
                  <span> {obj.image}</span>
                  <h2 className='ff_poppins leading-[137%] max-[375px]:text-sm text-base text-white'>{obj.title}</h2>
                </Link>
              </div>
            )
          }
          )}
        </div>
      </div>
    </>
  )
}

export default ProfileSidebar