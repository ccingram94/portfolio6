import React from 'react';

function AboutMe () {
    return (
        <div className="flex flex-row flex-wrap h-full w-screen bg-indigo-900 justify-center p-10">
            <div className="flex font-montserrat p-2 m-5 max-w-3xl">
                <div className="flex flex-col flex-start p-2">
                    <h1 className="font-bold text-3xl text-transparent bg-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-pink-300 uppercase font-monsterrat p-2">Who Am I?</h1>
                    <h2 className="font-semibold text-xl  text-indigo-300 p-2">I'm Constance Ingram a developer and artist from Austin, Texas.</h2>
                    <p className="font-medium text-indigo-100 p-2 opacity-80">In 2015 I graduated from the University of Texas at Austin with a Bachelor of Arts.
                        For five years, I worked as a romance novelist and English teacher.  In 2019, I began working
                        as an Intellectual Property Analyst for Accenture @ Meta (formerly Facebok) within Digital Rights Operations
                        while studying Computer Science at Austin Community College.
                        I now freelance as a developer of fast, effective, elegant websites.
                    </p>
                    <div className="flex flex-row flex-wrap justify-start p-2">
                        <button className="shadow bg-gradient-to-br from-indigo-300 to-pink-300 text-indigo-900 uppercase font-medium text-center rounded-md p-2 m-2">Portfolio</button>
                        <button className="shadow bg-gradient-to-br from-indigo-300 to-pink-300 text-indigo-900 uppercase font-medium text-center rounded-md p-2 m-2">Experience</button>
                        <button className="shadow bg-gradient-to-br from-indigo-300 to-pink-300 text-indigo-900 uppercase font-medium text-center rounded-md p-2 m-2">Contact</button>
                </div>
                </div>
            </div>
            <div className="flex flex-col font-montserrat p-2 m-5 border-2 rounded-xl border-indigo-300 max-w-3xl">
                <h1 className="font-bold text-3xl text-transparent bg-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-pink-300 uppercase p-2">Technologies</h1>
                <div className="p-2 opacity-80">
                    <h2 className="text-indigo-300 font-montserrat font-bold">Languages</h2>
                    <p className="text-indigo-100">Python, C++, JavaScript, TypeScript, SQL, HTML, CSS</p>
                </div>
                <div className="p-2 opacity-80">
                    <h2 className="text-indigo-300 font-montserrat font-bold">Frameworks</h2>
                    <p className="text-indigo-100">React, Express, Next.js, Django</p>
                </div>
                <div className="p-2 opacity-80">
                    <h2 className="text-indigo-300 font-montserrat font-bold">Databases and ORMs</h2>
                    <p className="text-indigo-100">PostgreSQL, MongoDB, Mongoose, Prisma</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;