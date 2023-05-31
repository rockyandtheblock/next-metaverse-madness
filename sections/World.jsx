'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

import map from '../assets/map.png';
import people01 from '../assets/people-01.png';
import people02 from '../assets/people-02.png';
import people03 from '../assets/people-03.png';

import Image from 'next/image';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People of the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            <span className="block sm:hidden">A Global AI Hackathon</span>
            <span className="hidden sm:block">
              The Global AI Hackathon <br className="hidden sm:block" />
              features teams from around the globe.
            </span>
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image
          width={map.width}
          height={map.height}
          src={map.src}
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            src={people01.src}
            alt="people"
            className="w-full h-full"
            width={people01.width}
            height={people01.height}
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            src={people02.src}
            alt="people"
            className="w-full h-full"
            width={people02.width}
            height={people02.height}
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            src={people03.src}
            width={people03.width}
            height={people03.height}
            alt="people"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
