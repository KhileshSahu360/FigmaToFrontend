"use client"
import React from 'react'
import './Header.css';
import EbilityLogo from '../../../public/EbilityLogo.svg';
import { Button } from '../ui/button'
import { FaBars } from "react-icons/fa6";
 
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
 
const SHEET_SIDES = ["top", "right", "bottom", "left"] 
 

const Header = () => {
  return (
    <div className="h-[74px] w-full flex justify-between items-center">
      <div className='flex items-center gap-3'>
        <label htmlFor=""><SheetSide/></label>
        <img src={EbilityLogo} className="h-10"/>
      </div>
      <ul className="flex gap-10 items-center desk_nav">
        <li className="list_item">About Us</li>
        <li className="list_item">Certificate Programs</li>
        <li className="list_item">Community</li>
        <li className="list_item">Blogs</li>
        <li className="list_item">Careers</li>
        <Button className="bg-[#5271FF] px-8">Login</Button>
      </ul>
        <Button className="bg-[#5271FF] px-8 lg:hidden md:hidden">Login</Button>
    </div>
  )
}

const SheetSide = () => {
  return (
    <div className="grid  gap-2">
        <Sheet key={'left'} className="w-[100px]">
          <SheetTrigger asChild>
          <label htmlFor="" className="lg:hidden ml-1 mt-2 md:hidden"><FaBars fontSize={'1.4rem'}/></label>
          </SheetTrigger>
          <SheetContent side={'left'}>
          <ul className="flex flex-col gap-10 items-start justify-center">
            <li className="list_item">About Us</li>
            <li className="list_item">Certificate Programs</li>
            <li className="list_item">Community</li>
            <li className="list_item">Blogs</li>
            <li className="list_item">Careers</li>
          </ul>        
          </SheetContent>
        </Sheet>
    </div>
  )
}

export default Header
