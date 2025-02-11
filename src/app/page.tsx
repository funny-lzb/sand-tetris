import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Image from "next/image";
import { games } from "~/config/games";

export default function Home() {
  // Get current game
  const currentGame = games.find(game => game.path === "/");
  // Get other games
  const otherGames = games.filter(game => game.path !== "/");

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-start bg-white text-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center py-12 text-red-800 hidden md:block">
              {currentGame?.name ?? "Sand Tetris"}
            </h1>

            {/* Mobile Game Preview */}
            <div className="relative w-full h-[60dvh] min-h-[50dvh] overflow-hidden rounded-lg bg-black md:hidden">
              <div className="h-1/2 relative overflow-hidden" style={{ filter: 'brightness(0.5)' }}>
                <Image
                  src={currentGame?.thumbnailUrl ?? "/placeholder-game.webp"}
                  alt={currentGame?.alt ?? "Game Preview"}
                  fill
                  className="object-cover z-0 scale-[1.4]"
                />
              </div>

              <div className="h-1/2 bg-black">
                <div className="flex flex-col items-center w-1/2 mx-auto -mt-[20%]">
                  <Image
                    src={currentGame?.thumbnailUrl ?? "/placeholder-game.webp"}
                    width={300}
                    height={169}
                    className="w-full rounded-lg z-10"
                    alt={currentGame?.alt ?? "Game Cover"}
                  />

                  <h2 className="text-2xl font-bold my-4 text-white">{currentGame?.name ?? "Sand Tetris"}</h2>

                  <button className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-bold py-3 px-6 rounded-3xl transition-colors">
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Play now
                    </span>
                  </button>

                  <div className="flex justify-center mt-4 w-[80vw]">
                    <p className="text-gray-200 text-sm text-center">
                      Experience classic Tetris with realistic sand physics in this unique puzzle game
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Main Game Container */}
              <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-4 row-span-4 bg-white shadow-md rounded-lg hidden md:block">
                <div className="relative w-full h-full" style={{ paddingBottom: '75%' }}>
                  <iframe
                    src="https://www.crazygames.com/embed/sandtrix"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="gamepad *;"
                    allowFullScreen
                  />
                  <button className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white border-none py-2 px-4 rounded cursor-pointer text-sm transition duration-300 hover:bg-opacity-80 flex items-center">
                    <i className="fas fa-expand mr-2"></i> Fullscreen
                  </button>
                </div>
              </div>

              {/* Side Game Cards */}
              {otherGames.slice(0, 8).map((game, index) => (
                <Link key={game.id} href={game.path} className="block group">
                  <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <Image
                        src={game.thumbnailUrl ?? "/placeholder-game.webp"}
                        alt={game.alt ?? `${game.name} - Game Preview`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {game.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Game Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
              {otherGames.slice(8).map((game) => (
                <Link key={game.id} href={game.path} className="block group">
                  <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <Image
                        src={game.thumbnailUrl ?? "/placeholder-game.webp"}
                        alt={game.alt ?? `${game.name} - Game Preview`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {game.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Game Information */}
            <div className="prose prose-lg max-w-4xl mx-auto mt-12">
              <h2 className="text-center text-2xl font-semibold text-gray-800">
                How to Play Sand Tetris
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-center text-lg">
                Sand Tetris combines classic Tetris gameplay with realistic sand
                physics, creating a unique puzzle experience. Watch as blocks
                transform into flowing sand particles, adding a new layer of
                strategy to the beloved game.
              </p>

              <div className="mx-auto mb-8 w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/J59rsotSqb4?si=NBhob6ibUGnnaEwb"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="grid gap-8">
                <section>
                  <h3 className="mb-3 text-xl font-medium">Game Modes</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Classic Endless:</strong> Play until the sand fills
                      the screen, with increasing speed as you progress.
                    </li>
                    <li>
                      <strong>3-Minute Challenge:</strong> Race against time to
                      achieve the highest possible score.
                    </li>
                    <li>
                      <strong>Clear 40:</strong> Clear exactly 40 rows at your own
                      pace - perfect for mastering the mechanics.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="mb-3 text-xl font-medium">Controls</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded bg-gray-50 p-4">
                      <p className="mb-2 font-medium">On Desktop:</p>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>↑ or W: Rotate blocks</li>
                        <li>← → or A D: Move left/right</li>
                        <li>↓ or S: Drop blocks faster</li>
                        <li>P: Pause game</li>
                      </ul>
                    </div>
                    <div className="rounded bg-gray-50 p-4">
                      <p className="mb-2 font-medium">On Mobile:</p>
                      <ul className="list-disc pl-5">
                        <li>Tap screen to rotate</li>
                        <li>Swipe left/right to move</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="mb-3 text-xl font-medium">Scoring Tips</h3>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Clear multiple rows quickly to build combos up to 10x
                      multiplier
                    </li>
                    <li>Each sand particle cleared adds to your score</li>
                    <li>Start with Easy mode to learn sand physics behavior</li>
                    <li>
                      Plan your moves carefully - sand flows differently than
                      solid blocks
                    </li>
                  </ul>
                </section>

                <div className="rounded-lg bg-amber-50 p-4">
                  <h3 className="mb-2 text-xl font-medium">
                    Beginner’s Guide
                  </h3>
                  <p>
                    New to Sand Tetris? Start with Easy mode where you’ll
                    have full game space and normal drop speed. Watch how
                    different shapes interact with the sand physics - some blocks
                    may crumble while others create stable structures. As you
                    improve, challenge yourself with Medium and Hard difficulties
                    for faster gameplay and limited space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
