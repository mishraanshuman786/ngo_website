import React from "react";
import VideoSection from "@/components/VideoSection";

function Media() {
  return (
    <div style={{backgroundImage: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)'}}>
      <h1 className="text-center text-white lg:text-[40px] ">Media Section</h1>
      {/* Videos using Cards */}
      <VideoSection />

      
    </div>
  );
}

export default Media;
