'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-900 dark:text-purple-300">
            About <span className="text-purple-600">Me</span>
          </h2>

          <p className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
            I'm <strong>Shereen Shawky</strong>, a dedicated <strong>Front-End Developer</strong> and <strong>UI/UX Designer</strong> who loves turning ideas into interactive and user-friendly digital experiences.
          </p>

          <p className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
            I graduated from the <strong>Faculty of Computers and Artificial Intelligence, Cairo University</strong> with distinction in 2024. My major was <strong>Information Systems</strong>, and I earned a <strong>GPA of 3.5</strong>, reflecting my commitment to both technical and academic excellence.
          </p>

          <p className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
            To further develop my skills, I joined the <strong>ITI Front-End Development Scholarship</strong>, a 4-month intensive program focused on modern web technologies, UI/UX design principles, and real-world collaboration. This experience greatly enhanced my ability to build responsive, accessible, and performance-optimized web applications.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="relative flex justify-center items-center"
>
  <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-br from-purple-500 to-pink-400 animate-pulse blur-lg opacity-30"></div>

  <Image
    src="/myimg.jpeg"
    alt="Shereen Shawky"
    width={300}
    height={300}
    className="rounded-full border-4 border-purple-500 object-cover shadow-2xl z-10"
  />
</motion.div>

      </div>
    </section>
  );
}
