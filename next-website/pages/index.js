import Head from 'next/head'
import styled from 'styled-components'


const Hero = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Heading = styled.h1`
  color #00FFFF;
  font-size: 10rem;
  font-weight: 900;
  video-title;
`;



export default function Home() {
  return (
    <>
      <Head>
        <title>Rise Bet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading >RISE</Heading>
      </Hero>



      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"
    
    />
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>

<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face"/>
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p class="text-gray-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>


<article>
  <div class="video-wrapper">
    <h1 class="font-Georgia align-middle leading-none pb-4 text-secondary text-3xl uppercase video-title md:p-1 md:text-7xl ">
      Game On
    </h1>
    <video autoPlay loop muted class="w-full" src={require('./OpVid.mp4')} />
  </div>
</article>


    </>
  )
}
