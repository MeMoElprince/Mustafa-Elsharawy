import { useState } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const handleSend = () => {
        if (name === "" || message === "") {
            alert("Please fill all fields");
            return;
        }
        setStatus("sending");
        fetch('https://my-website-email-backend.onrender.com/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, message })
        })
            .then(res => res.json())
            .then(data => {
                setStatus(data.status === "success" ? "sent" : "error");
                if (data.status === "success") {
                    setName("");
                    setMessage("");
                }
            })
            .catch(() => setStatus("error"))
            .finally(() => setTimeout(() => setStatus("idle"), 4000));
    };

    const contactLinks = [
        {
            icon: <BsLinkedin size={20} />,
            label: "LinkedIn",
            value: "mustafa-elsharawy",
            href: "https://www.linkedin.com/in/mustafa-elsharawy-98420a216/",
        },
        {
            icon: <BsGithub size={20} />,
            label: "GitHub",
            value: "MeMoElprince",
            href: "https://github.com/MeMoElprince",
        },
        {
            icon: <HiLocationMarker size={20} />,
            label: "Location",
            value: "Ismailia, Egypt",
            href: null,
        },
    ];

    return (
        <div className="dark:bg-pallete-100 bg-pallete2-100">
            {/* Top accent strip */}
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
                        Whether you have a project in mind, a collaboration idea, or just want to say hi —
                        my inbox is always open.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left — info */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col gap-8"
                    >
                        {/* Open to message */}
                        <div className="dark:bg-pallete-200 bg-pallete2-200 rounded-2xl p-6 border dark:border-pallete-300 border-pallete2-300">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                                <span className="text-sm font-semibold dark:text-pallete-500 text-pallete2-500">
                                    Software Engineer @ Projecx · Co-Founder @ Votechx
                                </span>
                            </div>
                            <p className="text-sm dark:text-pallete-600 text-pallete2-600 leading-relaxed">
                                Always open to interesting conversations about backend engineering, AI systems,
                                exciting collaborations, or new opportunities. Feel free to reach out.
                            </p>
                        </div>

                        {/* Contact links */}
                        <div className="flex flex-col gap-3">
                            {contactLinks.map(link =>
                                link.href ? (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 dark:bg-pallete-200 bg-pallete2-200 rounded-xl border dark:border-pallete-300 border-pallete2-300 dark:hover:border-pallete-400 hover:border-pallete2-400 group transition-colors"
                                    >
                                        <div className="dark:text-pallete-400 text-pallete2-400 group-hover:scale-110 transition-transform">
                                            {link.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs dark:text-pallete-600 text-pallete2-600 uppercase tracking-wider">
                                                {link.label}
                                            </div>
                                            <div className="text-sm font-medium dark:text-pallete-500 text-pallete2-500">
                                                {link.value}
                                            </div>
                                        </div>
                                        <svg className="w-4 h-4 dark:text-pallete-600 text-pallete2-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                ) : (
                                    <div
                                        key={link.label}
                                        className="flex items-center gap-4 p-4 dark:bg-pallete-200 bg-pallete2-200 rounded-xl border dark:border-pallete-300 border-pallete2-300"
                                    >
                                        <div className="dark:text-pallete-400 text-pallete2-400">
                                            {link.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs dark:text-pallete-600 text-pallete2-600 uppercase tracking-wider">
                                                {link.label}
                                            </div>
                                            <div className="text-sm font-medium dark:text-pallete-500 text-pallete2-500">
                                                {link.value}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Resume CTA */}
                        <a
                            href="https://drive.google.com/file/d/1PG_s0akDh3H1hT3J3u2Q8CjTiKN6W55w/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed dark:border-pallete-400/40 border-pallete2-400/40 dark:text-pallete-400 text-pallete2-400 dark:hover:border-pallete-400 hover:border-pallete2-400 dark:hover:bg-pallete-400/5 hover:bg-pallete2-400/5 transition-all text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Right — form */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="dark:bg-pallete-200 bg-pallete2-200 rounded-2xl p-6 md:p-8 border dark:border-pallete-300 border-pallete2-300"
                    >
                        <h3 className="text-lg font-bold dark:text-pallete-500 text-pallete2-500 mb-6">
                            Send a Message
                        </h3>

                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="text-xs font-mono dark:text-pallete-400 text-pallete2-400 uppercase tracking-wider mb-1.5 block">
                                    Your Name
                                </label>
                                <input
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full dark:bg-pallete-300 bg-pallete2-100 rounded-xl px-4 py-3 outline-none dark:text-pallete-500 text-pallete2-500 dark:placeholder-pallete-600 placeholder-pallete2-600 border dark:border-pallete-300 border-pallete2-300 dark:focus:border-pallete-400 focus:border-pallete2-400 transition-colors text-sm"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-mono dark:text-pallete-400 text-pallete2-400 uppercase tracking-wider mb-1.5 block">
                                    Message
                                </label>
                                <textarea
                                    onChange={e => setMessage(e.target.value)}
                                    value={message}
                                    placeholder="Tell me about your project or opportunity..."
                                    rows={7}
                                    className="w-full dark:bg-pallete-300 bg-pallete2-100 rounded-xl px-4 py-3 outline-none dark:text-pallete-500 text-pallete2-500 dark:placeholder-pallete-600 placeholder-pallete2-600 resize-none border dark:border-pallete-300 border-pallete2-300 dark:focus:border-pallete-400 focus:border-pallete2-400 transition-colors text-sm"
                                />
                            </div>

                            <button
                                onClick={handleSend}
                                disabled={status === "sending"}
                                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
                                    status === "sent"
                                        ? "bg-green-500 text-white"
                                        : status === "error"
                                        ? "bg-red-500 text-white"
                                        : "dark:bg-pallete-400 bg-pallete2-400 dark:text-pallete-100 text-white hover:opacity-90 active:scale-[0.98] shadow-lg dark:shadow-pallete-400/20 shadow-pallete2-400/20"
                                } disabled:opacity-60 disabled:cursor-not-allowed`}
                            >
                                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : status === "error" ? "Failed — Try Again" : "Send Message →"}
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
