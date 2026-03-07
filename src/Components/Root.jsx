import Navbar from './Navbar/Navbar';
import Body from './Body/Body';
import Footer from './Navbar/Footer';
import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const contextColor = createContext({ color: '#F6B17A', setColor: () => {} });
export const contextDark = createContext({ darkMode: true, setDarkMode: () => {} });

const Root = () => {
    const [color, setColor] = useState('#F6B17A');
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.getElementById('Application').classList.add('dark');
    }, []);

    return (
        <contextColor.Provider value={{ color, setColor }}>
            <contextDark.Provider value={{ darkMode, setDarkMode }}>
                <div className="flex flex-col min-h-screen dark:bg-pallete-100 bg-pallete2-100 dark:text-pallete-500 text-pallete2-500">
                    <Navbar />
                    <Body />
                    <Footer />
                </div>
            </contextDark.Provider>
        </contextColor.Provider>
    );
}

export default Root;
