'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} flex justify-between mx-auto gap-8`}>
      <img src="/search.svg" className="w-[24px] h-[24px] object-contain" alt="Search" />
      <h2 className="font-extrabold text-white text-[24px] leading-[30px]">MetaVersus</h2>
      <img src="/menu.svg" alt="menu buttom" className="w-[24px] h-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;