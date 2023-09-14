"use client";

import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section id="home" className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .6 }}
                className="text-lg tracking-wide text-textGreen">
                Hi, my name is
            </motion.h3>

            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .7 }}
                className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">Dušan Aleksić.
                <span className="text-textDark mt-2 lgl:mt-4">I build things for the web.</span>
            </motion.h1>

            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .8 }}
                className="text-base md:max-w-[650px] text-textDark font-medium" style={{ opacity: "1", transform: "none" }}>
                I am a web developer with 5 years of experience in Frontend Development. I have a strong foundation in front-end and back-end development
                and am skilled in creating user-friendly and responsive web applications, E-Commerce shops using React and newest technologies.
                
            </motion.p>

            <a href="https://github.com/dulee19" target="_blank">
                <motion.button
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .9 }}
                    className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
                    Check out my projects!
                </motion.button>
            </a>
        </section>
    )
}

export default Banner