import {Link} from "react-router-dom";
import {
    GithubLogoIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
    FilePdfIcon,
    ArrowSquareOutIcon,
} from "@phosphor-icons/react";

const Footer = () => {
    return (
        <>
            <footer className="pt-16 bg-linear-to-b from-black to-blue-950/80 backdrop-blur-sm pb-2 text-center text-sm text-[#d6d3b1]">
                <div className="mx-auto grid max-w-6xl grid-cols-3 justify-items-center gap-y-4">

                    <div>
                        <h3 className="text-lg border-b-2 mb-2">Quick Links</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="mt-2">
                                <a className="flex flex-row m-auto justify-center items-center gap-1 hover:text-amber-500" href="https://reedtodigest.com">
                                    Reed to Digest
                                    <ArrowSquareOutIcon/>
                                </a>
                            </li>
                            <li className="mt-2">
                                <a className="flex flex-row m-auto justify-center items-center gap-1 hover:text-amber-500" href="https://irlballers.live">
                                    IRL Ballers
                                    <ArrowSquareOutIcon/>
                                </a>
                            </li>
                            <li className="mt-2 hover:text-amber-500"><Link to="/about">About Me</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg border-b-2 mb-2">Hire Me</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="mt-2"><a href="/#download-resume">
                                <div className="flex flex-row items-center align-middle gap-1 hover:text-amber-500">
                                    Download Resume<FilePdfIcon/>
                                </div>
                            </a></li>
                            <li className="mt-2 hover:text-amber-500"><a href="/contact">Contact Me</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg border-b-2 mb-2">Socials</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="mt-2">
                                <a className="flex flex-row m-auto justify-center items-center gap-1 hover:text-amber-500" href="https://www.linkedin.com/in/ahmedduale/">
                                    LinkedIn
                                    <ArrowSquareOutIcon/>
                                </a>
                            </li>
                            <li className="mt-2 hover:text-amber-500">
                                <a className="flex flex-row m-auto justify-center items-center gap-1 hover:text-amber-500" href="https://github.com/aimsdontmiss">
                                    GitHub
                                    <ArrowSquareOutIcon/>
                                </a>
                            </li>
                            <li className="mt-2 hover:text-amber-500">
                                <a className="flex flex-row m-auto justify-center items-center gap-1 hover:text-amber-500" href="https://www.instagram.com/ahmed_duale/">
                                    Instagram
                                    <ArrowSquareOutIcon/>
                                </a>
                            </li>
                        </ul>
                    </div>



                </div>

                <div className="flex gap-6 pt-14 mb-0 flex-row justify-end md:justify-center mx-11">
                    {/* Links to social media badges */}
                    <Link to="https://www.linkedin.com/in/ahmedduale/" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogoIcon className="w-7 h-7 hover:bg-purple-600" />
                    </Link>
                    <Link to="https://github.com/aimsdontmiss" target="_blank" rel="noopener noreferrer">
                        <GithubLogoIcon className="w-7 h-7 hover:bg-purple-600" />
                    </Link>
                    <Link to="/#ig-link" target="_blank" rel="noopener noreferrer">
                        <InstagramLogoIcon className="w-7 h-7 hover:bg-purple-600" />
                    </Link>

                </div>

                <div className="mx-auto mt-5 max-w-6xl px-4">
                    <hr className="mx-auto w-2/3 border-white/20" />
                    <p className="pt-4">&copy; 2026 AHMED DUALE. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;