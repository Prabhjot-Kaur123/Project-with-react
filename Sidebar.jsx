import React from 'react'
import p from './Sidebar.module.css'
import { IoMdCube } from "react-icons/io";
import { IoCompassOutline } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { RiComputerFill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdOutlineEventNote } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><IoMdCube />Home</li>

                <li> <IoCompassOutline />Explore</li>
                <li> <PiStudentBold />Learn</li>
                <li> <FaTrophy />Achive</li>
                <li> <PiNotebookFill />Practice</li>
                <li> <RiComputerFill />Projects</li>
                <li> <AiOutlineStock />Career</li>
                <li> <FaPeopleRoof />Mentorship</li>
                <li> <MdOutlineEventNote />Blogs</li>
                <li> <FaPeopleGroup />Community</li>
            </ul>
            <div className={p.side}>
                
            </div>
            <div className={p.side1}></div>
        </nav>
    </div>
  )
}

export default Sidebar