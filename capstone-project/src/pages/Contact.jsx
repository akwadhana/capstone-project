// import React from 'react'
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../photos/pexels-curtis-adams-8031899.jpg";

const Contact = () => {
  const form = useRef();

  // const apiKey = import.meta.env.VITE_API_KEY;
  // const apiKeys = import.meta.env.VITE_API_KEY2;
  // const keys = import.meta.env.VITE_API_KEY3;
  const emailSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_oraturc", "template_hnb3b68", form.current, "KX-vACwNiCBkIIrHT").then(
      (result) => {
        console.log(result.text);
        toast.success(<>Successful check your mail for more information</>);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        className="flex flex-col md:flex-row md:h-screen"
      >
        <div className="md:w-1/2">
          <img
            src={image}
            alt=""
            className="object-cover w-full h-[45vh]  md:mt-0 md:h-full"
          />
        </div>

        <form ref={form} onSubmit={emailSubmit}>
          <ToastContainer className="" />
          <div className="flex flex-col gap-2 items-center justify-center mt-6  ">
            <label
              className="text-gray-600 text-2xl font-bold"
              htmlFor="name"
            ></label>
            <input
              className="border-2 border-gray-300 rounded-md  p-6 text-center h-4 lg:w-96 lg:py-7 lg:px-9 lg:my-2  "
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />

            <label
              className="text-gray-600 text-2xl text-left font-bold "
              htmlFor="email"
            ></label>
            <input
              className="border-2 border-gray-300 rounded-md p-6 text-center h-4  lg:w-96 lg:py-7 lg:px-5 my-2"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              // style={{textAlign:"left"}}
            />

            <label
              className="text-gray-600 text-2xl font-bold "
              htmlFor="message"
            ></label>
            <textarea
              className="border-2 border-gray-300 rounded-md text-center  p-10 lg:w-96 lg:py-12 lg:px-5 my-2"
              id="message"
              name="message"
              placeholder="Enter your message"
            />

            <div
              style={{ backgroundColor: "rgb(43, 21, 21)" }}
              className="bg-black lg:mt-6 lg:text-4xl text-white lg:p-3  rounded-lg  items-center justify-center lg:py-3 lg:px-40 lg:h-16 p-8 py-2"
            >
              <button>send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
