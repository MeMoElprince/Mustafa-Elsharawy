import { motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5 },
};

const focusAreas = [
    {
        icon: "🔌",
        title: "API Design & Development",
        desc: "Building RESTful and event-driven APIs with authentication, validation, rate limiting, and documentation.",
    },
    {
        icon: "🔀",
        title: "Microservices Architecture",
        desc: "Designing distributed systems with clear service boundaries, message queues (RabbitMQ), and fault-tolerant patterns.",
    },
    {
        icon: "🗄️",
        title: "Database Engineering",
        desc: "Modeling data, optimizing queries, and managing PostgreSQL, MongoDB & Redis caching layers.",
    },
    {
        icon: "🚀",
        title: "DevOps & CI/CD",
        desc: "Containerizing services with Docker, building automated pipelines, and deploying to cloud environments.",
    },
];

const skillCategories = [
    {
        label: "Backend",
        skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "Microservices", "WebSockets"],
    },
    {
        label: "Databases",
        skills: ["PostgreSQL", "MongoDB", "Redis", "TypeORM", "Mongoose"],
    },
    {
        label: "DevOps & Tools",
        skills: ["Docker", "CI/CD", "Git", "Linux", "Nginx", "Postman"],
    },
    {
        label: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "C++", "C"],
    },
    {
        label: "Frontend",
        skills: ["React", "Tailwind CSS", "HTML", "CSS"],
    },
];

const SectionTitle = ({ label, accent }) => (
    <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-pallete-500 text-pallete2-500">
            {label}{' '}
            <span className="dark:text-pallete-400 text-pallete2-400">{accent}</span>
        </h2>
        <div className="mt-3 w-12 h-0.5 dark:bg-pallete-400 bg-pallete2-400 rounded-full" />
    </div>
);

const About = () => {
    return (
        <div className="dark:bg-pallete-100 bg-pallete2-100">

            {/* ── WHO I AM ── */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <motion.div {...fadeUp}>
                    <SectionTitle label="About" accent="Me" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col gap-5"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg dark:bg-pallete-300 bg-pallete2-300 w-fit">
                            <span className="text-sm">💻</span>
                            <span className="text-sm font-mono dark:text-pallete-400 text-pallete2-400 font-semibold">
                                Backend Software Engineer
                            </span>
                        </div>
                        <p className="dark:text-pallete-600 text-pallete2-600 text-base leading-relaxed">
                            I'm a backend-focused engineer who loves building the infrastructure that powers modern applications.
                            With a deep interest in scalable systems, I thrive at the intersection of clean code, distributed
                            architecture, and real-world product impact.
                        </p>
                        <p className="dark:text-pallete-600 text-pallete2-600 text-base leading-relaxed">
                            My core expertise lies in the{' '}
                            <span className="dark:text-pallete-500 text-pallete2-500 font-semibold">Node.js ecosystem</span>{' '}
                            — building with NestJS and Express.js, paired with{' '}
                            <span className="dark:text-pallete-500 text-pallete2-500 font-semibold">PostgreSQL and MongoDB</span>{' '}
                            for data persistence. I bring both technical depth and product-thinking to every project.
                        </p>
                        <p className="dark:text-pallete-600 text-pallete2-600 text-base leading-relaxed">
                            A strong background in{' '}
                            <span className="dark:text-pallete-500 text-pallete2-500 font-semibold">competitive programming</span>{' '}
                            sharpened my algorithmic thinking — skills I apply directly to designing efficient, high-performance backend systems.
                        </p>
                    </motion.div>

                    {/* Quick info cards */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-3"
                    >
                        {[
                            { label: "Specialty", value: "Backend Systems & APIs" },
                            { label: "Primary Stack", value: "Node.js · NestJS · PostgreSQL" },
                            { label: "Architecture", value: "Microservices · REST · Event-Driven" },
                            { label: "Education", value: "B.Sc. Computer Science — GPA 3.42/4.00" },
                            { label: "Location", value: "Ismailia, Egypt" },
                            { label: "Status", value: "Open to opportunities" },
                        ].map(item => (
                            <div
                                key={item.label}
                                className="flex items-start gap-4 p-4 dark:bg-pallete-200 bg-pallete2-200 rounded-xl border dark:border-pallete-300 border-pallete2-300"
                            >
                                <span className="text-xs font-mono dark:text-pallete-400 text-pallete2-400 uppercase tracking-wider min-w-[90px] mt-0.5 flex-shrink-0">
                                    {item.label}
                                </span>
                                <span className="dark:text-pallete-500 text-pallete2-500 text-sm font-medium">{item.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* ── WHAT I DO ── */}
            <div className="dark:bg-pallete-200/30 bg-pallete2-200/50 border-y dark:border-pallete-300 border-pallete2-300">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <motion.div {...fadeUp}>
                        <SectionTitle label="What I" accent="Do" />
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {focusAreas.map((area, i) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                                className="dark:bg-pallete-200 bg-pallete2-200 rounded-xl p-5 border dark:border-pallete-300 border-pallete2-300 dark:hover:border-pallete-400 hover:border-pallete2-400 transition-colors cursor-default"
                            >
                                <div className="text-2xl mb-3">{area.icon}</div>
                                <h3 className="font-bold dark:text-pallete-500 text-pallete2-500 mb-2 text-sm leading-snug">
                                    {area.title}
                                </h3>
                                <p className="dark:text-pallete-600 text-pallete2-600 text-xs leading-relaxed">
                                    {area.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── TECHNICAL SKILLS ── */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <motion.div {...fadeUp}>
                    <SectionTitle label="Technical" accent="Skills" />
                </motion.div>

                <div className="flex flex-col gap-7">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.label}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                        >
                            <span className="text-xs font-mono uppercase tracking-widest dark:text-pallete-400 text-pallete2-400 mb-3 block">
                                {cat.label}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-lg text-sm font-medium dark:bg-pallete-200 bg-pallete2-200 dark:text-pallete-500 text-pallete2-500 border dark:border-pallete-300 border-pallete2-300 dark:hover:border-pallete-400 hover:border-pallete2-400 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── EDUCATION + COMPETITIVE PROGRAMMING ── */}
            <div className="dark:bg-pallete-200/30 bg-pallete2-200/50 border-t dark:border-pallete-300 border-pallete2-300">
                <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
                    <motion.div
                        {...fadeUp}
                        className="dark:bg-pallete-200 bg-pallete2-200 rounded-2xl p-7 border dark:border-pallete-300 border-pallete2-300"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <span className="text-3xl">🎓</span>
                            <div>
                                <h3 className="text-base font-bold dark:text-pallete-500 text-pallete2-500">
                                    Bachelor's in Computer Science
                                </h3>
                                <p className="text-sm dark:text-pallete-400 text-pallete2-400 font-semibold mt-0.5">
                                    GPA: 3.42 / 4.00
                                </p>
                                <p className="text-sm dark:text-pallete-600 text-pallete2-600 mt-0.5">Ismailia, Egypt</p>
                            </div>
                        </div>
                        <p className="text-sm dark:text-pallete-600 text-pallete2-600 leading-relaxed">
                            Strong foundation in algorithms, data structures, operating systems, networking, and software engineering principles.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="dark:bg-pallete-200 bg-pallete2-200 rounded-2xl p-7 border dark:border-pallete-300 border-pallete2-300"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <span className="text-3xl">🏆</span>
                            <div>
                                <h3 className="text-base font-bold dark:text-pallete-500 text-pallete2-500">
                                    Competitive Programming
                                </h3>
                                <p className="text-sm dark:text-pallete-400 text-pallete2-400 font-semibold mt-0.5">
                                    ICPC Suez Canal Community
                                </p>
                            </div>
                        </div>
                        <p className="text-sm dark:text-pallete-600 text-pallete2-600 leading-relaxed mb-4">
                            Active competitive programmer with strong algorithmic skills across multiple platforms.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['LeetCode', 'Codeforces', 'CodeChef'].map(p => (
                                <span
                                    key={p}
                                    className="px-3 py-1 rounded-lg text-xs font-medium dark:bg-pallete-300 bg-pallete2-300 dark:text-pallete-400 text-pallete2-400"
                                >
                                    {p}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default About;
