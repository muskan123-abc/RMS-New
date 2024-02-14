import React from 'react'
import ProfileImg from "../../../assets/images/sidebar/profile_img.png"
import { sideList, sideTopList } from "../../../utils/Helper"
import { Link } from 'react-router-dom'
const ProfileSidebar = ({ setShowSidebar }) => {
  return (
    <>
      <div className='w-full max-w-[173px] h-screen bg-[#373022] pb-4 overflow-y-auto custom_Scroll_none'>
        <div className='pt-5 pb-[10px] flex justify-center'>
          <img className='w-14 h-[57px]' src={ProfileImg} alt="profile-img" />
        </div>
        <h2 className='ff_poppins text-lg leading-[156%] text-white text-center mb-5'>Floyd Miles</h2>
        {sideTopList.map((obj, index) => {
          return (
            <div key={index}>
              <div className='flex items-center justify-between mx-[10px] py-[10px] border-b border-[#59554C]'>
                <h2 className='ff_poppins leading-[118.75%] text-sm text-white/80'>{obj.title}</h2>
                <p className='ff_poppins leading-[118.75%] text-sm text-white/80'>{obj.rank}</p>
              </div>
            </div>
          )
        })}
        <div className='mt-6'>
          {sideList.map((obj, index) => {
            return (
              <div key={index} className='ps-4 mb-[10px] opacity-80 hover:opacity-100 hover:border-l-2 border-l-2 border-transparent hover:border-white/25 hover:bg-gradient-to-r from-white/10 to-white/10 cursor-pointer transition-all ease-linear duration-200'>
                <Link hrefLang='#' className='py-[10px] flex items-center gap-2 '
                  onClick={() => setShowSidebar(false)}
                >
                  <span> {obj.image}</span>
                  <h2 className='ff_poppins leading-[137%] text-white'>{obj.title}</h2>
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