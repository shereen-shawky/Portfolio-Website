'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const name = 'Shereen Shawky'.split('');
const label = 'Portfolio'.split('');

export default function Intro({ onFinish }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish(); // Call after completion
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 4 seconds total (40 * 100ms)

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#431668] text-white flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: percentage === 100 ? 0 : 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Name (shows immediately) */}
      <motion.div
        className="flex space-x-1 text-4xl sm:text-6xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500  bg-clip-text text-transparent"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.06 },
          },
        }}
      >
        {name.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Subtitle (delayed slightly after name) */}
      <motion.div
        className="flex space-x-1 text-xl sm:text-2xl mt-4 tracking-widest text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {label.map((char, i) => (
          <span key={i}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </motion.div>

      {/* Loading Percentage (appears after subtitle) */}
      <motion.div
        className="mt-10 text-2xl sm:text-3xl font-semibold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        Loading... {percentage}%
      </motion.div>
    </motion.div>
  );
}
