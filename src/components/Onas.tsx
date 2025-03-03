
const Onas = () =>{
    return(
        <>
         {/* Sekcja O Nas */}
      <section id="about-us" className="py-20 bg-gray-200 text-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-orange-500">O Nas</h2>
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
        </>
    )
}

export default Onas;