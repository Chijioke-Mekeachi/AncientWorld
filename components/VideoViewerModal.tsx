// components/VideoViewerModal.tsx
import React from 'react';
import { Video } from '@/data/videos';
import { extractYoutubeVideoId } from '@/utils/youtube'; // <-- NEW IMPORT

interface VideoViewerModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoViewerModal({ video, isOpen, onClose }: VideoViewerModalProps) {
  if (!isOpen || !video) return null;

  // 1. Extract the Video ID from the stored URL
  const videoId = extractYoutubeVideoId(video.youtubeUrl);
  
  if (!videoId) {
    // Optionally render an error state if the URL is invalid
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white p-8 rounded-lg">Invalid YouTube URL.</div>
        </div>
    );
  }

  // 2. Construct the secure, embeddable YouTube URL with autoplay
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    // Modal Overlay
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      
      {/* Modal Content */}
      <div 
        className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl relative"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10 p-2 transition text-4xl font-light"
          aria-label="Close video player"
        >
          &times;
        </button>

        {/* Video Embed Container (16:9 aspect ratio) */}
        <div className="relative w-full aspect-video rounded-t-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
          ></iframe>
        </div>
        
        {/* Video Title */}
        <div className="p-4 md:p-6 text-white">
          <h3 className="text-xl font-bold">{video.title}</h3>
          <p className="text-gray-400 text-sm mt-1">{video.description}</p>
        </div>
      </div>
    </div>
  );
}