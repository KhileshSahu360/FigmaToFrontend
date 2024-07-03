import React from 'react'
import './Footer.css'
import EbilityLogo from '../../../public/EbilityLogo.svg';
import { Button } from '../ui/button';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (

    <div className='bg-[#F9FAFF] mt-24 w-full flex flex-col items-center py-20'>
      <div className='w-[70%] gap-4 grid grid-cols-10 footer'>
        <div className='flex flex-col gap-2 lg:col-span-4'>
          <div>
            <img src={EbilityLogo} className='h-8' alt="" />
          </div>
          <div>
            <p className='text-[.65rem]'>Raising aspirations of children with academic and</p>
            <p className='text-[.65rem]'>behavioral challenges, including special needs.</p>
          </div>
        </div>
        <div className='flex flex-col  lg:col-span-2 gap-2'>
          <a href='#' className='font-bold'>Sitemap</a>
          <a href='#' className='text-[.8rem]'>About Us</a>
          <a href='#' className='text-[.8rem]'>Community</a>
          <a href='#' className='text-[.8rem]'>Blogs</a>
          <a href='#' className='text-[.8rem]'>Careers</a>
        </div>
        <div className='flex flex-col lg:col-span-2 gap-2'>
          <a href='#' className='font-bold'>Offering</a>
          <a href='#' className='text-[.8rem]'>Teacher Training Program</a>
          <a href='#' className='text-[.8rem]'>Awareness Programs</a>
          <a href='#' className='text-[.8rem]'>Certificate Programs</a>
          <a href='#' className='text-[.8rem]'>Parents Awareness Programs</a>
        </div>
        <div className='flex flex-col lg:col-span-2 gap-2'>
          <a href='#' className='font-bold'>Get in touch</a>
          <a href='#' className='text-[.8rem]'>Contact Us</a>
          <a href='#' className='text-[.8rem]'>Write to us</a>
          <a href='#' className='text-[.8rem]'>Join the community</a>
        </div>
      </div>

        <div className='w-[70%] divider lg:mt-20 footer'>
          <hr />
        </div>
        <div className='w-[70%] footer mt-20 grid grid-cols-2 pb-20'>
          <div className='flex flex-col gap-1'>
            <div>
              <label htmlFor="" className='font-bold'>SUBSCRIBE</label>
            </div>
            <div className='flex gap-3'>
              <input type="text" placeholder='Enter email ID' className='border-2 outline-none input focus:border-mainColor focus:border-2 rounded px-2 py-1'  />
              <Button className="bg-mainColor subscribe_btn">Subscribe</Button>
            </div>
            <div>
              <label htmlFor="" className='text-[.6rem]'>By subscribing to newsletter you agree with our <a href="#" className='underline text-blue-500'>Privacy Policy</a></label>
            </div>
          </div>
          <div className='flex justify-center items-center gap-3 opacity-50 social_icon_cont'>
            <a href='#'><FaFacebook/></a>
            <a href='#'><FaTwitter/></a>
            <a href='#'><AiFillInstagram/></a>
            <a href='#'><FaYoutube/></a>
            <a href='#'><FaLinkedin/></a>
          </div>

        </div>
    </div>
  )
}

export default Footer
