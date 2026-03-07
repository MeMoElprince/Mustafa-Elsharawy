import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="dark:bg-pallete-200 bg-pallete2-200 border-t dark:border-pallete-300 border-pallete2-300 py-6">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="dark:text-pallete-600 text-pallete2-600 text-sm">
                    &copy; 2026 Mustafa Hazem Elsharawy
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/mustafa-elsharawy-98420a216/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-pallete-600 text-pallete2-600 dark:hover:text-pallete-400 hover:text-pallete2-400 transition-colors"
                    >
                        <BsLinkedin size={18} />
                    </a>
                    <a
                        href="https://github.com/MeMoElprince"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-pallete-600 text-pallete2-600 dark:hover:text-pallete-400 hover:text-pallete2-400 transition-colors"
                    >
                        <BsGithub size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
