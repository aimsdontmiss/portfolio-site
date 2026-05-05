// import React from 'react';

import NavBar from "@/components/header/nav/NavBar";

const Header = () => {
    return (
        <>
            {/*<nav className="relative min-h-screen w-full">*/}
                <header className="sticky top-0 z-100 border-b border-white/10
                bg-linear-to-b from-[#0b0b18] to-[#0a0a14] left-0 right-0 sm:pb-6 bg-white/5
                backdrop-blur-md shadow-md shadow-black/30">
                    <NavBar />
                </header>
            {/*</nav>*/}


        </>
    );
};

export default Header;