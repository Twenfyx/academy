import React from 'react';
import img3 from '../images/22.jpg';
import img5 from '../images/paula2R.jpeg'; // Currently unused
import img6 from '../images/6R.jpg';


const Onas = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-orange-500 mb-8 text-center tracking-tight">
          O Nas
        </h2>
        <p className="text-base sm:text-lg text-gray-800 text-center max-w-3xl mx-auto mb-14 leading-relaxed tracking-wide">
          <span className="font-semibold">HAS Academy</span> to wyjątkowe studio treningowe w Toruniu,
          stworzone z <span className="italic">miłości do ruchu</span> i potrzeby wspierania innych. 
          Naszą misją jest <span className="text-orange-500 font-semibold">inspirowanie do trwałych zmian</span> — poprzez wiedzę, atmosferę i indywidualne podejście. 
          Tu nie musisz być zawodowcem – wystarczy chcieć zrobić pierwszy krok.
        </p>

        {/* Sekcja 1: Tekst + zdjęcie */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">| Indywidualne podejście</h3>
            <p className="text-base text-gray-800 leading-relaxed tracking-wide">
              W HAS Academy skupiamy się na <span className="font-semibold">Tobie</span> – Twoich potrzebach, możliwościach i celach. 
              Nasze treningi są <span className="italic">dopasowane do Ciebie</span>, a nie odwrotnie.
              Kameralna przestrzeń, indywidualna uwaga i brak tłumów sprzyjają <span className="text-orange-500 font-medium">komfortowi i skupieniu</span>.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={img6}
              alt="Trener prowadzący zajęcia"
              className="w-full h-auto max-h-[380px] object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* Sekcja 2: Zdjęcie + tekst */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src={img3}
              alt="Trening w grupie"
              className="w-full h-auto max-h-[380px] object-cover rounded-xl shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">| Wsparcie i motywacja</h3>
            <p className="text-base text-gray-800 leading-relaxed tracking-wide">
              Jesteśmy z Tobą <span className="italic">na każdym etapie</span> – od pierwszego wejścia po kolejne tygodnie treningów. 
              Nasz zespół troszczy się o Twoją <span className="text-orange-500 font-medium">motywację, rozwój i dobre samopoczucie</span>. 
              Trenuj w miejscu, gdzie naprawdę liczy się <span className="font-semibold">człowiek</span>, nie wynik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onas;
