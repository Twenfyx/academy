// Cennik.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const Cennik: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto text-center py-20">
        <h2 className="text-5xl font-bold text-orange-500 mb-8">Nasza Oferta Cennikowa</h2>
        <p className="text-lg text-gray-700 mb-16">
          Oferujemy różnorodne usługi dostosowane do Twoich potrzeb. Wybierz opcję, która najlepiej odpowiada Twoim wymaganiom.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  
          <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
              <h3 className="text-3xl font-bold text-orange-500">Pojedynczy Trening</h3>
              <p className="mt-4 text-gray-700">Indywidualny trening personalny dostosowany do Twoich potrzeb.</p>
              <div className="text-2xl font-bold text-orange-500 mt-4">170 PLN</div>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
              <h3 className="text-3xl font-bold text-orange-500">Pakiet Treningowy</h3>
              <p className="mt-4 text-gray-700">Dla regularnych ćwiczących – elastyczny wybór liczby sesji.</p>
              <div className="text-2xl font-bold text-orange-500 mt-4">od 150 PLN</div>
            </div>
          </div>

   
          <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
              <h3 className="text-3xl font-bold text-orange-500">Trening w Parach</h3>
              <p className="mt-4 text-gray-700">Trenuj z partnerem i wspólnie osiągajcie cele.</p>
              <div className="text-2xl font-bold text-orange-500 mt-4">od 180 PLN</div>
            </div>
          </div>

       
          <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
              <h3 className="text-3xl font-bold text-orange-500">Fizjoterapia</h3>
              <p className="mt-4 text-gray-700">Profesjonalna pomoc w regeneracji i rehabilitacji.</p>
              <div className="text-2xl font-bold text-orange-500 mt-4">170 PLN</div>
            </div>
          </div>
        </div>

       
        <div className="mt-20 bg-orange-500 text-white py-12">
          <h3 className="text-3xl font-bold mb-4">Zacznij już teraz!</h3>
          <p className="text-lg mb-6">
            Nie czekaj – wybierz odpowiednią usługę i zacznij swoją podróż do lepszej formy. Skontaktuj się z nami już dziś!
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-500 px-6 py-3 text-lg font-semibold rounded-full hover:bg-orange-600 transition duration-200"
          >
            Skontaktuj się z nami
          </a>
        </div>
   
      <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-orange-500 mb-8">Najczęściej Zadawane Pytania</h3>
          <div className="max-w-3xl mx-auto text-left text-gray-700">
            <div className="mb-6">
              <h4 className="font-semibold">Czy mogę zmienić pakiet w trakcie trwania subskrypcji?</h4>
              <p>Oczywiście! Możesz w każdej chwili zmienić pakiet w zależności od swoich potrzeb.</p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold">Czy oferujecie próbne treningi?</h4>
              <p>Tak, oferujemy próbne sesje treningowe, abyś mógł wypróbować naszą ofertę przed podjęciem decyzji.</p>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold">Co zawiera dieta w pakiecie Standardowym i Premium?</h4>
              <p>W ramach diety dostosowanej do Twoich celów, zapewniamy pełne plany żywieniowe, w tym przepisy i porady dotyczące zdrowego odżywiania.</p>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-orange-500 mb-8">Opinie Naszych Klientów</h3>
          <div className="flex justify-center space-x-12">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs">
              <p className="text-gray-700 mb-4">"Dzięki pakietowi Premium poprawiłem swoją formę w zaledwie 2 miesiące! Trenerzy są profesjonalni i zawsze gotowi do pomocy." - Michał</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs">
              <p className="text-gray-700 mb-4">"Pakiet Standardowy to dla mnie idealne rozwiązanie. Cieszę się z postępów i indywidualnego podejścia!" - Agnieszka</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs">
              <p className="text-gray-700 mb-4">"Zdecydowanie polecam! Treningi są dostosowane do moich potrzeb, a efekty są widoczne!" - Jakub</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Cennik;
