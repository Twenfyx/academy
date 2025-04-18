// Cennik.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import KontaktHome from '../components/KontaktHome';

const Cennik: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      

        <div className="max-w-7xl mx-auto text-center py-20">
  <h2 className="text-4xl font-extrabold text-orange-500 mb-6">Nasza Oferta Cennikowa</h2>
  <p className="text-lg text-gray-700 mb-16">
    Oferujemy różnorodne formy treningów dopasowane do Twoich potrzeb i możliwości. Sprawdź, która opcja będzie dla Ciebie najlepsza.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
      <div className="p-6">
        <h3 className="text-3xl font-bold text-orange-500">Treningi Personalne Indywidualne</h3>
        <p className="mt-4 text-gray-700">
          Godzinne treningi pod okiem wykwalifikowanego Trenera – w pełni dopasowane do Twoich celów.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
      <div className="p-6">
        <h3 className="text-3xl font-bold text-orange-500">Treningi Przygotowania Motorycznego</h3>
        <p className="mt-4 text-gray-700">
          Idealne dla osób aktywnych – zarówno zawodowców, jak i pasjonatów sportu, którzy chcą poprawić swoje wyniki.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
      <div className="p-6">
        <h3 className="text-3xl font-bold text-orange-500">Treningi w Parze</h3>
        <p className="mt-4 text-gray-700">
          Trenuj z bliską osobą – koleżanką, partnerem, siostrą czy synem. Wspólna motywacja to klucz do sukcesu!
        </p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
      <div className="p-6">
        <h3 className="text-3xl font-bold text-orange-500">Treningi Grupowe</h3>
        <p className="mt-4 text-gray-700">
          Kameralne grupy od 4 do 8 osób – dynamiczne i motywujące zajęcia w świetnej atmosferze.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl md:col-span-2">
      <div className="p-6">
        <h3 className="text-3xl font-bold text-orange-500">Treningi Medyczne i Rehabilitacja</h3>
        <p className="mt-4 text-gray-700">
          Dla osób z problemami układu ruchu, w trakcie powrotu do sprawności lub potrzebujących kompleksowej rehabilitacji.
        </p>
      </div>
    </div>
  </div>



       
        <div className="mt-24 bg-orange-600 text-white py-16 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-6">Zacznij już teraz!</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Nie czekaj – wybierz odpowiednią usługę i zacznij swoją podróż do lepszej formy. Skontaktuj się z nami już dziś!
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-600 px-8 py-4 text-lg font-semibold rounded-full shadow-md hover:bg-orange-500 transition duration-200"
          >
            Skontaktuj się z nami
          </a>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-4xl font-extrabold text-orange-500 mb-10">Opinie Naszych Klientów</h3>
          <div className="flex justify-center gap-12 flex-wrap">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-xs">
              <p className="text-gray-700 mb-4">"Dzięki pakietowi Premium poprawiłem swoją formę w zaledwie 2 miesiące! Trenerzy są profesjonalni i zawsze gotowi do pomocy." - Michał</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-xs">
              <p className="text-gray-700 mb-4">"Pakiet Standardowy to dla mnie idealne rozwiązanie. Cieszę się z postępów i indywidualnego podejścia!" - Agnieszka</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-xs">
              <p className="text-gray-700 mb-4">"Zdecydowanie polecam! Treningi są dostosowane do moich potrzeb, a efekty są widoczne!" - Jakub</p>
            </div>
          </div>
        </div>

       
        </div>
        {/* <KontaktHome /> */}
        <footer className="bg-black text-white py-4">
        <div className="text-center">
          <p className="text-sm">&copy; 2024 HasAcademy. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cennik;
