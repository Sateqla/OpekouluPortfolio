import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, PenTool, Globe, FlaskConical, Languages } from 'lucide-react';
import { Modal } from './Modal';

const learnings = [
  { 
    id: 1, 
    category: 'Methods', 
    title: 'The Socratic Method', 
    summary: 'Using directed inquiry to foster critical thinking.',
    details: 'Based on the teaching style of the Greek philosopher Socrates, this method uses a series of questions to lead students to discover knowledge for themselves. It emphasizes critical thinking, logical reasoning, and the active participation of the learner in the educational process.',
    icon: <PenTool className="w-5 h-5" /> 
  },
  { 
    id: 2, 
    category: 'Psychology', 
    title: 'Bloom\'s Taxonomy', 
    summary: 'Framework for categorizing educational goals.',
    details: 'A hierarchical model used to classify educational learning objectives into levels of complexity and specificity. It moves from basic skills like Remembering and Understanding to higher-order thinking skills like Analyzing, Evaluating, and Creating.',
    icon: <BookOpen className="w-5 h-5" /> 
  },
  { 
    id: 3, 
    category: 'Diversity', 
    title: 'Differentiated Instruction', 
    summary: 'Tailoring lessons to individual learning styles.',
    details: 'The practice of modifying teaching methods to meet the diverse needs of all students in a classroom. This can involve varying the content, the activities (process), the end product, or the learning environment based on individual readiness and interests.',
    icon: <Globe className="w-5 h-5" /> 
  },
  { 
    id: 4, 
    category: 'Science', 
    title: 'Inquiry-Based Learning', 
    summary: 'Students learn by posing questions and solving problems.',
    details: 'A form of active learning that starts by posing questions, problems or scenarios—rather than simply presenting established facts. Students act as researchers to find solutions, fostering deep engagement and a "learn-how-to-learn" mindset.',
    icon: <FlaskConical className="w-5 h-5" /> 
  },
  { 
    id: 5, 
    category: 'Languages', 
    title: 'CLIL Methodology', 
    summary: 'Content and Language Integrated Learning.',
    details: 'An educational approach where a foreign language is used for the learning and teaching of both content and language. It provides a naturalistic environment for language acquisition while teaching subjects like History or Science.',
    icon: <Languages className="w-5 h-5" /> 
  },
  { 
    id: 6, 
    category: 'Methods', 
    title: 'Cooperative Learning', 
    summary: 'Small group techniques for social academic skills.',
    details: 'A teaching strategy in which small teams of students, each with students of different levels of ability, use a variety of learning activities to improve their understanding of a subject. It emphasizes individual accountability and positive interdependence.',
    icon: <PenTool className="w-5 h-5" /> 
  },
];

export function LearningGrid() {
  const [filter, setFilter] = useState('All');
  const [selectedLearning, setSelectedLearning] = useState<typeof learnings[0] | null>(null);
  
  const categories = ['All', ...Array.from(new Set(learnings.map(l => l.category)))];

  const filteredItems = filter === 'All' 
    ? learnings 
    : learnings.filter(l => l.category === filter);

  return (
    <section id="learnings" className="py-24 bg-slate-900/30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Oppimispäiväkirjasta</h2>
            <p className="text-slate-400">Teorioita, menetelmiä ja konsepteja joita opiskelin ja sovellan opetustyössäni. Opintojen kulkua, harjoittelua ja niistä syntyneitä oivalluksia.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedLearning(item)}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/10 transition-all group cursor-pointer active:scale-[0.98]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {item.summary}
                </p>
                <div className="text-blue-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View full summary →
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Modal
        isOpen={!!selectedLearning}
        onClose={() => setSelectedLearning(null)}
        title={selectedLearning?.title || ''}
      >
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-2 border border-blue-500/20">
            {selectedLearning?.category}
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">
            {selectedLearning?.details}
          </p>
          <div className="pt-6 border-t border-slate-800">
            <h4 className="text-white font-bold mb-3">Reflective Question:</h4>
            <p className="text-slate-400 italic">
              "How might I adapt this concept to better serve a classroom with diverse cognitive abilities?"
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
}
