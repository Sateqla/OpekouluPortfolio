import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Telescope, Lightbulb } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Modal } from './Modal';

import oppimisenOhjaaminen from '../content/teaching-themes/oppimisen-ohjaaminen.md?raw';
import ammatillisenOpettajuudenKehittaminen from '../content/teaching-themes/ammatillisen-opettajuuden-kehittaminen.md?raw';
import tulevaisuudenTekeminen from '../content/teaching-themes/tulevaisuuden-tekeminen.md?raw';

const themes = [
  {
    id: 1,
    title: 'Oppimisen ohjaaminen',
    description:
      'Believing that every student deserves a voice. I specialize in differentiated instruction that meets the diverse needs of all learners.',
    content: oppimisenOhjaaminen,
    icon: <Users className="w-6 h-6" />,
    image:
      'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    accent: 'bg-pink-600',
    border: 'border-pink-500/50',
  },
  {
    id: 2,
    title: 'Ammatillisen opettajuuden kehittäminen',
    description:
      'Integrating technology not as a distraction, but as a bridge. I leverage digital tools to enhance collaboration and critical thinking.',
    content: ammatillisenOpettajuudenKehittaminen,
    icon: <Lightbulb className="w-6 h-6" />,
    image:
      'https://images.unsplash.com/photo-1587037325379-0b8807b41f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    accent: 'bg-teal-600',
    border: 'border-teal-500/50',
  },
  {
    id: 3,
    title: 'Tulevaisuuden tekeminen',
    description:
      'Teaching the whole child. My approach prioritizes socio-emotional learning, fostering a safe environment for empathy and resilience.',
    content: tulevaisuudenTekeminen,
    icon: <Telescope className="w-6 h-6" />,
    image:
      'https://images.unsplash.com/photo-1666198259234-f7033c78b94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    accent: 'bg-indigo-950',
    border: 'border-indigo-950/50',
  },
];

export function TeachingThemes() {
  const [selectedTheme, setSelectedTheme] = useState<(typeof themes)[0] | null>(
    null,
  );

  return (
    <section id="themes" className="py-12 px-4 bg-slate-950 scroll-mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Opettajan osaamisalueet
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Ammatillisessa opettajakoulutuksessa <strong>opettajan osaamisalueita</strong> lähestyttiin oppimisen ohjaamisen, tulevaisuuden tekemisen ja
            ammatillisen opettajuuden kehittämisen näkökulmista. Tässä osiossa käyn läpi nämä osaamisalueet, miten ne ymmärrän ja miten ne näkyvät omassa työssäni.
          </p>
          <p className="text-slate-400 max-w-2xl mt-4"><strong>Oppimispäiväkirjasta</strong> -osio taas sisältää tarkempia kuvauksia ja pohdintoja oppimastani sekä malleista jotka vaikuttavat opettajuuteeni ja työni tekemiseen. Nämä kirjoitukset on jaoteltu opettajan osaamisalueiden tarkempien osien mukaisesti.</p>
        </div>

        {/* Placeholder for themes overview graphic */}
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-4xl rounded-3xl overflow-hidden border border-slate-700/50">
            <ImageWithFallback
              src="https://tiko.jamk.fi/~hsateila/files/opettajan-osaamisalueet.jpg"
              alt="Teaching themes overview"
              className="w-full h-full object-contain"
            />
          </div>
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
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
              </div>

              {/* Top content - Icon and Title */}
              <div className="absolute top-0 left-0 right-0 p-8">
                <div
                  className={`${theme.accent} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50`}
                >
                  {theme.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {theme.title}
                </h3>
              </div>

              {/* Bottom content - Button and Description */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    <button className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white hover:underline transition-colors cursor-pointer">
                      Lue lisää →
                    </button>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-300">
                  {theme.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedTheme} onClose={() => setSelectedTheme(null)}>
        <div className="space-y-4">
          <div className="text-slate-300 leading-relaxed text-lg">
            <ReactMarkdown
              components={{
                hr: () => <hr className="border-t border-slate-800 my-6" />,
                h1: ({ children }) => (
                  <h1 className="text-white font-bold text-3xl mb-4">{children}</h1>
                ),
                h4: ({ children }) => (
                  <h4 className="text-white font-bold text-lg mt-6 mb-3">{children}</h4>
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
                ul: ({ children }) => (
                  <ul className="list-disc pl-5 space-y-2">{children}</ul>
                ),
              }}
            >
              {selectedTheme?.content || ''}
            </ReactMarkdown>
          </div>
        </div>
      </Modal>
    </section>
  );
}
