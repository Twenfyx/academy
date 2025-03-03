// App.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Onas from '../components/Onas';
import Trenerzy from '../components/Trenerzy';
import Uslugi from '../components/Uslugi';
import Pytania from '../components/Pytania';
import KontaktHome from '../components/KontaktHome';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Sekcja Home */}
      <section id="home" className="pt-20 h-screen bg-cover bg-center text-white flex items-center justify-center bg-[url('./images/1.jpg')]">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Studio Treningu Persanalnego <br /> i Fizjoterapii</h1>
          <button className="text-base mt-8 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600">Umów się</button>
        </div>
      </section>

     <Onas />
     <Trenerzy />
    <Uslugi />
    <Pytania />
    <KontaktHome />

      
      {/* Stopka */}
      <footer className="bg-black text-white py-4">
        <div className="text-center">
          <p className="text-sm">&copy; 2024 HasAcademy. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
      
    </div>
  );
};

export default Home;
