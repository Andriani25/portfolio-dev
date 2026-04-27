import { Link } from "react-router";
import { useTheme } from "../context/ContextProvider";

interface CardProps {
  image: string;
  title: string;
}

export const Card = ({ image, title }: CardProps) => {
  const { darkTheme } = useTheme();

  return (
    <Link 
      to={`/projects/${encodeURIComponent(title)}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${
        darkTheme ? "bg-slate-800 border-slate-700" : "bg-blue-200 border-transparent"
      }`}
    >
      {/* Background Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Title Container */}
      <div className="p-5">
        <h3 className={`text-xl font-bold transition-colors duration-300 group-hover:text-blue-600 ${
           darkTheme ? "text-white" : "text-gray-800"
        }`}>
          {title}
        </h3>
        <div className="mt-2 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
      </div>
    </Link>
  );
};


