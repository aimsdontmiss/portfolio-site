import {CodeIcon, DatabaseIcon, GearSixIcon, NetworkIcon} from "@phosphor-icons/react";

const SkillsList = () => {
    return (
        <>
            <div className="container mx-auto px-4 mb-20">
                <h1 className="block text-3xl font-bold pb-16 md:text-4xl text-center">Skills</h1>
                <div className="grid md:grid-cols-2 gap-8">

                    <div className="group">
                        <div className="flex items-start gap-6 p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-500">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <CodeIcon weight="duotone" className="w-7 h-7 text-blue-400" />
                            </div>
                            <div className="h-full">
                                <h3 className="text-2xl font-semibold mb-3 text-white">Web Development</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Specializing in modern web technologies including React, TypeScript, and Node.js.
                                    Experienced in building scalable, performant full-stack applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="flex items-start gap-6 p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-500">
                            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <DatabaseIcon weight="duotone" className="w-7 h-7 text-blue-400" />
                            </div>
                            <div className="h-full">
                                <h3 className="text-2xl font-semibold mb-3 text-white">Data Science</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Experienced in data analysis, model-driven problem solving, and turning
                                    complex data into practical insights for reliable applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="flex items-start gap-6 p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-500">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <NetworkIcon weight="duotone" className="w-7 h-7 text-cyan-400" />
                            </div>
                            <div className="h-full">
                                <h3 className="text-2xl font-semibold mb-3 text-white">Cloud Networking</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Specializing in modern cloud technologies including AWS, Linode, and GCP.
                                    Experienced in designing and implementing scalable, performant cloud architectures.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="flex items-start gap-6 p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-500">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <GearSixIcon weight="duotone" className="w-7 h-7 text-blue-400" />
                            </div>
                            <div className="h-full">
                                <h3 className="text-2xl font-semibold mb-3 text-white">Devops</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Specializing in modern web technologies including React, TypeScript, and Node.js.
                                    Experienced in building scalable, performant full-stack applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SkillsList;