import Head from 'next/head'
import styled from 'styled-components'


const Hero = styled.div`
  height: 20vh;
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
        <link rel="icon" href="/Riseicon2.ico" />
      </Head>
      <Hero>
        <Heading >RISE</Heading>
      </Hero>


  <div class="bg-image w-full min-h-full flex flex-wrap justify-center items-center gap-3 py-5 ">
    <div class="backdrop-blur w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-2x1">
    
      <div class="w-full mb-3 pb-3 border-b border-1 border-white">
        <h3 class="text-xl font-semibold text-shadow">League of Legends</h3>
      </div>
    
      <div>
        <img src="https://s3.eu-west-3.amazonaws.com/dexertoes-assets-production-7d0f29e6/uploads/2020/10/02151543/lol-worlds-2020-contara-con-el-mayor-evento-de-clash-hasta-ahora.jpg" alt="image1" class="w-full h-48 object-cover mb-2"/>
        <p class="mb-3 tracking-wide text-base text-shadow">
          Do not miss out on the action, watch them climb to the Worlds 2021 stage.
        </p>
        <button class="backdrop bg-button bg-opacity-100 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-50 text-lg">
          Watch now
        </button>
      </div>

    </div>

    <div class="backdrop-blur w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-2x1">
    
      <div class="w-full mb-3 pb-3 border-b border-1 border-white">
        <h3 class="text-xl font-semibold text-shadow">CS:GO</h3>
      </div>
    
      <div>
        <img src="https://esportsobserver.com/wp-content/uploads/2019/03/CSGO-ESL-Pro-League.png" alt="image2" class="w-full h-48 object-cover mb-2"/>
        <p class="mb-3 tracking-wide text-base text-shadow">
          Choose from dozens of different countries. Weapon skins accepted as place bet.
        </p>
        <button class="backdrop bg-button bg-opacity-100 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-50 text-lg">
          Details
        </button>
      </div>
    </div>

    <div class="backdrop-blur w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-2x1">
  
      <div class="w-full mb-3 pb-3 border-b border-1 border-white">
        <h3 class="text-xl font-semibold text-shadow">FIFA League</h3>
      </div>
  
      <div>
        <img src="https://www.fifplay.com/img/public/fifa-21-leagues.jpg" alt="image3" class="w-full h-48 object-cover mb-2"/>
        <p class="mb-3 tracking-wide text-base text-shadow">
          Whose lineup will prevail? Come find out the best. FIFA packs giveaway each month.
        </p>

        <button class="backdrop-blur bg-button bg-opacity-100 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-50 text-lg">
          Schedule now
        </button>

      </div>
    </div>

  </div>


  <div class="bg-image w-full min-h-full flex flex-wrap justify-center items-center gap-3 py-5 ">
    <div class="backdrop-blur w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-2x1">
    
      <div class="w-full mb-3 pb-3 border-b border-1 border-white">
        <h3 class="text-xl font-semibold text-shadow">Get the latest news</h3>
      </div>
    
      <div>
        <img src="https://www.palco23.com/files/0002017/000redaccion/eSports/overwatch/overwatch-league-finales-evento-728.jpeg" alt="image1" class="w-full h-48 object-cover mb-2"/>
        <p class="mb-3 tracking-wide text-base text-shadow">
          Too busy to watch whole matches? Don't worry keep in touch with our highlights, breakdowns and articles (Members feature). Keep in touch with all the results from your favorite leagues.
        </p>
        <button class="backdrop bg-button bg-opacity-100 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-50 text-lg">
          Members dashboard
        </button>
      </div>

    </div>

    <div class="backdrop-blur w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-2x1">
    
      <div class="w-full mb-3 pb-3 border-b border-1 border-white">
        <h3 class="text-xl font-semibold text-shadow">Get up to 70$ free bet</h3>
      </div>
    
      <div>
        <img src="https://addcrazy.com/wp-content/uploads/2018/09/esports-bet-jpg.jpeg" alt="image2" class="w-full h-48 object-cover mb-2"/>
        <p class="mb-3 tracking-wide text-base text-shadow">
        Dive into the world of Esports action with on VIE. Boost for all new challengers, get up to $70 Free Bet on your first deposit! (New accounts only, minimum deposit 30$). T&C's may apply.
        </p>
        <button class="backdrop bg-button bg-opacity-100 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-50 text-lg">
          Join now!
        </button>
      </div>
    </div>

  </div>



<article>
  <div class="video-wrapper">
    <h1 class="font-Georgia align-middle leading-none pb-4 text-secondary text-3xl uppercase video-title bg-opacity-0 md:p-1 md:text-9xl md:bg-opacity-0">
      Ready?
    </h1>
    <video autoPlay loop muted class="w-full" src={require('./OpVid.mp4')} />
  </div>
</article>


    </>
  )
}
