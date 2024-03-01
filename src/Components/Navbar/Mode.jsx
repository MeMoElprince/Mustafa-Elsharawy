

import { useContext, useState } from 'react';
import { contextColor, contextDark } from '../Root';
import { MdLightMode as Light , MdOutlineLightMode as LightA, MdDarkMode as Dark, MdOutlineDarkMode as DarkA} from "react-icons/md";
import { motion } from 'framer-motion';

const Mode = ({className, layoutName}) => {

    const {color, setColor} = useContext(contextColor);
    const {darkMode, setDarkMode} = useContext(contextDark);

    const handleClickDark = () => {
        setColor('#F6B17A');
        setDarkMode(true);
        document.getElementById('Application').classList.add('dark');
    }
    const handleClickLight = () => {
        setColor('#CCD0CF');
        setDarkMode(false);
        document.getElementById('Application').classList.remove('dark');
    }

    return ( 
        <div className={"lg:grid grid-cols-2 place-content-center min-h-16 h-16 lg:w-3/5  2xl:w-2/4 dark:bg-pallete-300 bg-pallete2-300 rounded-3xl overflow-hidden " + className}>
            
            

            {
                darkMode 
                ?
                <div className="relative flex justify-center">
                    < DarkA color='F6B17A' onClick={handleClickDark} className={"z-20 justify-self-center w-12 h-12  p-1 rounded-full dark:hover:bg-pallete-200 hover:bg-pallete2-200 hover:cursor-pointer"} /> 

                    <motion.div className="bg-pallete-200 absolute top-0  w-12 h-12 rounded-full"
                        layoutId={layoutName}
                    />

                </div>
                : 
                <div className = "relative  flex justify-center">
                
                
                    < Dark color='000' onClick={handleClickDark} className={"z-20 justify-self-center w-12 h-12  p-1 rounded-full dark:hover:bg-pallete-200 hover:bg-pallete2-200 hover:cursor-pointer"} /> 
                    <motion.div className=" absolute   w-12 h-12 rounded-full"
                            layoutId={layoutName}
                        />
                </div>

            }
            {
                darkMode 
                ? 
                < Light color='000' onClick={handleClickLight} className={"justify-self-center w-12 h-12 p-1 rounded-full dark:hover:bg-pallete-200 hover:bg-pallete2-200 hover:cursor-pointer "}/> 
                :
                <div className="relative flex justify-center">

                    < LightA color='CCD0CF' onClick={handleClickLight} className={"z-20 justify-self-center w-12 h-12 p-1 rounded-full dark:hover:bg-pallete-200 hover:bg-pallete2-200 hover:cursor-pointer "}/>

                    <motion.div className="bg-pallete2-200 absolute   w-12 h-12 rounded-full"
                        layoutId={layoutName}
                    />
                        


                </div>
            }
            </div>
     );
}
 
export default Mode;