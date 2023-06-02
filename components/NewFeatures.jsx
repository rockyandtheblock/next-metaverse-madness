import Image from 'next/image';
import styles from '../styles';

const NewFeatures = ({ img, title, subtitle }) => (
  <div className="grid col-span-2 md:col-span-1 sm:max-w-[350px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <Image
        src={img}
        alt="icon"
        className="w-1/2 h-1/2 object-contain"
        // width={img.width}
        // height={img.height}
      />
    </div>
    <h1 className="mt-[26px] font-bold text-[18px] leading-[20px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[16px] text-[#B0B0B0] leading-[25px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
