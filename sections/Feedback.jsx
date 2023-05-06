'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { feedback } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import FeedbackCard from '../components/FeedbackCard';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Feedback" textStyles="text-center" />
      <TitleText title={<>Testimonials</>} textStyles="text-center" />
      <div className="mt-[10px] flex flex-col">
        {feedback.map((item, index) => (
          <FeedbackCard key={`feedback-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Feedback;
