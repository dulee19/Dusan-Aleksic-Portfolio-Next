"use client";

import { useState, useRef } from "react";
import { logo } from "@/public/assets"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';

const navLinks = [
  {
    title: "Home",
    href: "#home",
    num: "01"
  },
  {
    title: "About",
    href: "#about",
    num: "02"
  },
  {
    title: "Experience",
    href: "#experience",
    num: "03"
  },
  {
    title: "Contact",
    href: "#contact",
    num: "04"
  }
]

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const ref = useRef<string | any>("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setShowMenu(false);
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active')
    });
    e.currentTarget.classList.add('active')
  }

  const handleClick = (e: any) => {
    if(e.target.contains(ref.current)) {
      setShowMenu(false)
    }
  }

  return (
    <header className="bg-bodyColor px-4 text-textLight w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
          <Image src={logo} alt="logo" width={140} height={140} />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-5">
          <ul className="flex gap-5">
            {navLinks.map(link => (
              <Link
                onClick={handleScroll}
                href={link.href}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: .5 }}
                ><span className="text-textGreen">{link.num}.</span> {link.title}</motion.li>
              </Link>
            ))}
          </ul>

          <a href="/assets/Dušan's Resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: .5 }}
              className="px-4 py-2 rounded-md text-textGreen border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>

        <div onClick={() => setShowMenu(prev => !prev)} className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
        </div>
        {
          showMenu && (
            <div
              ref={(node) => (ref.current = node)}
              onClick={handleClick}
              className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            >
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: .1 }}
                className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
              >
                <MdOutlineClose onClick={() => setShowMenu(prev => !prev)} className="text-3xl text-textGreen hover:text-red-500 absolute top-4 right-4 cursor-pointer" />

                <div className="flex flex-col items-center gap-7">
                  <ul className="flex flex-col text-base gap-7">
                    {navLinks.map(link => (
                      <Link
                        onClick={handleScroll}
                        href={link.href}
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                      >
                        <motion.li
                          initial={{ y: -30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: .5 }}
                        ><span className="text-textGreen">{link.num}.</span> {link.title}</motion.li>
                      </Link>
                    ))}
                  </ul>
                  <a href="/assets/Dušan's Resume.pdf" target="_blank">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: .5 }}
                      className="px-4 py-2 rounded-md text-textGreen border border-textGreen hover:bg-hoverColor duration-300"
                    >
                      Resume
                    </motion.button>
                  </a>

                  <div className='flex gap-4'>
                    <a href="https://github.com/dulee19" target="_blank">
                      <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <TbBrandGithub />
                      </span>
                    </a>

                    <a href="linkedin.com/in/dusan-aleksic-b22237211" target="_blank">
                      <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialLinkedin />
                      </span>
                    </a>
                  </div>

                  <div className="flex items-center justify-center w-full">
                    <a href="mailto:adusan53@gmail.com">
                      <p className="tracking-wide text-textGreen">adusan53@gmail.com</p>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        }

      </div>
    </header>
  )
}

export default Navbar