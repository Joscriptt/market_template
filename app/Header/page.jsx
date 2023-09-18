"use client";

import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import Link from "next/link";
import { useTheme } from "next-themes";

import {
  PiTwitterLogoThin,
  PiInstagramLogoThin,
  PiGithubLogoLight,
} from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import Image from "next/image";

// export const generalLinks = [
//   {
//     href: "/",
//     label: "Inicio",
//     Icon: <PiHouseThin />,
//   },
//   {
//     href: "/about",
//     label: "About",
//     Icon: <GoPerson />,
//   },

//   {
//     href: "/project",
//     label: "project",
//     Icon: <HiOutlineCode />,
//   },
//   {
//     href: "https://github.com/Joscriptt",
//     label: "GitHub",
//     target: "_blank",
//     Icon: <PiGithubLogoThin />,
//   },
//   {
//     href: "https://twitter.com/Joenaldo",
//     label: "GitHub",
//     target: "_blank",
//     Icon: <PiTwitterLogoThin />,
//   },
//   {
//     href: "/experience",
//     label: "experience",
//     Icon: <SiStackblitz />,
//   },
// ];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const ButtonVariant = {
  closed: {
    height: "4rem",
    transition: { duration: 0.1 },
  },

  open: {
    height: "25rem",
    transition: { when: "beforeChildren", duration: 0.1 },
  },
};

let textvariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const links = [
  { name: "Discover", href: "/" },
  { name: "Templates", href: "/templates" },
  { name: "Mockups", href: "/Mockups" },
  { name: "Graphics", href: "/graphics" },
];
const bootonLinks = [
  { name: "Magazine", href: "/magazine" },
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];

let Icons = [
  { name: <PiTwitterLogoThin />, href: "https://twitter.com/Joenaldo" },
  { name: <PiInstagramLogoThin />, href: "https://instagram.com/Joscriptt " },
  { name: <PiGithubLogoLight />, href: "https://github.com/Joscriptt" },
];

function Headpage() {
  const [open, cycleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    cycleOpen(!open);
  };
  return (
    <>
      <div>
        <AnimatePresence>
          <motion.header
            key="parent"
            variants={ButtonVariant}
            initial="closed"
            animate={open ? "open" : "closed"}
            exit={{
              height: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className={twMerge(
              "dark:bg-[#1C1C1C] bg-white w-full z-50  lg:px-28 md:px-5 border-neutral-700/30 border-b fixed top-0 "
            )}
          >
            <div className="flex items-center  justify-between px-3 pt-5 ">
              <Link href={"/"}>
                <h1 className="uppercase font-InterBold text-xl">Joscript</h1>
              </Link>
              <Switch checked={checked} setChecked={setChecked} />

              <button
                onClick={handleClick}
                className="flex lg:hidden  flex-col mt-2 "
              >
                <span
                  className={`bg-[#83868A] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                  className={`bg-[#83868A] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    } `}
                ></span>
                <span
                  className={`bg-[#83868A] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
              </button>

              <div className="lg:flex gap-x-1 hidden">
                {links.map(({ name, href }, index) => {
                  // you can use pathname if u want  to make the clicked link to have the background black. am just using hover in this tutorial
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      className="flex relative  scale-100 px-4 text-neutral-400 hover:text-neutral-200 transition-all ease-in duration-200 flex-col font-InterRegular font-medium  text-sm"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="highlight"
                          className="bg-[#181818]  h-8 border border-neutral-700/40  -top-[5px] absolute inset-0 -z-[1] rounded-lg"
                        ></motion.span>
                      )}
                      <Link href={href}>{name}</Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="lg:flex  hidden justify-center gap-x-6 ">
                {Icons.map((each) => (
                  <div
                    key={each}
                    className="hover:text-neutral-100 cursor-pointer transition-all ease-in text-xl duration-200  text-neutral-500"
                  >
                    {each.name}
                  </div>
                ))}
              </div>
            </div>

            {open && (
              <motion.div
                className="p-6 "
                initial={{ height: 0 }}
                animate={{
                  height: 300,
                }}
                exit={{
                  height: 0,
                  transition: { delay: 0.1, duration: 0.1 },
                }}
              >
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}
                >
                  {links.map(({ name, href }) => (
                    <motion.a
                      className="flex flex-col font-InterRegular leading-10 font-medium  text-lg"
                      key={name}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                    >
                      <Link href={href}>{name}</Link>
                    </motion.a>
                  ))}

                  <div className="mt-6">
                    {bootonLinks.map((link) => (
                      <Link key={link.name} href={link.href}>
                        <span className="ml-0  mx-7 gap-x-5 text-sm font-InterRegular hover:text-neutral-100 transition-all ease-in duration-200  text-neutral-500">
                          {link.name}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="flex  justify-center gap-x-11 mt-16 ">
                    {Icons.map((each) => (
                      <div
                        key={each.name}
                        className="hover:text-neutral-100 cursor-pointer transition-all ease-in duration-200  text-neutral-500"
                      >
                        {each.name}
                      </div>
                    ))}
                  </div>
                </motion.div>
                <div className="cursor-pointer" onClick={() => cycleOpen(open)}>
                  <IoMdClose />
                </div>
              </motion.div>
            )}
          </motion.header>
        </AnimatePresence>

        <ThemeToggleNav />
      </div>
    </>
  );
}

export default Headpage;

const Switch = ({ checked, setChecked }) => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  let toggleTheme = (e) => {
    setChecked(e.target.checked);
    setTheme(otherTheme);
  };
  return (
    <form className="flex space-x-4  antialiased items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          "h-7  px-1  flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[60px] relative cursor-pointer transition duration-200",
          checked ? "bg-cyan-500" : "bg-neutral-800 border-slate-500"
        )}
      >
        <motion.div
          initial={{
            width: "20px",
            x: checked ? 0 : 32,
          }}
          animate={{
            height: ["20px", "10px", "20px"],
            width: ["20px", "30px", "20px", "20px"],
            x: checked ? 32 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          key={String(checked)}
          className={twMerge(
            "h-[20px] block rounded-full bg-white shadow-md z-10"
          )}
        ></motion.div>
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleTheme}
          className="hidden"
          id="checkbox"
        />
      </label>

      {checked ? (
        <Image
          width={10}
          height={10}
          className="w-7 object-contain"
          src="/img/moon.png"
          alt=""
        />
      ) : (
        <Image
          width={10}
          height={10}
          className="w-7 object-contain"
          src="/img/sun.png"
          alt=""
        />
      )}
      {/* ✨ */}
    </form>
  );
};

export function ThemeToggleNav({ className, rel, mouseX, ...props }) {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <></>;
}
