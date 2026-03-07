import { useContext } from 'react';
import { contextDark } from '../Root';
import { MdLightMode as Sun, MdDarkMode as Moon } from "react-icons/md";

const Mode = ({ layoutName }) => {
    const { darkMode, setDarkMode } = useContext(contextDark);

    const toggle = () => {
        if (darkMode) {
            setDarkMode(false);
            document.getElementById('Application').classList.remove('dark');
        } else {
            setDarkMode(true);
            document.getElementById('Application').classList.add('dark');
        }
    };

    return (
        <button
            onClick={toggle}
            className="p-2 rounded-md dark:text-pallete-400 text-pallete2-400 dark:hover:bg-pallete-300 hover:bg-pallete2-300 transition-colors duration-200"
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}

export default Mode;
