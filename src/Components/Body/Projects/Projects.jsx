import ProjectCard from "./ProjectCard";
import selenium from '../../../Imgs/selenium.png';
import natours from '../../../Imgs/Natours.png';
import ramadan from '../../../Imgs/ramadan.png';
import pokingapp from '../../../Imgs/pokingapp.png';
import { useEffect } from "react";

const projects = [
    {
        title: "Poking App",
        description: "A peer-to-peer chat app emphasizing secure messaging. With strong authorization and authentication, it ensures privacy. Designed for efficiency, it offers direct one-on-one chatting.",
        img: pokingapp,
        tech: ["Node.js", "Express.js", "MongoDB", "Socket.IO"],
        repo: "https://github.com/MeMoElprince/poking-app",
        live: "https://pokingapp.vercel.app/",
    },
    {
        title: "Ramadan Points",
        description: "A website providing Quranic resources and hosting a contest to inspire Muslims to pray and read Quran throughout Ramadan.",
        img: ramadan,
        tech: ["Node.js", "Express.js", "MongoDB", "React", "Tailwind"],
        repo: "https://github.com/MeMoElprince/ramadan-points",
        live: "https://ramadanpoints.vercel.app/",
    },
    {
        title: "Natours",
        description: "A full-stack project for a fictional tour booking company. A comprehensive RESTful API encompassing CRUD operations, user authentication, and authorization utilizing JWT tokens.",
        img: natours,
        tech: ["Node.js", "Express", "MongoDB", "PUG Templates"],
        repo: "https://github.com/MeMoElprince/My-Natours-Project",
        live: "https://natours-memo.onrender.com/",
    },
    {
        title: "CF Submissions Tracker",
        description: "Codeforces website script for ICPC-SuezCanal-Community: Automatically tracking trainee submissions via web scraping.",
        img: selenium,
        tech: ["Python", "Selenium", "Web Scraping"],
        repo: "https://github.com/MeMoElprince/Codeforces-User-Submissions",
    },
];

const Projects = ({ prev }) => {
    useEffect(() => {
        prev(3);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
            <div className="mb-12">
                <h2 className="text-3xl font-bold dark:text-pallete-500 text-pallete2-500 mb-4">
                    My <span className="dark:text-pallete-400 text-pallete2-400">Projects</span>
                </h2>
                <p className="dark:text-pallete-600 text-pallete2-600 text-base max-w-2xl">
                    A collection of things I've built — from real-time chat apps and REST APIs to web scraping tools and full-stack platforms.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
