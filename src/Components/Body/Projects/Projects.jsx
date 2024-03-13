import ProjectCard from "./ProjectCard";

import selenium from '../../../Imgs/selenium.png'
import natours from '../../../Imgs/Natours.png'
import ramadan from '../../../Imgs/ramadan.png'

import { useEffect } from "react";

const Projects = ({prev}) => {
    useEffect(() => {
        prev(3);
    }, []);
    return ( 

        <div className="projects flex flex-col gap-10 w-full h-full ">
            <div className="lg:my-10 h-fit w-full  flex flex-col text-center gap-10 dark:text-pallete-500 text-pallete2-500 font-bold p-4 justify-center items-center">
                <h1 className="text-4xl dark:text-pallete-400 text-pallete2-400 lg:text-5xl ">
                    Projects
                </h1>
                <p className="text-xl lg:text-2xl max-w-300">
                    Welcome to the Projects section, where chaos meets creativity, deadlines dance, and miracles occasionally happen. Buckle up for a rollercoaster ride through my adventures in organized chaos!
                </p>
            </div>

            <div className="h-fit w-full flex flex-col gap-32 justify-center items-center pb-10">
                <ProjectCard title={"Ramadan Points"} discreption={"Ramadan Points: A website providing Quranic resources and hosting a contest to inspire Muslims to pray and read Quran throughout Ramadan."} img={ramadan} tech={"NodeJs, ExpressJs, MongoDB, ReactJS, Tailwind"} repo={"https://github.com/MeMoElprince/ramadan-points"} live={"https://ramadanpoints.vercel.app/"} />
                <ProjectCard title={"Natours"} discreption={"A full-stack project for a fictional tour booking company called Natours.A comprehensive RESTful API encompassing CRUD operations, user authentication, and authorization utilizing JWT tokens."} img={natours} tech={"NodeJs, Express, MongoDB, PUG template"} repo={"https://github.com/MeMoElprince/My-Natours-Project"} live={"https://natours-memo.onrender.com/"} />
                <ProjectCard title={"Codeforces-User-Submitions"} discreption={"Codeforces Website Script for ICPC-SuezCanal-Community: Tracking Trainee Submissions"} img={selenium} tech={"Python, Selenium, Web Scrapping"} repo={"https://github.com/MeMoElprince/Codeforces-User-Submissions"} />
            </div>
        </div>
        
        
     );
}
 
export default Projects