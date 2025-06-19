import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Asha P.',
    comment: 'Absolutely love the ambiance and the coffee is divine!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Rahul M.',
    comment: 'My go-to place for a cozy work session.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Meera S.',
    comment: 'Great service and even better coffee. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-4 bg-white text-black">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-14 text-black">What Our Customers Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="bg-[#f9f9f9] p-6 rounded-2xl shadow-md border border-gray-200 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#006241]"
              />
              <h3 className="text-lg font-semibold text-black">{r.name}</h3>
            </div>
            <p className="italic text-gray-700">“{r.comment}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
