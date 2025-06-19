import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Oreo Shake', price: 4.5, image: '/1.png' },
  { id: 2, name: 'Strawberry Shake', price: 4.0, image: '/2.png' },
  { id: 3, name: 'Caramel Swirl', price: 3.5, image: '/3.png' },
  { id: 4, name: 'Strawberry Fizz', price: 4.2, image: '/4.png' },
  { id: 5, name: 'Minty Fresh', price: 4.8, image: '/5.png' },
  { id: 6, name: 'Chocolate Burst', price: 4.3, image: '/6.png' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Menu = () => {
  return (
    <motion.section
      id="menu"
      className="w-full py-16 px-4 bg-white text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          MENU
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#fdfaf6] rounded-xl shadow-md p-5 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-[240px] object-contain rounded-lg"
              />
              <div className="pt-2 text-left">
                <h3 className="text-lg font-bold text-black">{product.name}</h3>
                <p className="text-[#006241] text-md font-semibold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Menu;

