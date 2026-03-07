const ProjectCard = ({ img, title, description, tech, live, repo }) => {
    return (
        <div className="dark:bg-pallete-200 bg-pallete2-200 rounded-2xl overflow-hidden border dark:border-pallete-300 border-pallete2-300 flex flex-col group dark:hover:border-pallete-400/60 hover:border-pallete2-400/60 transition-all duration-300 hover:shadow-xl dark:hover:shadow-pallete-400/5 hover:shadow-pallete2-400/5 hover:-translate-y-1">
            {/* Orange accent top bar */}
            <div className="h-0.5 dark:bg-pallete-400 bg-pallete2-400 opacity-70 group-hover:opacity-100 transition-opacity" />

            {/* Image */}
            {img && (
                <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        src={img}
                        alt={title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t dark:from-pallete-200/60 from-pallete2-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 gap-3">
                        {live && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="px-4 py-1.5 rounded-lg text-xs font-semibold dark:bg-pallete-400 bg-pallete2-400 dark:text-pallete-100 text-white hover:opacity-90 transition-opacity"
                            >
                                Live Demo ↗
                            </a>
                        )}
                        {repo && (
                            <a
                                href={repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="px-4 py-1.5 rounded-lg text-xs font-semibold dark:bg-pallete-300 bg-pallete2-300 dark:text-pallete-500 text-pallete2-500 hover:opacity-90 transition-opacity"
                            >
                                Source Code
                            </a>
                        )}
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold dark:text-pallete-500 text-pallete2-500 leading-snug">
                        {title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                        {live && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-pallete-600 text-pallete2-600 dark:hover:text-pallete-400 hover:text-pallete2-400 transition-colors"
                                title="Live Demo"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                        {repo && (
                            <a
                                href={repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-pallete-600 text-pallete2-600 dark:hover:text-pallete-400 hover:text-pallete2-400 transition-colors"
                                title="Source Code"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>

                <p className="dark:text-pallete-600 text-pallete2-600 text-xs leading-relaxed flex-1">
                    {description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                    {tech && tech.map(t => (
                        <span
                            key={t}
                            className="px-2 py-0.5 rounded text-xs font-medium dark:bg-pallete-300 bg-pallete2-300 dark:text-pallete-400 text-pallete2-400"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
