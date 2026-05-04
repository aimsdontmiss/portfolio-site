import { Link } from "react-router-dom";
import {useContext} from "react";
import SiteContext from "@/context/SiteContext";
import type { SiteLink, NavMobileProps } from "@/utils/types";

const NavMobile = ({ closeMenu }: NavMobileProps) => {
    const context = useContext(SiteContext);
    if ( !context ) {
        throw new Error("Must be used inside provider");
    }

    const { contextData } = context;
    const siteLinks: SiteLink[] = contextData.siteLinks;

    return (
        <div className="flex flex-col gap-3">
            {siteLinks.map((link, index) => (
                <Link
                    key={index}
                    to={link.href}
                    onClick={closeMenu}
                    className="rounded-md p-2 text-[#d6d3b1]  hover:text-orange-300"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default NavMobile;