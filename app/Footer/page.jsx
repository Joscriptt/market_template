"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  PiTwitterLogoThin,
  PiInstagramLogoThin,
  PiFacebookLogoThin,
  PiArrowRight,
} from "react-icons/pi";

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
    x: 5,
    transition: {
      duration: 0.2,
    },
  },
};

let productLink = [
  { title: "Templates" },
  { title: "Mockups" },
  { title: "Graphics" },
];
let aboutLink = [{ title: "Magazine" }, { title: "About us" }];
let SupportLink = [{ title: "Support" }, { title: "Contact" }];
let legalLink = [{ title: "Privacy Policy" }, { title: "Terms & Conditions" }];

let Icons = [
  { name: <PiTwitterLogoThin /> },
  { name: <PiInstagramLogoThin /> },
  { name: <PiFacebookLogoThin /> },
];

function Footerpage() {
  return (
    <div className="mt-72 relative p-8">
      <div className="flex shadow-md border border-neutral-800/25 rounded-lg justify-center h-80  mt-14">
        <div className="">
          <h1 className="text-3xl mt-4 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r dark:from-white from-[#383127] to-[#90867D] dark:to-gray-500 ">
            Join the newsletter
          </h1>
          <p className="text-[#83868A] text-lg my-6 font-InterRegular">
            Get new products, articles and updates right into your inbox
          </p>
          <form className="mt-9 ">
            <div className="flex flex-col md:flex-row  items-center justify-between dark:bg-[#161616]  p-1 px-3 rounded-xl border border-neutral-700/40">
              <input
                className="h-full py-2.5 w-full text-base border-none pl-3 rounded-xl bg-transparent focus:border-none placeholder:text-neutral-600 outline-none "
                type="text"
                placeholder="Your email"
              />
              <button className="h-fit md:w-fit mt-2 md:mt-0 lg:mt-0 w-full px-3 py-1.5 rounded-lg dark:bg-[#414242]/40 bg-black text-white  font-InterMedium ">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" lg:px-28 md:px-12 w-full mt-8 ">
        <div className="dark:bg-[#161616] gap-x-3 rounded-md  dark:border-neutral-700/40 border-t md:flex justify-center items-center pt-9">
          <p className="text-sm font-InterRegular shrink-0 ">
            Huge thank you to the Supply Family team for letting me use their
            assets. 💛
          </p>
          <motion.button
            variants={hoverVariant}
            whileHover="hover"
            initial="initial"
            className=" flex mt-2 md:mt-0 lg:mt-0 justify-center items-center gap-x-1 "
          >
            <span className="text-sm font-InterRegular shrink-0 ">
              visit my store
            </span>
            <motion.span variants={iconVariant}>
              <PiArrowRight className="dark:text-white text-sm" />
            </motion.span>
          </motion.button>
        </div>
        <div className="border border-neutral-700/25 mb-10 max-w-7xl mx-auto mt-10 w-full" />
        <h1 className="text-xl lg:hidden md:block  font-InterBold uppercase">
          JoScript
        </h1>

        <div className="grid lg:grid-cols-5 space-y-9 md:space-y-0 lg:space-y-0 md:grid-cols-2  mt-11 md:mt-11 lg:mt-0 ">
          <h1 className="text-xl hidden  lg:block font-InterBold uppercase">
            JoScript
          </h1>

          <ul>
            <h1 className="font-InterBlack">Products</h1>
            <li className="flex flex-col space-y-3 mt-3">
              {productLink.map((each) => (
                <span
                  key={each.title}
                  className="dark:text-neutral-500  cursor-pointer  hover:text-neutral-500 dark:hover:text-neutral-200 transition-all ease-in duration-200"
                >
                  {each.title}
                </span>
              ))}
            </li>
          </ul>
          <ul>
            <h1 className="font-InterBlack">About</h1>

            <li className="flex flex-col space-y-3 mt-3">
              {aboutLink.map((each) => (
                <span
                  key={each.title}
                  className="dark:text-neutral-500  cursor-pointer  hover:text-neutral-500 dark:hover:text-neutral-200 transition-all ease-in duration-200"
                >
                  {each.title}
                </span>
              ))}
            </li>
          </ul>
          <ul>
            <h1 className="font-InterBlack">Help</h1>
            <li className="flex flex-col space-y-3 mt-3">
              {SupportLink.map((each) => (
                <span
                  key={each.title}
                  className="dark:text-neutral-500  cursor-pointer  hover:text-neutral-500 dark:hover:text-neutral-200 transition-all ease-in duration-200"
                >
                  {each.title}
                </span>
              ))}
            </li>
          </ul>
          <ul>
            <h1 className="font-InterBlack">Legal</h1>
            <li className="flex flex-col space-y-3 mt-3">
              {legalLink.map((each) => (
                <span
                  key={each.title}
                  className="dark:text-neutral-500  cursor-pointer  hover:text-neutral-500 dark:hover:text-neutral-200 transition-all ease-in duration-200"
                >
                  {each.title}
                </span>
              ))}
            </li>
          </ul>
        </div>

        <div className="mt-10 pt-5 flex border-t border-zinc-700 justify-between">
          <span className="text-zinc-500">
            © Joscript {new Date().getFullYear()}
          </span>

          <div className="flex   justify-center gap-x-6 ">
            {Icons.map((each) => (
              <div
                key={each.name}
                className="hover:text-neutral-100 cursor-pointer transition-all ease-in text-xl duration-200  text-neutral-500"
              >
                {each.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footerpage;
