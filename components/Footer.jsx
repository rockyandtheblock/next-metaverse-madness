"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Modal from "./reusable/Modal";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [modalShown, setModalShown] = useState(false);

  return (
    <>
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="footer-gradient" />
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <h4 className="font-bold md:text-[64px] text-[44px] text-white">
              Dive Deeper into AI
            </h4>
            <button
              type="button"
              className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
              onClick={() => setModalShown(true)}
            >
              <img
                src="/headset.svg"
                alt="headset"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">
                Join the Hackathon
              </span>
            </button>
          </div>

          <div className="flex flex-col">
            <div className="mb-[50px] h-[2px] bg-white opacity-10" />

            <div className="flex items-center justify-between flex-wrap gap-4">
              <h4 className="font-extrabold text-[24px] text-white">HackGPT</h4>
              <p className="font-normal text-[14px] text-white opacity-50">
                Copyright © 2023 HackGPT. All rights reserved.
              </p>

              <div className="flex gap-4">
                {socials.map((social) => (
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
      <Modal
        title="Join the hackathon"
        open={modalShown}
        setOpen={setModalShown}
      >
        <p>Place your content here.</p>
        <Link
          href="https://"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-2xl text-white"
        >
          Link 1
        </Link>
        <Link
          href="https://"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-2xl text-white"
        >
          Link 2
        </Link>
        <Link
          href="https://"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-2xl text-white"
        >
          Link 3
        </Link>
        <button
          className="flex items-center h-fit py-4 px-6 bg-gray-300 rounded-2xl text-black"
          onClick={() => setModalShown(false)}
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default Footer;
