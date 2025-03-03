const Trenerzy = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-12">Nasi Trenerzy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Paula */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={require('../images/2.jpg')} alt="Trener Paula" className="w-full h-72 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-orange-500">Paula</h3>
              <p className="mt-3 text-gray-600">
                Specjalistka od przygotowania motorycznego w tenisie. Pomagam w budowie formy i poprawie wyników sportowych.
              </p>
            </div>
          </div>

          {/* Mateusz */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={require('../images/3.jpg')} alt="Trener Mateusz" className="w-full h-72 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-orange-500">Mateusz</h3>
              <p className="mt-3 text-gray-600">
                Trener personalny i współwłaściciel HAS Academy. Przygotowuję podopiecznych do osiągania mistrzowskiej formy.
              </p>
            </div>
          </div>

          {/* Jakub */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={require('../images/7.jpg')} alt="Trener Jakub" className="w-full h-72 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-orange-500">Jakub</h3>
              <p className="mt-3 text-gray-600">
                Łączę fizjoterapię z treningiem. Specjalizuję się w rehabilitacji kolan i ścięgien po urazach.
              </p>
            </div>
          </div>

          {/* Aleks */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={require('../images/5.jpg')} alt="Trener Alex" className="w-full h-72 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-orange-500">Aleks</h3>
              <p className="mt-3 text-gray-600">
                Specjalizuję się w treningu siłowym i regeneracyjnym. Pomagam budować siłę i wytrzymałość.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trenerzy;
