'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { expectations } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import Image from 'next/image';
import whatsNew from '../assets/whats-new.png';
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] justify-center"
      >
        <TypingText title="| Expectations" />
        <TitleText title={<>What To Expect</>} />
        <motion.div className="mt-[48px] justify-between grid grid-col md:grid-cols-2 gap-[24px]">
          {expectations.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn('bottom', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter} hidden lg:block lg:relative lg:bottom-[-65px]`}
      >
        <Image
          src={whatsNew.src}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          width={whatsNew.width}
          height={whatsNew.height}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
