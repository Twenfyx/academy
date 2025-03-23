import { useState } from "react";
import logo from "../images/logo.jpg";

interface Trainer {
  name: string;
  img: string;
  shortDesc: string;
  fullDesc: string;
}

const trainers: Trainer[] = [
  {
    name: "Paula",
    img: require("../images/22.jpg"),
    shortDesc: "Trener personalny i specjalistka od przygotowania motorycznego.",
    fullDesc:
      "Cześć! Jestem Paula – trener personalny i specjalistka od przygotowania motorycznego, szczególnie w tenisie. Pomagam poprawić sprawność, sylwetkę i wyniki sportowe.",
  },

  {
    name: "Jakub",
    img: require("../images/77.jpg"),
    shortDesc: "Trener medyczny, specjalista od rehabilitacji kolan i ścięgien.",
    fullDesc:
      "Jestem Jakub, trener medyczny, łączący fizjoterapię z treningiem. Specjalizuję się w rehabilitacji kolan i ścięgien, pomagając w zdrowieniu po kontuzjach.",
  },
  {
    name: "Aleks",
    img: require("../images/55.jpg"),
    shortDesc: "Specjalizuje się w treningu siłowym i regeneracyjnym.",
    fullDesc:
      "Jestem Aleks – trener personalny specjalizujący się w treningu siłowym i regeneracyjnym. Pomagam w rozwoju siły i wytrzymałości, a także w pracy z osobami trenującymi drużynowo.",
  },
];

const Trenerzy = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center">
       

        <h2 className="text-4xl font-extrabold text-orange-500 mb-16">Nasi Trenerzy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} />
          ))}
        </div>
         {/* Logo Section */}
         <div className="flex justify-center mt-16">
          <img src={logo} alt="HAS Academy Logo" className="h-32 w-auto" />
        </div>
      </div>
    </div>
  );
};

interface TrainerCardProps {
  trainer: Trainer;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
      <div className="relative w-40 h-40 mb-6">
        <img
          src={trainer.img}
          alt={`Trener ${trainer.name}`}
          className="w-full h-full object-cover rounded-full border-4 border-orange-500 shadow-xl"
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{trainer.name}</h3>
      <p className="text-gray-600 text-lg">{trainer.shortDesc}</p>
    </div>
  );
};

export default Trenerzy;
