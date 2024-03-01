import Button from "./Button";

const ProjectCard = ({img, title, discreption, tech, live, repo, className}) => {
    return ( 
        <div className={"mx-8 pb-1 w-fit  projectCard dark:text-pallete-500 text-pallete2-500 text-xl flex flex-col gap-1  justify-center items-center text-center   rounded-3xl  h-fit " + className}>
            <div className="text-3xl flex lg:gap-x-2 xl:gap-x-8 2xl:gap-x-16 flex-wrap justify-center  items-center sm:px-2 px-1">
                {
                    img &&
                    <div className="projectCard-img sm:min-h-40 sm:min-w-40 max-h-200  max-w-200 aspect-[4/2.3] rounded-3xl py-4">
                        <img className="h-full w-full rounded-3xl" src={img} alt="pic" />
                    </div>
                }
                <div className="border-b-4 pb-4 rounded-3xl dark:border-pallete-400 border-pallete2-400 flex flex-col justify-center items-center  text-center gap-8 lg:max-w-100 lg:w-100 p-2">
                    <div className="projectCard-title dark:bg-pallete-200 bg-pallete2-200 min-w-40  text-5xl dark:text-pallete-400 text-pallete2-400 font-bold rounded-xl w-fit my-1">
                        {title && <h1>{title}</h1>}
                    </div>
                    <div className="text-pallete-700 font-bold  rounded-2xl projectCard-info-tech">
                    {   tech && 
                            <p>{tech}</p>
                    }
                    </div>
                    {discreption && <p className="text-center">{discreption}</p>}
                    <div className="projectCard-info-links flex gap-5 justify-center items-center ">
                        {live && <Button text={'Live'}/>}
                        {repo && <Button text={'Repo'}/>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectCard;

