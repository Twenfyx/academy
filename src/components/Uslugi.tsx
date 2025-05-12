import React from 'react';

const services = [
  {
    title: 'Treningi przygotowania motorycznego sportowców',
    description: 'Kluczowe dla każdego, kto uprawia sport – zawodowo lub hobbystycznie.',
  },
  {
    title: 'Treningi personalne indywidualne',
    description: 'Godzinne treningi pod okiem wykwalifikowanego Trenera.',
  },
  {
    title: 'Treningi w parze',
    description: 'Możesz przyjść na trening z koleżanką, siostrą, synem lub mężem. Razem raźniej!',
  },
  {
    title: 'Treningi grupowe',
    description: 'Prowadzimy treningi grupowe w grupach od 4 do 8 osób.',
  },
  {
    title: 'Treningi medyczne i rehabilitacja',
    description: 'Jeśli masz problemy z aparatem ruchu lub wracasz do sprawności po kontuzji – to dla Ciebie.',
  },
];

const Uslugi = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-extrabold text-orange-500 text-center mb-16 tracking-tight">
          Nasze Usługi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Uslugi;
