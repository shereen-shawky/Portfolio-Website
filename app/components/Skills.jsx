'use client';
import {
  FaFigma, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass,
  FaGithub, FaVuejs, FaBootstrap, FaGitAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux,
  SiAdobephotoshop, SiNetlify, SiVercel, SiAdobeillustrator
} from 'react-icons/si';
import { MdOutlineSyncAlt, MdOutlineDashboardCustomize } from 'react-icons/md';
import { PiProjectorScreenChart } from 'react-icons/pi';
import { motion } from 'framer-motion';

const uiuxSkills = [
  { name: 'Figma', icon: <FaFigma className="text-4xl text-pink-500" /> },
  { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-4xl text-blue-500" /> },
  { name: 'Adobe Illustrator', icon: <SiAdobeillustrator className="text-4xl text-orange-500" /> },
  { name: 'MockFlow', icon: <PiProjectorScreenChart className="text-4xl text-yellow-400" /> },
  { name: 'Miro', icon: <MdOutlineDashboardCustomize className="text-4xl text-purple-400" /> },
];

const frontendSkills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-4xl text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-500" /> },
  { name: 'React', icon: <FaReact className="text-4xl text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-sky-400" /> },
  { name: 'Sass', icon: <FaSass className="text-4xl text-pink-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-4xl text-orange-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-4xl text-gray-300" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-4xl text-purple-600" /> },
  { name: 'Vue.js', icon: <FaVuejs className="text-4xl text-green-500" /> },
  { name: 'Context API', icon: <MdOutlineSyncAlt className="text-4xl text-lime-400" /> },
  { name: 'Netlify', icon: <SiNetlify className="text-4xl text-cyan-300" /> },
  { name: 'Vercel', icon: <SiVercel className="text-4xl text-white" /> },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          My Skills
        </motion.h2>

        {/* UI/UX Section */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-semibold mb-6 text-purple-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            UI/UX Design
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {uiuxSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frontend Section */}
        <div>
          <motion.h3
            className="text-2xl font-semibold mb-6 text-purple-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Frontend Development
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
