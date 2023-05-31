'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import Modal from './reusable/Modal';

import { socials } from '../constants';
import Image from 'next/image';
import headset from '../assets/headset.svg';
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
          <div className="flex items-center justify-center md:justify-between flex-wrap gap-5">
            <h4 className="font-bold md:text-[64px] sm:text-[35px] text-[30px] text-white text-center md:text-left">
              Dive Deeper into AI
            </h4>
            <button
              type="button"
              className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
              onClick={() => setModalShown(true)}
            >
              <Image
                src={headset}
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
                  <Image
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
        title="Join the Hackathon"
        open={modalShown}
        setOpen={setModalShown}
      >
        <p>What role do you want to play?</p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfhu58vbbjB9PN4FlRyIVQXI9go2hHCaCa2WoMFkt_w48E53w/viewform/"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-full text-[12px] md:text-base lg:text-lg text-white"
          target="_blank"
        >
          Developer / Designer / Researcher
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdsLM14zCAEw_Rg3BWjdtPI1EcbtDDZ8M3wrnehLlAKEF6SUQ/viewform"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-full text-[12px] md:text-base lg:text-lg text-white"
          target="_blank"
        >
          Founder / Subject Matter Expert / Mentor
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdsLM14zCAEw_Rg3BWjdtPI1EcbtDDZ8M3wrnehLlAKEF6SUQ/viewform"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-full text-[12px] md:text-base lg:text-lg text-white"
          target="_blank"
        >
          Venture Capital / Investor / Sponsor
        </Link>
        <Link
          href="https://hackgpt-hackathon.glide.page/"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-full text-[12px] md:text-base lg:text-lg text-white"
          target="_blank"
        >
          Matchmaker App
        </Link>
        <button
          className="flex items-center h-fit py-4 px-6 bg-gray-300 rounded-full text-[12px] md:text-base lg:text-lg text-black"
          type="button"
          onClick={() => setModalShown(false)}
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default Footer;
