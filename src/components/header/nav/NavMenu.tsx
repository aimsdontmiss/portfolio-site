import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {useContext} from "react";
import SiteContext from "@/context/SiteContext";
import type { SiteLink } from "@/utils/types";
import {Link} from "react-router-dom";

const NavMenu = () => {

    const context = useContext(SiteContext);

    if ( !context ) {
        throw new Error("Must be used inside provider");
    }

    const { contextData } = context;
    const siteLinks: SiteLink[] = contextData.siteLinks;


    return (
        <>
            <NavigationMenu className="max-sm:hidden">
                <NavigationMenuList className="flex gap-2">

                    { siteLinks.map((link, index) => {
                        return (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink asChild className="text-md hover:rounded-sm focus:bg-transparent hover:bg-transparent">
                                    <Link
                                        to={link.href}
                                        className="text-[#d6d3b1]/80 hover:text-amber-500"
                                    >
                                        {link.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );

}


export default NavMenu;