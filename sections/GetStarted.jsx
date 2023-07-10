'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { startingFeatures } from '../constants';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex lg:flex-row flex-col mx-auto`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}
      >

        <img src="./get-started.png" className="w-[90%] h-[90%] object-contain" alt="get-started-plant" />

      </motion.div>
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1.8)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="|How to Enter MetaVersus" />
        <TitleText title={<>Get Started with just few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />

          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
