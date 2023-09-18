"use client";

import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

import CountdownTimer from "@/app/CountdownTimer";
import Topic from "@/app/Topic/page";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { PiArrowRightLight } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

let x = v4();
let y = v4();
let z = v4();
let a = v4();
let b = v4();
let c = v4();
let e = v4();
let f = v4();
let g = v4();

let products = [
  {
    img: "/img/rooms.webp",
    randID: x.split("-").at(),
    title: "ipad pro 05 standard mackup",
    price: parseInt(22),
    company: "Photoshop",
  },
  {
    img: "/img/img4.jpg",
    randID: y.split("-").at(),
    title: "DahsFolio",
    price: parseInt(75),
    company: "Framer",
  },
  {
    img: "/img/imgg4.png",
    randID: z.split("-").at(),
    title: "Distortion Collection 02",
    price: parseInt(19),
    company: "Tailwind",
  },
];
let template = [
  {
    img: "/img/img3.webp",
    randID: a.split("-").at(),
    title: "CyberFolio",
    price: parseInt(35),
    company: "Framer",
  },
  {
    img: "/img/img8.png",
    randID: b.split("-").at(),
    title: "Future Folio",
    price: parseInt(49),
    company: "Framer",
  },
  {
    img: "/img/imgg6.png",
    randID: c.split("-").at(),
    title: "Anomaly",
    price: "Free",
    company: "Framer",
  },
];

let mockups = [
  {
    img: "/img/img1.png",
    randID: e.split("-").at(),
    title: "MacBook Pro 08 Standard Mockup",
    price: parseInt(30),
    company: "Illustrator",
  },
  {
    img: "/img/img2.jpg",
    randID: f.split("-").at(),
    title: "Iphone 14 Pro Standard Mockup",
    price: parseInt(19),
    company: "Photoshop",
  },
  {
    img: "/img/img3.jpg",
    randID: g.split("-").at(),
    title: "Wall Sign 01 Standard Mockup",
    price: parseInt(19),

    company: "Framer",
  },
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

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

function Mainpage() {
  let { resolvedTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [isMouted, setIsMouted] = useState(false);

  // This will stop hydration warning
  useEffect(() => {
    setIsMouted(true);
  }, []);

  if (!isMouted) {
    return null;
  }

  let checkTile = (title) => {
    let shortener = title.substring(0, 19);

    return shortener + "...";
  };

  return (
    <div className="">
      <div className="flex  dark:pageHeader h-[28rem]  w-full justify-center items-center  ">
        <div className="pt-20 flex gap-x-5">
          <h1 className="text-3xl mt-4 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r dark:from-white from-[#383127] to-[#90867D] dark:to-neutral-700 text-center ">
            E-Commerce Powerhouse <br /> Made by Joscript
          </h1>

          {otherTheme === "dark" ? (
            <Image
              src={"/img/seashrk.png"}
              width={100}
              height={100}
              className="object-contain"
              alt="mama"
            />
          ) : (
            <Image
              className="object-contain"
              src={"/img/goose.png"}
              width={100}
              height={100}
              alt="mama"
            />
          )}
        </div>
      </div>
      <div className="dark:bg-[#121212] px-7 p-4  mt-10">
        <Topic title="Latest Drops" />

        <div className="my-10">
          <motion.div
            initial="closed"
            animate="open"
            variants={sideVariants}
            className=" grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-10 "
          >
            {!products ? (
              <p className="text-white">Loading</p>
            ) : (
              products.map((each, i) => (
                <motion.div
                  variants={itemVariants}
                  key={each.price}
                  className="group  h-[20rem] sm:h-[28rem]  md:h-[20rem]  w-full relative cursor-pointer  overflow-hidden hover:shadow-md rounded-lg border dark:border-zinc-800/60 border-zinc-300  "
                >
                  <Link href={`/products/${each.title}`}>
                    <div className="h-full w-full ">
                      <Image
                        width={800}
                        height={800}
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

        <div>
          <div className="flex items-center justify-between mt-14">
            <Topic title="Mockups" />
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
              {!template ? (
                <p className="text-white">Loading</p>
              ) : (
                template.map((each, i) => (
                  <motion.div
                    variants={itemVariants}
                    key={each.price}
                    className="group  h-[20rem] sm:h-[28rem]  md:h-[20rem]  w-full relative cursor-pointer  overflow-hidden hover:shadow-md rounded-lg border dark:border-zinc-800/60 border-zinc-300  "
                  >
                    <Link href={`/products/${each.title}`}>
                      <div className="h-full w-full ">
                        <Image
                          width={800}
                          height={800}
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

        {/* Expiring time aka out of stock time */}
        <div>
          <div className="mt-24 dark:bg-neutral-800 shadow-lg border border-neutral-800/20 rounded-md p-4 lg:py-9 ">
            <div className=" lg:flex  flex flex-col md:flex-row items-center text-center md:text-left md:flex md:justify-between lg:justify-between lg:items-center">
              <div>
                <h2 className="text-xl font-InterMedium pt-2 md:pt-0">
                  Launch Sales
                </h2>
                <p className="text-zinc-500 text-xs lg:text-base mt-4 lg:mt-0 ">
                  Get 25% off with the code "Joscript20230" for a limited time
                </p>
              </div>

              <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </div>
          </div>

          <div className="flex items-center justify-between mt-14">
            <Topic title="Tempates" />
            <div className="flex items-center gap-x-2 py-1 px-2  rounded-md shadow-md dark:bg-[#121212]  shrink-0 ">
              <p className="text-xs">View All</p>
              <PiArrowRightLight />
            </div>
          </div>

          {/* Mockups */}

          <div className="my-10">
            <motion.div
              initial="closed"
              animate="open"
              variants={sideVariants}
              className=" grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-10 "
            >
              {!mockups ? (
                <p className="text-white">Loading</p>
              ) : (
                mockups.map((each, i) => (
                  <motion.div
                    variants={itemVariants}
                    key={each.price}
                    className="group  h-[20rem] sm:h-[28rem]  md:h-[20rem]  w-full relative cursor-pointer  overflow-hidden hover:shadow-md rounded-lg border dark:border-zinc-800/60 border-zinc-300  "
                  >
                    <Link href={`/products/${each.title}`}>
                      <div className="h-full w-full ">
                        <Image
                          width={800}
                          height={800}
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

          {/* Graphics */}
          <div className="flex items-center justify-between mt-14">
            <Topic title="Graphics" />
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
                          width={800}
                          height={800}
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

          {/* horizonatal line */}

          <div className="my-20">
            <div className="w-full border border-neutral-800" />
          </div>

          {/*  Meg / Magazine */}

          <div className="flex items-center justify-between mt-14">
            <Topic title="From The Meg" />
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
                          width={800}
                          height={800}
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
      </div>
    </div>
  );
}

export default Mainpage;
