import React, { useEffect, useRef } from "react";
import axios from "axios";
import { FaPhone, FaFacebookMessenger, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

import { RiLoader4Line } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";

import Banner from "./Banner";

function Contact() {
  const containerRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // const handleMouseMove = (e) => {
    //   let ivalueX = (e.pageX * -1) / 200;
    //   let ivalueY = (e.pageY * -1) / 200;
    //   contactRef.current.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0)`;
    // };
    // if (containerRef.current) {
    //   containerRef.current.addEventListener("mousemove", handleMouseMove);
    // }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      subject: Yup.string().required("This field is required"),
      message: Yup.string().required("This field is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        const { data } = await axios.post(
          // `${process.env.REACT_APP_PROXY}/api/email`,
          `/api/email`,
          {
            ...values,
          }
        );

        console.log(data);
        if (data.success) toast.success(data.message);
        resetForm();
      } catch (err) {
        if (err.response && err.response.data && err.response.data.errors) {
          const { errors } = err.response.data;
          formik.setErrors(errors);
        } else {
          toast.error("An error occurred");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div id="contact">
      <Banner text="Contact" position="50% 180%" />
      <div
        className="contact flex justify-center relative background-blue "
        ref={containerRef}
      >
        <div
          className="relative max-w-screen-md mx-5 mb-24  p-10 bg-white rounded-xl z-10 transition-all duration-200 ease-in-out"
          ref={contactRef}
        >
          <p className="text-center w-1/2 m-auto leading-tight mt-3 mb-10">
            I'm currently not open to new projects, but feel free to send me a
            message.
          </p>

          <form className="w-full" onSubmit={formik.handleSubmit}>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 md:pr-2 lg:pr-2 xl:pr-2 mb-3">
                <input
                  type="text"
                  className={`w-full px-3 py-2 border-blue bg-gray-100 text-black border  rounded  transition-all duration-200 focus:outline-none ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-400"
                      : "border-gray-100"
                  }`}
                  id="form-name"
                  placeholder="Name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                <div className="text-red-400 text-sm">
                  {formik.touched.name && formik.errors.name}
                </div>
              </div>

              <div className="w-full md:w-1/2 md:pl-2 lg:pl-2 xl:pl-2  mb-3">
                <input
                  type="email"
                  className={`w-full px-3 py-2 border-blue bg-gray-100 text-black border  rounded  transition-all duration-200 focus:outline-none ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-400"
                      : "border-gray-100"
                  }`}
                  id="form-email"
                  name="email"
                  placeholder="Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <div className="text-red-400 text-sm">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>
            </div>

            <div className="w-full mb-3">
              <input
                type="text"
                className={`w-full px-3 py-2 border-blue bg-gray-100 text-black border  rounded  transition-all duration-200 focus:outline-none ${
                  formik.touched.subject && formik.errors.subject
                    ? "border-red-400"
                    : "border-gray-100"
                }`}
                id="form-subject"
                name="subject"
                placeholder="Subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />
              <div className="text-red-400 text-sm">
                {formik.touched.subject && formik.errors.subject}
              </div>
            </div>

            <div className="w-full mb-3">
              <textarea
                rows="8"
                className={`w-full px-3 py-2 border-blue bg-gray-100 text-black border  rounded  transition-all duration-200 focus:outline-none ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-400"
                    : "border-gray-100"
                }`}
                id="form-message"
                name="message"
                placeholder="Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              <div className="text-red-400 text-sm">
                {formik.touched.message && formik.errors.message}
              </div>
            </div>

            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="w-full h-9 button-blue text-white font-bold px-4  rounded hover:bg-[#2B2B4F] transition-all duration-200"
            >
              {formik.isSubmitting ? (
                <RiLoader4Line className="animate-spin font-bold text-3xl m-auto px-1" />
              ) : (
                "Submit"
              )}
            </button>
          </form>

          <div className="relative  h-10 mt-10">
            <hr className="w-3/4 bg-black absolute inset-center" />
            <div className=" absolute inset-center  text-center bg-white px-2 wrap">
              or by reaching me through
            </div>
          </div>

          <div className="flex flex-col lg:flex-row xl:flex-row  md:flex-row text-center font-bold w-full justify-center gap-14 my-10">
            <div className="relative">
              <FaFacebookMessenger
                className="absolute inset-center icon-inset text-7xl text-neutral-100 z-0"
                style={{ left: "45%" }}
              />

              <div className="relative hover:-translate-y-1 transition-all duration-200">
                <div className="relative z-10">
                  <div className="">Messenger</div>
                  <a
                    href="https://www.messenger.com/t/100083350730989"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="icon-blue text-xl">Darwin S. Ramos</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hover:-translate-y-1 transition-all duration-200">
              <FaEnvelope
                className="absolute inset-center icon-inset text-7xl text-neutral-100 z-0"
                style={{ left: "45%" }}
              />
              <div className="relative">
                <div className="relative z-10">
                  <div className="">Gmail</div>
                  <a href="mailto:darwinsanluis.ramos14@gmail.com">
                    <div className="icon-blue text-xl">
                      darwinsanluis.ramos14
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative hover:-translate-y-1 transition-all duration-200">
              <FaPhone
                className="absolute inset-center icon-inset text-7xl text-neutral-100 z-0"
                style={{ left: "45%" }}
              />
              <div className="relative z-10">
                <div className="">Phone</div>
                <a href="tel:09395372592">
                  <div className="icon-blue text-xl">09395372592</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
