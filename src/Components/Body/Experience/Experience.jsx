import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Software Engineer',
        type: 'Full-Time',
        company: 'Projecx',
        period: 'Feb 2025 – Present',
        current: true,
        bullets: [
            'Designing and building scalable backend services for social media and CRM platforms using NestJS and PostgreSQL.',
            'Built a real-time notifications system integrating Jeebly (delivery), Mamo Pay (payments), and OneSignal (push).',
            'Developed an AI-powered chatbot agent using LangChain and LangGraph, enabling intelligent conversational flows within the platform.',
            'Contributing to backend architecture decisions and delivering production-grade APIs across mobile and web products in an Agile environment.',
        ],
    },
    {
        role: 'Co-Founder & Software Engineer',
        type: 'Co-Founder',
        company: 'Votechx',
        period: 'Feb 2024 – Oct 2025',
        current: false,
        bullets: [
            'Co-founded a software company delivering custom backend systems, APIs, and infrastructure for client projects.',
            'Managed full DevOps stack: VPS deployments, Docker containers, CI/CD pipelines.',
            'Led architecture planning, code reviews, and development standards across all delivered projects.',
        ],
    },
    {
        role: 'Software Engineer',
        type: 'Full-Time',
        company: 'Riskrice',
        period: 'Nov 2024 – Feb 2025',
        current: false,
        bullets: [
            'Built microservices architecture using NestJS, PostgreSQL, and RabbitMQ for async service communication.',
            'Improved performance on high-traffic endpoints using Redis caching.',
            'Deployed reliable production systems with Docker, Nginx, and VPS infrastructure.',
        ],
    },
    {
        role: 'Backend Developer',
        type: 'Full-Time',
        company: 'Osbash',
        period: 'Aug 2024 – Nov 2024',
        current: false,
        bullets: [
            'Built backend services with Node.js, NestJS, and MongoDB supporting mobile and web applications.',
            'Engineered secure video streaming solutions to prevent unauthorized content downloads.',
            'Designed performant, secure APIs covering authentication, authorization, and media delivery.',
        ],
    },
];

const volunteer = {
    role: 'IT Head Volunteer',
    company: 'ICPC – Suez Canal University',
    period: 'Aug 2022 – Jul 2023',
    bullets: [
        'Designed and validated programming problems for the Palestinian Collegiate Programming Contest (PCPC).',
        'Managed live contest infrastructure supporting 200+ participants across events.',
        'Organized 30+ training sessions and contributed to 100+ problems, including the Ramadan Challenge.',
    ],
};

const Experience = () => {
    return (
        <div className="dark:bg-pallete-100 bg-pallete2-100">
            <div className="h-px dark:bg-pallete-300 bg-pallete2-300" />
            <div className="max-w-6xl mx-auto px-6 py-20">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold dark:text-pallete-500 text-pallete2-500">
                        Work <span className="dark:text-pallete-400 text-pallete2-400">Experience</span>
                    </h2>
                    <div className="mt-3 w-12 h-0.5 dark:bg-pallete-400 bg-pallete2-400 rounded-full" />
                    <p className="dark:text-pallete-600 text-pallete2-600 text-base mt-4 max-w-xl">
                        From first lines of production code to leading architecture decisions — building systems that scale.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-5 top-5 bottom-8 w-px dark:bg-pallete-300 bg-pallete2-300 hidden sm:block" />

                    <div className="flex flex-col gap-5">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company + exp.role}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                                className="flex gap-4 sm:gap-6"
                            >
                                {/* Dot */}
                                <div className="flex-shrink-0">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold z-10 relative ${
                                        exp.current
                                            ? 'dark:bg-pallete-400/15 bg-pallete2-400/15 dark:text-pallete-400 text-pallete2-400 border-2 dark:border-pallete-400 border-pallete2-400'
                                            : 'dark:bg-pallete-300 bg-pallete2-300 dark:text-pallete-500 text-pallete2-500 border dark:border-pallete-300 border-pallete2-300'
                                    }`}>
                                        {exp.company[0]}
                                    </div>
                                </div>

                                {/* Card */}
                                <div className={`flex-1 rounded-2xl p-5 border transition-colors ${
                                    exp.current
                                        ? 'dark:bg-pallete-200 bg-pallete2-200 dark:border-pallete-400/30 border-pallete2-400/30'
                                        : 'dark:bg-pallete-200 bg-pallete2-200 dark:border-pallete-300 border-pallete2-300'
                                }`}>
                                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-3">
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="text-base font-bold dark:text-pallete-500 text-pallete2-500">
                                                    {exp.company}
                                                </h3>
                                                {exp.current && (
                                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm dark:text-pallete-400 text-pallete2-400 font-medium mt-0.5">
                                                {exp.role}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="px-2 py-0.5 rounded text-xs dark:bg-pallete-300 bg-pallete2-300 dark:text-pallete-400 text-pallete2-400">
                                                {exp.type}
                                            </span>
                                            <span className="text-xs font-mono dark:text-pallete-600 text-pallete2-600 whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="flex flex-col gap-1.5">
                                        {exp.bullets.map((b, bi) => (
                                            <li key={bi} className="flex gap-2 text-xs dark:text-pallete-600 text-pallete2-600 leading-relaxed">
                                                <span className="dark:text-pallete-400 text-pallete2-400 mt-0.5 flex-shrink-0">▸</span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Volunteer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="mt-12"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="h-px flex-1 dark:bg-pallete-300 bg-pallete2-300" />
                        <span className="text-xs font-mono uppercase tracking-widest dark:text-pallete-600 text-pallete2-600">
                            Volunteer
                        </span>
                        <div className="h-px flex-1 dark:bg-pallete-300 bg-pallete2-300" />
                    </div>
                    <div className="dark:bg-pallete-200 bg-pallete2-200 rounded-2xl p-5 border dark:border-pallete-300 border-pallete2-300">
                        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-3">
                            <div>
                                <h3 className="text-base font-bold dark:text-pallete-500 text-pallete2-500">
                                    {volunteer.company}
                                </h3>
                                <p className="text-sm dark:text-pallete-400 text-pallete2-400 font-medium mt-0.5">
                                    {volunteer.role}
                                </p>
                            </div>
                            <span className="text-xs font-mono dark:text-pallete-600 text-pallete2-600 whitespace-nowrap">
                                {volunteer.period}
                            </span>
                        </div>
                        <ul className="flex flex-col gap-1.5">
                            {volunteer.bullets.map((b, bi) => (
                                <li key={bi} className="flex gap-2 text-xs dark:text-pallete-600 text-pallete2-600 leading-relaxed">
                                    <span className="dark:text-pallete-400 text-pallete2-400 mt-0.5 flex-shrink-0">▸</span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Experience;
