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

export default function terms() {
  return (
    <>
      
      <Head>
        <title> Dashboard </title>
        <link rel="icon" href="/Riseicon2.ico" />
      </Head>

      <div class="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">


<div class="w-full md:w-1/2 p-5 md:px-0 mx-5">
<div class="bg-black bg-opacity-80 border border-texty w-full lg:w-1/2 h-full p-5 pt-8">
    <h3 class="text-2xl text-white font-semibold mb-5">
    ESPORTS Dashboard
    </h3>

    <div class="flex flex-col gap-3">
    <a href="#" class="flex items-center text-white hover:text-texty hover:bg-red-500 p-2">
    <img class="h-10 w-10 rounded" src="https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo-3.png" alt=""/>
      League of Legends
    </a>
    <a href="#" class="flex items-center text-white hover:text-texty hover:bg-red-500 p-2">
    <img class="h-10 w-10 rounded" src="https://i.pinimg.com/originals/6a/06/5e/6a065e9d2af7df18ca5f257c3a252499.png" alt=""/>
        Dota 2
    </a>
    <a href="#" class="flex items-center text-white hover:text-texty hover:bg-red-500 p-2">
    <img class="h-12 w-12 rounded" src="https://i.pinimg.com/originals/db/72/21/db7221672fc6b447f7af2b1f61b140ef.png" alt=""/>
        CS:GO
    </a>
    <a href="#" class="flex items-center text-white hover:text-texty hover:bg-red-500 p-2">
    <img class="h-10 w-10 rounded" src="https://pngimg.com/uploads/starcraft/small/starcraft_PNG79.png" alt=""/>
        StarCraft 2
    </a>
    </div>
</div>
</div>


<form action="#" class="w-full md:w-1/2 border border-red-500 p-6 bg-gray-900">
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
      

<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-white">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-lg uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-lg uppercase tracking-wider">
                
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-lg uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-lg uppercase tracking-wider">
                Standings
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded" src="https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo-3.png" alt=""/>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      League Championship Series Spring
                    </div>
                    <div class="text-sm text-gray-500">
                      Today March 14 22:00 GMT-6
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">0 Immortals</div>
                <div class="text-sm text-gray-500">0 Cloud 9</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-red text-white">
                  Live
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                W1 3.50 W2 1.50
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-black hover:text-third">BET</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded" src="https://logodownload.org/wp-content/uploads/2014/09/lol-league-of-Legends-logo-3.png" alt=""/>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      Latin America League
                    </div>
                    <div class="text-sm text-gray-500">
                      Today March 14 00:00 GMT-6
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">0 Rainbow 7</div>
                <div class="text-sm text-gray-500">0 Estral E-Sports</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-upcoming text-white">
                  Upcoming
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                W1 1.91 W2 1.79
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-black hover:text-third">BET</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded" src="https://i.pinimg.com/originals/6a/06/5e/6a065e9d2af7df18ca5f257c3a252499.png" alt=""/>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      FMWH Championship
                    </div>
                    <div class="text-sm text-gray-500">
                      Tomorrow March 15 08:00 GMT-6
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">0 Team Aster</div>
                <div class="text-sm text-gray-500">0 Vici Gaming</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-upcoming text-white">
                  Upcoming
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                W1 1.76 W2 1.94
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-black hover:text-third">BET</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded" src="https://i.pinimg.com/originals/6a/06/5e/6a065e9d2af7df18ca5f257c3a252499.png" alt=""/>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      EPIC League Division 1
                    </div>
                    <div class="text-sm text-gray-500">
                      Tomorrow March 15 16:00 GMT-6
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">0 Team Spirit</div>
                <div class="text-sm text-gray-500">0 High Coast Esports</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-upcoming text-white">
                  Upcoming
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                W1 1.30 W2 3.20
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-black hover:text-third">BET</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded" src="https://i.pinimg.com/originals/db/72/21/db7221672fc6b447f7af2b1f61b140ef.png" alt=""/>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      ESL ANZ Championship
                    </div>
                    <div class="text-sm text-gray-500">
                     March 13 15:00 GMT-7
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">14 Dire Wolves</div>
                <div class="text-sm text-gray-500">7 Animal Squad</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-done text-white">
                  Finished
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hover:text-third">
                W1 Winner
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a class="text-black hover:text-black">BET</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded" src="https://i.pinimg.com/originals/db/72/21/db7221672fc6b447f7af2b1f61b140ef.png" alt=""/>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      Snow Sweet Snow
                    </div>
                    <div class="text-sm text-gray-500">
                      Today March 14 22:30 GMT-6
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">0 Paradox</div>
                <div class="text-sm text-gray-500">0 Bizarre</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-red text-white">
                  Live
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                W1 1.23 W2 3.75
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-black hover:text-third">BET</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded" src="https://pngimg.com/uploads/starcraft/small/starcraft_PNG79.png" alt=""/>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      ITax Event
                    </div>
                    <div class="text-sm text-gray-500">
                      Today March 14 22:00 GMT-6
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">1 TY</div>
                <div class="text-sm text-gray-500">0 DongRaeGu</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-red text-white">
                  Live
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                W1 3.50 W2 1.50
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-black hover:text-third">BET</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded" src="https://pngimg.com/uploads/starcraft/small/starcraft_PNG79.png" alt=""/>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      Moscow Cybersport Series
                    </div>
                    <div class="text-sm text-gray-500">
                     March 16 17:00 GMT-6
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">0 Immortals</div>
                <div class="text-sm text-gray-500">0 Cloud 9</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-texty text-white">
                  Scheduled
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                W1 3.50 W2 1.50
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-black hover:text-third">BET</a>
              </td>
            </tr>



          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </>
  )
}