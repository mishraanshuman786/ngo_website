import React from "react";
import VideoSection from "@/components/VideoSection";

function Media() {
  return (
    <div className="bg-gray-300">
      <div className="bg-blue-900 py-8">
        <h1 className="text-3xl font-bold text-center text-white">Our Services</h1>
      </div>
      {/* Videos using Cards */}
      <VideoSection />

      
    </div>
  );
}

export default Media;
