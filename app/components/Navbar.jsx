'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const sections = ['hero', 'about','skills', 'projects', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full shadow z-50 bg-black text-purple-400">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">SS</h1>
        <div className="space-x-6 flex">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`relative pb-1 font-medium transition-all duration-300 ${
                active === section
                  ? 'after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-purple-400'
                  : 'text-purple-300 hover:text-purple-200'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
