import React from 'react'
import s from './dots.jpg'
import p from './Home.module.css'
import { FaBell } from "react-icons/fa";

const Home = () => {
  return (
    <div className={p.main}>
      <img src={s} className={p.im1}></img>
      <h3>wiZe</h3>
      <div className={p.icon}><FaBell style={{color:"purple"}}/></div>
      <div className={p.acc}>Account</div>
      <div className={p.menu}>menu</div>
        
    </div>
  )
}

export default Home