// App.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Sekcja Home */}
      <section id="home" className="pt-20 h-screen bg-cover bg-center text-white flex items-center justify-center bg-[url('./images/1.jpg')]">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Witamy w Naszej Siłowni</h1>
          <p className="mt-4 text-lg">Twoja przygoda z fitnessem zaczyna się tutaj. Dołącz do nas już dziś!</p>
          <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600">Dołącz teraz</button>
        </div>
      </section>

      {/* Sekcja Cennik */}
      <section id="price" className="py-20 bg-white text-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500">Nasze Plany Cenowe</h2>
          <p className="mt-4 text-lg">Przystępne plany członkowskie dla każdego.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Podstawowy */}
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Podstawowy</h3>
              <p className="mt-2 text-gray-700">100 zł/miesiąc</p>
              <ul className="mt-4 text-gray-600">
                <li>Dostęp do sprzętu siłowni</li>
                <li>1 darmowa sesja treningowa</li>
                <li>Dostęp do szatni</li>
              </ul>
            </div>
            {/* Plan Premium */}
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-orange-100">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="mt-2 text-gray-700">130 zł/miesiąc</p>
              <ul className="mt-4 text-gray-600">
                <li>Wszystkie funkcje planu podstawowego</li>
                <li>Nielimitowane zajęcia grupowe</li>
                <li>Dostęp do spa i sauny</li>
              </ul>
            </div>
            {/* Plan VIP */}
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">VIP</h3>
              <p className="mt-2 text-gray-700">160 /miesiąc</p>
              <ul className="mt-4 text-gray-600">
                <li>Wszystkie funkcje planu Premium</li>
                <li>Sesje z trenerem osobistym</li>
                <li>Prywatna szafka</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja O Nas */}
      <section id="about-us" className="py-20 bg-gray-200 text-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500">O Nas</h2>
          <p className="mt-4 text-lg">Dowiedz się więcej o naszej misji i wartościach.</p>
          <div className="mt-10 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold">Nasza Misja</h3>
              <p className="mt-4 text-gray-700">Naszym celem jest inspirowanie i wspieranie każdego w osiąganiu swojego potencjału fitness w przyjaznym i motywującym środowisku.</p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold">Dlaczego My?</h3>
              <p className="mt-4 text-gray-700">Dzięki nowoczesnym udogodnieniom i ekspertom-trenerom zapewniamy najlepsze warunki, aby pomóc Ci odnieść sukces.</p>
            </div>
          </div>
        </div>
      </section>

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
