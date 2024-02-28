import ProjectCard from "./ProjectCard";

import img1 from '../../../Imgs/project1.png'
import natours from '../../../Imgs/Natours.png'

const Projects = () => {
    return ( 

        <div className="projects flex flex-col gap-10 w-full h-full">
            <div className="lg:my-10 h-fit w-full  flex flex-col text-center gap-10 text-pallete-300 font-bold p-4 justify-center items-center">
                <h1 className="text-4xl text-pallete-400 lg:text-5xl ">
                    Projects
                </h1>
                <p className="text-xl lg:text-2xl max-w-300">
                    Welcome to the Projects section, where chaos meets creativity, deadlines dance, and miracles occasionally happen. Buckle up for a rollercoaster ride through my adventures in organized chaos!
                </p>
            </div>

            <div className="h-fit w-full flex flex-col gap-32 justify-center items-center">
                <ProjectCard title={"Natours"} discreption={"A full‑stack project for a fictional tour booking company called Natours.A comprehensive RESTful API encompassing CRUD operations, user authentication, and authorization utilizing JWT tokens."} img={natours} tech={"NodeJs, Express, MongoDB, PUG template"} repo={"https://github.com/MeMoElprince/My-Natours-Project"} live={"https://natours-memo.onrender.com/"} />
                <ProjectCard title={"Project1"} discreption={"Shop.co is a modern e-commerce website it's a real online shop! You can browse different items in different colors and sizes. and Added them to cart"} img={img1} tech={"React, NodeJs"} repo={"repo"} live={"live"} />
            </div>
        </div>
        
        
     );
}
 
export default Projects