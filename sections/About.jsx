'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About HackGPT" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mx-12 mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        On  <span className="font-extrabold text-white">May 13-14, 2023</span>, the Syndicate is hosting <span className="font-extrabold text-white">HackGPT</span>, a groundbreaking Global AI Hackathon unfolding live on <span className="font-extrabold text-white">Twitter Spaces</span>.
        Leaders across most industries are seeing the rapid growth of AI and are preparing for the next technological revolution.
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mx-12 mt-[20px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">HackGPT</span> offers any individual or Fortune 2000 organization the opportunity to connect with other <span className="font-extrabold text-white">developers</span> and <span className="font-extrabold text-white">AI leaders</span> to build custom AI solutions that are targeted toward their use cases.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
