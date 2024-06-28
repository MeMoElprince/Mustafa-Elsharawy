import AnimationLogo from "./AnimationLogo";
import AnimationOffice from "./AnimationOffice";
import { useEffect } from "react";

const About = ({prev}) => {

  useEffect(() => {
        
      prev(2);

  }, []);

  return (
    <div className="about flex flex-col h-full w-full p-4 gap-24 lg:gap-0 ">
      <div className="grid lg:grid-cols-2 w-full place-content-center gap-10 px-10 h-fit mt-10 ">
        <div className="justify-self-center  flex flex-col gap-5 justify-center items-start lg:items-start w-fit p-4">
          <h1 className="text-5xl w-full font-bold mb-4 text-center lg:text-start">My, Self</h1>
          <div>
            <h2 className="text-3xl font-bold dark:text-pallete-500 text-pallete2-500">Summary</h2>
            <p className="text-xl dark:text-pallete-300 text-pallete2-300 font-bold mt-2 ml-3">
            Hello👋, I'm a passionate back-end developer with a strong desire to become a back-end developer in a big company.
            I am constantly seeking out new technologies and exploring back-end development to understand the behind-the-scenes processes that power our software. 
            🕊️. 
            when I'm not coding, you can find me playing video
              games, watching movies.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold dark:text-pallete-500 text-pallete2-500">Education </h2>
            <p className="text-xl dark:text-pallete-300 text-pallete2-300 font-bold mt-2 ml-3">
              Senior computer science student, @ Suez Canal University.
            </p>
          </div>
        </div>
        <div className="justify-self-center flex justify-center items-center">
          <AnimationLogo />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 w-full place-content-center px-10   h-fit ">
        <div className="-mt-10 lg:mt-0 justify-self-center order-2 lg:order-2">
          <AnimationOffice />
        </div>
        <div className="justify-self-center  lg:order-1 order-1 gap-6 flex flex-col   justify-center items-start lg:items-start w-fit p-4">
          <h1 className="text-5xl w-full font-bold mb-4 text-center lg:text-start"> Fav, Skills </h1>
          <div>
            <h2 className="text-3xl font-bold dark:text-pallete-500 text-pallete2-500">
              Problem Solving
            </h2>
            <p className="text-xl dark:text-pallete-300 text-pallete2-300 font-bold mt-2 ml-3">
              Adept at breaking down problems, analyzing requirements, and
              devising elegant solutions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold dark:text-pallete-500 text-pallete2-500">
              Competitive Programming
            </h2>
            <p className="text-xl dark:text-pallete-300 text-pallete2-300 font-bold mt-2 ml-3">
              Demonstrated success on platforms like LeetCode, Codeforces, and
              CodeChef, showcasing strong algorithmic and coding abilities. 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
