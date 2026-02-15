import { Mail, Linkedin, GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="font-semibold text-white">
                Ammatillisen opettajankoulutuksen portfolio
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Kouluttaja tietojenkäsittelyn ja erityisesti ohjelmistotuotannon
              alalla. Rohkaisen kiinnostumaan ja oppimaan itse, ja etsin
              parhaita tapoja oppia vaikeita asioita käytännön kautta.
            </p>
            <div className="flex gap-4">
              <a
                href="https://fi.linkedin.com/in/heikkisateila"
                className="p-2 bg-slate-900 rounded-full text-slate-400 hover:bg-blue-500/10 hover:text-blue-400 transition-colors border border-slate-800"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.jamk.fi/fi/asiantuntija/heikki-sateila"
                className="p-2 bg-slate-900 rounded-full text-slate-400 hover:bg-blue-500/10 hover:text-blue-400 transition-colors border border-slate-800"
                target="_blank"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Pikalinkit</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  Tietoja
                </a>
              </li>
              <li>
                <a
                  href="#themes"
                  className="hover:text-blue-400 transition-colors"
                >
                  Opettajan osaamisalueet
                </a>
              </li>
              <li>
                <a
                  href="#learnings"
                  className="hover:text-blue-400 transition-colors"
                >
                  Opintopäiväkirjasta
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="hover:text-blue-400 transition-colors"
                >
                  Koulutus ja kokemus
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Tällä hetkellä</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Tekoälyn vaikutus pedagogiikkaan</li>
              <li>Sovelluskehityksen työelämmuutos</li>
              <li>Verkkopalveluihin liittyvät kehitysprojektit</li>
              <li>Projektin- ja palvelunhallinta</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Opettajuuden portfolio ensisijaisesti
            ammatillisen opettajankoulutuksen koontia varten. Lähteinä
            Jyväskylän ammattikorkeakoulun ammatillisen opettajankoulutuksen
            oppimateriaalit.
          </p>
          <div className="hidden flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
