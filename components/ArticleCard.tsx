import { Article } from "@/data/articles";
import Image from "next/image";

interface ArticleCardProps {
  article: Article;
  onViewDetails?: (article: Article) => void; // for internal articles
}

export default function ArticleCard({ article, onViewDetails }: ArticleCardProps) {
  const isExternal = !!article.externalUrl;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
      
      {article.image && (
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mt-2 flex-1">
          {article.summary}
        </p>

        {isExternal ? (
          <a
            href={article.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition"
          >
            Read Article
          </a>
        ) : (
          <button
            onClick={() => onViewDetails && onViewDetails(article)}
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Read Article
          </button>
        )}
      </div>
    </div>
  );
}
