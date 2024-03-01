import dark from '../../Imgs/dark.png';
import light from '../../Imgs/light.png';

import darkA from '../../Imgs/darkA.png';
import lightA from '../../Imgs/lightA.png';
import { useContext, useState } from 'react';
import { contextColor, contextDark } from '../Root';

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
            <img onClick={handleClickDark} src={darkMode ? darkA : dark} alt="" className={"justify-self-center w-12 h-12  p-1 rounded-full dark:hover:bg-pallete-200 hover:bg-pallete2-200 hover:cursor-pointer" + (darkMode ? "dark:bg-pallete-200 bg-pallete2-200 " : " ")} />
            <img onClick={handleClickLight}src={!darkMode ? lightA : light} alt="" className={"justify-self-center w-12 h-12 p-1 rounded-full dark:hover:bg-pallete-200 hover:bg-pallete2-200 hover:cursor-pointer " + (!darkMode ? "dark:bg-pallete-200 bg-pallete2-200 " : " ")} />
        </div>
     );
}
 
export default Mode;