import Image from "next/image";
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from 'react-icons/ai';
import { profileImg } from "@/public/assets";

const technologies = [
    {
        links: [
            {
                icon: <AiFillThunderbolt />,
                name: "JavaScript"
            },
            {
                icon: <AiFillThunderbolt />,
                name: "React"
            },
            {
                icon: <AiFillThunderbolt />,
                name: "TypeScript"
            },
            {
                icon: <AiFillThunderbolt />,
                name: "MongoDB"
            },
        ]
    },
    {
        links: [
            {
                icon: <AiFillThunderbolt />,
                name: "Next.js"
            },
            {
                icon: <AiFillThunderbolt />,
                name: "Node.js"
            },
            {
                icon: <AiFillThunderbolt />,
                name: "Express.js"
            },
            {
                icon: <AiFillThunderbolt />,
                name: "Tailwindcss"
            },
        ]
    },
]

const About = () => {
    return (
        <section id="about" className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
            <SectionTitle title="About Me" titleNo="01" />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>
                        I am a enthusiastic and engaged with the work that I perform everyday tasks and very much enjoy to
                        develop my skills in Information Technologies, and to gain experience and professional success.
                        My interest in web development started back in 2018 when I decided to try to build E-Commerce Shop. Front
                        End Developer with five years of experience working with JavaScript, HTML/CSS, React and Node.js to
                        deliver exceptional customer experiences. Adept at contributing to a highly collaborative work
                        environment, and determining customer satisfaction. I like teamwork and take pleasure in finding
                        elegant solutions to complex problems. Experience in building and maintaining responsive websites in
                        E-Commerce Shop, B2B portals. Proficient in <span className="text-textGreen">HTML, CSS, React, Node.js, PHP, Laravel, JavaScript.</span> Passionate about usability and possess working knowledge.
                    </p>
                    <p>Here are a few technologies I have been working with recently:</p>
                    <ul className="max-w-[450px] grid grid-cols-2 gap-2 mt-6">
                       {technologies.map((tech, index) => (
                            <li key={index}>
                                {tech.links.map((link, index) => (
                                    <span className="flex items-center gap-2 my-1" key={index}>
                                        <span className="text-textGreen">{link.icon}</span> {
                                        link.name}
                                    </span>
                                ))}
                            </li>
                       ))}
                    </ul>
                </div>

                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image src={profileImg} alt="my-profile" className="rounded-lg h-full object-cover" />
                            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </div>
                    <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
                </div>
            </div>
        </section>
    )
}

export default About