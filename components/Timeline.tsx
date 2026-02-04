import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, BookOpen, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    year: '2022',
    title: 'Foundations of Education',
    description:
      'Started my journey at University, focusing on educational psychology and child development.',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    year: '2023',
    title: 'First Classroom Exposure',
    description:
      'Completed my first 8-week practicum in a primary setting. Learned about lesson planning and assessment.',
    icon: <Calendar className="w-5 h-5" />,
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  {
    year: '2024',
    title: 'Specialized Pedagogy',
    description:
      'Deepened knowledge in inclusive education and ESL (English as a Second Language) methodologies.',
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    year: '2025',
    title: 'Final Practicum & Research',
    description:
      'Lead teacher for a Grade 10 English class. Developing my final thesis on student engagement.',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            My Academic Journey
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A chronological look at how I've evolved from a student of education
            into a professional educator.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-800"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-slate-950 shadow-md z-10 flex items-center justify-center bg-slate-900">
                  <div
                    className={`w-full h-full rounded-full ${item.color.split(' ')[0]} flex items-center justify-center border ${item.color.split(' ')[2]}`}
                  >
                    <span className={item.color.split(' ')[1]}>
                      {item.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div
                    className={`bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all ${
                      index % 2 === 0
                        ? 'md:mr-8 text-left md:text-right'
                        : 'md:ml-8 text-left'
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 border ${item.color}`}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
