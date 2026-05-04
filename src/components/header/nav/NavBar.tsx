import NavMenu from "@/components/header/nav/NavMenu";
import NavMobile from "@/components/header/nav/NavMobile";
import {useState} from "react";
import {Link} from "react-router-dom";



const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);


    return (
        <>
            <nav id="main-nav" aria-label="Main Navigation">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 h-16 max-md:flex-col gap-y-1">
                    <div className="flex my-auto sm:my-1">
                        <Link to="/" className="flex max-sm:ml-6">
                            <p className="text-2xl mx-auto hover:text-amber-800 text-[#d6d3b1] transition-colors duration-300 my-auto font-semibold tracking-wide">AHMED DUALE</p>
                        </Link>
                        <a id="hamburger" onClick={() => setMobileOpen((prevState) => !prevState)} className="my-auto relative left-26 text-lg text-[#d6d3b1] hover:text-amber-500 transition-colors duration-300 sm:hidden visible">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <NavMenu />
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="sm:hidden border-t border-[#d6d3b1]/20 px-4 py-3">
                        <NavMobile closeMenu={() => setMobileOpen(false)} />
                    </div>
                )}
            </nav>
        </>
    );
};

export default NavBar;