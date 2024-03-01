

import { useContext, useState } from 'react';
import { contextColor, contextDark } from '../Root';
import { MdLightMode as Light , MdOutlineLightMode as LightA, MdDarkMode as Dark, MdOutlineDarkMode as DarkA} from "react-icons/md";

const Mode = ({className}) => {

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
                darkMode ? < DarkA color='F6B17A' onClick={handleClickDark} className={"justify-self-center w-12 h-12  p-1 rounded-full dark:hover:bg-pallete-200 hover:bg-pallete2-200 hover:cursor-pointer" + (darkMode ? "dark:bg-pallete-200 bg-pallete2-200 " : " ")}/> : < Dark color='000' onClick={handleClickDark} className={"justify-self-center w-12 h-12  p-1 rounded-full dark:hover:bg-pallete-200 hover:bg-pallete2-200 hover:cursor-pointer" + (darkMode ? "dark:bg-pallete-200 bg-pallete2-200 " : " ")} /> 
            }
            {
                darkMode ? < Light color='000' onClick={handleClickLight} className={"justify-self-center w-12 h-12 p-1 rounded-full dark:hover:bg-pallete-200 hover:bg-pallete2-200 hover:cursor-pointer " + (!darkMode ? "dark:bg-pallete-200 bg-pallete2-200 " : " ")}/> : < LightA color='CCD0CF' onClick={handleClickLight} className={"justify-self-center w-12 h-12 p-1 rounded-full dark:hover:bg-pallete-200 hover:bg-pallete2-200 hover:cursor-pointer " + (!darkMode ? "dark:bg-pallete-200 bg-pallete2-200 " : " ")}/>
            }
            </div>
     );
}
 
export default Mode;