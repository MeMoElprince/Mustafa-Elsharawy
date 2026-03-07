import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = ({ prev }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [buttonName, setButtonName] = useState("Send Message");
    const [disabled, setDisabled] = useState(false);

    const handleSend = () => {
        if (name === "" || message === "") {
            alert("Please fill all fields");
            return;
        }
        setButtonName("Sending...");
        setDisabled(true);
        fetch('https://my-website-email-backend.onrender.com/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, message })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    alert("Message sent successfully!");
                } else {
                    alert("Failed to send message. Please try again.");
                }
            })
            .catch(err => {
                alert(err.message);
            })
            .finally(() => {
                setButtonName("Send Message");
                setDisabled(false);
            });
    };

    useEffect(() => {
        prev(4);
    }, []);

    const icon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/927/927667.png",
        iconSize: [38, 38]
    });

    return (
        <div className="max-w-5xl mx-auto px-6 py-16 w-full">
            <div className="mb-12">
                <h2 className="text-3xl font-bold dark:text-pallete-500 text-pallete2-500 mb-4">
                    Get In <span className="dark:text-pallete-400 text-pallete2-400">Touch</span>
                </h2>
                <p className="dark:text-pallete-600 text-pallete2-600 text-base">
                    Have a project in mind or want to connect? I'd love to hear from you.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="dark:bg-pallete-200 bg-pallete2-200 rounded-xl p-6 border dark:border-pallete-300 border-pallete2-300 flex flex-col gap-4">
                    <h3 className="font-semibold dark:text-pallete-500 text-pallete2-500">Send a message</h3>
                    <input
                        onChange={e => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Your name"
                        className="dark:bg-pallete-300 bg-pallete2-100 rounded-lg px-4 py-3 outline-none dark:text-pallete-500 text-pallete2-500 dark:placeholder-pallete-600 placeholder-pallete2-600 border dark:border-pallete-300 border-pallete2-300 focus:dark:border-pallete-400 focus:border-pallete2-400 transition-colors text-sm"
                    />
                    <textarea
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        placeholder="Your message"
                        rows={8}
                        className="dark:bg-pallete-300 bg-pallete2-100 rounded-lg px-4 py-3 outline-none dark:text-pallete-500 text-pallete2-500 dark:placeholder-pallete-600 placeholder-pallete2-600 resize-none border dark:border-pallete-300 border-pallete2-300 focus:dark:border-pallete-400 focus:border-pallete2-400 transition-colors text-sm"
                    />
                    <button
                        onClick={handleSend}
                        disabled={disabled}
                        className="py-3 px-6 rounded-lg dark:bg-pallete-400 bg-pallete2-400 dark:text-pallete-100 text-white font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity text-sm"
                    >
                        {buttonName}
                    </button>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="dark:bg-pallete-200 bg-pallete2-200 rounded-xl overflow-hidden border dark:border-pallete-300 border-pallete2-300" style={{ height: '280px' }}>
                        <MapContainer
                            className="h-full w-full"
                            center={[31.146915, 33.834611]}
                            zoom={13}
                            maxZoom={17}
                            minZoom={2}
                            scrollWheelZoom={false}
                        >
                            <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
                            <Marker position={[31.146915, 33.834611]} icon={icon}>
                                <Popup>Ismailia, Egypt</Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    <div className="dark:bg-pallete-200 bg-pallete2-200 rounded-xl p-6 border dark:border-pallete-300 border-pallete2-300">
                        <h3 className="font-semibold dark:text-pallete-500 text-pallete2-500 mb-4 text-sm">
                            Connect with me
                        </h3>
                        <div className="flex flex-col gap-3">
                            <Link
                                to="https://www.linkedin.com/in/mustafa-elsharawy-98420a216/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 dark:text-pallete-600 text-pallete2-600 dark:hover:text-pallete-400 hover:text-pallete2-400 transition-colors"
                            >
                                <BsLinkedin size={18} />
                                <span className="text-sm">linkedin.com/in/mustafa-elsharawy</span>
                            </Link>
                            <Link
                                to="https://github.com/MeMoElprince"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 dark:text-pallete-600 text-pallete2-600 dark:hover:text-pallete-400 hover:text-pallete2-400 transition-colors"
                            >
                                <BsGithub size={18} />
                                <span className="text-sm">github.com/MeMoElprince</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
