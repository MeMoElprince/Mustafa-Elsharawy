import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MyCard from "./MyCard";
import Slider from './Slider';
import { BsGithub, BsLinkedin } from "react-icons/bs";

const roles = [
    'Backend Software Engineer',
    'Node.js & NestJS Developer',
    'Microservices Architect',
    'AI Systems Builder',
    'Problem Solver',
];

const useTypewriter = (texts, speed = 75, pauseTime = 2000) => {
    const [idx, setIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[idx];
        if (!deleting) {
            if (charIdx < current.length) {
                const t = setTimeout(() => setCharIdx(c => c + 1), speed);
                return () => clearTimeout(t);
            }
            const t = setTimeout(() => setDeleting(true), pauseTime);
            return () => clearTimeout(t);
        } else {
            if (charIdx > 0) {
                const t = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
                return () => clearTimeout(t);
            }
            setDeleting(false);
            setIdx(i => (i + 1) % texts.length);
        }
    }, [charIdx, deleting, idx, texts, speed, pauseTime]);

    return texts[idx].substring(0, charIdx);
};

const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
};

const Home = () => {
    const role = useTypewriter(roles);

    return (
        <div>
            {/* Hero */}
            <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden">
                {/* Decorative gradient blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] dark:bg-pallete-400/5 bg-pallete2-400/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[350px] h-[350px] dark:bg-pallete-400/5 bg-pallete2-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 py-16 w-full relative z-10">
                    <div className="grid md:grid-cols-2 gap-10 xl:gap-16 items-center">

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55 }}
                            className="flex flex-col gap-6 order-2 md:order-1"
                        >
                            <div>
                                <span className="inline-flex items-center gap-2 text-xs font-mono dark:text-pallete-400 text-pallete2-400 uppercase tracking-widest border dark:border-pallete-400/40 border-pallete2-400/40 rounded-full px-4 py-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full dark:bg-pallete-400 bg-pallete2-400 animate-pulse" />
                                    Available for opportunities
                                </span>
                            </div>

                            <div>
                                <p className="text-lg dark:text-pallete-600 text-pallete2-600 mb-2">Hi, I'm</p>
                                <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
                                    <span className="dark:text-pallete-500 text-pallete2-500">Mustafa </span>
                                    <span className="dark:text-pallete-400 text-pallete2-400">Elsharawy</span>
                                </h1>
                            </div>

                            <div className="flex items-center gap-2 h-8">
                                <span className="text-lg md:text-xl dark:text-pallete-600 text-pallete2-600 font-medium">
                                    {role}
                                </span>
                                <span className="cursor-blink inline-block w-[2px] h-5 dark:bg-pallete-400 bg-pallete2-400 rounded-sm" />
                            </div>

                            <p className="dark:text-pallete-600 text-pallete2-600 text-base leading-relaxed max-w-[490px]">
                                Software Engineer at{' '}
                                <span className="dark:text-pallete-500 text-pallete2-500 font-semibold">Projecx</span>.
                                I architect microservices, build high-performance APIs, and create
                                AI-powered backend systems using LangChain and LangGraph.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <button
                                    onClick={() => scrollTo('projects')}
                                    className="px-6 py-3 rounded-xl dark:bg-pallete-400 bg-pallete2-400 dark:text-pallete-100 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg dark:shadow-pallete-400/20 shadow-pallete2-400/20"
                                >
                                    View My Work
                                </button>
                                <button
                                    onClick={() => scrollTo('contact')}
                                    className="px-6 py-3 rounded-xl border-2 dark:border-pallete-400 border-pallete2-400 dark:text-pallete-400 text-pallete2-400 font-semibold text-sm dark:hover:bg-pallete-400/10 hover:bg-pallete2-400/10 transition-colors"
                                >
                                    Contact Me
                                </button>
                                <a
                                    href="https://drive.google.com/file/d/1PG_s0akDh3H1hT3J3u2Q8CjTiKN6W55w/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 dark:text-pallete-600 text-pallete2-600 font-medium text-sm dark:hover:text-pallete-400 hover:text-pallete2-400 transition-colors"
                                >
                                    Resume ↗
                                </a>
                            </div>

                            <div className="flex items-center gap-3 pt-1">
                                <a
                                    href="https://github.com/MeMoElprince"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg dark:text-pallete-600 text-pallete2-600 dark:hover:text-pallete-400 hover:text-pallete2-400 dark:hover:bg-pallete-300 hover:bg-pallete2-300 transition-all"
                                >
                                    <BsGithub size={22} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mustafa-elsharawy-98420a216/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg dark:text-pallete-600 text-pallete2-600 dark:hover:text-pallete-400 hover:text-pallete2-400 dark:hover:bg-pallete-300 hover:bg-pallete2-300 transition-all"
                                >
                                    <BsLinkedin size={22} />
                                </a>
                                <div className="h-4 w-px dark:bg-pallete-300 bg-pallete2-300 mx-1" />
                                <span className="text-xs dark:text-pallete-600 text-pallete2-600 font-mono">Cairo, Egypt</span>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.55, delay: 0.15 }}
                            className="order-1 md:order-2 flex justify-center md:justify-end"
                        >
                            <MyCard />
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 cursor-pointer"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    onClick={() => scrollTo('about')}
                >
                    <span className="text-xs dark:text-pallete-600 text-pallete2-600 font-mono tracking-[0.2em] uppercase">scroll</span>
                    <svg className="w-4 h-4 dark:text-pallete-600 text-pallete2-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </div>

            {/* Skills ticker */}
            <div className="border-y dark:border-pallete-300 border-pallete2-300 dark:bg-pallete-200/40 bg-pallete2-200/40">
                <Slider />
            </div>
        </div>
    );
};

export default Home;
