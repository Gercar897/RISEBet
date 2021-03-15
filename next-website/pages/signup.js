import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'


export default function Signup() {
    return (
        
       <>

<Head>
        <title>Sign up</title>
        <link rel="icon" href="/Riseicon2.ico" />
      </Head>

        <div class="font-sans">
            <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 backdrop-blur ">
                <div class="relative sm:max-w-sm w-full">
                    <div class="card bg-blue-400  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div class="card bg-red-400  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div class="relative w-full rounded-5xl  px-6 py-4 bg-gray">
                        <label for="" class="block text-5x1 text-secondary text-center font-semibold sm:text-6xl">
                            Create an Account
                        </label>
                        <form method="#" action="/login" class="mt-10">
                                            
                            <div>
                                <input type="text" placeholder="Name" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                            </div>
                
                            <div class="mt-7">                
                                <input type="email" placeholder="Email" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>
        
                            <div class="mt-7">                
                                <input type="password" placeholder="Password" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>
        
                            <div class="mt-7">                
                                <input type="password" placeholder="Confirm Password" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                            </div>
        
                            
                
                            <div class="mt-7">
                                <button  class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 hover:bg-box hover:text-black">
                                   <a href="/account">
                                       Sign Up
                                       </a> 
                                </button>
                            </div>
                          
                
                            <div class="mt-7">
                                <div class="flex justify-center items-center">
                                    <label class="w-full text-sm text-white sm:text-base">You have an account already?</label>
                                    <a href="/login" class="w-full text-white transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 hover:text-third sm:text-lg">
                                        Login
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</>
    )
}


