import { Card } from "./Card";
import { useTheme, useLanguage } from "../context/ContextProvider";

interface CardData {
  image: string;
  title: string;
}

interface CardContainerProps {
  cards: CardData[];
}

export const CardContainer = ({ cards }: CardContainerProps) => {
  const { darkTheme } = useTheme();
  const { language } = useLanguage();

  const translations = {
    title: language === "es" ? "Mis Proyectos" : "My Projects",
  };

  return (
    <section className={`px-6 py-20 md:px-20 lg:px-32 transition-colors duration-300 ${
      darkTheme ? "bg-blue-950 border-slate-800" : "bg-gray-50 border-gray-100"
    } border-t`}>
      <div className="mb-12 text-center md:text-left">
        <h2 className={`text-3xl font-extrabold md:text-5xl ${
          darkTheme ? "text-white" : "text-gray-900"
        }`}>
          {translations.title}
        </h2>
        <div className="mt-4 h-1.5 w-20 rounded-full bg-blue-600 mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} />
        ))}
      </div>
    </section>
  );
};
