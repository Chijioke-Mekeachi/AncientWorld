"use client";

import { pictures, Picture } from "@/data/pictures";
import PictureCard from "@/components/PictureCard";
import PicturePreviewModal from "@/components/PicturePreviewModal";
import React from "react";

export default function PicturesPage() {
  const [search, setSearch] = React.useState("");
  const [selectedPicture, setSelectedPicture] = React.useState<Picture | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);

  const filteredPictures = pictures.filter((pic) => {
    const s = search.toLowerCase();
    return (
      pic.title.toLowerCase().includes(s) ||
      pic.description.toLowerCase().includes(s) ||
      pic.location.toLowerCase().includes(s)
    );
  });

  const openPreview = (picture: Picture) => {
    setSelectedPicture(picture);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setSelectedPicture(null);
    setIsPreviewOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Pictorials</h1>
          <p className="text-lg text-gray-600 mt-2">
            Explore images, relics, ruins, and artifacts from the ancient world
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <input
            placeholder="Search by name, location, or year"
            className="border-2 border-green-700 rounded-xl p-2 w-full max-w-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPictures.map((pic) => (
            <PictureCard
              key={pic.id}
              picture={pic}
              onPreview={openPreview}
            />
          ))}

          {filteredPictures.length === 0 && (
            <p className="text-center text-xl text-gray-600 col-span-full">
              No pictures found matching {search}
            </p>
          )}
        </div>
      </div>

      <PicturePreviewModal
        picture={selectedPicture}
        isOpen={isPreviewOpen}
        onClose={closePreview}
      />
    </div>
  );
}
