import Head from 'next/head'
import styled from 'styled-components'


const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color #000;
  font-size: 10rem;
  font-weight: 900;
`;



export default function Home() {
  return (
    <>
      <Head>
        <title>Rise Bet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>NEXT</Heading>
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
    <h1 class="leading-none p-4 text-white text-3xl uppercase video-title md:p-8 md:text-5xl">
      Video Background
    </h1>
    <video autoplay loop muted class="w-full">
      <source src="https://petermedina.com/video/beach.mp4" type="video/mp4" />Your browser does not support the video tag.
      <source src="https://petermedina.com/video/beach.webm" type="video/webm" />Your browser does not support the video tag.
    </video>
  </div>

  <div class="leading-normal mx-auto my-12 px-4 max-w-md">
    <p class="mb-4 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error iure quo ea dolore, iste ad assumenda ducimus sunt. Rerum nulla ipsum unde exercitationem ea atque explicabo tempore perferendis delectus?</p>
    <p class="md:text-xl">Laudantium cumque mollitia maxime, magni pariatur blanditiis laborum quisquam. Iure veniam deserunt debitis minus animi at fugiat doloremque a tempore obcaecati adipisci voluptate molestiae, amet odio, unde velit! Dolore, molestiae.</p>
  </div>
</article>



    </>
  )
}
