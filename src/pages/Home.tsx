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
          <h1 className="text-4xl font-bold">Studio Treningu Persanalnego <br /> i Fizjoterapii</h1>
        
          {/* <p className="mt-4 text-lg">studio treningu persanalnego i fizjoterapii</p> */}
          <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600">Umów się</button>
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

      <div className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-orange-500 mb-8">Nasi Trenerzy</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Paula's Section */}
      <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
        <img src={require('../images/2.jpg')} alt="Trener Paula" className="w-full h-80 object-cover rounded-t-lg object-top" />
        <div className="p-6">
          <h3 className="text-3xl font-bold text-orange-500">Paula</h3>
          <p className="mt-4 text-gray-700">
            Cześć! Jestem Paula – trener personalny i specjalistka od przygotowania motorycznego, szczególnie w tenisie. Pomagam poprawić sprawność, sylwetkę i wyniki sportowe.
          </p>
        </div>
      </div>

      {/* Mateusz's Section */}
      <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
        <img src={require('../images/3.jpg')} alt="Trener Mateusz" className="w-full h-80 object-cover rounded-t-lg object-top" />
        <div className="p-6">
          <h3 className="text-3xl font-bold text-orange-500">Mateusz</h3>
          <p className="mt-4 text-gray-700">
            Cześć! Jako trener personalny i współwłaściciel HAS Academy, pomagam moim podopiecznym osiągnąć najwyższy poziom kondycji i siły, przygotowując ich do międzynarodowych zawodów.
          </p>
        </div>
      </div>

      {/* Jakub's Section */}
      <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
        <img src={require('../images/7.jpg')} alt="Trener Jakub" className="w-full h-80 object-cover rounded-t-lg object-top" />
        <div className="p-6">
          <h3 className="text-3xl font-bold text-orange-500">Jakub</h3>
          <p className="mt-4 text-gray-700">
            Cześć! Jestem Jakub, trener medyczny, łączący fizjoterapię z treningiem. Specjalizuję się w rehabilitacji kolan i ścięgien, pomagając w zdrowieniu po kontuzjach.
          </p>
        </div>
      </div>

      {/* Alex's Section */}
      <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl">
        <img src={require('../images/5.jpg')} alt="Trener Alex" className="w-full h-80 object-cover rounded-t-lg object-top" />
        <div className="p-6">
          <h3 className="text-3xl font-bold text-orange-500">Aleks</h3>
          <p className="mt-4 text-gray-700">
            Cześć! Jestem Aleks – trener personalny specjalizujący się w treningu siłowym i regeneracyjnym. Pomagam w rozwoju siły i wytrzymałości, a także w pracy z osobami trenującymi drużynowo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      
        <div className="py-20 bg-gray-100">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-orange-500 mb-8">Nasze Usługi</h2>
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
  </div>
</div>


<section id="contact" className="py-20  text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-8">Kontakt</h2>
          <p className="text-lg text-gray-700 mb-10">Masz pytania? Skontaktuj się z nami lub odwiedź nasze studio!</p>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Informacje kontaktowe */}
            <div className="lg:w-1/2 text-left">
              <h3 className="text-2xl font-bold mb-4">Informacje Kontaktowe</h3>
              <p className="text-lg text-gray-700">
                <strong>Adres:</strong> ul. Podgórna 42, 87-100 Toruń
              </p>
              <p className="text-lg text-gray-700 mt-4">
                <strong>Telefon:</strong> <a href="tel:+48571287012" className="text-orange-500 hover:underline">+48 22 333 4455</a>
              </p>
              <p className="text-lg text-gray-700 mt-4">
                <strong>Email:</strong> <a href="mailto:kontakt@hasacademy.pl" className="text-orange-500 hover:underline">kontakt@hasacademy.pl</a>
              </p>
            </div>

            {/* Mapa */}
            <div className="lg:w-1/2">
                        <iframe
              title="Has Academy Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.856371241016!2d18.594528515976296!3d53.01379058091486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703130ecac650d7%3A0x6c88f5f02439ed0f!2sPodg%C3%B3rna%2042%2C%2087-100%20Toru%C5%84%2C%20Polska!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%"
              height="300"
              className="rounded-lg shadow-lg"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>

            </div>
          </div>
        </div>
      </section>

      <div className="mt-20 text-center bg-gray-200 pt-8">
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
            <div className="pb-8">
              <h4 className="font-semibold">Co zawiera dieta w pakiecie Standardowym i Premium?</h4>
              <p>W ramach diety dostosowanej do Twoich celów, zapewniamy pełne plany żywieniowe, w tym przepisy i porady dotyczące zdrowego odżywiania.</p>
            </div>
          </div>
        </div>

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
