import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleIframeLoad = () => {
    setStatus('success');
    toast.success("✅ Message sent! We’ll get back to you shortly.", {
      position: 'top-center',
      autoClose: 3000,
      style: {
        background: '#16A34A', // Tailwind's green-600
        color: '#fff',
        fontWeight: '500',
      },
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-[#fdfaf6] text-black dark:bg-[#121212] dark:text-[#F7F3E9]"
    >
      <div className="max-w-6xl mx-auto">
        <ToastContainer />

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-14 text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Let’s Connect
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.div
            className="bg-white dark:bg-[#181818] shadow-xl rounded-2xl p-8 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              action="https://formsubmit.co/viraltamilan13072005@gmail.com"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => setTimeout(() => setStatus('success'), 500)}
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New message from Brew Bliss!" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_autoresponse" value="Thank you! We'll get back to you soon." />

              {/* Input */}
              <div className="relative">
                <input
                  name="name"
                  type="text"
                  required
                  className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-6 pb-2 text-sm outline-none transition focus:border-[#006241]"
                  placeholder=" "
                />
                <label className="absolute left-2 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#006241]">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  name="email"
                  type="email"
                  required
                  className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-6 pb-2 text-sm outline-none transition focus:border-[#006241]"
                  placeholder=" "
                />
                <label className="absolute left-2 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#006241]">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-6 pb-2 text-sm outline-none transition resize-none focus:border-[#006241]"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-2 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#006241]">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 w-full py-3 bg-gradient-to-r from-[#007b4e] to-[#16FF00] text-white font-bold rounded-full shadow-lg hover:cursor-pointer transition-transform"
              >
                Send Message
              </button>
            </form>

            <iframe name="hidden_iframe" style={{ display: 'none' }} onLoad={handleIframeLoad}></iframe>
          </motion.div>

          {/* Info Card */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-[#181818] shadow-xl rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#006241]">Contact Info</h3>
              <p><strong>📞 Phone:</strong> +91 9876543210</p>
              <p><strong>📧 Email:</strong> contact@brewbliss.com</p>
              <p><strong>📍 Location:</strong> Vellore, Tamil Nadu</p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-md border border-gray-300">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15560.944241257745!2d79.123508!3d12.916517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3ee0c58891d3%3A0x17a2f9a90c11e3aa!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1688555019093!5m2!1sen!2sin"
                width="100%"
                height="250"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
