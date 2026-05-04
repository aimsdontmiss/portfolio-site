import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError("All fields are required");
            return;
        }

        setError("");
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            navigate("/");
        }, 2000);



    };

    return (
        <>
            <div className="flex flex-col justify-center">
                <p className="text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Get in touch...
                </p>
                <div className="max-w-fit container border-white bg-amber-50/10 rounded-2xl backdrop-blur-md z-10 mt-16 mx-auto p-20">

                    <div className="flex flex-col items-center gap-4">

                        {submitted && <p className="text-green-500">Message sent!</p>}
                        {error && <p className="text-red-500">{error}</p>}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md gap-y-4">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="p-2 rounded border md:min-w-100 max-w-300"
                                placeholder="Enter your name"
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 rounded border md:min-w-100 max-w-300"
                                placeholder="Enter your email"
                            />

                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="p-2 rounded border md:min-w-100 max-w-300"
                                placeholder="Enter your message"
                                rows={4}
                            />

                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 rounded"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContactPage;