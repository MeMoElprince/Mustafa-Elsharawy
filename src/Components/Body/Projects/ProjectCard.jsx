const ProjectCard = ({img, title, discreption, tech, live, repo, className}) => {
    return ( 
        <div className={"projectCard text-xl flex flex-col gap-1 font-bold justify-center items-center text-center text-pallete-300  rounded-3xl w-fit h-fit  border-1" + className}>
            <div className="text-3xl projectCard-body flex lg:gap-x-2 xl:gap-x-8 2xl:gap-x-16 flex-wrap justify-center  items-center sm:px-2 px-1">
                {
                    img &&
                    <div className="projectCard-img sm:min-h-40 sm:min-w-40 max-h-200  max-w-200 aspect-[4/2.3] rounded-3xl py-4">
                        <img className="h-full w-full rounded-3xl" src={img} alt="pic" />
                    </div>
                }
                <div className="projectCard-info flex flex-col justify-center items-center text-center gap-4 lg:max-w-100 lg:w-100 p-2">
                    <div className="projectCard-title bg-pallete-200 min-w-40  text-5xl text-pallete-400 font-bold rounded-xl w-fit my-1">
                        {title && <h1>{title}</h1>}
                    </div>
                    <div className="projectCard-info-tech">
                    {   tech && 
                            <p>{tech}</p>
                    }
                    </div>
                    {discreption && <p className="text-center">{discreption}</p>}
                    <div className="projectCard-info-links flex gap-5 justify-center items-center">
                        {live && <a href={live} target="_blank" rel="noreferrer">Live</a>}
                        {repo && <a href={repo} target="_blank" rel="noreferrer">Repo</a>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectCard;