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



export default function About() {
  return (
    <>
      
      <Head>
        <title>About</title>
        <link rel="icon" href="/Riseicon2.ico" />
      </Head>

      <div class="py-12 bg-danger bg-opacity-20 relative min-h-full flex">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Bets on another level</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary sm:text-4xl">
        Support your favorite eSports teams 
      </p>
      <p class="mt-4 max-w-2xl text-base text-xl lg:mx-auto text-third">
        League of Legends, FIFA, Overwatch, CS:GO, you name it. RISE ensures a range of big eSports events to upcoming leagues.  
      </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 ">
        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo text-white">
              <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.6" d="M4.423,9.141H3.565c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.192,0.429-0.429S4.66,9.141,4.423,9.141 M6.997,16.861H6.139c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.191,0.429-0.429S7.234,16.861,6.997,16.861 M4.423,16.861H3.565c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.191,0.429-0.429S4.66,16.861,4.423,16.861M13.861,9.998h0.857c0.236,0,0.429-0.192,0.429-0.429s-0.192-0.429-0.429-0.429h-0.857c-0.237,0-0.43,0.192-0.43,0.429S13.624,9.998,13.861,9.998 M14.719,16.861h-0.857c-0.237,0-0.43,0.192-0.43,0.43s0.192,0.429,0.43,0.429h0.857c0.236,0,0.429-0.191,0.429-0.429S14.955,16.861,14.719,16.861 M15.576,13.001c-0.236,0-0.429,0.192-0.429,0.43c0,0.236,0.192,0.429,0.429,0.429c0.237,0,0.43-0.192,0.43-0.429C16.006,13.193,15.813,13.001,15.576,13.001 M6.997,9.141H6.139c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.192,0.429-0.429S7.234,9.141,6.997,9.141M12.145,9.141h-0.857c-0.236,0-0.429,0.192-0.429,0.429s0.193,0.429,0.429,0.429h0.857c0.237,0,0.43-0.192,0.43-0.429S12.382,9.141,12.145,9.141 M17.722,10.856V7.424c0-0.948-0.769-1.716-1.716-1.716h-0.617l-1.038-3.873c-0.245-0.916-1.186-1.458-2.101-1.213L3.592,2.912C2.676,3.157,2.133,4.098,2.378,5.014l0.186,0.695H2.278c-0.947,0-1.716,0.768-1.716,1.716V17.72c0,0.947,0.769,1.716,1.716,1.716h13.728c0.947,0,1.716-0.769,1.716-1.716v-1.716c0.947,0,1.716-0.769,1.716-1.716v-1.716C19.438,11.624,18.669,10.856,17.722,10.856 M16.006,6.566c0.473,0,0.857,0.384,0.857,0.858v0.238c-0.253-0.146-0.544-0.238-0.857-0.238h-0.157l-0.229-0.858H16.006z M14.41,5.372l0.55,2.053H6.67L14.41,5.372z M3.814,3.741l8.657-2.29c0.458-0.123,0.928,0.149,1.051,0.607l0.222,0.828L3.43,5.621l-0.223-0.83C3.084,4.333,3.356,3.863,3.814,3.741M1.42,7.424c0-0.474,0.384-0.858,0.858-0.858h0.517l0.229,0.858H2.278c-0.314,0-0.605,0.091-0.858,0.238V7.424z M16.863,17.72c0,0.474-0.385,0.858-0.857,0.858H2.278c-0.474,0-0.858-0.385-0.858-0.858V9.141c0-0.474,0.384-0.858,0.858-0.858h13.728c0.473,0,0.857,0.384,0.857,0.858v1.715h-1.716c-0.947,0-1.716,0.768-1.716,1.716v1.716c0,0.947,0.769,1.716,1.716,1.716h1.716V17.72z M18.58,14.288c0,0.474-0.385,0.857-0.858,0.857h-2.574c-0.474,0-0.857-0.384-0.857-0.857v-1.716c0-0.474,0.384-0.858,0.857-0.858h2.574c0.474,0,0.858,0.385,0.858,0.858V14.288z M9.571,16.861H8.713c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.236,0,0.429-0.191,0.429-0.429S9.808,16.861,9.571,16.861M12.145,16.861h-0.857c-0.236,0-0.429,0.192-0.429,0.43s0.193,0.429,0.429,0.429h0.857c0.237,0,0.43-0.191,0.43-0.429S12.382,16.861,12.145,16.861 M9.571,9.141H8.713c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858C9.808,9.998,10,9.806,10,9.569S9.808,9.141,9.571,9.141" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-white">Instant Cash out-Cash in</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-texty">
            Get your profits right away! Do not loose the opportunity to place your next bet right away!
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo text-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z" />
                <circle fill="none" cx="9.98" cy="9.446" r="1.629"></circle>
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-white">No hidden fees</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-texty">
            Join one of the best bet sites, with a full disclosure of fees. One of the lowest fees of the market, get started today.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-white">Transfers are instant</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-texty">
            Deposit or withdrawals with wait times lower than two hours, take advantage of our transfers so you can support your favorite team right away!
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-20 w-20 rounded-md bg-indigo-500 text-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-white">Mobile notifications</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-texty">
            Download our app BetRISE on your prefered store, sync your account and get live notifications from your teams and bets.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
      



<div class="py-8 px-8 max-w-sm mx-auto bg-white bg-opacity-80 rounded-xl shadow-md mt-16 mb-28 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/perfil.jpg" alt="Woman's Face"/>
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        Gerardo Garduño
      </p>
      <p class="text-gray-500 font-medium">
        RISE Founder
      </p>
    </div>
    <button class="px-4 py-1 text-sm border border-black text-black font-semibold rounded-full bg-third hover:text-white hover:bg-third bg-opacity-80 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 hover:text-black">
     <a href="https://mx.linkedin.com/in/gardunogerardo?trk=people_directory">Message</a> 
      </button>
  </div>
</div>


    </>
  )
}
