import linkedIn from '../../Imgs/linkedIn.png';
import github from '../../Imgs/github.png';
import githubL from '../../Imgs/githubL.png';
import linkedInL from '../../Imgs/linkedInL.png';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import { contextDark } from '../Root';
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = ({className}) => {

    const {darkMode} = useContext(contextDark);

    return ( 
        <div className={" footer lg:flex flex-col  items-center justify-center my-3  h-fit w-full xl:w-3/4 2xl:w-3/5  gap-7 " + className}>
            <div className="social grid grid-cols-2 w-full h-12 ">
                <Link className=" h-full rounded-full justify-self-center" to='https://www.linkedin.com/in/mustafa-elsharawy-98420a216/' target='_blank'>
                    <BsLinkedin className="w-full h-full justify-self-center" color={darkMode ? "F6B17A" : "CCD0CF"} />
                </Link>
                <Link target='_blank' className=" h-full rounded-full justify-self-center" to='https://github.com/MeMoElprince'>
                    <BsGithub className=" h-full w-full justify-self-center" color={darkMode ? "F6B17A" : "CCD0CF"} />
                </Link>
            </div>

            <div className="copyright flex flex-wrap justify-center text-center items-center dark:text-pallete-500 text-pallete2-500  text-sm">
                <p>© 2024 Mustafa Hazem Elsharawy</p>
            </div>
        </div>
     );
}
 
export default Footer;