import axios from 'axios';
import React, {useState,useRef, useEffect} from 'react'
import { FaPhone,FaFacebookMessenger,FaGithub,FaEnvelope } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './Banner';
/* import { scrollPosition } from './functions.js'; */
import { RiLoader4Line } from "react-icons/ri";
function Contact() {
  const textRef = useRef(null);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

/* useEffect(() => { window.addEventListener("scroll", () => {textRef.current.style.paddingLeft = `${scrollPosition(700)}px`;});}); */
const submitHandler = async (e) => {
  e.preventDefault();
  console.log("click");

  if( !name || !email || !subject ||!message  ) {
  
    return toast.error("All fields are required.")
  }
  try {
    setLoading(true);
    const { data } = await axios.post(`/api/email`, {
      name,
      email,
      subject,
      message,
    });
    setLoading(false);
    toast.success(data.message);
  } catch (err) {
    setLoading(false);
    toast.error(
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    );
  }
}

  return (
    <div id="contact">
             <Banner text="Contact" /* image={meImage} */ scrollStart="1800" position="500"/>
    <div className="contact flex justify-center relative background-blue overflow-hidden -mt-16 ">
 {/* <div className="absolute font-bold leading-tight text-blue bottom-0 z-0" id="text" style={{fontSize: "24rem",marginBottom:"-100px",marginLeft:"-1000px"}} ref={textRef}>Contact</div> */}
    <div className="relative max-w-screen-md mx-5 mb-24  p-10 bg-white rounded-xl z-10">
    <ToastContainer position="bottom-right"  limit={1} />
  {/*   <ToastContainer position="bottom-right"  progressClassName="toastProgress"
  bodyClassName="toastBody" limit={1} /> */}
      <p className="text-center w-1/2 m-auto leading-tight mt-3 mb-10">
        I’m open to new projects,<br/>
        feel free to send me a message.
      </p>



      <form className="w-full" onSubmit={submitHandler}>

        <div className="flex flex-wrap">

          <div className="w-full md:w-1/2 md:pr-2 lg:pr-2 xl:pr-2 mb-3">
           {/*  <label className="font-bold" htmlFor="form-name">
              Name
            </label> */}
            <input type="text"
              className="w-full px-3 py-2 border-blue bg-gray-100 text-black border border-gray-100 rounded  focus:outline-none  "
              id="form-name" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
          </div>


          <div className="w-full md:w-1/2 md:pl-2 lg:pl-2 xl:pl-2  mb-3">
            {/* <label className="font-bold" htmlFor="form-email">
              Email Address
            </label> */}
            <input type="email"
              className="w-full px-3 py-2 bg-gray-100 text-black border border-gray-100 rounded  focus:outline-none  "
              id="form-email" placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)}}/>
          </div>


        </div>

        <div className="w-full mb-3">
    {/*       <label className="font-bold " htmlFor="form-subject">Subject
          </label> */}
          <input type="text"
            className="w-full px-3 py-2 bg-gray-100 text-black border border-gray-100 rounded  focus:outline-none  "
            id="form-subject" placeholder="Subject" onChange={(e) => {setSubject(e.target.value)}}/>
        </div>



        <div className="w-full mb-3">
         {/*  <label className="font-bold" htmlFor="form-message">Message
          </label> */}
          <textarea rows="8"
            className=" w-full px-3 py-2 bg-gray-100 text-black border border-gray-100 rounded  focus:outline-none  "
            id="form-message" placeholder="Message" onChange={(e) => {setMessage(e.target.value)}}>

        </textarea>
        </div>


        <button disabled={loading} type="submit" className="w-full button-blue text-white font-bold px-4 py-2 rounded">
          {loading ? <RiLoader4Line className="animate-spin font-bold"/> : "Submit"}
        </button>




      </form>

      <div className="relative  h-10 mt-10">
        <hr className="w-3/4 bg-black absolute inset-center"/>
        <div className=" absolute inset-center  text-center bg-white px-2 wrap">or by reaching me through</div>
      </div>

      <div className="flex flex-col lg:flex-row xl:flex-row  md:flex-row text-center font-bold w-full justify-center gap-14 my-10">

        <div className="relative">
        <FaFacebookMessenger className="absolute inset-center icon-inset text-7xl text-neutral-100 z-0" style={{left:"45%"}}/>
     
          <div className="relative">
          <div className='relative z-10'>
            <div className="">Messenger</div>
            <a href="https://www.messenger.com/darwannn" target="_blank">
            <div className="icon-blue text-xl">/darwannn</div>
            </a>
          </div>
          </div>
        </div>
        <div className="relative">

     
          <FaEnvelope className="absolute inset-center icon-inset text-7xl text-neutral-100 z-0" style={{left:"45%"}}/>
          <div className="relative">
          <div className='relative z-10'>
            <div className="">Gmail</div>
            <a href="mailto:darwinsanluis.ramos14@gmail.com" >
            <div className="icon-blue text-xl">darwinsanluis.ramos14</div>
            </a>
          </div>
          </div>
        </div>

          <div className="relative">
        <FaPhone className="absolute inset-center icon-inset text-7xl text-neutral-100 z-0" style={{left:"45%"}}/>
        <div className='relative z-10'>
            <div className="">Phone</div>
            <a href="tel:09190294854">
            <div className="icon-blue text-xl">09190294854</div>
            
            </a>
            </div>
          </div>

        </div>
        

    </div>
  </div>
  </div>
  )
}

export default Contact