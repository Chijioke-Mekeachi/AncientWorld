// app/videos/page.tsx
'use client'
import React from 'react';
import { videos, Video } from '@/data/videos';
import { useState } from 'react';
import VideoViewerModal from '@/components/VideoViewerModal';
import { extractYoutubeVideoId } from '@/utils/youtube'; // <-- NEW IMPORT

// Component to display a single video card
const VideoCard: React.FC<{ video: Video, onWatchClick: (video: Video) => void }> = ({ video, onWatchClick }) => {
  
  // Extract ID to construct the thumbnail URL
  const videoId = extractYoutubeVideoId(video.youtubeUrl);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

  if (!thumbnailUrl) return null; // Skip rendering if the URL is invalid

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer"
      onClick={() => onWatchClick(video)} 
    >
      
      {/* 1. Video Thumbnail and Play Overlay */}
      <div className="relative w-full aspect-video bg-black flex items-center justify-center group">
        <img
          src={thumbnailUrl}
          alt={`Thumbnail for ${video.title}`}
          className="w-full h-full object-cover opacity-80 transition duration-300 group-hover:opacity-100"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-10 transition">
            <svg className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3l14 9-14 9V3z" />
            </svg>
        </div>
      </div>

      {/* 2. Video Details (omitted for brevity, assume content remains the same) */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
            {video.title}
          </h3>
          <span className={`px-3 py-1 text-sm font-semibold rounded-full flex-shrink-0
            ${video.category === 'Egypt' ? 'bg-yellow-100 text-yellow-800' : ''}
            ${video.category === 'Rome' ? 'bg-red-100 text-red-800' : ''}
            ${video.category === 'Greece' ? 'bg-blue-100 text-blue-800' : ''}
            ${video.category === 'Documentary' ? 'bg-green-100 text-green-800' : ''}
          `}>
            {video.category}
          </span>
        </div>

        <p className="text-gray-600 mb-3 text-sm line-clamp-3">
          {video.description}
        </p>

        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>🕒 Duration: {video.duration}</span>
          <span>Click to Watch</span>
        </div>
      </div>
    </div>
  );
};


export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | Video['category']>('All');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWatchClick = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const categories: Array<'All' | Video['category']> = ['All', ...Array.from(new Set(videos.map(v => v.category)))];

  const filteredVideos = videos.filter(video => 
    activeCategory === 'All' || video.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Video Gallery 🎬</h1>
          <p className="text-lg text-gray-600">
            Windows To The Ancient World: Watch our immersive documentaries and recreations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${activeCategory === category 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onWatchClick={handleWatchClick} 
            />
          ))}
          
          {filteredVideos.length === 0 && (
            <p className="text-center text-xl text-gray-600 col-span-full">No videos found in this category.</p>
          )}
        </div>
      </div>
      
      {/* Video Viewer Modal */}
      <VideoViewerModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}