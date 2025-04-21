import img1 from '../images/gr2.png';
import img2 from '../images/gr1.jpeg';
import img3 from '../images/gr3R.jpeg';
import img4 from '../images/paula1.jpeg';
import img5 from '../images/paula2R.jpeg';
import img6 from '../images/paula3R.jpeg';
import img7 from '../images/paula4.jpeg';
import img8 from '../images/gr4.jpeg';

const Onas = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="container mx-auto p-6 max-w-screen-lg">
      <h2 className="text-4xl font-extrabold text-orange-500 mb-16 mt-12 text-center">O NAS</h2>
        {/* Pierwszy blok: tekst - zdjęcie */}
        <div className="flex flex-col lg:flex-row items-center mb-6">
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">| HAS Academy</h2>
            <p className="text-lg text-gray-700">
              HAS Academy to najlepsze studio treningowe w Toruniu, które powstało z miłości do ruchu i chęci tworzenia przestrzeni,
              gdzie można poczuć się swobodnie. Tu nie trzeba być zawodowcem, żeby zacząć trenować – wystarczy chcieć zadbać o siebie.
            </p>
          </div>
          <div className="lg:w-1/2 p-6">
            <img
              src={img6} // Podmień na rzeczywistą ścieżkę do zdjęcia
              alt="HAS Academy"
              className="h-96 rounded-lg shadow-lg float-right  "
            />
          </div>
        </div>

        {/* Drugi blok: zdjęcie - tekst */}
        <div className="flex flex-col lg:flex-row items-center mb-6">
          <div className="lg:w-1/2 p-6">
            <img
              src={img3} // Podmień na rzeczywistą ścieżkę do zdjęcia
              alt="HAS Academy"
              className="h-96 rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">| Nasza Misja</h2>
            <p className="text-lg text-gray-700">
              Naszą misją jest edukować o treningu i podejściu do treningu, by poczuć się lepiej – w swoim ciele, w swojej głowie
              i we własnym życiu. Wspierać – kiedy jest ciężko, kiedy motywacja siada, kiedy trzeba wrócić po przerwie. I inspirować
              do trwałych zmian, które zostaną z Tobą na dłużej. Nie na miesiąc. Na lata.
            </p>
          </div>
        </div>

        {/* Trzeci blok: tekst - zdjęcie */}
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">| Dlaczego treningi w HAS Academy?</h2>
            <p className="text-lg text-gray-700">
              Bo tu liczy się człowiek, nie wynik na zegarku. HAS Academy to miejsce, w którym trening dopasowuje się do osoby, a
              nie odwrotnie. Bez spiny, za to z ogromnym wsparciem, wiedzą i pozytywną atmosferą. Wyróżnia nas indywidualne podejście,
              kameralna przestrzeń na wysokim poziomie, brak tłumów i konkretne podejście do celu. Każdy krok – od pierwszego wejścia po
              kolejne tygodnie – jest przemyślany i prowadzony z uważnością.
            </p>
          </div>
          <div className="lg:w-1/2 p-6">
            <img
              src={img5} // Podmień na rzeczywistą ścieżkę do zdjęcia
              alt="Trening w HAS Academy"
              className="h-96 rounded-lg shadow-lg float-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onas;
