import React from 'react';
import Navbar from '../components/Navbar';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto text-center py-20">
        <h2 className="text-5xl font-bold text-orange-500 mb-8">Poznaj Nasz Zespół</h2>
        <p className="text-lg text-gray-700 mb-16">Zespół profesjonalistów, którzy pomogą Ci osiągnąć cele fitness w motywującej atmosferze.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Paula's Section */}
          <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
            <img src={require('../images/2.jpg')} alt="Trener Paula" className="w-full h-80 object-cover rounded-t-lg object-top" />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-orange-500">Paula</h3>
              <p className="mt-4 text-gray-700">
                Cześć! Jestem Paula – trener personalny i specjalistka od przygotowania motorycznego, szczególnie w tenisie. Pomagam poprawić sprawność, sylwetkę i wyniki sportowe.
              </p>
            </div>
          </div>

          {/* Mateusz's Section */}
          <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
            <img src={require('../images/3.jpg')} alt="Trener Mateusz" className="w-full h-80 object-cover rounded-t-lg object-top" />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-orange-500">Mateusz</h3>
              <p className="mt-4 text-gray-700">
                Cześć! Jako trener personalny i współwłaściciel HAS Academy, pomagam moim podopiecznym osiągnąć najwyższy poziom kondycji i siły, przygotowując ich do międzynarodowych zawodów.
              </p>
            </div>
          </div>

          {/* Jakub's Section */}
          <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
            <img src={require('../images/7.jpg')} alt="Trener Jakub" className="w-full h-80 object-cover rounded-t-lg object-top" />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-orange-500">Jakub</h3>
              <p className="mt-4 text-gray-700">
                Cześć! Jestem Jakub, trener medyczny, łączący fizjoterapię z treningiem. Specjalizuję się w rehabilitacji kolan i ścięgien, pomagając w zdrowieniu po kontuzjach.
              </p>
            </div>
          </div>

          {/* Alex's Section */}
          <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
            <img src={require('../images/5.jpg')} alt="Trener Alex" className="w-full h-80 object-cover rounded-t-lg object-top" />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-orange-500">Alex</h3>
              <p className="mt-4 text-gray-700">
                Cześć! Jestem Alex – trener personalny specjalizujący się w treningu siłowym i regeneracyjnym. Pomagam w rozwoju siły i wytrzymałości, a także w pracy z osobami trenującymi drużynowo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
