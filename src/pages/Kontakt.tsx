import React from 'react';
import Navbar from '../components/Navbar';

const Kontakt: React.FC = () => {
  return (
    <>
        <Navbar />
    <div className="bg-orange-500 text-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Skontaktuj Się z Nami</h2>
        <p className="text-lg mb-12">
          Masz pytania? Chętnie pomożemy! Skontaktuj się z nami za pomocą poniższych danych lub wypełnij formularz kontaktowy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Contact Information */}
          <div className="bg-white text-orange-500 rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Dane Kontaktowe</h3>
            <p className="mb-2"><span className="font-semibold">Adres:</span> Ul. Fitnessowa 12, 00-123 Warszawa</p>
            <p className="mb-2"><span className="font-semibold">Telefon:</span> +48 123 456 789</p>
            <p><span className="font-semibold">Email:</span> kontakt@fitstudio.pl</p>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-orange-500 rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Formularz Kontaktowy</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Imię i Nazwisko</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                  placeholder="Wpisz swoje imię i nazwisko"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                  placeholder="Wpisz swój email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Wiadomość</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                  placeholder="Wpisz swoją wiadomość"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200"
              >
                Wyślij Wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Kontakt;
