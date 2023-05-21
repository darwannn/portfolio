import React, {useEffect, useRef} from 'react'
import Banner from './Banner';
import meImage from './../img/me.png'
import tailwindIcon from './../img/ico/TailwindCSS-Dark.svg'
import reactIcon from './../img/ico/React-Dark.svg'
import nodeIcon from './../img/ico/NodeJS-Dark.svg'
import mongotIcon from './../img/ico/MongoDB.svg'

function About() {
/*   const imageRef  = useRef(null);
  useEffect(() => { window.addEventListener("scroll", () => {textRef.current.style.paddingLeft = `${scrollPosition(scrollStart)}px`;});}); */
  return (
    <div id="about">
         <Banner text="About" image={meImage} scrollStart="0" position="150" />
  
    <div className="flex justify-center relative  -mt-16 z-50">

    <div className="w-full mb-10 mx-10 p-20 bg-white box-shadow rounded-2xl">


      <div className="text-2xl font-bold mb-3">Hey There! 👋</div>
      <div className="ml-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</div>
      <div className="text-2xl font-bold mt-20 mb-3 text-center">Tech Stack</div>
      <div className="flex gap-3 h-20 justify-center">
        <img src={tailwindIcon}  alt="..."/>
        <img src={reactIcon} alt="..."/>
        <img src={nodeIcon} alt="..."/>
        <img src={mongotIcon}  alt="..."/>
      </div>
    </div>
  </div>
  </div>
  )
}

export default About