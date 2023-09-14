import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { githubFinder, mernCommerceShop, realtorNext } from "@/public/assets"
import { TbBrandGithub } from "react-icons/tb"

const Projects = () => {
    return (
        <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
            <SectionTitle title="Some things I have built" titleNo="03" />
            <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    {/* Project - E-Commerce FullStack Shop */}
                    <div className="flex flex-col xl:flex-row gap-6">
                        <a href="https://proshop-2f60.onrender.com/" className="w-full xl:w-1/2 h-auto relative group">
                            <div>
                                <Image
                                    className="w-full h-full object-contain"
                                    alt="E-Commerce FullStack Shop"
                                    src={mernCommerceShop}
                                />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <p className="text-textGreen text-sm tracking-wide">Featured Project</p>
                            <h3 className="text-2xl font-bold">E-Commerce FullStack Shop</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                E-Commerce store. View your products, Add your products in the cart. Create an account and then make the purchase using PayPal.
                            </p>
                            <ul className="xl:w-[500px] flex md:text-sm tracking-wide justify-between xl:gap-3 gap-3 flex-wrap">
                                <li>MongoDB</li>
                                <li>Express.js</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>React Bootstrap</li>
                                <li>Redux</li>
                                <li>OnRender Deployment</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a href="https://github.com/dulee19/fullstack_proshop_v2" className="hover:text-textGreen duration-300" target="_blank">
                                    <TbBrandGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Project - Real Estate */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row-reverse gap-6">
                        <a href="https://realstateapp-cnpa2enth-dulee19.vercel.app/" className="w-full xl:w-1/2 h-auto relative group">
                            <div>
                                <Image
                                    className="w-full h-full object-contain"
                                    alt="Real Estate"
                                    src={realtorNext}
                                />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                            <p className="text-textGreen text-sm tracking-wide">Featured Project</p>
                            <h3 className="text-2xl font-bold">Real Estate Application</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16 ">
                                Real Estate application for renting and buying properties
                            </p>
                            <ul className="flex md:text-sm tracking-wide justify-between xl:gap-7 gap-3 flex-wrap">
                                <li>Next.js</li>
                                <li>ChakraUI</li>
                                <li>RapidAPI</li>
                                <li>Vercel Deployment</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a href="https://github.com/dulee19/real_estate" className="hover:text-textGreen duration-300" target="_blank">
                                    <TbBrandGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project - Github Finder */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">

                    <div className="flex flex-col xl:flex-row gap-6">
                        <a href="https://githubfinder20202.netlify.app/" className="w-full xl:w-1/2 h-auto relative group">
                            <div>
                                <Image
                                    className="w-full h-full object-contain"
                                    alt="Github Finder"
                                    src={githubFinder}
                                />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <p className="text-textGreen text-sm tracking-wide">Featured Project</p>
                            <h3 className="text-2xl font-bold">Github Finder Application</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                Github Finder application for searching github users
                            </p>
                            <ul className="flex md:text-sm tracking-wide justify-between xl:gap-7 gap-3 flex-wrap">
                                <li>React</li>
                                <li>ContextAPI</li>
                                <li>Netlify Deployment</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a href="https://github.com/dulee19/github_finder_react" className="hover:text-textGreen duration-300" target="_blank">
                                    <TbBrandGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects