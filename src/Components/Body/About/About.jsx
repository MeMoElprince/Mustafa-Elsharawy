import { useEffect } from "react";

const skillCategories = [
    {
        label: "Backend",
        skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "Microservices", "WebSockets"]
    },
    {
        label: "Databases",
        skills: ["PostgreSQL", "MongoDB", "Redis", "TypeORM", "Mongoose"]
    },
    {
        label: "DevOps & Tools",
        skills: ["Docker", "CI/CD", "Git", "Linux", "Nginx", "Postman"]
    },
    {
        label: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "C++", "C"]
    },
    {
        label: "Frontend",
        skills: ["React", "Tailwind CSS", "HTML", "CSS"]
    },
];

const About = ({ prev }) => {
    useEffect(() => {
        prev(2);
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-6 py-16 w-full flex flex-col gap-14">

            <section>
                <h2 className="text-3xl font-bold dark:text-pallete-500 text-pallete2-500 mb-6">
                    About <span className="dark:text-pallete-400 text-pallete2-400">Me</span>
                </h2>
                <div className="flex flex-col gap-4">
                    <p className="dark:text-pallete-600 text-pallete2-600 text-base leading-relaxed">
                        Backend-focused Software Engineer with deep expertise in{" "}
                        <span className="dark:text-pallete-500 text-pallete2-500 font-semibold">Node.js, NestJS, PostgreSQL, and MongoDB</span>,
                        passionate about building robust, scalable, and maintainable backend systems. I specialize in microservices
                        architecture, Docker-based deployments, and asynchronous communication using message queues, with
                        hands-on experience delivering features that serve real business needs.
                    </p>
                    <p className="dark:text-pallete-600 text-pallete2-600 text-base leading-relaxed">
                        With a strong foundation in competitive programming, DevOps (CI/CD pipelines, cloud deployments),
                        and problem-solving, I bring both technical depth and product-thinking — ensuring every service I build
                        is efficient, secure, and aligned with business goals.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold dark:text-pallete-500 text-pallete2-500 mb-8">
                    Technical <span className="dark:text-pallete-400 text-pallete2-400">Skills</span>
                </h2>
                <div className="flex flex-col gap-6">
                    {skillCategories.map(cat => (
                        <div key={cat.label}>
                            <h3 className="text-xs font-mono uppercase tracking-widest dark:text-pallete-400 text-pallete2-400 mb-3">
                                {cat.label}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-md text-sm font-medium dark:bg-pallete-200 bg-pallete2-200 dark:text-pallete-500 text-pallete2-500 border dark:border-pallete-300 border-pallete2-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold dark:text-pallete-500 text-pallete2-500 mb-6">
                    <span className="dark:text-pallete-400 text-pallete2-400">Education</span>
                </h2>
                <div className="dark:bg-pallete-200 bg-pallete2-200 rounded-xl p-6 border dark:border-pallete-300 border-pallete2-300">
                    <div className="flex items-start gap-4">
                        <div className="text-2xl mt-0.5">🎓</div>
                        <div>
                            <h3 className="text-lg font-bold dark:text-pallete-500 text-pallete2-500">
                                Bachelor's in Computer Science
                            </h3>
                            <p className="dark:text-pallete-400 text-pallete2-400 font-semibold mt-1 text-sm">
                                GPA: 3.42 / 4.00
                            </p>
                            <p className="dark:text-pallete-600 text-pallete2-600 text-sm mt-0.5">
                                Ismailia, Egypt
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold dark:text-pallete-500 text-pallete2-500 mb-6">
                    Competitive <span className="dark:text-pallete-400 text-pallete2-400">Programming</span>
                </h2>
                <div className="dark:bg-pallete-200 bg-pallete2-200 rounded-xl p-6 border dark:border-pallete-300 border-pallete2-300">
                    <p className="dark:text-pallete-600 text-pallete2-600 text-base leading-relaxed mb-4">
                        Active competitive programmer with strong algorithmic problem-solving skills. Demonstrated success
                        on multiple platforms, including involvement with the <span className="dark:text-pallete-500 text-pallete2-500 font-medium">ICPC Suez Canal Community</span>.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {['LeetCode', 'Codeforces', 'CodeChef'].map(p => (
                            <span
                                key={p}
                                className="px-3 py-1.5 rounded-md text-sm font-medium dark:bg-pallete-300 bg-pallete2-300 dark:text-pallete-400 text-pallete2-400"
                            >
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
