import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative w-full min-h-screen bg-[#fdfaf6] text-black overflow-hidden px-4 sm:px-8 pt-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* HUGE BACKGROUND TEXT */}
      <motion.h1
        className="absolute top-16 left-1/2 transform -translate-x-1/2 text-[13vw] sm:text-[9vw] md:text-[8.5vw] font-extralight uppercase text-black z-0 tracking-widest select-none text-center leading-snug font-sans"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ originX: 0.5 }}
      >
        BREWBLISS
      </motion.h1>

      {/* GRID */}
      <motion.div
        className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-10 mt-10"
        variants={containerVariants}
      >
        {/* Left Text */}
        <motion.div className="text-center lg:text-left px-2" variants={itemVariants}>
          <div className="flex justify-center lg:justify-start items-center gap-2 mb-3">
            <motion.img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User1"
              className="w-8 h-8 rounded-full border"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="User2"
              className="w-8 h-8 rounded-full border"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://randomuser.me/api/portraits/women/46.jpg"
              alt="User3"
              className="w-8 h-8 rounded-full border"
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <span className="block text-sm font-medium text-[#006241] mb-3">
            1M+ Satisfied Customers
          </span>
          <p className="text-sm text-gray-700 leading-relaxed">
            We’re all about creating better coffee experiences for everyone who comes to the party.
            Fuel your day with our exquisite coffee creations.
          </p>
        </motion.div>

        {/* Center Image */}
        <motion.div
          className="mx-auto mt-6 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] flex items-center justify-center z-10"
          variants={{
            hidden: { opacity: 0, y: -80 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: 'easeInOut' } },
          }}
        >
          <img src="/hero.png" alt="Main Drink" className="w-full h-full object-contain" />
        </motion.div>

        {/* Right - Button + Small Img */}
        <motion.div className="flex flex-col items-center lg:items-end gap-6" variants={itemVariants}>
          <img src="/hero-2.png" alt="Mini Product" className="w-24 sm:w-28 md:w-32 rounded" />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative mt-4 px-8 py-3 bg-gradient-to-r from-[#007b4e] to-[#16FF00] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="relative z-10">Shop Now</span>
            <span className="absolute inset-0 rounded-full blur-sm opacity-50 bg-gradient-to-r from-[#007b4e] to-[#16FF00] z-0 animate-pulse"></span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

