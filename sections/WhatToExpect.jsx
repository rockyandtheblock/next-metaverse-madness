'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { expectations } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

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
        className="flex-[0.95] flex justify-center flex-col md:col-span-2"
      >
        <TypingText title="| Expectations" />
        <TitleText title={<>What To Expect</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {expectations.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('bottom', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter} hidden lg:block lg:relative lg:bottom-[-65px]`}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
