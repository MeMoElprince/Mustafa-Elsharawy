import MyCard from "./MyCard";
import Slider from './Slider';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = ({ prev }) => {
    useEffect(() => {
        prev(1);
    }, []);

    return (
        <div className="flex flex-col">
            <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 order-2 md:order-1">
                        <div>
                            <p className="text-sm font-mono dark:text-pallete-400 text-pallete2-400 mb-3 uppercase tracking-widest">
                                Hi there, I'm
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-pallete-500 text-pallete2-500 leading-tight">
                                Mustafa<br />
                                <span className="dark:text-pallete-400 text-pallete2-400">Elsharawy</span>
                            </h1>
                        </div>
                        <h2 className="text-xl md:text-2xl font-medium dark:text-pallete-600 text-pallete2-600">
                            Backend Software Engineer
                        </h2>
                        <p className="dark:text-pallete-600 text-pallete2-600 text-base leading-relaxed">
                            Building scalable backend systems with <strong className="dark:text-pallete-500 text-pallete2-500">Node.js, NestJS, PostgreSQL</strong> &amp; MongoDB.
                            Specializing in microservices, Docker deployments, and robust APIs.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <NavLink
                                to="/my-projects"
                                className="px-5 py-2.5 rounded-lg dark:bg-pallete-400 bg-pallete2-400 dark:text-pallete-100 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
                            >
                                View Projects
                            </NavLink>
                            <NavLink
                                to="/contact-me"
                                className="px-5 py-2.5 rounded-lg border dark:border-pallete-400 border-pallete2-400 dark:text-pallete-400 text-pallete2-400 font-semibold dark:hover:bg-pallete-300 hover:bg-pallete2-300 transition-colors text-sm"
                            >
                                Contact Me
                            </NavLink>
                            <a
                                href="https://drive.google.com/file/d/1PG_s0akDh3H1hT3J3u2Q8CjTiKN6W55w/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 rounded-lg dark:text-pallete-600 text-pallete2-600 font-semibold dark:hover:text-pallete-400 hover:text-pallete2-400 transition-colors text-sm"
                            >
                                Download CV &rarr;
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center order-1 md:order-2">
                        <MyCard />
                    </div>
                </div>
            </section>

            <div className="border-t dark:border-pallete-300 border-pallete2-300">
                <Slider />
            </div>
        </div>
    );
}

export default Home;
