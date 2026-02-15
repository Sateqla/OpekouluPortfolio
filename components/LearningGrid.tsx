import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  PenTool,
  Globe,
  FlaskConical,
  Languages,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Modal } from './Modal';

import omaOpettajuus from '../content/oma-opettajuus-ja-identiteetti.md?raw';
import oppimiskasityksetPedagogiset from '../content/oppimiskasitykset-ja-pedagogiset-menetelmat.md?raw';
import henkilokohtainenOhjaus from '../content/henkilokohtainen-ohjaus-ja-erityispiirteet.md?raw';
import erityinenTukiSaavutettavuus from '../content/erityinen-tuki-saavutettavuus-ja-yhdenvertaisuus.md?raw';
import tulevaisuusOrientaatio from '../content/tulevaisuusorientaatio-ja-teknologia.md?raw';
import arviointiPalaute from '../content/arviointi-ja-palaute.md?raw';
import monipuolisetTehtavat from '../content/yhtenainen-runko-monipuoliset-tehtavat.md?raw';

const learnings = [
  {
    id: 1,
    category: 'Oppimisen ohjaaminen',
    title: 'Oma opettajuus ja identiteetti',
    summary:
      'Opettajuuteni rakentuu kolmelle vahvalle perustalle: henkilökohtaiselle ohjaukselle, käytännönläheisyydelle ja opiskelijan kehittymisen tukemiselle.',
    content: omaOpettajuus,
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    id: 2,
    category: 'Ammatillisen opettajuuden kehittäminen',
    title: 'Oppimiskäsitykset ja pedagogiset menetelmät',
    summary: 'Framework for categorizing educational goals.',
    content: oppimiskasityksetPedagogiset,
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 3,
    category: 'Oppimisen ohjaaminen',
    title: 'Henkilökohtainen ohjaus ja yksilön erityispiirteet',
    summary: 'Tailoring lessons to individual learning styles.',
    content: henkilokohtainenOhjaus,
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: 4,
    category: 'Ammatillisen opettajuuden kehittäminen',
    title: 'Erityinen tuki, saavutettavuus ja yhdenvertaisuus',
    summary: 'Students learn by posing questions and solving problems.',
    content: erityinenTukiSaavutettavuus,
    icon: <FlaskConical className="w-5 h-5" />,
  },
  {
    id: 5,
    category: 'Tulevaisuuden tekeminen',
    title: 'Tulevaisuusorientaatio ja teknologia',
    summary: 'Content and Language Integrated Learning.',
    content: tulevaisuusOrientaatio,
    icon: <Languages className="w-5 h-5" />,
  },
  {
    id: 6,
    category: 'Oppimisen ohjaaminen',
    title: 'Arviointi ja palaute',
    summary:
      'Vaihtelevia tehtävätyyppejä ja harjoituksia mutta sama perusrunko.',
    content: arviointiPalaute,
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    id: 7,
    category: 'Oppimisen ohjaaminen',
    title: 'Monipuoliset (verkko-)oppimistehtävät',
    summary:
      'Vaihtelevia tehtävätyyppejä ja harjoituksia mutta sama perusrunko.',
    content: monipuolisetTehtavat,
    icon: <PenTool className="w-5 h-5" />,
  },
];

export function LearningGrid() {
  const [filter, setFilter] = useState('Kaikki');
  const [selectedLearning, setSelectedLearning] = useState<
    (typeof learnings)[0] | null
  >(null);

  const categories = [
    'Kaikki',
    ...Array.from(new Set(learnings.map((l) => l.category))),
  ];

  const filteredItems =
    filter === 'Kaikki'
      ? learnings
      : learnings.filter((l) => l.category === filter);

  return (
    <section id="learnings" className="py-12 bg-slate-900/30 px-4 scroll-mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Oppimispäiväkirjasta
            </h2>
            <p className="text-slate-400">
              Teorioita, menetelmiä ja konsepteja joita opiskelin ja sovellan
              opetustyössäni. Opintojen kulkua, harjoittelua ja niistä
              syntyneitä oivalluksia.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
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
      >
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-2 border border-blue-500/20">
            {selectedLearning?.category}
          </div>
          <div className="text-slate-300 leading-relaxed text-lg">
            <ReactMarkdown
              components={{
                hr: () => <hr className="border-t border-slate-800 my-6" />,
                h4: ({ children }) => (
                  <h4 className="text-white font-bold mb-3">{children}</h4>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="text-slate-400 italic border-l-2 border-slate-700 pl-4">
                    {children}
                  </blockquote>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt || ''}
                    className="w-full rounded-xl my-6 border border-slate-800"
                    loading="lazy"
                  />
                ),
              }}
            >
              {selectedLearning?.content || ''}
            </ReactMarkdown>
          </div>
        </div>
      </Modal>
    </section>
  );
}
