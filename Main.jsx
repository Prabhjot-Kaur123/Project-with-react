import React from 'react'
import p from './Main.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import s from './engi.jpg'

const Main = () => {
  return (
    <div className={p.main}>
        <h3>Let's Go!</h3>
        <p>Practice regularly to achieve perfection.</p>
        <div className={p.search}>
        <div className={p.icon}><FaMagnifyingGlass /></div>
        Search Problems
        </div>
        <div className={p.card}>
        <div className={p.mech}><img src={s} className={p.engi}
        alt="" /> <div className={p.text}>
        Mechanical Engineering </div>
        </div>
        
        <div className={p.mech}><img src={s} className={p.engi}
        alt="" />
        <div className={p.text}>Computer Programming</div></div>
        
        <div className={p.mech}><img src={s} className={p.engi}
        alt="" /> <div className={p.text}>Financial  Analysis</div></div>
       
        </div>
    </div>
  )
}

export default Main