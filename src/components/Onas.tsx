import dumbbell from '../icons/dumbbell.png';
import badget from '../icons/badget.png';

const Onas = () => {
  return (
    <section id="about-us" className="py-28 bg-gradient-to-b from-gray-100 to-gray-200 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-orange-500 text-center mb-6">O Nas</h2>
        <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Poznaj naszą filozofię treningu i dowiedz się, dlaczego HAS Academy to coś więcej niż siłownia.
        </p>

        <div className="space-y-10 text-lg leading-relaxed text-gray-800">
          <p className="animate-fade-in-up">
            <strong>HAS Academy</strong> to najlepsze studio treningowe w Toruniu, które powstało z miłości do ruchu i chęci tworzenia przestrzeni, gdzie można poczuć się swobodnie. Tu nie trzeba być zawodowcem, żeby zacząć trenować – wystarczy chcieć zadbać o siebie.
          </p>
          <p className="animate-fade-in-up">
            Jesteśmy zespołem doświadczonych trenerów z pasją, którzy stawiają na mądre podejście do treningu, dopasowanego do Ciebie i Twoich celów. W świecie pełnym presji, pośpiechu i porównań – tworzymy bezpieczne miejsce, w którym możesz po prostu zacząć.
          </p>
          <p className="animate-fade-in-up">
            <strong>HAS Academy</strong> to także przestrzeń, w której zdrowie spotyka się z siłą – fizyczną i mentalną. Kameralna atmosfera sprawia, że każdy znajdzie tu swoje miejsce, niezależnie od wieku i poziomu.
          </p>
        </div>

        {/* Sekcja ikonek */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Misja */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img src={badget} alt="Nasza Misja" className="h-20 mb-6 drop-shadow-md" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nasza Misja</h3>
            <p className="text-gray-700 max-w-md">
              Edukujemy, wspieramy i inspirujemy. Chcemy, abyś czuł się dobrze – w ciele, w głowie i we własnym życiu. To podejście, które zostaje na lata, nie na chwilę.
            </p>
          </div>

          {/* Dlaczego My */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img src={dumbbell} alt="Dlaczego HAS Academy" className="h-20 mb-6 drop-shadow-md" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dlaczego HAS Academy?</h3>
            <p className="text-gray-700 max-w-md">
              Bo tu liczy się człowiek, nie liczby. Indywidualne podejście, brak tłumów, kameralna przestrzeń i realne wsparcie – to nie kolejna siłownia. To miejsce, w którym poczujesz się sobą.
            </p>
          </div>
        </div>

        {/* Finalne zdania */}
        <div className="mt-20 text-center text-gray-800 text-lg max-w-4xl mx-auto">
          <p className="mb-4">Pomagamy ludziom odzyskać kontrolę nad swoim ciałem, zdrowiem i samopoczuciem – bez presji i porównań.</p>
          <p className="mb-4">HAS Academy to więcej niż trening. To droga do większej siły – nie tylko fizycznej, ale też mentalnej.</p>
          <p className="font-semibold italic text-orange-600 text-xl mt-8">
            Tutaj wszystko kręci się wokół zdrowia i siły – takiej, jakiej akurat potrzebujesz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Onas;
