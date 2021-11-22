import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Portfolio () {
    return (
        <div>
            <div className="bg-paint-img w-screen h-full bg-cover">
                <div className="bg-indigo-900 w-screen h-full bg-opacity-80">
                    <div className="p-6 flex flex-col flex-wrap">
                        <h1 className="font-montserrat text-3xl font-bold text-pink-200 uppercase text-center p-6">Portfolio</h1>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center align-center text-center">
                        <div className="bg-pink-300 max-w-3xl rounded-md shadow-xl p-6 m-6">
                            <Link href="https://giottotarotapp.vercel.app/">
                                <h1 className="text-center text-3xl font-montserrat font-bold text-pink-900 hover:text-pink-600 transition-all p-3">Giotto Tarot</h1>
                            </Link>
                            <p className="text-center font-montserrat font-medium text-pink-800">Next.js (React) || PostgreSQL || Next-Auth || Prisma || Framer Motion</p>
                            <p className="text-center font-montserrat font-medium text-pink-800 p-3">Tarot React application featuring animation from Framer Motion,
                            user authentication with Next-Auth, artwork from the early renaissance master Giotto, and a PostgreSQL database wrapped with Prisma ORM.
                            React Context API holds user questions in state across components.  PostgreSQL database persists user accounts and saved readings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;