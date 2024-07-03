import React from 'react'
import './Header.css';
import EbilityLogo from '../../../public/EbilityLogo.svg';
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className="h-[74px] w-full flex justify-between items-center">
      <img src={EbilityLogo} className="h-10"/>
      <ul className="flex gap-10 items-center">
        <li className="list_item">About Us</li>
        <li className="list_item">Certificate Programs</li>
        <li className="list_item">Community</li>
        <li className="list_item">Blogs</li>
        <li className="list_item">Careers</li>
        <Button className="bg-[#5271FF] px-8">Login</Button>
      </ul>
    </div>
  )
}

export default Header
