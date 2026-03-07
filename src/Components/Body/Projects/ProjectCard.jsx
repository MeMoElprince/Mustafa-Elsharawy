import { Link } from "react-router-dom";

const ProjectCard = ({ img, title, description, tech, live, repo }) => {
    return (
        <div className="dark:bg-pallete-200 bg-pallete2-200 rounded-xl overflow-hidden border dark:border-pallete-300 border-pallete2-300 flex flex-col group dark:hover:border-pallete-400 hover:border-pallete2-400 transition-colors duration-300">
            {img && (
                <div className="aspect-[16/9] overflow-hidden">
                    <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={img}
                        alt={title}
                    />
                </div>
            )}
            <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="text-lg font-bold dark:text-pallete-500 text-pallete2-500">
                    {title}
                </h3>
                <p className="dark:text-pallete-600 text-pallete2-600 text-sm leading-relaxed flex-1">
                    {description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {tech && tech.map(t => (
                        <span
                            key={t}
                            className="px-2 py-1 rounded text-xs font-medium dark:bg-pallete-300 bg-pallete2-300 dark:text-pallete-400 text-pallete2-400"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 pt-1 border-t dark:border-pallete-300 border-pallete2-300">
                    {live && (
                        <Link
                            to={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-semibold dark:text-pallete-400 text-pallete2-400 dark:hover:text-pallete-500 hover:text-pallete2-500 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                        </Link>
                    )}
                    {repo && (
                        <Link
                            to={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium dark:text-pallete-600 text-pallete2-600 dark:hover:text-pallete-500 hover:text-pallete2-500 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            Source Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
