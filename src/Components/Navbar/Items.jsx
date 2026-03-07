import { NavLink } from 'react-router-dom';

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about-me', label: 'About' },
    { to: '/my-projects', label: 'Projects' },
    { to: 'https://drive.google.com/file/d/1PG_s0akDh3H1hT3J3u2Q8CjTiKN6W55w/view?usp=sharing', label: 'Resume', external: true },
    { to: '/contact-me', label: 'Contact' },
];

const Items = ({ mobile }) => {
    return (
        <ul className={mobile ? "flex flex-col gap-1" : "flex items-center gap-1"}>
            {navItems.map(item => (
                <li key={item.to}>
                    <NavLink
                        to={item.to}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 block
                            ${isActive && !item.external
                                ? 'dark:text-pallete-400 text-pallete2-400 dark:bg-pallete-300 bg-pallete2-300'
                                : 'dark:text-pallete-500 text-pallete2-500 dark:hover:text-pallete-400 hover:text-pallete2-400 dark:hover:bg-pallete-300 hover:bg-pallete2-300'
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

export default Items;
