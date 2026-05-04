// export type SiteLink = {
//     label: string;
//     href: string;
// };
//
// export type NavMobileProps = {
//     closeMenu: () => void;
// };
//
// export type SiteContextType = {
//     contextData: {
//         siteLinks: { label: string; href: string }[];
//     };
// };

export type SiteLink = {
    label: string;
    href: string;
};


export type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
}

export type NavMobileProps = {
    closeMenu: () => void;
};

export type SiteContextType = {
    contextData: {
        siteLinks: SiteLink[];
        projects: ProjectCardProps[];
    };
};
