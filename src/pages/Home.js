import React from 'react';
// import image
import WomanImg from '../img/home/woman.png';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition } from '../variants';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className='section'
    >
      <div className='container mx-auto'>
        <div className='flex'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
            exit={{ opacity: 0 }}
            className='text-[48px]'
          >
            text
          </motion.div>
          {/* image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition}
            className='max-w-[560px] flex-1 overflow-hidden'
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition}
              src={WomanImg}
              alt=''
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
