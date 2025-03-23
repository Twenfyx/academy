import dumbbell from '../icons/dumbbell.png';
import badget from '../icons/badget.png';

const Onas = () => {
  return (
    <section id="about-us" className="py-24 bg-gray-200 text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-12">O Nas</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Naszym celem jest inspirowanie, motywowanie i pomaganie w osiąganiu Twoich celów fitness.
        </p>

        {/* Mission & Why Us Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 justify-center">
          {/* Nasza Misja */}
          <div className="flex flex-col items-center text-center">
            <img
              src={badget}
              alt="Nasza Misja"
              className="h-16 mb-6 transform transition-all duration-300 hover:scale-110"
            />
            <h3 className="text-3xl font-semibold text-gray-900">Nasza Misja</h3>
            <p className="mt-3 text-gray-700 leading-relaxed max-w-lg mx-auto">
              Naszym celem jest stworzenie przestrzeni, w której każdy może rozwijać pasję do sportu, 
              poprawiać kondycję i czuć się świetnie w swoim ciele.
            </p>
          </div>

          {/* Dlaczego My? */}
          <div className="flex flex-col items-center text-center">
            <img
              src={dumbbell}
              alt="Dlaczego My"
              className="h-16 mb-6 transform transition-all duration-300 hover:scale-110"
            />
            <h3 className="text-3xl font-semibold text-gray-900">Dlaczego My?</h3>
            <p className="mt-3 text-gray-700 leading-relaxed max-w-lg mx-auto">
              Profesjonalni trenerzy, nowoczesne podejście i indywidualne wsparcie – 
              wszystko po to, abyś mógł osiągnąć swoje cele szybciej i efektywniej.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onas;
