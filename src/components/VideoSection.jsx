import React from "react";

function VideoSection() {
  return (
    <div className="flex lg:flex-wrap flex-row justify-center overflow-x-scroll lg:overflow-x-hidden" style={{ overflowY: "hidden" }}>
      {/* first */}
      <a
        href="https://www.youtube.com/watch?v=6tuhrIr6L48"
        class="block w-[480px] h-[350px] p-8 bg-white border border-gray-200 rounded-md m-4 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6tuhrIr6L48?si=6WXSJWGrjyZWpTIg?fullscreen=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h5 class="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          December 4, 2023
        </h5>
      </a>

      {/* second  */}
      <a
        href="https://www.youtube.com/watch?v=BsNVoBAm5cQ"
        class="block  w-[480px] h-[350px] p-8 bg-white border border-gray-200 rounded-md m-4 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/BsNVoBAm5cQ?si=oXxu-wf65z6y_cH1?fullscreen=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          December 4, 2023
        </h5>
      </a>

      {/* third */}
      <a
        href="https://www.youtube.com/watch?v=uqEzEneXY2c"
        class="block w-[480px] h-[350px] p-8 bg-white border border-gray-200 rounded-md m-4 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
        class="block w-[480px] h-[350px] p-8 bg-white border border-gray-200 rounded-md m-4 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
       <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nD76W5bIGbc?si=BAkeasXV7EjFJm70?fullscreen=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
        January 26, 2023
        </h5>
      </a>

      {/* fifth */}
      <a
        href="https://www.youtube.com/watch?v=WsSitssOAuI"
        class="block w-[480px] h-[350px] p-8 bg-white border border-gray-200 rounded-md m-4 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WsSitssOAuI?si=FwIOZtciRimx8MKQ?fullscreen=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
        August 11, 2022
        </h5>
      </a>
    </div>
  );
}

export default VideoSection;
