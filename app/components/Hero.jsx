'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AnimatedText = ({ text }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex justify-center flex-wrap text-xl sm:text-2xl text-gray-300"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        

        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Shereen Shawky
        </h1>

        <AnimatedText text="Frontend Developer & UI/UX Designer" />

        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="#contact"
            className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            Contact Me
          </Link>
          <Link
            href="https://drive.google.com/file/d/1Q2p7qRpcilvT_QqeLPPf8CAahFHaVBOu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition"
          >
            Download CV
          </Link>

        </div>
      </motion.div>
    </section>
  );
}
