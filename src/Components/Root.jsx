import Navbar from './Navbar/Navbar';
import Body from './Body/Body';
import {useState} from 'react';
import { createContext } from 'react';

export const contextColor = createContext({color: '#CCD0CF', setColor: ()=>{}});
export const contextDark = createContext({darkMode: false, setDarkMode: ()=>{}});
const Root = () => {
    
    const [color, setColor] = useState('#CCD0CF');
    const [darkMode, setDarkMode] = useState(false);

    return ( 
        <contextColor.Provider value={{color, setColor}}>
            <contextDark.Provider value={{darkMode, setDarkMode}} >
                <div className="h-screen dark:text-pallete-300 lg:grid lg:grid-cols-5">
                    <Navbar />
                    <Body />
                </div>
            </contextDark.Provider>
        </contextColor.Provider>
     );
}

export default Root;
