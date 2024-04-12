import { useEffect, useState } from "react";
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaPhp, FaNodeJs, FaGit, FaJava } from 'react-icons/fa'; // Import additional icons

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSkills = async () => {
        try {
            const response = await fetch("https://my-first-service-h7ag.onrender.com/sime/api/");
            const json = await response.json();

            if (response.ok) {
                const skillsData = json.skills;
                setSkills(skillsData);
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
        fetchSkills();
    }, []);

    const renderIcon = (iconUrl) => {
        switch (iconUrl) {
            case "FaHtml5":
                return <FaHtml5 />;
            case "FaCss3":
                return <FaCss3 />;
            case "FaReact":
                return <FaReact />;
            case "FaBootstrap":
                return <FaBootstrap />;
            case "FaPhp":
                return <FaPhp />;
            case "FaNodeJs":
                return <FaNodeJs />;
            case "FaGit":
                return <FaGit />;
            case "FaJava":
                return <FaJava />;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto pt-8" id="skills">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-12">
                <h2 className="text-center text-2xl font-bold mb-8 text-blue-700">Skills & Abilities</h2>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {skills && skills.map(skill => (
                            <div key={skill._id} className="bg-slate-50 rounded-lg shadow-md p-6 flex items-center">
                                {renderIcon(skill.iconUrl)}
                                <p className="ml-5">{skill.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {loading && ( <><p className='text-center text-3xl'>Loading...</p><p className='text-center text-orange-600 text-2xl'>Please wait a moment, It's a free hosting...</p></>)}

            </div>
        </div>
    );
}

export default Skills;
