import { NavLink } from "react-router-dom";
import img from '../../Imgs/me.jpeg';
import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';
import Items from './Items';
import Mode from './Mode';
import Footer from "./Footer";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    
    const handleClick = () => {
        setNavbar(prev => !prev);
    }

    

    return ( 
        <div className="dark:bg-pallete-100 bg-pallete2-100 w-full flex flex-col p-2 h-fit   lg:h-full lg:col-span-1 lg:gap-6  lg:items-center">
               
            <div className=" mxs:justify-around h-fit w-full flex justify-between lg:justify-center lg:gap-3 items-center flex-wrap lg:py-6 lg:flex-col">
                <NavLink className=' h-fit p-2 flex justify-center  items-center 'to="/">
                        <img className="mxs:w-24 mxs:h-24 h-32 w-32 object-cover rounded-full" src={img} alt="" />
                </NavLink>
                <h1 className='mxs:hidden dark:text-pallete-400 text-pallete2-400 text-4xl font-bold lg:text-3xl  text-center'> Full Stack Developer  </h1>
                <div onClick={handleClick} className='w-fit flex items-center cursor-pointer lg:hidden'>
                    <svg className='w-12' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>

            <AnimatePresence >
            {

            navbar && 
            <motion.div className="lg:hidden items max-w-full w-fit h-screen flex-col flex items-start fixed top-0 z-[50] overflow-y-auto -right-0 dark:bg-pallete-200 bg-pallete2-200 pl-8 pr-16 py-10"
                initial={{x: '100%'}}
                animate={{x: 0}}
                exit={{x: '100%'}}
                transition={{duration: .5}}
            >
                <div onClick={handleClick} className='w-fit py-5  items-center cursor-pointer lg:hidden '>
                    <svg className='w-12'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                
                <Items/>
                <Mode className="my-4 w-full grid" layoutName="activeMode1" />
                <Footer  className="flex"/>
            </motion.div>
            }
            </AnimatePresence>
            
            
            <Items className="hidden lg:block"/>
            
            <Mode className="hidden" color="" layoutName="activeMode2"/>
            
            <Footer  className="hidden "/>
            

        </div>
     );
}
 
export default Navbar;