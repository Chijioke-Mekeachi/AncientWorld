import Image from "next/image";
import { Picture } from "@/data/pictures";

interface PicturePreviewModalProps {
  picture: Picture | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PicturePreviewModal({ picture, isOpen, onClose }: PicturePreviewModalProps) {
  if (!isOpen || !picture) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-md shadow-md hover:bg-gray-200"
          onClick={onClose}
        >
          ✕ Close
        </button>

        <div className="relative w-full h-[70vh] rounded-lg overflow-hidden shadow-xl">
          <Image
            src={picture.image}
            alt={picture.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="text-center mt-4 text-white">
          <h2 className="text-2xl font-bold">{picture.title}</h2>
          <p className="text-gray-300 mt-2">{picture.description}</p>
          <p className="text-gray-400 text-sm mt-1">
            📍 {picture.location} — 📅 {picture.year}
          </p>
        </div>
      </div>
    </div>
  );
}
