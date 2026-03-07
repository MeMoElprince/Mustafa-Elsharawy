import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const contactLinks = [
    {
        icon: <BsLinkedin size={22} />,
        label: "LinkedIn",
        value: "mustafa-elsharawy",
        href: "https://www.linkedin.com/in/mustafa-elsharawy-98420a216/",
    },
    {
        icon: <BsGithub size={22} />,
        label: "GitHub",
        value: "MeMoElprince",
        href: "https://github.com/MeMoElprince",
    },
    {
        icon: <HiLocationMarker size={22} />,
        label: "Location",
        value: "Cairo, Egypt",
        href: null,
    },
];

const Contact = () => {
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
                        Get In <span className="dark:text-pallete-400 text-pallete2-400">Touch</span>
                    </h2>
                    <div className="mt-3 w-12 h-0.5 dark:bg-pallete-400 bg-pallete2-400 rounded-full" />
                    <p className="dark:text-pallete-600 text-pallete2-600 text-base mt-4 max-w-xl">
                        Always open to interesting conversations about backend engineering, AI systems,
                        exciting collaborations, or new opportunities.
                    </p>
                </motion.div>

                {/* Status card */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45 }}
                    className="dark:bg-pallete-200 bg-pallete2-200 rounded-2xl p-6 border dark:border-pallete-300 border-pallete2-300 mb-8"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                        <span className="text-sm font-semibold dark:text-pallete-500 text-pallete2-500">
                            Software Engineer @ Projecx · Co-Founder @ Votechx
                        </span>
                    </div>
                    <p className="text-sm dark:text-pallete-600 text-pallete2-600 leading-relaxed">
                        Building backend systems and AI-powered products. Feel free to reach out — whether it's
                        a project idea, a collaboration, or just a chat about tech.
                    </p>
                </motion.div>

                {/* Contact links grid */}
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {contactLinks.map((link, i) =>
                        link.href ? (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="flex flex-col items-center gap-3 p-6 dark:bg-pallete-200 bg-pallete2-200 rounded-2xl border dark:border-pallete-300 border-pallete2-300 dark:hover:border-pallete-400 hover:border-pallete2-400 group transition-all hover:-translate-y-0.5"
                            >
                                <div className="dark:text-pallete-400 text-pallete2-400 group-hover:scale-110 transition-transform">
                                    {link.icon}
                                </div>
                                <div className="text-center">
                                    <div className="text-xs dark:text-pallete-600 text-pallete2-600 uppercase tracking-wider mb-0.5">
                                        {link.label}
                                    </div>
                                    <div className="text-sm font-medium dark:text-pallete-500 text-pallete2-500">
                                        {link.value}
                                    </div>
                                </div>
                                <svg className="w-3.5 h-3.5 dark:text-pallete-600 text-pallete2-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </motion.a>
                        ) : (
                            <motion.div
                                key={link.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="flex flex-col items-center gap-3 p-6 dark:bg-pallete-200 bg-pallete2-200 rounded-2xl border dark:border-pallete-300 border-pallete2-300"
                            >
                                <div className="dark:text-pallete-400 text-pallete2-400">
                                    {link.icon}
                                </div>
                                <div className="text-center">
                                    <div className="text-xs dark:text-pallete-600 text-pallete2-600 uppercase tracking-wider mb-0.5">
                                        {link.label}
                                    </div>
                                    <div className="text-sm font-medium dark:text-pallete-500 text-pallete2-500">
                                        {link.value}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    )}
                </div>

                {/* Resume CTA */}
                <motion.a
                    href="https://drive.google.com/file/d/1PG_s0akDh3H1hT3J3u2Q8CjTiKN6W55w/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    className="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed dark:border-pallete-400/40 border-pallete2-400/40 dark:text-pallete-400 text-pallete2-400 dark:hover:border-pallete-400 hover:border-pallete2-400 dark:hover:bg-pallete-400/5 hover:bg-pallete2-400/5 transition-all text-sm font-medium"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                </motion.a>

            </div>
        </div>
    );
};

export default Contact;
