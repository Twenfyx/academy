import { useState } from "react";
import logo from "../images/logo.jpg";

const faqData = [
  {
    question: "Czy mogę zmienić pakiet w trakcie trwania subskrypcji?",
    answer: "Oczywiście! Możesz w każdej chwili zmienić pakiet w zależności od swoich potrzeb.",
  },
  {
    question: "Czy oferujecie próbne treningi?",
    answer: "Tak, oferujemy próbne sesje treningowe, abyś mógł wypróbować naszą ofertę przed podjęciem decyzji.",
  },
  {
    question: "Co zawiera dieta w pakiecie Standardowym i Premium?",
    answer: "W ramach diety dostosowanej do Twoich celów, zapewniamy pełne plany żywieniowe, w tym przepisy i porady dotyczące zdrowego odżywiania.",
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
