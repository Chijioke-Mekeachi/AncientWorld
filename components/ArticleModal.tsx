import { Article } from "@/data/articles";

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  if (!isOpen || !article) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          ✕ Close
        </button>

        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <p className="text-gray-600 mb-4">{article.summary}</p>

        {article.content && <div className="text-gray-800">{article.content}</div>}
      </div>
    </div>
  );
}
