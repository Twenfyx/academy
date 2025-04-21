import iconCall from "../icons/call.png";
import iconClock from "../icons/clock.png";
import iconEmail from "../icons/email.png";
import iconLocation from "../icons/location.png";
import iconLink from "../icons/link.png";

const KontaktHome = () => {
  return (
    <section id="contact" className="bg-gray-100 text-black">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-4">Kontakt</h2>
        <p className="text-lg text-gray-700 mb-12">
          Masz pytania? Skontaktuj się z nami lub odwiedź nasze studio — chętnie pomożemy!
        </p>

        {/* Two-Column Grid */}
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">

          {/* Column 1 */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-start space-x-4">
              <img src={iconLocation} alt="Ikona lokalizacji" className="h-6 mt-1" />
              <div>
                <p className="text-lg font-semibold">Adres:</p>
                <p className="text-gray-700">ul. Podgórna 42, 87-100 Toruń</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img src={iconCall} alt="Ikona telefonu" className="h-6 mt-1" />
              <div>
                <p className="text-lg font-semibold">Telefon:</p>
                <a href="tel:+48223334455" className="text-orange-500 hover:underline hover:text-orange-600 transition">
                  +48 571 287 012
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img src={iconEmail} alt="Ikona email" className="h-6 mt-1" />
              <div>
                <p className="text-lg font-semibold">Email:</p>
                <a href="mailto:kontakt@hasacademy.pl" className="text-orange-500 hover:underline hover:text-orange-600 transition">
                  kontakt@hasacademy.pl
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-start space-x-4">
              <img src={iconClock} alt="Ikona zegara" className="h-6 mt-1" />
              <div>
                <p className="text-lg font-semibold">Godziny otwarcia:</p>
                <p className="text-gray-700">Poniedziałek – Piątek: 7:00 – 20:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img src={iconLink} alt="Ikona linku" className="h-6 mt-1" />
              <div>
                <p className="text-lg font-semibold">Znajdź nas:</p>
                <div className="flex space-x-4 mt-1">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline hover:text-orange-600 transition"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline hover:text-orange-600 transition"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Map */}
      <div className="w-full h-[400px]">
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
    </section>
  );
};

export default KontaktHome;
