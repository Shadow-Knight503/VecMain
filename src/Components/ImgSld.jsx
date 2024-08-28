import React from 'react';
import { useEffect, useState } from 'react';
import Vide from'./Assets/stock.mp4'
import BgVd from './Assets/BgVid2.mp4'
import Dest from './Assets/1723802229632.jpg'
import Rank from './Assets/1723802229652.jpg'
import Rslt from './Assets/1723802229670.jpg'
import Nord from './Assets/1723802229690.png'
import Naac from './Assets/1723802229711.png'
import Acrd from './Assets/1723802229732.png'
import './styles.css';

const ImgSld = () => {
  const [ vid, setVid ] = useState("top-[35vmax]")
  const lst = ['Sample Txt for me', 'Hola, I kill you now', 'Placeholder, Fresh hot placholders found right here for a steal', 
    'The Premier place to learn and grow', 'Your path to wasting 4 years of your life']

  const hndlScrll = () => {
    const pos = window.scrollY
    const pos_thresh = 300
    console.log(pos)
    if (pos > pos_thresh) {document.getElementById("BgVid").pause(); setVid("top-[5vmax]")}
    else {document.getElementById("BgVid").play(); setVid("top-[35vmax]")} 
  }

  useEffect(() => {
      window.addEventListener('scroll', hndlScrll, {passive: true})

      return () => {
          window.removeEventListener('scroll', hndlScrll)
      }
  })


  return (
    <div className='w-[100vw] relative bg-gradient-to-r from-amber-500 to-amber-700'>
      <div className="flex h-[35vmax] top-[15vmax] bg-center overflow-hidden relative justify-items-stretch bg-transparent w-[100vw]">
        <video className='min-h-[50vmax] w-[100vmax] bg-center fixed top-0 z-0' autoPlay loop muted id='BgVid'>
          <source src={BgVd} type='video/mp4'></source>
        </video>
        <div className='absolute font-popp text-[1.5vmax] max-w-[50vmax] right-[1vmax]'>
          <div className='relative no-wrap h-[15vmax] w-[35vmax] overflow-hidden'>
            {lst.map((elm, i) => (
              <p className={`absolute text-white min-w-[20vmax] max-w-[30vmax] translate-x-[40vmax] animate-[slideIn_25s_ease-in_infinite] p-5 border-y-4
                bg-[#0000001a] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[3px] 
                [border-image:linear-gradient(to_right,#d96402,#efa249,#d96402)_1]`} 
                style={{animationDelay: `${i * 5}s`}}>{elm}</p>
            ))}
          </div>
        </div>
        <video className={`h-auto w-[100vw] bg-center fixed ${vid} z-0`}>
          <source src={Vide} type='video/mp4'></source>
        </video>
      </div>
    </div>
  );
};

export default ImgSld;