'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { startingFeatures } from '../constants';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex lg:flex-row flex-col mx-auto gap-8`}
    >
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1.8)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="|What's New" />
        <TitleText title={<>What's new about MetaVersus?</>} />
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={` flex-1 ${styles.flexCenter}`}
      >

        <img
          src="./whats-new.png"
          className="w-[90%] h-[90%] object-contain"
          alt="what-new-plant"
        />

      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
