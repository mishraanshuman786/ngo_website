import React from "react";

function VideoSection() {
  return (
    <div
      className="m-auto container overflow-x-scroll"
      style={{ overflowY: "hidden" }}
    >
      <div className="flex flex-row flex-wrap justify-center space-x-4 lg:space-x-8">
        {/* First Video */}
        <a
          href="https://www.youtube.com/watch?v=6tuhrIr6L48"
          className="flex-shrink-0 w-full md:w-[300px] lg:w-[480px] h-[350px] p-8 bg-white border border-gray-200 rounded-md m-4 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6tuhrIr6L48?fullscreen=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h5 className="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            December 4, 2023
          </h5>
        </a>

        {/* Second Video */}
        <a
          href="https://www.youtube.com/watch?v=BsNVoBAm5cQ"
          className="flex-shrink-0 w-full md:w-[300px] lg:w-[480px] h-[350px] p-8 bg-white border border-gray-200 rounded-md m-4 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/BsNVoBAm5cQ?fullscreen=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            December 4, 2023
          </h5>
        </a>

        {/* third */}
        <a
          href="https://www.youtube.com/watch?v=uqEzEneXY2c"
          className="flex-shrink-0 w-full md:w-[300px] lg:w-[480px] h-[350px] p-8 bg-white border border-gray-200 rounded-md m-4 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/uqEzEneXY2c?si=TBo8GyiDA05XIQUl?fullscreen=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h5 class="mb-2 text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            June 10, 2023
          </h5>
        </a>

        {/* fourth */}
        <a
          href="https://www.youtube.com/watch?v=nD76W5bIGbc"
          className="flex-shrink-0 w-full md:w-[300px] lg:w-[480px] h-[350px] p-8 bg-white border border-gray-200 rounded-md m-4 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nD76W5bIGbc?si=BAkeasXV7EjFJm70?fullscreen=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h5 class="mb-2 text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            January 26, 2023
          </h5>
        </a>

        {/* fifth */}
        <a
          href="https://www.youtube.com/watch?v=WsSitssOAuI"
          className="flex-shrink-0 w-full md:w-[300px] lg:w-[480px] h-[350px] p-8 bg-white border border-gray-200 rounded-md m-4 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WsSitssOAuI?si=FwIOZtciRimx8MKQ?fullscreen=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h5 class="mb-2 text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            August 11, 2022
          </h5>
        </a>
      </div>
    </div>
  );
}

export default VideoSection;
