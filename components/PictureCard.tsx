import { Picture } from "@/data/pictures";
import Image from "next/image";

interface PictureCardProps {
  picture: Picture;
  onPreview: (picture: Picture) => void;
}

export default function PictureCard({ picture, onPreview }: PictureCardProps) {
  const isExternal = !!picture.externalUrl;

  const handleClick = () => {
    if (isExternal) {
      window.open(picture.externalUrl, "_blank");
    } else {
      onPreview(picture);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
      <div
        className="relative w-full h-52 bg-gray-200 cursor-pointer"
        onClick={handleClick}
      >
        <Image
          src={picture.image}
          alt={picture.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {picture.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mt-2 flex-1">
          {picture.description}
        </p>

        <div className="flex justify-between text-sm text-gray-500 mt-4">
          <span>📅 {picture.year}</span>
          <span>📌 {picture.location}</span>
        </div>

        <button
          onClick={handleClick}
          className={`mt-4 w-full py-3 rounded-lg font-semibold text-white transition ${
            isExternal ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isExternal ? "Visit Source" : "Preview Image"}
        </button>
      </div>
    </div>
  );
}
