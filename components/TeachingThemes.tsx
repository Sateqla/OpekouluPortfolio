import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Telescope, Lightbulb } from 'lucide-react';
import { Modal } from './Modal';

const themes = [
  {
    id: 1,
    title: 'Oppimisen ohjaaminen',
    description:
      'Believing that every student deserves a voice. I specialize in differentiated instruction that meets the diverse needs of all learners.',
    longContent: (
      <div className="space-y-4 text-slate-300">
        <h1>Oppimisen ohjaaminen</h1>
        <p>
          Tiivistys siitä, mikä opintojen perusteella on minun käsitykseni
          ammatillisesta oppimisen ohjaamisesta.
        </p>
        <h4 className="text-white font-bold text-lg mt-6">
          Kohtaamisosaaminen
        </h4>
        <p>
          Tähän tekstiä kohtaamisosaamisesta ja jonkinlainen synteesi opitusta
        </p>
        <h4 className="text-white font-bold text-lg mt-6">
          Oppimisprosessien ohjausosaaminen
        </h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Tähän asiaa</strong> asiaa listaelementti ykköseen.
          </li>
          <li>
            <strong>Toinen asia:</strong> toinen listaelementti.
          </li>
          <li>
            <strong>Kolmas boldattu</strong> Tähän myös tekstiä.
          </li>
        </ul>
        <h4 className="text-white font-bold text-lg mt-6">
          Ammattipedagoginen osaaminen
        </h4>
        <p>
          Tähän tekstiä ammattipedagogiaan liittyvästä osaamisesta ja
          jonkinlainen synteesi opitusta
        </p>
        <p className="mt-4 italic">
          "Tähän ehkä joku iskulause joka tiivistää nämä hommat."
        </p>
      </div>
    ),
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
    longContent: (
      <div className="space-y-4 text-slate-300">
        <h1>Ammatillisen opettajuuden kehittäminen</h1>
        <p>
          Tähän omaa näkemystä siitä miten ammatillisen opettajan osaaminen
          kehittyi opintojen aikana ja mitä siitä jäi työkalupakkiin.
        </p>
        <h4 className="text-white font-bold text-lg mt-6">
          Toimijuusosaaminen
        </h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Kyky ohjata omaa tekemistä on tärkeää.</strong>{' '}
            Itseohjautuvuus on tärkeää. On oltava aktiivinen, kyettävä
            päätöksentekoon ja ottamaan vastuuta vähintään omista opinnoistaan
            ja tekemisistään. <strong>Miten tuen tätä opiskelijoilla?</strong>
          </li>
          <li>
            <strong>Kehittämisote:</strong> aina on hyvä pyrkiä kehittämään
            tekemistä ja nostaa ongelmat esiin. Kyseenalaista perustellen,
            ehdota uusia ratkaisuja.
          </li>
          <li>
            <strong>Sosiaalisuus ja yhteisöllisyys:</strong> Osallistu ja
            vaikuta omassa (opiskelija)yhteisössäsi. Sama koskee opettajien
            yhteisöä, kehitä opintojaksoja yhteisesti, alista ne kritiikille ja
            opi muilta.
          </li>
          <li>
            <strong>Rakenna ammatillinen identiteetti:</strong> Tunne
            osaamisesi, tiedosta missä olet hyvä ja pyri kehittymään. Uskalla
            ottaa kantaa, vakuuta ensin itsesi.
          </li>
        </ul>
        <h4 className="text-white font-bold text-lg mt-6">
          Reflektio-osaaminen
        </h4>
        <p>Miten ymmärrän reflektion merkityksen opetuksessa?</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Oma reflektio:</strong> Miten reflektoin omaa tekemistä,
            osaamista ja opintojaksoja
          </li>
          <li>
            <strong>Reflektion merkitys opiskelijoille:</strong> Miten opetan
            opiskelijoita reflektoimaan tekemistään ja oppimistaan.
          </li>
        </ul>
        <p className="mt-4">Tähän taas joku tiivsitys tästä aiheesta.</p>
      </div>
    ),
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
    longContent: (
      <div className="space-y-4 text-slate-300">
        <h1>Tulevaisuuden tekeminen</h1>
        <p>
          Erityisesti ICT-ala muuttuu kiihtyvällä nopeudella. Tulevaisuuden
          ennakointi on oleellinen osa ammatillisen opettajan tehtäviä. Meidän
          on pysyttävä ajan tasalla ja pyrittävä suunnittelemaan opinnot sen
          mukaan, millaista osaamista tarvitaan{' '}
          <strong>silloin kun opiskelijat valmistuvat</strong>, ei sen mukaan
          mitä juuri nyt tarvitaan.
        </p>
        <h4 className="text-white font-bold text-lg mt-6">
          Tulevaisuusosaaminen
        </h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Koulutusjärjestelmä ja sen asettamat puitteet:</strong>{' '}
            Yhteiskunnan asettamat reunaehdot koulutusjärjestelmän ja
            rahoituksen kautta.
          </li>
          <li>
            <strong>Alan kehityksen ennakointi</strong> Alan muutoksen ja
            työelämän seuranta, työelämäprojektit.
          </li>
          <li>
            <strong>Tulevaisuuden ennakoinnin menetelmäosaaminen:</strong>{' '}
            Opetussuunnitelmia kehittäessä on järkevä käyttää
            tulevaisuudentutkimuksen menetelmiä, kun haetaan aiheita ja
            opetettavia asioita jotta osaaminen on valmistuessa relevanttia.
            Mikä tulee säilymään, mikä on jo opintojakson jälkeen vanhaa tietoa?
          </li>
        </ul>
        <h4 className="text-white font-bold text-lg mt-6">
          Kehittämisosaaminen
        </h4>
        <p>
          Kehittämisosaamista tarvitaan sekä koulutuksen yleisen tason
          kehittämisessä annetuissa puitteissa, mutta myös projektityössä, joka
          on usein osa ammattikorkeakouluopettajan työtä projekteissa.
        </p>
        <p>
          Toisaalta ammatillisen opettajan työhön kuuluu hyvin vahvasti
          koulutuksen kehttäminen osana omaa opetusta ja tutkinto-ohjelmaa.
        </p>
        <p className="mt-4, italic">
          Ennustaminen on vaikeaa. Etenkin tulevaisuuden.
        </p>
      </div>
    ),
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
            Ammatillisessa opettajakoulutuksessa opettajan osaamisalueita
            lähestyttiin oppimisen ohjaamisen, tulevaisuuden tekemisen ja
            ammatillisen opettajuuden kehittämisen näkökulmista.
          </p>
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
        {selectedTheme?.longContent}
      </Modal>
    </section>
  );
}
