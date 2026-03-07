import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import selenium from '../../../Imgs/selenium.png';
import natours from '../../../Imgs/Natours.png';
import ramadan from '../../../Imgs/ramadan.png';
import pokingapp from '../../../Imgs/pokingapp.png';

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
        description: "A full-stack project for a fictional tour booking company. A comprehensive RESTful API with CRUD operations, user authentication, and JWT-based authorization.",
        img: natours,
        tech: ["Node.js", "Express", "MongoDB", "PUG Templates"],
        repo: "https://github.com/MeMoElprince/My-Natours-Project",
        live: "https://natours-memo.onrender.com/",
        liveDisabled: true,
    },
    {
        title: "CF Submissions Tracker",
        description: "Codeforces website automation script for the ICPC Suez Canal Community — automatically tracking and reporting trainee submission data via web scraping.",
        img: selenium,
        tech: ["Python", "Selenium", "Web Scraping"],
        repo: "https://github.com/MeMoElprince/Codeforces-User-Submissions",
    },
];

const Projects = () => {
    return (
        <div className="dark:bg-pallete-100 bg-pallete2-100">
            <div className="max-w-6xl mx-auto px-6 py-20">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-end justify-between flex-wrap gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold dark:text-pallete-500 text-pallete2-500">
                                My <span className="dark:text-pallete-400 text-pallete2-400">Projects</span>
                            </h2>
                            <div className="mt-3 w-12 h-0.5 dark:bg-pallete-400 bg-pallete2-400 rounded-full" />
                        </div>
                        <a
                            href="https://github.com/MeMoElprince"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium dark:text-pallete-400 text-pallete2-400 dark:hover:text-pallete-500 hover:text-pallete2-500 transition-colors flex items-center gap-1.5"
                        >
                            View all on GitHub
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                    <p className="dark:text-pallete-600 text-pallete2-600 text-base mt-4 max-w-2xl">
                        A selection of things I've built — from real-time chat apps and REST APIs to web scraping tools and full-stack platforms.
                    </p>
                </motion.div>

                {/* Scalable grid — add more projects and they flow naturally */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.45, delay: i * 0.07 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Projects;
