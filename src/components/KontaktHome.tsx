
const KontaktHome = () =>{
    return(
        <>
        <section id="contact" className="py-20 bg-gray-200 text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-8">Kontakt</h2>
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
      </>
    )
}

export default KontaktHome;