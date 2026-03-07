import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const NotFound = ({ prev }) => {
    useEffect(() => {
        prev(5);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-96 gap-6 text-center px-6 py-16">
            <h1 className="text-8xl font-bold dark:text-pallete-400 text-pallete2-400">404</h1>
            <p className="text-2xl font-semibold dark:text-pallete-500 text-pallete2-500">Page not found</p>
            <p className="dark:text-pallete-600 text-pallete2-600">
                Looks like this page doesn't exist.
            </p>
            <NavLink
                to="/"
                className="px-6 py-3 rounded-lg dark:bg-pallete-400 bg-pallete2-400 dark:text-pallete-100 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
            >
                Go Home
            </NavLink>
        </div>
    );
}

export default NotFound;
