const Uslugi = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-12">Nasze Usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Pojedynczy Trening */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-orange-500">Pojedynczy Trening</h3>
              <p className="mt-3 text-gray-600">
                Indywidualna sesja dopasowana do Twoich celów. Popraw swoją kondycję i technikę z profesjonalnym trenerem.
              </p>
            </div>
          </div>

          {/* Pakiet Treningowy */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-orange-500">Pakiet Treningowy</h3>
              <p className="mt-3 text-gray-600">
                Regularne treningi dopasowane do Twojego harmonogramu. Zbuduj nawyk i osiągnij wymarzoną formę.
              </p>
            </div>
          </div>

          {/* Trening w Parach */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-orange-500">Trening w Parach</h3>
              <p className="mt-3 text-gray-600">
                Trenuj razem z bliską osobą! Więcej motywacji, lepsze wyniki i świetna zabawa.
              </p>
            </div>
          </div>

          {/* Fizjoterapia */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-orange-500">Fizjoterapia</h3>
              <p className="mt-3 text-gray-600">
                Profesjonalna regeneracja i rehabilitacja. Wracaj do pełni sił z pomocą naszych specjalistów.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Uslugi;
