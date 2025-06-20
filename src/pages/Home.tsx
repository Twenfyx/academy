import React from 'react';
import Navbar from '../components/Navbar';
import Onas from '../components/Onas';
import Trenerzy from '../components/Trenerzy';
import Uslugi from '../components/Uslugi';
import Pytania from '../components/Pytania';
import KontaktHome from '../components/KontaktHome';
import { Link } from 'react-router-dom';

import img7 from '../images/glowne.png';
import img8 from '../images/maaain2.jpg';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Alternatywna sekcja główna */}
      <section
        id="home"
        className="relative h-[calc(100vh-60px)] w-full flex items-center justify-center"
      >
        {/* Tło obrazka */}
        <img
  src={img7}
  alt="Tło główne"
  className="ab inset-0 w-full h-full object-cover object-top opacity-90"
/>


        {/* Przezroczysty panel z treścią */}
        <div className="relative z-10 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4 leading-tight">
            Trenuj Mądrze <br /> z HAS Academy
          </h1>
          <p className="text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
            Profesjonsolutealny trening personalny i fizjoterapia w sercu Torunia.
            Kameralne studio, indywidualne podejście i realne efekty.
          </p>
          <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
            Umów się na konsultację
          </button>
        </div>

        {/* Overlay dla ciemniejszego efektu */}
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Reszta strony */}
      <Onas />
      <Trenerzy />
      <Uslugi />
      <Pytania />
      <KontaktHome />

      {/* Stopka */}
      <footer className="bg-black text-white py-4">
        <div className="flex justify-center items-center gap-4 text-sm flex-wrap text-center px-4">
          <span>&copy; 2025 HasAcademy. Wszelkie prawa zastrzeżone.</span>
          <span className="hidden sm:inline">|</span>
          <Link to="/polityka-prywatnosci" className="underline hover:text-orange-500">
            Polityka Prywatności
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
