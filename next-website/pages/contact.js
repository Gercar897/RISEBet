import Head from 'next/head'
import styled from 'styled-components'

const Hero = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backgrounds: #fff;
`;

const Heading = styled.h1`
  color #05DBF2;
  font-size: 7rem;
  font-weight: 900;
`;

export default function Contact() {
  return (
    <>
<Head>
        <title>Contact</title>
        <link rel="icon" href="/Riseicon2.ico" />
      </Head>
      <Hero>
        <Heading>Contact</Heading>
      </Hero>


      <div class="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">



<form action="#" class="w-full md:w-1/2 border border-red-500 p-6 bg-gray-900 backdrop-blur">
<h2 class="text-2xl pb-3 font-semibold">
    Send Message
</h2>
<div>
    <div class="flex flex-col mb-3">
    <label for="name">Name</label>
    <input 
        type="text" id="name" 
        class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
        autocomplete="off"/>
    </div>
    <div class="flex flex-col mb-3">
    <label for="email">Email</label>
    <input 
        type="text" id="email" 
        class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
        autocomplete="off"/>
    </div>
    <div class="flex flex-col mb-3">
    <label for="name">Subject</label>
    <input 
        type="text" id="name" 
        class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
        autocomplete="off"/>
    </div>
    <div class="flex flex-col mb-3">
    <label for="message">Message</label>
    <textarea 
        rows="4" id="message" 
        class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
    ></textarea>
    </div>
</div>
<div class="w-full pt-3">
    <button type="submit" class="w-full bg-gray-900 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer">
    Send
    </button>
</div>
</form>
</div>

      
    </>
  )
}