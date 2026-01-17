import { useEffect, useRef, useState } from "react";
import { AiFillMail } from "react-icons/ai";

function ContactCard() {
    const cardRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setShow(true);
            },
            { threshold: 0.4 }
        );

        if (cardRef.current) observer.observe(cardRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex justify-center my-32 px-4">
            <div
                ref={cardRef}
                className="w-full max-w-3xl h-80  dark:bg-gradient-to-b from-pink-400 to-purple-800 rounded-3xl shadow-2xl flex flex-col items-center justify-center">
                <h2 className={`text-2xl md:text-4xl font-semibold mb-6 text-black dark:text-white transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    Let’s Connect
                </h2>


                <a
                    href="https://www.linkedin.com/in/shristi-badoni-07747a283"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500
                                          text-white px-8 py-3 rounded-xl font-semibold
                                            transition-transform duration-300 hover:scale-105">
                    Contact Me
                </a>
                <div className="mt-2">
                    <p>OR</p>
                </div>
                <div>
                    <p>badonishristi3@gmail.com</p>
                </div>
                <div className="text-3xl flex justify-center gap-16 py-3 text-white-600">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=badonishristi3@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center
               text-white px-4 py-2 rounded-xl font-semibold
               transition-transform duration-300 hover:scale-105"
                    >
                        <AiFillMail />
                    </a>
                </div>

            </div>
        </div>
    );
}

export default ContactCard;
