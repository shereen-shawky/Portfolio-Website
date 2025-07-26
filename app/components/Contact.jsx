// ContactSection.jsx
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="contact" className="mb-10 min-h-screen flex items-center justify-center bg-black p-8 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-2 text-purple-300"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className="text-center text-lg mb-12 text-purple-200"
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeIn}
        >
          Ready to bring your ideas to life? Let's create something amazing together.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div className="space-y-6" initial="hidden" animate="show" custom={2} variants={fadeIn}>
            <div className="bg-purple-700/30 p-4 rounded-lg flex items-center gap-4">
              <div className="bg-purple-500 p-3 rounded-full">
                <Mail className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-sm">shereenshawky2001@gmail.com</p>
              </div>
            </div>
            <div className="bg-purple-700/30 p-4 rounded-lg flex items-center gap-4">
              <div className="bg-green-500 p-3 rounded-full">
                <Phone className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-sm">+20 1063811156</p>
              </div>
            </div>
            <div className="bg-purple-700/30 p-4 rounded-lg flex items-center gap-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <MapPin className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-sm">Zahraa El Maadi, Cairo, Egypt</p>
              </div>
            </div>

            {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/shereen-shawky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 p-3 rounded-full hover:bg-purple-800"
                >
                  <Github className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shereen-shawky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 p-3 rounded-full hover:bg-purple-800"
                >
                  <Linkedin className="text-white" />
                </a>
                <a
                  href="https://portfolio-website-nine-rho-22.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 p-3 rounded-full hover:bg-purple-800"
                >
                  <ExternalLink className="text-white" />
                </a>
              </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form className="space-y-6" initial="hidden" animate="show" custom={3} variants={fadeIn}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-purple-800/40 placeholder-purple-300 text-white outline-none shadow-md focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-purple-800/40 placeholder-purple-300 text-white outline-none shadow-md focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-purple-800/40 placeholder-purple-300 text-white outline-none shadow-md focus:ring-2 focus:ring-purple-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold shadow-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
