const Uslugi = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-200 to-gray-300">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-12">Nasze Usługi</h2>
        <div className="grid grid-cols-1 gap-10">

          {/* First row - one item centered */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-1/2">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-orange-500">Treningi przygotowania motorycznego sportowców</h3>
                <p className="mt-3 text-gray-600">
                Kluczowe dla każdego, kto uprawia sport – zawodowo lub hobbystycznie.
                </p>
              </div>
            </div>
          </div>


          {/* Second row - three items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-orange-500">Treningi personalne indywidualne</h3>
                <p className="mt-3 text-gray-600">
                Godzinne treningi pod okiem wykwalifikowanego Trenera.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-orange-500">Treningi w parze</h3>
                <p className="mt-3 text-gray-600">
                  Możesz przyjść na trening z koleżanką, siostrą, synem lub mężem. Razem raźniej!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-orange-500">Treningi grupowe</h3>
                <p className="mt-3 text-gray-600">
                  Prowadzimy treningi grupowe w grupach od 4 do 8 osób.
                </p>
              </div>
            </div>
          </div>

          {/* Third row - one item centered */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-1/2">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-orange-500">Treningi medyczne i rehabilitacja</h3>
                <p className="mt-3 text-gray-600">
                  Jeśli masz problemy z aparatem ruchu, wracasz do sprawności po kontuzji lub potrzebujesz skutecznej rehabilitacji – to jest opcja dla Ciebie.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Uslugi;
