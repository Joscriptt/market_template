"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PiArrowRightLight } from "react-icons/pi";
import { motion } from "framer-motion";

import { v4 } from "uuid";
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

let template = [
  {
    img: "/img/img2.jpg",
    randID: a.split("-").at(),
    title: "CyberFolio",
    price: parseInt(35),
    company: "Framer",
  },
  {
    img: "/img/imgg1.png",
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

const itemVariants = {
  closed: {
    opacity: 0,
    x: 100,
  },
  open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

let checkTile = (title) => {
  let shortener = title.substring(0, 19);

  return shortener + "...";
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

function Templatepage() {
  let path = usePathname();
  let getpathname = path.split("/").at(-1);

  const [isMouted, setIsMouted] = useState(false);

  useEffect(() => {
    setIsMouted(true);
  }, []);

  if (!isMouted) {
    return null;
  }

  return (
    <div>
      <div className="flex  pageHeader  w-full justify-center items-center  ">
        <div className="pt-20">
          <div className="flex items-center gap-x-5 justify-center">
            <Link href={"/"}>
              <p className="text-neutral-400 hover:text-neutral-200 transition-all ease-in duration-200">
                Home
              </p>
            </Link>

            <PiArrowRightLight className="text-neutral-400" />
            <p className="capitalize flex items-center gap-x-2 py-1 px-2  rounded-md shadow-md dark:bg-[#121212]  text-white ">
              {getpathname}
            </p>
          </div>

          <h1 className="text-4xl lg:text-6xl text-center font-InterBold text-[#F2F2F2] mt-5">
            {getpathname.charAt(0).toUpperCase() +
              getpathname.substring(1, getpathname.length)}
          </h1>
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
            template.map((each) => (
              <motion.div
                variants={itemVariants}
                key={each.price}
                className="group  h-[20rem] sm:h-[28rem]  md:h-[20rem]  w-full relative cursor-pointer  overflow-hidden hover:shadow-md rounded-lg border dark:border-zinc-800/60 border-zinc-300  "
              >
                <Link href={`/products/${each.title}`}>
                  <div className="h-full w-full ">
                    <Image
                      width={900}
                      height={900}
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

export default Templatepage;
