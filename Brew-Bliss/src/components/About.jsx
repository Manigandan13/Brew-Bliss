import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';

const timeline = [
  {
    icon: <Calendar size={18} />,
    title: 'Founded in 2020',
    description: 'Started as a small coffee stand in Vellore, serving just three brews.',
  },
  {
    icon: <Star size={18} />,
    title: 'First 1000 Happy Customers',
    description: 'Our crafted beverages and community vibe won hearts fast.',
  },
  {
    icon: <Calendar size={18} />,
    title: 'Expanded in 2023',
    description: 'We opened our flagship café and introduced artisan cold brews.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const About = () => (
  <motion.section
    id="about"
    className="py-20 px-4 bg-[#fdfaf6] text-black dark:bg-[#121212] dark:text-[#F7F3E9]"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1032&auto=format&fit=crop"
        alt="Our Coffee Shop"
        className="w-full md:w-1/2 rounded-lg shadow-2xl border-4 border-white"
        variants={itemVariants}
      />

      {/* Right Content */}
      <motion.div className="md:w-1/2 space-y-8" variants={itemVariants}>
        <h2 className="text-4xl font-bold text-black">OUR STORY</h2>
        <p className="text-lg leading-relaxed text-black/80 dark:text-[#F7F3E9]/80">
          At <span className="font-semibold">Brew Bliss</span>, we believe every cup tells a story.
          From sustainably sourced beans to handcrafted brews, our passion flows into every pour.
        </p>

        {/* Timeline */}
        <motion.div
          className="relative border-l-2 border-black dark:border-white pl-6 space-y-10"
          variants={containerVariants}
        >
          {timeline.map((item, index) => (
            <motion.div key={index} className="relative group" variants={itemVariants}>
              <div className="absolute -left-5 top-0 w-4 h-4 rounded-full bg-black dark:bg-white border-2 border-white dark:border-black shadow-md flex items-center justify-center">
                <span className="text-white dark:text-black text-xs">
                  {item.icon}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">{item.title}</h4>
                <p className="text-sm text-black/70 dark:text-[#F7F3E9]/70 mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default About;

