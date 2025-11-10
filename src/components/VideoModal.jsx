import React from "react";

const VideoModal = ({ open, onClose, videoUrl }) => {
  if (!open) return null;

  // extract video id if it's a youtu.be short url or full
  let src = videoUrl;
  // ensure embed
  if (videoUrl.includes("youtu.be")) {
    const id = videoUrl.split("/").pop().split("?")[0];
    src = `https://www.youtube.com/embed/${id}`;
  } else if (videoUrl.includes("watch")) {
    const m = videoUrl.match("[?&]v=([^&]+)");
    const id = m ? m[1] : "";
    src = `https://www.youtube.com/embed/${id}`;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full mx-4">
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            aria-label="Close video"
            className="text-slate-700 hover:text-slate-900"
          >
            ✕
          </button>
        </div>
        <div className="aspect-video w-full">
          <iframe
            title="Video"
            src={src}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
