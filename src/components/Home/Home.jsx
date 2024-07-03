import React from 'react'
import './Home.css'
import Header from '../Header/Header.jsx';
import { Button } from '../ui/button'
import Thumbnail from '../../../public/thumbnail.png';
import cardImage from '../../../public/card.png';
import s1 from '../../../public/s1.png';
import s2 from '../../../public/s2.png';
import s3 from '../../../public/s3.png';
import s4 from '../../../public/s4.png';
import s5 from '../../../public/s5.png';
import avatar from '../../../public/avatar.jpeg';
import { LuSchool } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { RiUser6Line } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LiaUserEditSolid } from "react-icons/lia";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { BsIncognito } from "react-icons/bs";
import { FaRegMap } from "react-icons/fa6";
import { PiUsersThin } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { GiCampCookingPot } from "react-icons/gi";
import { PiDotsThree } from "react-icons/pi";

const Home = () => {
  return (
    <div className=" w-[70%] home">
      <Header/>
      <main>

        <div className="flex flex-col gap-6 mt-12">
          <div>
            <p className="para">Raising aspirations of children with</p>
            <p className="para text-[#5271FF]">academic and behavioral challenges,</p>
            <p className="para">including special needs.</p>
          </div>
          <div>
            <Button className="bg-[#5271FF]">Subscribe to Ebility Calendar</Button>
          </div>
        </div>

        <div className="h-[545px] mt-14 relative overflow-hidden">
          <div>
            <img src={Thumbnail} className="w-full thumbnail"/>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <label className="bg-[#5271FF] rounded-bl-md rounded-br-md text-white text-center py-2 inline-block w-full">Eblity has trained over 80,000 teachers  from over 80 countries</label>
          </div>
        </div>

        <div className="border rounded-lg h-14 mt-14 flex gap-5 items-center px-4">
          <label className='font-medium '>See what we have for</label>
          <label className='font-normal cursor-pointer opacity-100 rounded-md px-5 py-2 flex items-center gap-2 text-mainColor bg-[#F6F6F6]'><LuSchool/>School</label>
          <label className='font-normal cursor-pointer hover:text-mainColor hover:opacity-100 transition-all opacity-50 rounded-md px-5 py-2 flex items-center gap-2'><RiGraduationCapLine/>Educators</label>
          <label className='font-normal cursor-pointer hover:text-mainColor hover:opacity-100 transition-all opacity-50 rounded-md px-5 py-2 flex items-center gap-2'><RiUser6Line/>Parents</label>
          <label className='font-normal cursor-pointer hover:text-mainColor hover:opacity-100 transition-all opacity-50 rounded-md px-5 py-2 flex items-center gap-2'><AiOutlineDollarCircle/>Sponsors</label>
        </div>

        <div className='mt-16'>
          <div>
            <label htmlFor="" className='flex items-center gap-3 text-[.87rem] text-mainColor font-medium'><RiGraduationCapLine/>Ebility Teacher Training Session</label>
          </div>
          <div className='mt-4'>
            <p className='font-bold text-[1.2rem]'>We offer a variety of sessions that<br/>
            teachers can choose from to fit their schedule.</p>
          </div>
          <div className='mt-4'>
            <p className='text-[.85rem]'>We know that your teachers’ time is valuable,<br/>
            so we've made it easy for them.</p>
          </div>
        </div>


        <div className='mt-16 grid grid-cols-3 gap-[200px]'>
          <div className='flex flex-col gap-4'>
            <div>
              <label htmlFor="" className='p-2 inline-block bg-[#F6F6F6] rounded-md text-mainColor'>
                <LiaUserEditSolid/>              
              </label>
            </div>
            <label htmlFor="" className='text-[.8rem]'> 
              Register to be
              subscribed to our monthly
              calendar.
            </label>
          </div>

          <div className='flex flex-col gap-4'>
            <div>
            <label htmlFor=" " className='p-2 inline-block bg-[#F6F6F6] rounded-md text-mainColor'>
               <FaRegCalendarCheck/>
            </label>
            </div>
            <label htmlFor="" className='text-[.8rem]'> 
              Each teacher registers
              for a session at a date and
              time that works for them.
            </label>
          </div>

          <div className='flex flex-col gap-4'>
            <div>
            <label htmlFor="" className='p-2 inline-block bg-[#F6F6F6] rounded-md text-mainColor'>
               <IoDocumentTextOutline/>
            </label>
            </div>
            <label htmlFor="" className='text-[.8rem]'> 
              Get regular invoices
              based on the number of teachers
              that attend sessions.
            </label>
          </div>
        </div>

        <div className='grid grid-cols-2 mt-14 gap-4'>
            <div class="relative w-full h-auto overflow-hidden rounded-lg shadow-lg group">
              <img src={cardImage} alt="Sample Image" class="object-cover w-full cursor-pointer h-full gradient-overlay"/>
              <div class="absolute bottom-0 left-0 right-0 h-1/3 gradient-overlay"></div>
              <div class="absolute inset-0 flex items-end justify-start transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                <div class="p-4 text-start text-white">
                  <p class="text-[1rem] font-semibold">Identify and Manage </p>
                  <p class='text-[1rem] font-semibold'>Academic & Behavioural Challenges</p>
                  <p class='text-[1rem] font-semibold'>in your Classroom</p>
              </div>
            </div>
          </div>
          <div className='shadow-2xl p-6 rounded-md flex flex-col gap-4'>
            <div className=''>
              <p className='text-[1.3rem] font-bold'>Subscribe to <br /> Monthly Calendar</p>
            </div>
            <div className='w-[70%]'>
              <p>After subscribing to the monthly calendar, teachers can select a date and time for the session according to their convenience</p>
            </div>
            <div className='flex gap-4 mt-8'>
              <div className='bg-[#F6F6F6] px-3 py-1 rounded-md -gap-2 flex flex-col'>
                <label htmlFor=""className='font-bold text-[.9rem]'>INR 99/-</label>
                <label htmlFor="" className='text-[0.6rem]'>Cost Per Teacher</label>
              </div>
              <div>
                <Button className='bg-mainColor py-6 px-5'>Subscribe Calendar</Button>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 flex flex-col gap-y-20'>
          <div className='grid grid-cols-2 items-center'>
            <div>
              <p className='font-semibold text-[1.3rem]'><label htmlFor="" className='text-mainColor'>At Ebility,</label>we’re unleashing</p>
              <p className='font-semibold text-[1.3rem]'>the potential of children with challenges</p>
            </div>
            <div>
              <Button className='bg-mainColor text-sm'>Join the community for free</Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 gap-x-16 w-full">
              <Achievement title="5,000,000+" subTitle="Minutes Watched" icon={<IoVideocamOutline/>} color="42A4FF" bg="E8F4FF"/>        
              <Achievement title="Free" subTitle="Certificate Programs" icon={<BsIncognito/>} color="A429FF" bg="F4E5FF"/>        
              <Achievement title="80+" subTitle="Contries" icon={<FaRegMap/>} color="56D595" bg="EBF9F4"/>        
              <Achievement title="100,000+" subTitle="Community Members" icon={<PiUsersThin/>} color="FFBE3D" bg="FFF7E8"/>        
              <Achievement title="50,000+" subTitle="Attendence Worldwide" icon={<RiGlobalLine/>} color="56D595" bg="EBF9F4"/>        
              <Achievement title="150+" subTitle="Events" icon={<GiCampCookingPot/>} color="F25767" bg="FDEAEC"/>        
          </div>
        </div>

        <div className='mt-28 flex flex-col gap-10 justify-center'>
          <div className='text-center'>
            <label htmlFor="" className='font-bold'>What people say about <label htmlFor="" className='text-mainColor'>Ebility</label></label>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <Card name="Dr. John Doe" country="South Africa"/>
            <Card name="Steve Smith" country="Australia"/>
            <Card name="Harry Ali Khan" country="India"/>
          </div>
        </div>


        <div className='mt-28 flex flex-col gap-12'>
          <div className='text-center'>
            <label htmlFor="" className='font-bold'>School Partnered with</label>
          </div>
          <div className='flex justify-center gap-24'>
              <img src={s1} className='h-12' alt="" />
              <img src={s2} className='h-12' alt="" />
              <img src={s3} className='h-12' alt="" />
              <img src={s4} className='h-12' alt="" />
              <img src={s5} className='h-12' alt="" />
          </div>
          <div className='flex justify-center'>
            <label htmlFor="" className='opacity-50'><PiDotsThree fontSize={'3.5rem'}/></label>
          </div>
        </div>

      </main>
    </div>
  )
}

const Achievement = (props) => {
  return (
    <div className='flex gap-5 items-center'>
              <label htmlFor="" className={`text-[#${props.color}] p-3 bg-[#${props.bg}] rounded-md`}>{props.icon}</label>
              <div className='flex flex-col tracking-wide'>
                <label htmlFor="" className='font-bold'>{props.title}</label>
                <label htmlFor="" className='text-[.8rem]'>{props.subTitle}</label>
              </div>
    </div>
  )
}

const Card = (props) => {
  return (
    <div className="bg-[#E8ECFF] p-4 flex flex-col gap-8 rounded-2xl">
      <div>
        <label> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat obcaecati quasi facilis corporis repellendus  Quaerat obcaecati quasi facilis corporis repellendus modi earum iste explicabo saepe dignissimos...</label>
      </div>
      <div className='flex items-center gap-4'>
        <img src={avatar} alt="" className='size-8 rounded-full'/>
        <div className='flex flex-col'>
          <label htmlFor="" className='font-semibold '>{props.name}</label>
          <label htmlFor="" className='text-[.7rem]'>{props.country}</label>
        </div>
      </div>
    </div>
  )
}

export default Home
