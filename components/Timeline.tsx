
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Building } from 'lucide-react';

const timelineData = [
  {
    year: '2000',
    title: 'Ensiaskeleet lukioaikana sijaisuuksissa',
    description:
      'Ensikosketus opettajan työhön tuli lukion aikana ja jälkeen, jolloin tein sijaisuuksia alakoulun luokanopettajan sijaisena ja yläkoulun aineenopettajan sijaisena.',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    year: '2001 - 2011',
    title: 'IT-alan koulutus ja opettajuus sivutyönä',
    description:
      'Opiskelin ensin media- ja tietotekniikan insinööriksi Mikkelin ammattikorkeakoulussa ja tämän jälkeen tietotekniikan ja tietojohtamisen diplomi-insinööriksi Lappeenrannan teknillisessä yliopistossa. Samaan aikaan työskentelin projektiasiantuntijana ja tuntiopettajana Mikkelin ammattikorkeakoulussa.',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  {
    year: '2011 - 2023',
    title: 'ICT-alan työtehtävissä',
    description:
      'Verkkosovellukset, verkkokaupat ja palvelunhallinta. Työskentelin useissa eri yrityksissä ja projekteissa, joissa vastasin erilaisten verkkosovellusten ja verkkokauppojen kehittämisestä ja ylläpidosta yhdessä asiakkaiden kanssa. Toimin niin asiantuntijana, palvelupäällikkönä kuin tiiminvetäjänäkin.',
    icon: <Building className="w-5 h-5" />,
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    year: '2023',
    title: 'Tietojenkäsittelyn lehtoriksi',
    description:
      'Hakeuduin tietojenkäsittelyn lehtoriksi vuonna 2023, ja pääsin aloittamaan lehtorin tehtävissä Jamkissa elokuussa 2023. Päävastuualeinani ovat ICT-palvelun- ja projektinhallinta, UX sekä web-sovelluskehityksen perusteet. Lisäksi toimin opinnäytetöiden ohjaajana ja osallistun opetussuunnitelmatyöhön sekä palvelutuotantoon ja projektityöhön',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  },
  {
    year: '2024',
    title: 'Ammatilliset opettajaopinnot',
    description:
      'Aloitin opinnot jo 2023 avoimen ammattikorkeakoulun kautta, mutta pätevyyteen johtavan koulutuksen pääsin aloittamaan syksyllä 2024. Opinnot etenevät monimuoto-opiskeluna ja sisältävät sekä lähi- että etäopiskelua. ',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  {
    year: '2026',
    title: 'Opettajana ja kouluttajana kehittyminen ja ammattitaidon ylläpitäminen',
    description:
      'Jatkan unelma-ammatissani. Pedagogisesti jatkan uusien keinojen etsimistä vaikeiden asioiden opettamiseksi. Erityisesti tekoäly tuo sekä opettajan työhöni että ammattialalle täysin uudenlaisia työmalleja, jotka erityisesti pedagogisesta näkökulmasta kiinnostavat tällä hetkellä. Tavoitteeni on ylläpitää yritysyhteyksiä ja tehdä projekteja myös työelämään ammattitaidon ja kontaktien ylläpitämiseksi.',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Opettajuuden polku
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Alla matkani opettajana alkujuurista ammattialan työkokemuksen kautta ammatilliseksi opettajaksi.
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
