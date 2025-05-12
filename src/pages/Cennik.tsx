// Cennik.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import logo from "../images/logoNobg.png";
import { Link } from 'react-router-dom';
const Cennik: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto pt-24 px-4">
          <h2 className="text-4xl font-extrabold text-orange-500 text-center mb-12">
            Cennik Treningów
          </h2>

          {/* Treningi Personalne */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pakiety Treningów Personalnych</h3>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-orange-500 text-white text-sm uppercase tracking-wide">
                  <tr>
                    <th className="py-3 px-6 text-left">Ilość</th>
                    <th className="py-3 px-6 text-left">Ważność</th>
                    <th className="py-3 px-6 text-left">Ilość w tygodniu</th>
                    <th className="py-3 px-6 text-left">Cena za trening</th>
                    <th className="py-3 px-6 text-left">Cena za miesiąc</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-t even:bg-gray-50 hover:bg-orange-50 transition">
                    <td className="py-3 px-6">4/5</td>
                    <td className="py-3 px-6">1 miesiąc</td>
                    <td className="py-3 px-6">1</td>
                    <td className="py-3 px-6">169 zł</td>
                    <td className="py-3 px-6">676 / 845 zł</td>
                  </tr>
                  <tr className="border-t even:bg-gray-50 hover:bg-orange-50 transition">
                    <td className="py-3 px-6">16</td>
                    <td className="py-3 px-6">2 miesiące</td>
                    <td className="py-3 px-6">2</td>
                    <td className="py-3 px-6">159 zł</td>
                    <td className="py-3 px-6">1272 zł</td>
                  </tr>
                  <tr className="border-t even:bg-gray-50 hover:bg-orange-50 transition">
                    <td className="py-3 px-6">24</td>
                    <td className="py-3 px-6">3 miesiące</td>
                    <td className="py-3 px-6">2/3</td>
                    <td className="py-3 px-6">149 zł</td>
                    <td className="py-3 px-6">1192 zł</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Treningi Grupowe */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Treningi Grupowe</h3>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-orange-500 text-white text-sm uppercase tracking-wide">
                  <tr>
                    <th className="py-3 px-6 text-left">Liczba osób</th>
                    <th className="py-3 px-6 text-left">Cena za osobę</th>
                    <th className="py-3 px-6 text-left">Cena miesięczna</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-t even:bg-gray-50 hover:bg-orange-50 transition">
                    <td className="py-3 px-6">2 osoby</td>
                    <td className="py-3 px-6">90 zł</td>
                    <td className="py-3 px-6">360 zł</td>
                  </tr>
                  <tr className="border-t even:bg-gray-50 hover:bg-orange-50 transition">
                    <td className="py-3 px-6">3 osoby</td>
                    <td className="py-3 px-6">80 zł</td>
                    <td className="py-3 px-6">320 zł</td>
                  </tr>
                  <tr className="border-t even:bg-gray-50 hover:bg-orange-50 transition">
                    <td className="py-3 px-6">4 osoby</td>
                    <td className="py-3 px-6">70 zł</td>
                    <td className="py-3 px-6">280 zł</td>
                  </tr>
                  <tr className="border-t even:bg-gray-50 hover:bg-orange-50 transition">
                    <td className="py-3 px-6">5+ osób</td>
                    <td className="py-3 px-6">50 zł</td>
                    <td className="py-3 px-6">250 zł</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Rehabilitacja */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Rehabilitacja</h3>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-orange-500 text-white text-sm uppercase tracking-wide">
                  <tr>
                    <th className="py-3 px-6 text-left">Opcja</th>
                    <th className="py-3 px-6 text-left">Cena za trening</th>
                    <th className="py-3 px-6 text-left">Cena za miesiąc</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  <tr className="border-t even:bg-gray-50 hover:bg-orange-50 transition">
                    <td className="py-3 px-6">1 wizyta</td>
                    <td className="py-3 px-6">170 zł</td>
                    <td className="py-3 px-6">X</td>
                  </tr>
                  <tr className="border-t even:bg-gray-50 hover:bg-orange-50 transition">
                    <td className="py-3 px-6">Pakiet 7 + 1</td>
                    <td className="py-3 px-6">149 zł</td>
                    <td className="py-3 px-6">1190 zł</td>
                  </tr>
                </tbody>
              </table>
            </div>
              <p className="text-sm text-gray-500 mt-2 italic">* Płatność miesięczna z góry</p>
          </div>

          {/* CTA */}
          <div className="bg-orange-500 text-white py-14 px-8 rounded-3xl text-center shadow-2xl mt-20">
            <h3 className="text-3xl font-bold mb-4">Zacznij już teraz!</h3>
            <p className="mb-6 text-lg">
              Wybierz najlepszą opcję i skontaktuj się z nami, aby rozpocząć swoją przygodę z HAS Academy.
            </p>
            <a
              href="/contact"
              className="bg-white text-orange-500 font-semibold px-10 py-4 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition"
            >
              Skontaktuj się z nami
            </a>
          </div>

          {/* Opinie */}
          <div className="mt-28 text-center">
            <h3 className="text-4xl font-extrabold text-orange-500 mb-12">Opinie Naszych Klientów</h3>
            <div className="flex justify-center gap-10 flex-wrap">
              {[
                `"Paulina to trenerka z pasją. Pilnuje treningów, diety i naprawdę chce pomóc. Zero ściemy, pełen profesjonalizm!" - Rafał`,
                `"Trenuję z Pauliną od dawna i efekty są świetne. Motywuje, wspiera, a atmosfera w HAS Academy jest mega!" - Kasia`,
                `"Miałem problem z plecami – zniknął po kilku spotkaniach! Indywidualne podejście i ogromna wiedza." - Tomek`,
              ].map((opinia, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 max-w-xs border border-gray-200 hover:shadow-2xl transition"
                >
                  <p className="text-gray-700">{opinia}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center my-20">
            <img src={logo} alt="HAS Academy Logo" className="h-32 w-auto" />
          </div>

          {/* Footer */}
         
        </div>
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
    </>
  );
};

export default Cennik;
