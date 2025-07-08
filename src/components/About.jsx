export default function About() {
  return (
    <section id="about" className="py-20 px-4 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/3 flex justify-center lg:justify-start">
          <img 
            src="https://i.ibb.co/7HTZXjs/20240107-135601-MG-6939-Original.jpg" 
            alt="omakuva" 
            className="rounded-xl w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-lg"
          />
        </div>
        
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Minusta</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Olen 18-vuotias kaksoistutkinto-opiskelija ja asun tällä hetkellä Tampereella.
              Opiskelen ohjelmistokehittäjäksi Tredussa ja käyn samalla lukio-opintoja Tampereen teknillisessä lukiossa.
              Keskityn aina siihen, mitä teen ja pyrin, että työni jälki olisi parasta mihin pystyn.
            </p>
            <p className="text-lg leading-relaxed">
              Web-kehityksessä olen eniten kiinnostunut backend:stä, mutta olen perehtynyt myös frontend:n tekemiseen.
              Tämä portfolio onkin esimerkki tyylistäni frontend:ssä.
            </p>
            <p className="text-lg leading-relaxed">
              Olen myös julkaissut muutamia peliprojektejani, joita olen harrastuksena tehnyt
              ja löydätkin ne täältä:
              <a 
                href="https://lapagms.itch.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 dark:text-purple-500 hover:underline ml-1"
              >
                itch.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}