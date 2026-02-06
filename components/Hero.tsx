
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 overflow-hidden bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
              Ammatillisen opettajankoulutuksen portfolio
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Henkilökohtaista kehittymistä <span className="text-blue-500">empatian ja teknologiaosaamisen</span> kautta.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
              Olen ohjelmistokehityksen ja palvelunhallinnan työkokemuksen omaava ammatillinen opettaja, ja innostunut luomaan inklusiivisia, viimeisimpään teknologiaan ja työelämäkäytäntöihin  sekä -tarpeisiin perustuvia opintoja joissa kaikki opiskelijat tuntevat itsensä tervetulleiksi ja pystyvät kehittymään parhaimpaansa.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
                Matka opettajana
              </button>
              <button className="bg-slate-900 border-2 border-slate-800 text-slate-300 px-8 py-4 rounded-xl font-semibold hover:border-slate-700 hover:bg-slate-800 transition-all">
                Lataa ansioluettelo
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-slate-800">
              <ImageWithFallback
                src="https://tiko.jamk.fi/~hsateila/files/SATEHE-iso.jpg"
                alt="Heikki Sateilan muotokuva"
                className="w-full aspect-[4/5] object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold">15+</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm uppercase tracking-wider">vuoden kokemus</p>
                  <p className="text-slate-500 text-xs">Sovellusten palvelutuotannosta</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-40 -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl opacity-40 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
