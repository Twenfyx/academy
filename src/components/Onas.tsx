const Onas = () => {
  return (
    <section id="about-us" className="py-24 bg-gray-200 text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-orange-500 mb-6">O Nas</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Naszym celem jest inspirowanie, motywowanie i pomaganie w osiąganiu Twoich celów fitness.
        </p>

        {/* Mission & Why Us Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Nasza Misja */}
          <div className="flex flex-col items-center text-center md:text-left">
            <span className="text-5xl text-orange-500">🎯</span>
            <h3 className="text-3xl font-semibold text-gray-900 mt-4">Nasza Misja</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Chcemy stworzyć środowisko, w którym każdy może rozwijać swoją pasję do sportu, 
              poprawiać kondycję i czuć się świetnie w swoim ciele.
            </p>
          </div>

          {/* Dlaczego My? */}
          <div className="flex flex-col items-center text-center md:text-left">
            <span className="text-5xl text-orange-500">🏆</span>
            <h3 className="text-3xl font-semibold text-gray-900 mt-4">Dlaczego My?</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
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
