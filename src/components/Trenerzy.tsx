import { useState } from "react";

interface Trainer {
  name: string;
  img: string;
  shortDesc: string;
  fullDesc: string;
}

const trainers: Trainer[] = [
  {
    name: "Paula",
    img: require("../images/2.jpg"), // You might need `import` if TypeScript complains
    shortDesc: "Trener personalny i specjalistka od przygotowania motorycznego.",
    fullDesc:
      "Cześć! Jestem Paula – trener personalny i specjalistka od przygotowania motorycznego, szczególnie w tenisie. Pomagam poprawić sprawność, sylwetkę i wyniki sportowe.",
  },
  {
    name: "Mateusz",
    img: require("../images/3.jpg"),
    shortDesc: "Trener i współwłaściciel HAS Academy, ekspert w treningu siłowym.",
    fullDesc:
      "Jako trener personalny i współwłaściciel HAS Academy, pomagam moim podopiecznym osiągnąć najwyższy poziom kondycji i siły, przygotowując ich do międzynarodowych zawodów.",
  },
  {
    name: "Jakub",
    img: require("../images/7.jpg"),
    shortDesc: "Trener medyczny, specjalista od rehabilitacji kolan i ścięgien.",
    fullDesc:
      "Jestem Jakub, trener medyczny, łączący fizjoterapię z treningiem. Specjalizuję się w rehabilitacji kolan i ścięgien, pomagając w zdrowieniu po kontuzjach.",
  },
  {
    name: "Aleks",
    img: require("../images/5.jpg"),
    shortDesc: "Specjalizuje się w treningu siłowym i regeneracyjnym.",
    fullDesc:
      "Jestem Aleks – trener personalny specjalizujący się w treningu siłowym i regeneracyjnym. Pomagam w rozwoju siły i wytrzymałości, a także w pracy z osobami trenującymi drużynowo.",
  },
];

const Trenerzy = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-8">Nasi Trenerzy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TrainerCardProps {
  trainer: Trainer;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={trainer.img} alt={`Trener ${trainer.name}`} className="w-full h-80 object-cover rounded-t-lg object-top" />
      <div className="p-6 text-center">
        <h3 className="text-3xl font-bold text-orange-500">{trainer.name}</h3>
        <p className="mt-2 text-gray-700">{showMore ? trainer.fullDesc : trainer.shortDesc}</p>
        <button
          className="mt-4 text-orange-500 font-semibold hover:underline transition duration-300"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Pokaż mniej" : "Czytaj więcej"}
        </button>
      </div>
    </div>
  );
};

export default Trenerzy;
