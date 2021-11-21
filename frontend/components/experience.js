import React from 'react';

function Experience () {
    return (
        <div>
            <div className="bg-flower-img h-screen w-screen bg-cover">
                <div className="bg-pink-300 bg-opacity-80 h-screen w-screen">
                    <div className="flex flex-col container mx-auto p-6 justify-center align-center">
                        <h1 className="p-10 text-3xl uppercase text-transparent bg-transparent bg-clip-text bg-gradient-to-br from-indigo-900 to-pink-900 font-montserrat font-bold text-center">Experience</h1>
                    </div>
                    <div className="container mx-auto justify-center align-center p-6">
                        <div className="font-bold font-montserrat text-center">
                            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-900 to-pink-900 p-3">Education</h1>
                            <h2 className="text-lg font-bold">Bachelor of Arts, History</h2>
                            <h2 className="text-lg font-bold">The University of Texas at Austin</h2>
                            <h3 className="text-md font-medium opacity-80">(August 2012 - May 2015)</h3>
                        </div>
                    </div>
                    <div className="container mx-auto justify-center align-center p-6">
                        <div className="font-bold font-montserrat text-center">
                            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-900 to-pink-900 p-3">Developer</h1>
                            <h2 className="text-lg font-bold">Freelance</h2>
                            <h3 className="text-md font-medium opacity-80">(October 2021 - Present)</h3>
                            <div>
                                <p className="font-medium text-md p-3">Developed, deployed, and maintained websites and applications for clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto justify-center align-center p-6">
                        <div className="font-bold font-montserrat text-center">
                            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-900 to-pink-900 p-3">Accenture @ Meta (Facebook)</h1>
                            <h2 className="text-lg font-bold">Intellectual Property Analyst</h2>
                            <h3 className="text-md font-medium opacity-80">(December 2019 - Present)</h3>
                            <div>
                                <p className="font-medium text-md p-3 ">Researched and actioned reports of intellectual property infringement for a major social media platform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto justify-center align-center p-6">
                        <div className="font-bold font-montserrat text-center">
                            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-900 to-pink-900 p-3">Sterling Content LLC</h1>
                            <h2 className="text-lg font-bold">Writer and Editor</h2>
                            <h3 className="text-md font-medium opacity-80">(October 2015 - October 2017)</h3>
                            <div>
                                <p className="font-medium text-md p-3">Romance novelist and freelance writer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;