'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaBehance } from 'react-icons/fa';

const categories = ['UI/UX Design', 'HTML/CSS/JS', 'Bootstrap', 'React Projects', 'Vue.js Projects'];

const projects = [
  // UI/UX DESIGN
  {
    category: 'UI/UX Design',
    title: 'Mobile Wallet Application',
    description: 'Secure digital transactions with intuitive navigation.',
    image: '/ewallet.jpg',
    behance: 'https://www.behance.net/gallery/222288007/Mobile-Wallet-Application',
  },
  {
    category: 'UI/UX Design',
    title: 'Book Store Website',
    description: 'Clean and accessible shopping interface.',
    image: '/bookstore.png',
    behance: 'https://www.behance.net/gallery/222288861/Book-Store-website',
  },
  {
    category: 'UI/UX Design',
    title: 'GoLearn Website',
    description: 'Education-focused platform with clear CTAs.',
    image: '/golearn.jpg',
    behance: 'https://www.behance.net/gallery/225977421/GoLearn-Website',
  },

  // HTML/CSS/JS
  {
    category: 'HTML/CSS/JS',
    title: 'Headphones Landing Page',
    description: 'Responsive headphones landing page with CSS animations.',
    image: '/headphones.PNG',
    github: 'https://github.com/shereen-shawky/CodeClause_Headphones_Landing-page',
    live: '',
  },
  {
    category: 'HTML/CSS/JS',
    title: 'Coffee Shop Website',
    description: 'Responsive coffee shop site with CSS animations.',
    image: '/coffee.PNG',
    github: 'https://github.com/shereen-shawky/coffee-website-design',
    live: '',
  },

  // Bootstrap

  {
    category: 'Bootstrap',
    title: 'Kusina Website',
    description: 'Restaurant website with Bootstrap 5 and custom components.',
    image: '/kusina.PNG',
    github: 'https://github.com/shereen-shawky/Kusina-Website',
    live: 'https://kusin.netlify.app',
  },

  // React
  {
    category: 'React Projects',
    title: 'Todo List App',
    description: 'Manage tasks with drag-and-drop and local storage.',
    image: '/todo.PNG',
    github: 'https://github.com/shereen-shawky/Todo-List',
    live: 'https://shereens-todo-app.netlify.app/',
  },
  {
    category: 'React Projects',
    title: 'Weather App',
    description: 'Fetch real-time weather data with React and OpenWeatherMap API.',
    image: '/wheather.PNG',
    github: 'https://github.com/shereen-shawky/Weather-app',
    live: '',
  },
  {
    category: 'React Projects',
    title: 'Electronics ecommerce',
    description: 'Fetch real-time weather data with React and OpenWeatherMap API.',
    image: '/electronics.PNG',
    github: 'https://github.com/shereen-shawky/Ecommerce-Next.js-Strapi',
    live: 'https://tech-deal-eta.vercel.app',
  }

  // Vue.js
  ,{
    category: 'Vue.js Projects',
    title: 'Quizzer Platform',
    description: 'Interactive quiz platform with real-time scoring.',
    image: '/quizzer.jpeg',
    github: 'https://github.com/shereen-shawky/Quizzer',
    live: 'https://quizzer-platform.netlify.app/',
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState('UI/UX Design');

  return (
    <section id="projects" className="px-6 py-20 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Featured Projects</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        A showcase of UI/UX design and frontend development work
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`cursor-pointer px-5 py-2 rounded-full font-medium transition ${
              selected === cat
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {projects
          .filter((p) => p.category === selected)
          .map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg group">
                {/* Image Wrapper with Overlay */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/60 via-purple-600/30 to-transparent 
                    opacity-100 md:opacity-0 md:group-hover:opacity-100 
                    transition-opacity duration-300 
                    flex items-center justify-center gap-4">
                    
                    {/* Behance (UI/UX only) */}
                    {project.category === 'UI/UX Design' && project.behance && (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
                        title="View on Behance"
                      >
                        <FaBehance className="h-5 w-5 text-purple-700" />
                      </a>
                    )}

                    {/* Live + GitHub (other categories) */}
                    {project.category !== 'UI/UX Design' && (
                      <>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
                          title="View Live"
                        >
                          <GlobeAltIcon className="h-5 w-5 text-purple-700" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full hover:scale-110 transition-transform"
                          title="View Code on GitHub"
                        >
                          <FaGithub className="h-5 w-5 text-purple-700" />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{project.description}</p>
                </div>
              </div>

            </motion.div>
          ))}
      </div>
    </section>
  );
}
