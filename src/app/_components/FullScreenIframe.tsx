"use client";

import { useState } from "react";

export default function FullScreenIframe() {
  const handleFullScreen = () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      if (!document.fullscreenElement) {
        iframe.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable fullscreen: ${err.message}`,
          );
        });
      } else {
        document.exitFullscreen().catch((err) => {
          console.error(`Error attempting to exit fullscreen: ${err.message}`);
        });
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-4">
      <div className="relative">
        <div className="aspect-[4/3] max-h-[75vh] w-full overflow-hidden rounded-lg bg-black shadow-xl">
          <iframe
            src="https://www.crazygames.com/embed/sandtrix"
            className="h-full w-full"
            frameBorder="0"
            allow="gamepad *;"
            allowFullScreen
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleFullScreen}
            className="flex items-center gap-2 rounded-lg bg-black/50 px-4 py-2 text-white transition-colors hover:bg-black/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
            FullScreen
          </button>
        </div>
      </div>
    </div>
  );
}
