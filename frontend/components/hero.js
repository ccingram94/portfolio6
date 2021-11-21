import React from 'react';
import Header from './header'

function Hero () {
    return (
        <div className="flex flex-col bg-hero-img bg-cover h-screen w-full font-montserrat mx-auto justify-center items-center">
            <div className="flex flex-col p-6 pt-20 bg-indigo-900 bg-opacity-50 bg-cover h-screen w-full mx-auto justify-center items-center">
                <h1 className="text-6xl p-2">💻</h1>
                <h1 className="p-3 text-center font-black text-6xl text-transparent bg-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-pink-300">Hi, I'm Constance</h1>
                <h2 className="mt-3 text-center font-thin text-xl text-indigo-200">developer in Austin, TX</h2>
                <h2 className="mb-3 text-center font-thin text-xl text-indigo-200">BA @ University of Texas at Austin</h2>
                <button className="opacity-70 hover:opacity-100 transition-all p-3 m-3 text-center font-medium text-xl uppercase bg-gradient-to-br from-indigo-300 to-pink-300 rounded-md shadow-xl text-indigo-900">check out my work</button>
            </div>
        </div>
    )
}

export default Hero;