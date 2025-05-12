// Kontakt.tsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';

import iconCall from "../icons/call.png";
import iconClock from "../icons/clock.png";
import iconEmail from "../icons/email.png";
import iconLocation from "../icons/location.png";
import iconLink from "../icons/link.png";
import logo from "../images/logoNobg.png";
import { Link } from 'react-router-dom';

const Kontakt: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_2reuyys',       // replace with your service ID
      'template_fphabvq',      // replace with your template ID
      formRef.current,
      '2wyY1eSPgy-VUtYgK'        // replace with your EmailJS public key
    )
    .then(() => {
      alert("Wiadomość została wysłana!");
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error('Email error:', error);
      alert("Wystąpił błąd podczas wysyłania wiadomości.");
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-6">Skontaktuj Się z Nami</h2>
          <p className="text-lg text-gray-700 mb-12">
            Masz pytania? Wypełnij formularz lub skontaktuj się z nami bezpośrednio – jesteśmy tu, by pomóc!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {/* Dane kontaktowe */}
            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg space-y-6">
              <div className="flex items-start space-x-4">
                <img src={iconLocation} alt="Lokalizacja" className="h-6 mt-1" />
                <div>
                  <p className="text-lg font-semibold">Adres:</p>
                  <p className="text-gray-700">ul. Podgórna 42, 87-100 Toruń</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src={iconCall} alt="Telefon" className="h-6 mt-1" />
                <div>
                  <p className="text-lg font-semibold">Telefon:</p>
                  <a href="tel:+48571287012" className="text-orange-500 hover:underline">+48 571 287 012</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src={iconEmail} alt="Email" className="h-6 mt-1" />
                <div>
                  <p className="text-lg font-semibold">Email:</p>
                  <a href="mailto:kontakt@hasacademy.pl" className="text-orange-500 hover:underline">kontakt@hasacademy.pl</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src={iconClock} alt="Godziny" className="h-6 mt-1" />
                <div>
                  <p className="text-lg font-semibold">Godziny otwarcia:</p>
                  <p className="text-gray-700">Poniedziałek – Piątek: 7:00 – 20:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src={iconLink} alt="Linki" className="h-6 mt-1" />
                <div>
                  <p className="text-lg font-semibold">Znajdź nas:</p>
                  <div className="flex space-x-4 mt-1">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formularz kontaktowy */}
            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">Formularz Kontaktowy</h3>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Imię i Nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                    placeholder="Wpisz swoje imię i nazwisko"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
                    placeholder="Wpisz swój email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">Wiadomość</label>
                  <textarea
                    id="message"
                    name="message"
                    required
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

          {/* Mapa */}
          <div className="w-full h-[400px] mt-16 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Has Academy Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.856371241016!2d18.594528515976296!3d53.01379058091486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703130ecac650d7%3A0x6c88f5f02439ed0f!2sPodg%C3%B3rna%2042%2C%2087-100%20Toru%C5%84%2C%20Polska!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <img src={logo} alt="HAS Academy Logo" className="h-32 w-auto" />
        </div>
      </div>

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
    </>
  );
};

export default Kontakt;
