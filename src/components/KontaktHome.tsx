const KontaktHome = () => {
  return (
    <section id="contact" className="py-20 bg-gray-200 text-black">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-6">Kontakt</h2>
        <p className="text-lg text-gray-700 mb-12">
          Masz pytania? Skontaktuj się z nami lub odwiedź nasze studio!
        </p>

        {/* Two-column layout without boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="text-left space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-orange-500 text-2xl">📍</span>
              <p className="text-lg text-gray-700">
                <strong>Adres:</strong> ul. Podgórna 42, 87-100 Toruń
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-orange-500 text-2xl">📞</span>
              <p className="text-lg text-gray-700">
                <strong>Telefon:</strong>{" "}
                <a href="tel:+48571287012" className="text-orange-500 font-medium hover:underline">
                  +48 22 333 4455
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-orange-500 text-2xl">📧</span>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:kontakt@hasacademy.pl" className="text-orange-500 font-medium hover:underline">
                  kontakt@hasacademy.pl
                </a>
              </p>
            </div>
          </div>

          {/* Right: Map without a box */}
          <div className="w-full">
            <iframe
              title="Has Academy Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.856371241016!2d18.594528515976296!3d53.01379058091486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703130ecac650d7%3A0x6c88f5f02439ed0f!2sPodg%C3%B3rna%2042%2C%2087-100%20Toru%C5%84%2C%20Polska!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%"
              height="300"
              className="rounded-lg shadow-lg transition duration-300 hover:shadow-xl"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontaktHome;
