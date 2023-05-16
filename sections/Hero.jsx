'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import Modal from '../components/reusable/Modal';

const Hero = () => {
  const [modalShown, setModalShown] = useState(false);

  return (
    <>
      <section className={`hero-banner ${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className="flex justify-center items-center flex-col relative z-10">
            <motion.h1
              variants={textVariant(1.1)}
              className={styles.heroSubHeading}
            >
              The Syndicate presents
            </motion.h1>
            <motion.h1
              variants={textVariant(1.1)}
              className={styles.heroHeading}
            >
              HackGPT
            </motion.h1>
            <motion.h1
              variants={textVariant(1.1)}
              className={styles.heroHeading}
            >
              The Global
            </motion.h1>
            <motion.div
              variants={textVariant(1.2)}
              className="flex flex-row justify-center items-center"
            >
              <h2 className={styles.heroAiText}>AI</h2>
              <h2 className={styles.heroHeading}>Hackathon</h2>
            </motion.div>
            <motion.div
              variants={textVariant(1.2)}
              className="absolute w-full bottom-0 z-10 flex flex-row justify-center items-center text-center"
            >
              <h3 className={styles.heroDescription}>
                Catalyzing Fortune 2000 Enterprises' Digital Transformation
              </h3>
            </motion.div>

            <motion.div
              variants={textVariant(1.2)}
              className="w-full bottom-0 z-10 flex flex-col justify-center items-center text-center mt-4 md:mt-5 lg:mt-6 gap-8"
            >
              <button
                type="button"
                className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] w-[260px]"
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
              <Link
                type="button"
                className="flex items-center w-[260px] h-fit py-4 px-6 bg-purple-700 rounded-[32px] gap-[12px]"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeBH4YgEnwskU7Ixq8L3kjziMnhf4Bj3sX6THFw6YH7CrFaqQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h9v2H5v14h14v-9h2v9q0 .825-.588 1.413T19 21H5Zm2-4h2v-7H7v7Zm4 0h2V7h-2v10Zm4 0h2v-4h-2v4Zm2-8V7h-2V5h2V3h2v2h2v2h-2v2h-2Zm-5 3Z"
                  />
                </svg>
                <span className="font-normal text-[16px] text-white">
                  Submit Your Solution
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="relative w-full md:-mt-[80px] sm:-mt-[10px] mt-0"
          >
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

            <img
              src="/cover.png"
              alt="hero_cover"
              className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-[5] relative"
            />

            <a href="#explore">
              <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-[5]">
                <img
                  src="/stamp.png"
                  alt="stamp"
                  className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain animate-spin-slow"
                />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Modal
        title="Join the Hackathon"
        open={modalShown}
        setOpen={setModalShown}
      >
        <p>What role do you want to play?</p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfhu58vbbjB9PN4FlRyIVQXI9go2hHCaCa2WoMFkt_w48E53w/viewform"
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

export default Hero;
