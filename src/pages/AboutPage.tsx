import {
    GithubLogoIcon,
    LinkedinLogoIcon,
    MailboxIcon,
    FilePdfIcon,
} from "@phosphor-icons/react";
import meImg from "@/assets/linkedin-avatar.png"
import {Button} from "@/components/ui/button";


const AboutPage = () => {
    return (
        <>
            <div className="max-w-fit container border-white bg-amber-50/10 rounded-2xl backdrop-blur-md z-10 my-10 mx-auto p-10">
                <div className="grid grid-cols-1 max-w-2xl text-center gap-2 mx-auto my-6">
                    <h3 className="text-xl">Software Developer</h3>
                    <h1 className="text-5xl">Ahmed Duale</h1>
                    <section className="flex flex-col text-lg items-center justify-center gap-4 pt-6 md:py-7 lg:py-10">
                        <p>
                            I’m a developer with a strong interest in system design, data engineering, and high-performance applications.
                            My work focuses on building end-to-end systems—from frontend interfaces in React to backend services
                            and data pipelines. I’m especially interested in problems involving scale, real-time data, and
                            distributed architectures, and I actively explore these through hands-on projects.
                        </p>
                        <p>
                            Beyond development, I also focus on the operational side—deploying and maintaining live
                            applications,
                            managing infrastructure, and ensuring systems run reliably in production. I enjoy taking
                            projects from idea to deployment, working across the full lifecycle from design to
                            delivery.
                        </p>
                    </section>
                    <div>
                        <a href="/resume.pdf" download>
                            <Button className="p-8 text-lg my-4 md:my-2 rounded-full bg-blue-700 hover:bg-blue-950">
                                <div className="flex flex-row items-center align-middle gap-1">
                                    Download Resume
                                    <FilePdfIcon/>
                                </div>
                            </Button>
                        </a>
                    </div>
                    <div className="flex justify-center flex-row gap-6 mt-2 mb-8">
                        {/* Links to social media badges */}
                        <a href="https://www.linkedin.com/in/ahmedduale/" target="_blank" rel="noopener noreferrer">
                            <LinkedinLogoIcon className="w-10 h-10 hover:bg-purple-600 hover:translate-y-1" />
                        </a>
                        <a href="https://github.com/aimsdontmiss" target="_blank" rel="noopener noreferrer">
                            <GithubLogoIcon className="w-10 h-10 hover:bg-purple-600 hover:rotate-y-180" />
                        </a>
                        <a href="/contact" target="_blank" rel="noopener noreferrer">
                            <MailboxIcon className="w-10 h-10 hover:bg-purple-600 hover:translate-y-1 hover:rotate-y-180" />
                        </a>

                    </div>
                    <div className="flex w-77 h-86 m-auto justify-center">
                        <img src={meImg} alt="me" className="rounded-full w-full h-full object-cover" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutPage;