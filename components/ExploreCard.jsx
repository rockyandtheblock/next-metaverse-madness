'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

import headset from '../assets/headset.svg';

const ExploreCard = ({
  id,
  img,
  title,
  message,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] rounded-lg transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={img.src}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
      width={img.width}
      height={img.height}
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <motion.div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <Image
            src={headset}
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-[18px] leading-[20.16px] text-white">
          {message}
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </motion.div>
    )}
  </motion.div>
);

export default ExploreCard;
