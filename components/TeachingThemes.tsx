import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Monitor, Heart } from 'lucide-react';
import { Modal } from './Modal';

const themes = [
  {
    id: 1,
    title: 'Inclusive Pedagogy',
    description: 'Believing that every student deserves a voice. I specialize in differentiated instruction that meets the diverse needs of all learners.',
    longContent: (
      <div className="space-y-4 text-slate-300">
        <p>My approach to inclusive pedagogy is rooted in the Universal Design for Learning (UDL) framework. I believe that education should be accessible to all, regardless of their background or learning style.</p>
        <h4 className="text-white font-bold text-lg mt-6">Key Strategies:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Differentiated Instruction:</strong> Tailoring content, process, and products to student readiness and interests.</li>
          <li><strong>Scaffolding:</strong> Providing temporary supports to help students reach higher levels of understanding.</li>
          <li><strong>Culturally Responsive Teaching:</strong> Connecting classroom content to students' cultural backgrounds and lived experiences.</li>
        </ul>
        <p className="mt-4 italic">"Inclusion is not just about physical presence; it's about meaningful participation and belonging."</p>
      </div>
    ),
    icon: <Users className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    accent: 'bg-blue-600',
    border: 'border-blue-500/50',
  },
  {
    id: 2,
    title: 'Digital Literacies',
    description: 'Integrating technology not as a distraction, but as a bridge. I leverage digital tools to enhance collaboration and critical thinking.',
    longContent: (
      <div className="space-y-4 text-slate-300">
        <p>Modern education requires more than just basic computer skills; it requires digital fluency. I aim to prepare students for a world where technology is ubiquitous.</p>
        <h4 className="text-white font-bold text-lg mt-6">Implementation Focus:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Collaborative Platforms:</strong> Using tools like Google Workspace and Miro to foster teamwork.</li>
          <li><strong>Digital Citizenship:</strong> Teaching students how to navigate the internet safely and ethically.</li>
          <li><strong>AI Literacy:</strong> Introducing students to the responsible use of generative AI in their learning process.</li>
        </ul>
        <p className="mt-4">By moving beyond 'screens as books,' we can unlock new ways for students to create, communicate, and solve problems.</p>
      </div>
    ),
    icon: <Monitor className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    accent: 'bg-indigo-600',
    border: 'border-indigo-500/50',
  },
  {
    id: 3,
    title: 'Emotional Intelligence',
    description: 'Teaching the whole child. My approach prioritizes socio-emotional learning, fostering a safe environment for empathy and resilience.',
    longContent: (
      <div className="space-y-4 text-slate-300">
        <p>A student cannot learn effectively if they do not feel safe, seen, and supported. Emotional intelligence is a prerequisite for academic success.</p>
        <h4 className="text-white font-bold text-lg mt-6">Classroom Pillars:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Self-Regulation:</strong> Tools and techniques (like mindfulness) to help students manage their emotions.</li>
          <li><strong>Empathy Building:</strong> Literature and activities designed to help students understand perspectives different from their own.</li>
          <li><strong>Conflict Resolution:</strong> Restorative justice practices that focus on repairing harm rather than just punishment.</li>
        </ul>
        <p className="mt-4">I believe that teaching empathy is just as important as teaching literacy.</p>
      </div>
    ),
    icon: <Heart className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1666198259234-f7033c78b94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    accent: 'bg-rose-600',
    border: 'border-rose-500/50',
  },
];

export function TeachingThemes() {
  const [selectedTheme, setSelectedTheme] = useState<typeof themes[0] | null>(null);

  return (
    <section id="themes" className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Core Teaching Perspectives</h2>
          <p className="text-slate-400 max-w-2xl">
            My teaching philosophy is built upon three pillars that guide my classroom practice and student interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedTheme(theme)}
              className={`group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer border ${theme.border} transition-all active:scale-95`}
            >
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className={`${theme.accent} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50`}>
                  {theme.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{theme.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {theme.description}
                </p>
                <button className="mt-6 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedTheme}
        onClose={() => setSelectedTheme(null)}
        title={selectedTheme?.title || ''}
      >
        {selectedTheme?.longContent}
      </Modal>
    </section>
  );
}
