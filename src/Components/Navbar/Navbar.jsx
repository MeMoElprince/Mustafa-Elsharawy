import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Items from './Items';
import Mode from './Mode';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 dark:bg-pallete-200/95 bg-pallete2-200/95 backdrop-blur-md border-b dark:border-pallete-300 border-pallete2-300">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <NavLink to="/" className="font-bold text-xl dark:text-pallete-400 text-pallete2-400 tracking-tight">
                    MeMo
                </NavLink>

                <div className="hidden md:flex items-center gap-1">
                    <Items />
                    <div className="ml-2">
                        <Mode layoutName="navMode" />
                    </div>
                </div>

                <div className="flex md:hidden items-center gap-2">
                    <Mode layoutName="navModeM" />
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="p-2 rounded-md dark:text-pallete-500 text-pallete2-500 dark:hover:bg-pallete-300 hover:bg-pallete2-300 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                            {menuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            }
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden overflow-hidden dark:bg-pallete-200 bg-pallete2-200 border-t dark:border-pallete-300 border-pallete2-300"
                    >
                        <div className="px-6 py-4" onClick={() => setMenuOpen(false)}>
                            <Items mobile />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
