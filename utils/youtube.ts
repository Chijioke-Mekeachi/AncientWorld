// utils/youtube.ts

/**
 * Extracts the YouTube Video ID from a variety of YouTube URL formats.
 * @param url The full YouTube URL string.
 * @returns The 11-character video ID or null if not found.
 */
export function extractYoutubeVideoId(url: string): string | null {
  if (!url) return null;

  // Use a regex pattern to find the video ID in common YouTube URL formats
  const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|y2u\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);

  // The video ID is in the first capture group (index 1)
  return match && match[1] ? match[1] : null;
}