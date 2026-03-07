import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Mode from './Mode';

const SECTIONS = ['home', 'about', 'experience', 'projects', 'contact'];

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
        window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 64,
            behavior: 'smooth',
        });
    }
};

const Navbar = () => {
    const [active, setActive] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            const scrollPos = window.scrollY + 120;
            let current = 'home';
            SECTIONS.forEach(id => {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos) current = id;
            });
            setActive(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (id) => {
        scrollTo(id);
        setMenuOpen(false);
    };

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
                ? 'dark:bg-pallete-200/95 bg-pallete2-200/95 backdrop-blur-md border-b dark:border-pallete-300 border-pallete2-300'
                : 'dark:bg-pallete-100/80 bg-pallete2-100/80 backdrop-blur-sm'
        }`}>
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <button
                    onClick={() => handleNav('home')}
                    className="font-bold text-xl dark:text-pallete-400 text-pallete2-400 tracking-tight hover:opacity-80 transition-opacity"
                >
                    MeMo
                </button>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => handleNav(item.id)}
                            className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                active === item.id
                                    ? 'dark:text-pallete-400 text-pallete2-400'
                                    : 'dark:text-pallete-600 text-pallete2-600 dark:hover:text-pallete-500 hover:text-pallete2-500'
                            }`}
                        >
                            {item.label}
                            {active === item.id && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 dark:bg-pallete-400 bg-pallete2-400 rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1PG_s0akDh3H1hT3J3u2Q8CjTiKN6W55w/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 px-4 py-1.5 rounded-md text-sm font-medium border dark:border-pallete-400 border-pallete2-400 dark:text-pallete-400 text-pallete2-400 dark:hover:bg-pallete-300 hover:bg-pallete2-300 transition-colors"
                    >
                        Resume
                    </a>
                    <div className="ml-1">
                        <Mode layoutName="navMode" />
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex md:hidden items-center gap-2">
                    <Mode layoutName="navModeM" />
                    <button
                        onClick={() => setMenuOpen(p => !p)}
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

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden overflow-hidden dark:bg-pallete-200 bg-pallete2-200 border-t dark:border-pallete-300 border-pallete2-300"
                    >
                        <div className="px-6 py-3 flex flex-col gap-1">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNav(item.id)}
                                    className={`px-3 py-2.5 rounded-md text-sm font-medium text-left transition-colors ${
                                        active === item.id
                                            ? 'dark:text-pallete-400 text-pallete2-400 dark:bg-pallete-300 bg-pallete2-300'
                                            : 'dark:text-pallete-500 text-pallete2-500 dark:hover:bg-pallete-300 hover:bg-pallete2-300'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <a
                                href="https://drive.google.com/file/d/1PG_s0akDh3H1hT3J3u2Q8CjTiKN6W55w/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMenuOpen(false)}
                                className="px-3 py-2.5 rounded-md text-sm font-medium dark:text-pallete-400 text-pallete2-400 text-left"
                            >
                                Resume ↗
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
