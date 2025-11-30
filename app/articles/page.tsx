"use client";

import { articles, Article } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import ArticleModal from "@/components/ArticleModal";
import React from "react";

export default function ArticlesPage() {
  const [search, setSearch] = React.useState("");
  const [selectedArticle, setSelectedArticle] = React.useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const filteredArticles = articles.filter((a) => {
    const s = search.toLowerCase();
    return (
      a.title.toLowerCase().includes(s) ||
      a.summary.toLowerCase().includes(s)
    );
  });

  const handleViewDetails = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Articles</h1>
          <p className="text-lg text-gray-600 mt-2">
            Explore internal and external articles on the ancient world
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <input
            placeholder="Search by title or keywords"
            className="border-2 border-blue-600 rounded-xl p-2 w-full max-w-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onViewDetails={handleViewDetails}
            />
          ))}

          {filteredArticles.length === 0 && (
            <p className="text-center text-xl text-gray-600 col-span-full">
              No articles found matching "{search}"
            </p>
          )}
        </div>
      </div>

      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
