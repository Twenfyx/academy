import { useState } from "react";
import logo from "../images/logo.jpg";

const faqData = [
  {
    question: "Czego mogę oczekiwać od naszej współpracy?",
    answer: "Przede wszystkim indywidualnego podejścia, dostosowanego do Twoich możliwości, celów i stylu życia. Niezależnie od tego, czy celem jest poprawa sylwetki, powrót do sprawności po kontuzji, zbudowanie siły czy po prostu lepsze samopoczucie – otrzymasz plan skrojony na miarę, oparty na aktualnej wiedzy i doświadczeniu. Naszym celem jest nie tylko pomóc Ci osiągnąć założony rezultat, ale też pokazać, jak mądrze i długofalowo dbać o siebie.",
  },
  {
    question: "Jak zapisać się na pierwszy trening personalny?",
    answer: "Możesz zapisać się kontaktując się z nami bezpośrednio pod numerem telefonu: +48 571 287 012, poprzez nasze social media lub przez stronę boksy.",
  },
  {
    question: "Jakie są godziny otwarcia studia?",
    answer: "Działamy od poniedziałku do piątku w godzinach 7:00 - 20:00.",
  },
  {
    question: "Czym różni się studio treningowe od siłowni?",
    answer: "Studio treningowe to kameralna przestrzeń, w której priorytetem jest indywidualne podejście i komfort osób trenujących. W przeciwieństwie do klasycznej siłowni, nie ma tu tłumów, kolejek do sprzętu ani przypadkowych osób. Każdy trening odbywa się pod okiem trenera lub w małej, maksymalnie kilkuosobowej grupie, co pozwala skupić się na technice, bezpieczeństwie i realnym progresie. W studio HAS Academy nie ma przypadkowych ćwiczeń – każdy plan jest przemyślany i dopasowany. Tu liczy się jakość, nie ilość.",
  },
  {
    question: "Jakie są zasady odwoływania lub zmiany terminu treningu?",
    answer: "Wszystkie zasady opisane są w regulaminie. Najważniejszą jest zasada o odwołaniu treningu 24 godziny przed jego planowaną godziną rozpoczęcia.",
  },
  {
    question: "Czy honorujecie karty sportowe, takie jak MultiSport?",
    answer: "Nie, u nas można zakupić karnety na treningi personalne oferowane indywidualnie (cennik w zakładce dalej).",
  },
  {
    question: "Czy oferujecie treningi online?",
    answer: "Jeśli trener wyrazi zgodę, to tak.",
  },
  {
    question: "Jak przygotować się do pierwszego treningu?",
    answer: "Zabierz strój sportowy, buty na zmianę, ręcznik i dobry humor – resztą zajmiemy się my!",
  },
  {
    question: "Czy brak doświadczenia z „siłownią” to problem?",
    answer: "Absolutnie nie. Większość osób, z którymi pracujemy, zaczynała dokładnie w tym samym miejscu – bez doświadczenia, czasem z obawą, że „nie ogarnie” lub że „to nie dla niej/niego”. Naszym zadaniem jest poprowadzić Cię krok po kroku – w prosty, zrozumiały i bezpieczny sposób. Tłumaczymy, pokazujemy, korygujemy, wspieramy. Bez presji i oceniania. Uczysz się w swoim tempie, a każdy trening daje coraz więcej pewności i swobody. Nie trzeba nic wiedzieć na start – wystarczy chęć, a resztą zajmiemy się razem.",
  },
];


const Pytania = () => {
  return (
    <div className="my-20 text-center pt-8">
      {/* Logo Section */}
     

      <h3 className="text-4xl font-extrabold text-orange-500 mb-12">Najczęściej Zadawane Pytania</h3>
      <div className="max-w-3xl mx-auto text-left text-gray-700 space-y-4">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <img src={logo} alt="HAS Academy Logo" className="h-32 w-auto" />
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-gray-300 rounded-lg p-4 transition-all duration-300 hover:shadow-md cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">{question}</h4>
        <span className="text-orange-500 text-xl">{isOpen ? "−" : "+"}</span>
      </div>
      <p className={`mt-2 text-gray-600 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
        {isOpen && answer}
      </p>
    </div>
  );
};

export default Pytania;
