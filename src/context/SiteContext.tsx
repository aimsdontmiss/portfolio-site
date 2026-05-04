import { createContext } from 'react';
import type {ProjectCardProps, SiteContextType} from "@/utils/types";
import irlImg from "@/assets/irlballers_screenshot.png";
import rtdImg from "@/assets/reedtodigest_screenshot.png";
import bjImg from "@/assets/bjGame_screenshot.png";

const SiteContext = createContext<SiteContextType | null>(null);

export default SiteContext;

export const SiteProvider = ({children}: {children: React.ReactNode}) => {

    const siteLinks: { label: string, href: string }[] = [
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/#projects' },
        { label: 'Contact', href: '/contact' },
    ]

    const projects: ProjectCardProps[] = [
        {
            title: 'reedtodigest.com',
            description: 'Full-stack e-commerce bookstore built with Django and React. Includes JWT authentication and Stripe payments, with a REST API backend for managing products and orders.',
            image: rtdImg,
            link: 'https://reedtodigest.com'
        },
        {
            title: 'irlballers.live',
            description: 'Real-time NBA content platform built with Django and React. Uses Celery-driven background workers to continuously refresh and sync stats, focusing on scalable, distributed data processing.',
            image: irlImg,
            link: 'https://irlballers.live'
        },
        {
            title: 'Blackjack Game',
            description: 'Visit my GitHub account to explore some fun projects and simulations',
            image: bjImg,
            link: 'https://github.com/aimsdontmiss'},
    ]

    const contextData = {
        siteLinks,
        projects,
    }

    return (
        <SiteContext.Provider value={{contextData}}>
            {children}
        </SiteContext.Provider>
    )
}

