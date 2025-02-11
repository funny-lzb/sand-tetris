import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { games } from "~/config/games";

export const metadata: Metadata = {
  title: "Play Mahjong Match - Free Online Tile Matching Game | Sand Tetris",
  description: "Enjoy the classic Chinese Mahjong game with a modern twist! Match identical tiles, plan strategic moves, and challenge yourself with increasingly difficult levels. Perfect for puzzle lovers and Mahjong enthusiasts. Play for free in your browser!",
  openGraph: {
    title: "Play Mahjong Match - Free Online Tile Matching Game | Sand Tetris",
    description: "Enjoy the classic Chinese Mahjong game with a modern twist! Match identical tiles, plan strategic moves, and challenge yourself with increasingly difficult levels. Perfect for puzzle lovers and Mahjong enthusiasts. Play for free in your browser!",
  },
};

export default function MahjongMatch() {
  // Get current game
  const currentGame = games.find(game => game.path === "/games/mahjong-match");
  // Get other games
  const otherGames = games.filter(game => game.path !== "/games/mahjong-match");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center py-12 text-red-800 hidden md:block">
            {currentGame?.name ?? "Mahjong Match"}
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

                <h2 className="text-2xl font-bold my-4 text-white">{currentGame?.name}</h2>

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
                    Match identical tiles and clear the board in this classic puzzle game
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
                  src="https://html5.gamedistribution.com/fe22c2e8ce44494cbde70fa8b30105d2/?gd_sdk_referrer_url=https://sand-tetris.online/games/mahjong-match"
                  className="absolute inset-0 w-full h-full rounded-lg"
                  scrolling="no"
                  frameBorder="0"
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
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What is Mahjong?</h2>
              <p>
                Mahjong is a classic tile-matching game that originated in China. In this modern
                match-three version, players must strategically pair identical mahjong tiles to clear
                the board. The game combines traditional mahjong elements with engaging puzzle
                mechanics, making it both challenging and entertaining for players of all skill levels.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How to Play Mahjong</h2>
              <p>
                Plan your moves carefully in this mahjong game, match three mahjongs, and claim
                victory over each level. Here&apos;s how to play:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Look for groups of three identical mahjong tiles</li>
                <li>Click or tap matching tiles to remove them from the board</li>
                <li>Plan your moves strategically to avoid getting stuck</li>
                <li>Clear all tiles to complete each level</li>
                <li>Progress through increasingly challenging layouts</li>
              </ul>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Tips for Success</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Start with tiles that are blocking others</li>
                <li>Look ahead and plan your moves in advance</li>
                <li>Pay attention to the layout pattern</li>
                <li>Use power-ups wisely when available</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}