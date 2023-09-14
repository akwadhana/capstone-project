import React from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

const emailSubmit=(e)=>{
e.preventDefault();
emailjs.sendForm('gmail', 'template_hnb3b68',form.current, 'user_KX-vACwNiCBkIIrHT')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
e.target.reset()

}



  return (
<form >
<div className="flex flex-col gap-2 items-center justify-center mt-8">

<label className="text-gray-600 text-lg" htmlFor="name">name</label>
<input
  className="border-2 border-black-300 rounded-md py-3 px-64  "
  type="text"
  id="name"
  name="name"
  placeholder="Enter your name"
/>

<label className="text-gray-600 text-lg" htmlFor="email">email</label>
<input
  className="border-2 border-gray-300 rounded-md py-3 px-64 focus:outline-none focus:border-black focus:ring- block md sm:black text-sm focus:ring-1"
  type="email"
  id="email"
  name="email"
  placeholder="Enter your email"
/>

<label className="text-gray-600 text-lg" htmlFor="message">message</label>
<textarea
  className="border-2 border-gray-300 rounded-md py-3 px-64 h-32 resize-none "
  id="message"
  name="message"
  placeholder="Enter your message"
/>

<div className= "bg-black  text-white p-6  rounded-lg  items-center justify-center mt-8">
    <button onSubmit={emailSubmit}>send</button>
</div>
</div>

</form>

   



  )
}

export default Contact