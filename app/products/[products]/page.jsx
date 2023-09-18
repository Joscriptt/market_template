"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { PiArrowLeftThin } from "react-icons/pi";
import { PiArrowRightLight } from "react-icons/pi";

import Topic from "@/app/Topic/page";

import { v4 } from "uuid";
import Image from "next/image";

let a = v4();
let b = v4();
let c = v4();

// varients for the more to see topics
const itemVariants = {
  closed: {
    opacity: 0,
    x: 100,
  },
  open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      duration: 0.4,
    },
  },
};

const hoverVariant = {
  initial: {
    opacity: 0.7,
  },
  hover: {
    opacity: 1,

    transition: {
      duration: 0.3,
    },
  },
};
const iconVariant = {
  initial: {
    x: 0,
  },
  hover: {
    opacity: 1,
    x: 4,
    transition: {
      duration: 0.2,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

let tags = [{ name: "Mockups" }, { name: "Photoshop" }];

let imag = [
  { name: "/img/imgg5.png" },
  { name: "/img/img3.png" },
  { name: "/img/imgg1.png" },
  { name: "/img/rooms.webp" },
];

let graphics = [
  {
    img: "/img/img5.jpg",
    randID: a.split("-").at(),
    title: "Distortion Collection 03",
    price: parseInt(19),
    company: "Illustrator",
  },
  {
    img: "/img/img6.png",
    randID: b.split("-").at(),
    title: "Transform Collection 01 - Analog",
    price: parseInt(19),
    company: "Photoshop",
  },
  {
    img: "/img/img7.png",
    randID: c.split("-").at(),
    title: "Undertone 03 Gradient Collection",
    price: parseInt(11),

    company: "Framer",
  },
];

let checkTile = (title) => {
  let shortener = title.substring(0, 19);

  return shortener + "...";
};

// If you are using this, make sure you fetch ur data from a database

function Productpage({ params }) {
  // This is to covert our query into readable text
  let encode = params.products;
  let show = decodeURIComponent(encode);

  let [activeIndex, setActiveIndex] = useState(0);

  const [isMouted, setIsMouted] = useState(false);

  // This will stop hydration warning
  useEffect(() => {
    setIsMouted(true);
  }, []);

  if (!isMouted) {
    return null;
  }
  return (
    <div className="mt-28 p-9">
      <div className=" flex flex-col w-full lg:flex-row items-start gap-9">
        <div className="lg:w-[50rem] md:space-y-8 lg:space-y-8 w-full md:order-2  lg:order-1">
          {imag.map((each) => (
            <Image
              key={each.name}
              className="rounded-md"
              src={each.name}
              alt=""
            />
          ))}
        </div>
        <div className="lg:sticky lg:order-2 md:order-1 top-20 w-full">
          <Link href={"/"}>
            <motion.div
              variants={hoverVariant}
              whileHover="hover"
              initial="initial"
              className="flex items-center gap-x-2 py-1 w-fit px-5 pl-0  rounded-md  drop-shadow-md border border-neutral-800/25 shrink-0 "
            >
              <span>
                <PiArrowLeftThin />
              </span>
              <motion.p variants={iconVariant} className="text-base">
                Overview
              </motion.p>
            </motion.div>
          </Link>
          <div>
            <h1 className="text-3xl mt-4 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r dark:from-white from-[#383127] to-[#90867D] dark:to-gray-500 ">
              {show}
            </h1>

            <motion.ul className="flex p-2 pl-0 my-5 rounded-md relative z-[2] w-fit">
              {tags.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.li
                    key={index}
                    onHoverStart={() => setActiveIndex(index)}
                    className="relative w-fit h-8 flex items-center px-5 py-0.1 "
                  >
                    {isActive && (
                      <motion.span
                        className="bg-[#1C1C1C] absolute inset-0 -z-[1] rounded-lg  "
                        layoutId="highlight"
                      ></motion.span>
                    )}
                    <a
                      className="text-[#83868A] text-xs font-InterRegular"
                      href="/#"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>

            <AnimatePresence mode="wait">
              {activeIndex === 0 ? (
                <motion.div
                  key={activeIndex}
                  variants={textVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="dark:text-[#83868A] text-[#383127]"
                >
                  <p className=" font-InterRegular leading-6 text-sm md:max-w-4xl lg:max-w-[31rem]">
                    Show, sell, and write - With {show}, a dashborad-styled
                    portfolio website template built with framer motion, you can
                    present yourself in ideal shape online. This template is
                    perfect for designers, marketers, and developers
                  </p>

                  <h5 className="my-6 font-bold font-InterMedium">
                    Whats's included:
                  </h5>

                  <ul className="pl-4 ">
                    <li className="list-disc">perfect for personal websites</li>
                    <li className="list-disc">
                      light, dark and themed (automatically appearance)
                      available
                    </li>
                    <li className="list-disc">
                      CMS connected blog, products, stacks & case studies
                    </li>
                    <li className="list-disc">
                      beautiful sidebar navigation like dashboard
                    </li>
                    <li className="list-disc">
                      fast and delightful user experience powered by meaningful
                      animation
                    </li>
                  </ul>

                  <div className="mt-11   lg:flex  gap-x-3">
                    <button className="dark:bg-[#f1f1f1] bg-black  px-4 py-2 rounded-md border  text-sm dark:text-black text-white font-InterBold  md:mt-2 mt-4 lg:mt-0  md:w-full w-full ">
                      Buy Now $75
                    </button>
                    <button className="bg-transparent px-4 py-2 rounded-md border border-zinc-800 text-sm font-InterBold  md:mt-2 mt-4 lg:mt-0  md:w-full w-full">
                      View Demo
                    </button>
                  </div>

                  <p className="italic mt-6 max-w-2xl">
                    You will need an account to edit. Also, {show} requires a
                    Pro hosting in my Opinion. Due to the fact, that this is a
                    digital products, i can't give any refunds
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={activeIndex}
                  variants={textVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="dark:text-[#83868A] text-[#383127]"
                >
                  <p className="mt-7 font-InterRegular text-sm max-w-lg">
                    Hight quality iPad Pro with Standard mockup Photoshoot ready
                    for your customer design and much more
                  </p>

                  <h5 className="my-4 font-bold font-InterMedium">
                    Whats's not included:
                  </h5>

                  <ul className="pl-4 text-sm">
                    <li className="list-disc">
                      iPads Pro mockup in two colors - silver & space gray
                    </li>
                    <li className="list-disc">Adjust color for both surface</li>
                    <li className="list-disc">created for Adobe Photoshop</li>
                    <li className="list-disc">Dimentions 5943 x 4400px</li>
                    <li className="list-disc">
                      Download file - 23MB, Zip 1000 x 5500px
                    </li>
                  </ul>

                  <div className="mt-11  lg:flex gap-x-3">
                    <button className="dark:bg-[#f1f1f1] bg-black text-white px-4 py-2 rounded-md border  text-sm text-black font-InterBold  md:mt-2 lg:mt-0 md:w-1/2 w-full">
                      Buy Now $190
                    </button>
                    <button className="bg-transparent px-4 py-2 rounded-md border border-zinc-800 text-sm font-InterBold  md:mt-2 mt-4 lg:mt-0 w-full md:w-1/2">
                      View Demo
                    </button>
                  </div>

                  <p className="italic mt-6 max-w-2xl">
                    You will need an account to edit. Also, {show} requires a
                    Pro hosting in my Opinion. Due to the fact, that this is a
                    digital products, i can't give any refunds
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-32">
        <Topic title="More from this Creator" />
        <div className="flex items-center gap-x-2 py-1 px-2  rounded-md shadow-md dark:bg-[#121212]  shrink-0 ">
          <p className="text-xs">View All</p>
          <PiArrowRightLight />
        </div>
      </div>

      <div className="my-10">
        <motion.div
          initial="closed"
          animate="open"
          variants={sideVariants}
          className=" grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-10 "
        >
          {!graphics ? (
            <p className="text-white">Loading</p>
          ) : (
            graphics.map((each, i) => (
              <motion.div
                variants={itemVariants}
                key={each.price}
                className="group  h-[20rem] sm:h-[28rem]  md:h-[20rem]  w-full relative cursor-pointer  overflow-hidden hover:shadow-md rounded-lg border dark:border-zinc-800/60 border-zinc-300  "
              >
                <Link href={`/products/${each.title}`}>
                  <div className="h-full w-full ">
                    <Image
                      width={700}
                      height={700}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out  group-hover:blur-sm dark:group-hover:opacity-20  "
                      src={each.img}
                      alt=""
                    />
                  </div>
                </Link>

                <div className="absolute inset-0  translate-y-[50%] sm:translate-y-[70%]  md:translate-y-[45%]  px-3 border-t border-zinc-800   transition-all duration-300 group-hover:translate-y-[50%] sm:group-hover:translate-y-[70%] md:group-hover:translate-y-36 lg:group-hover:translate-y-44 lg:translate-y-[76%]  pt-3 ease-in-out dark:bg-[#121212] bg-white ">
                  <div className=" flex justify-between items-center">
                    <h1 className=" text-lg font-InterBold  dark:text-white">
                      {checkTile(each.title)}
                    </h1>
                    <p className=" font-InterBold text-sm duration-300 ">
                      ${each.price}
                    </p>
                  </div>
                  <div className="flex gap-x-3 text-zinc-600 text-xs mt-2">
                    <p>{each.randID}</p>
                    <p>{each.company}</p>
                  </div>

                  <div className="flex md:block lg:flex items-center gap-x-3 mt-5">
                    <button className="dark:bg-[#242424]   py-2 rounded-md border dark:border-zinc-800/60 text-sm font-InterBold md:w-full w-1/2">
                      View Products
                    </button>
                    <button
                      className="dark:bg-[#121212] bg-black px-4 py-2 rounded-md border border-zinc-800 text-sm text-white
                       font-InterBold md:w-full md:mt-2 lg:mt-0 w-1/2"
                    >
                      View Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Productpage;
