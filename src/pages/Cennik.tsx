// Cennik.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const Cennik: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-orange-500 text-center mb-8">Cennik Treningów</h2>

        {/* Treningi Personalne */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Pakiety Treningów Personalnych</h3>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-3 px-4">Ilość / tydzień</th>
                <th className="py-3 px-4">1 miesiąc</th>
                <th className="py-3 px-4">2 miesiące</th>
                <th className="py-3 px-4">3 miesiące</th>
                <th className="py-3 px-4">Cena za trening</th>
              </tr>
            </thead>
            <tbody className="text-center text-gray-700">
              <tr className="border-t">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">676 zł</td>
                <td className="py-2 px-4">845 zł</td>
                <td className="py-2 px-4">x</td>
                <td className="py-2 px-4">149 zł</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">1192 zł</td>
                <td className="py-2 px-4">x</td>
                <td className="py-2 px-4">x</td>
                <td className="py-2 px-4">159 zł</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">3</td>
                <td className="py-2 px-4">1272 zł</td>
                <td className="py-2 px-4">x</td>
                <td className="py-2 px-4">x</td>
                <td className="py-2 px-4">169 zł</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2 italic">* Płatność miesięczna z góry</p>
        </div>

        {/* Treningi Grupowe */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Treningi Grupowe</h3>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-3 px-4">Liczba osób</th>
                <th className="py-3 px-4">Cena za osobę</th>
                <th className="py-3 px-4">Cena miesięczna</th>
              </tr>
            </thead>
            <tbody className="text-center text-gray-700">
              <tr className="border-t">
                <td className="py-2 px-4">2 osoby</td>
                <td className="py-2 px-4">90 zł</td>
                <td className="py-2 px-4">360 zł</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">3 osoby</td>
                <td className="py-2 px-4">80 zł</td>
                <td className="py-2 px-4">320 zł</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">4 osoby</td>
                <td className="py-2 px-4">70 zł</td>
                <td className="py-2 px-4">280 zł</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">5+ osób</td>
                <td className="py-2 px-4">50 zł</td>
                <td className="py-2 px-4">250 zł</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Rehabilitacja */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Rehabilitacja</h3>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-3 px-4">Opcja</th>
                <th className="py-3 px-4">Cena</th>
              </tr>
            </thead>
            <tbody className="text-center text-gray-700">
              <tr className="border-t">
                <td className="py-2 px-4">1 wizyta</td>
                <td className="py-2 px-4">170 zł</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">Pakiet 7 + 1</td>
                <td className="py-2 px-4">1190 zł</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="bg-orange-600 text-white py-12 px-6 rounded-xl text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Zacznij już teraz!</h3>
          <p className="mb-6 text-lg">Wybierz najlepszą opcję i skontaktuj się z nami, aby rozpocząć swoją przygodę z HAS Academy.</p>
          <a
            href="/contact"
            className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
          >
            Skontaktuj się z nami
          </a>
        </div>

        {/* Opinie */}
        <div className="mt-24 text-center">
          <h3 className="text-4xl font-extrabold text-orange-500 mb-10">Opinie Naszych Klientów</h3>
          <div className="flex justify-center gap-12 flex-wrap">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-xs">
              <p className="text-gray-700 mb-4">
                "Paulina to trenerka z pasją. Pilnuje treningów, diety i naprawdę chce pomóc. Zero ściemy, pełen profesjonalizm!" - Rafał
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-xs">
              <p className="text-gray-700 mb-4">
                "Trenuję z Pauliną od dawna i efekty są świetne. Motywuje, wspiera, a atmosfera w HAS Academy jest mega!" - Kasia
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-xs">
              <p className="text-gray-700 mb-4">
                "Miałem problem z plecami – zniknął po kilku spotkaniach! Indywidualne podejście i ogromna wiedza." - Tomek
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-4">
        <div className="text-center">
          <p className="text-sm">&copy; 2024 HasAcademy. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cennik;
