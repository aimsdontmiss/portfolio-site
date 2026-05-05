// import React from 'react';
import '../App.css'
import '/src/assets/hero-bg.jpeg'
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import ProjectCard from "@/components/cards/ProjectCard";
import { useContext } from "react";
import SiteContext from "@/context/SiteContext";
import type { ProjectCardProps } from "@/utils/types";
import { Link } from "react-router-dom";
import SkillsList from "@/components/sect/SkillsList";
import {Separator} from "@/components/ui/separator";


const HomePage = () => {
    const context = useContext(SiteContext);

    if ( !context ) {
        throw new Error("Must be used inside provider");
    }

    const { contextData } = context;
    const projects: ProjectCardProps[] = contextData.projects;

    return (
        <>
            <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 lg:px-12 py-10">
                <div className="max-w-4xl w-full space-y-8 justify-evenly">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full xs:text-xs text-sm md:text-md text-blue-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <p>Available for opportunities</p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Software Developer
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        Full-Stack Specialist
                    </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
                        Building modern web applications with expertise in full-stack development and network engineering.
                        Combining software craftsmanship with deep infrastructure knowledge.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link to="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center gap-2">
                            Get In Touch
                            <ArrowUpRightIcon className="w-4 h-4" />
                        </Link>
                        <Link to="/#projects" className="px-8 py-3 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors">
                            View Projects
                        </Link>
                    </div>

                </div>
            </section>

            <Separator className="my-20" />

            <div className="flex-1 gap-8 m-auto">
                <SkillsList />
            </div>

            <Separator className="my-20" />

            <div id="projects" className="justify-center w-full pb-16 space-y-8">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-1">Portfolio Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-14 mx-3">

                    {
                        projects.map(({ title, description, image, link }: ProjectCardProps, index: number) => (
                            <div className="flex flex-col items-center" key={index}>
                                <ProjectCard key={index}
                                             title={title}
                                             description={description}
                                             image={image}
                                             link={link} />
                            </div>

                        ))
                    }
                </div>
            </div>
            {/*<Separator className="mb-0 mt-20 w-screen p-0 mx-0" />*/}
        </>
    );
};

export default HomePage;