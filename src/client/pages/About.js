import { useEffect, useState } from "react";

import profile from '../../img/profile.jpg';


const About = () => {
    
    const [about, setAbout] = useState();
    const [loading, setLoading] = useState(true);

    const fetchAbout = async () => {
        try {
            const response = await fetch("https://my-first-service-h7ag.onrender.com/sime/api/");
            const json = await response.json();

            if (response.ok) {
                const { about } = json;
                setAbout(about);
            } else {
                console.error("Failed to fetch projects:", json);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAbout();
    }, []);

    return (
        <div className="container mx-auto pt-8" id="about">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-12">
                <h2 className="text-center text-2xl font-semibold mb-4 text-blue-700">About Me</h2>
                <div className="flex items-center mb-4 border-b-2 rounded-s-lg p-3 ">
                    <img className="w-12 h-12 rounded-full mr-4" src={profile} alt="Profile" />
                    <div>
                        <h3 className="text-lg font-semibold">Simachew Denekew</h3>
                        <p className="text-gray-600">FullStack Developer</p>
                    </div>
                </div>

                { about &&
                <> 
                <div className="mt-12">
                    <h4 className="text-lg font-semibold mb-2">Personal Statement</h4>
                    <p className="text-gray-700">{ about[0].pStatement}</p>
                </div>

                <div className="mt-12">
                    <h4 className="text-lg font-semibold mb-2">Objective</h4>
                    <p className="text-gray-700">{ about[0].objective}</p>
                </div>

                <div className="mt-12">
                    <h4 className="text-lg font-semibold mb-2">Communication</h4>
                    <p className="text-gray-700">{ about[0].communication}</p>
                </div>

                <div className="mt-12">
                    <h4 className="text-lg font-semibold mb-2">Leadership</h4>
                    <p className="text-gray-700">{ about[0].leadership}</p>
                </div>

                </>
                }

                {loading && ( <><p className='text-center text-3xl'>Loading...</p><p className='text-center text-orange-600 text-2xl'>Please wait a moment, It's a free hosting...</p></>)}


            </div>
        </div>
    );
}

export default About;
