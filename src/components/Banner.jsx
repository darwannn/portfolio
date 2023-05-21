import React, {useRef,useEffect} from 'react'


function Banner({text, image, scrollStart, position}) {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
  const scrollPosition = (scrollStart) => {
    let scrollValue = window.scrollY;
    if(scrollValue >= scrollStart) {
      return  scrollValue-scrollStart;
    }
}

  useEffect(() => { 
    window.addEventListener("scroll", () => {
        textRef.current.style.paddingLeft = `${scrollPosition(scrollStart)/2}px`;
        if(window.scrollY <= 800) {
          imageRef.current.style.paddingBottom = `${scrollPosition(scrollStart-100)/2}px`;

        }
    });
  });

  return (
    <div className="relative ">
    { image && <img src={image} alt="Darwin" ref={imageRef} className="inset-center absolute z-20" style={{width:"600px",paddingTop:"100px"}}/> }
    <div className="relative overflow-hidden h-96 background-blue" style={{height: "24rem"}}>
      
    <div className="absolute font-bold leading-tight text-blue uppercase z-10" ref={textRef} style={{fontSize: "24rem",  left:`-${position}px`}}>{text}</div>
  </div>
    </div>
  )
}

export default Banner