import React from "react";

function Map() {
  return (
    <div>
      <iframe
        className="m-auto mt-4 mb-4 border border-gray-600 rounded-sm"
        width="95%"
        height="514"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=adarsh+foundation+and+rehabilitation+centre%2C+varanasi%2C+Uttar+Pradesh%2C+india&t=&z=12&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
}

export default Map;
