'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div variants={fadeIn('right', 'spring', index * 0.5, 1)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img src={imgUrl} alt={title} className="absolute w-full h-full rounded-[24px] object-cover" />
    {active !== id ? <h3 className="text-white absolute z-0 font-semibold lg:rotate-[-90deg] lg:origin-[0,0] lg:bottom-20">{title}</h3> : <h3 className="text-white absolute z-0 font-semibold lg:bottom-20 lg:origin-[0,0]">{title}</h3>}
  </motion.div>
);

export default ExploreCard;
