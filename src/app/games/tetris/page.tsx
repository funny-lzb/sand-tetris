import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { games } from "~/config/games";

export const metadata: Metadata = {
  title: "Tetris Unblocked Games - Free Puzzle | Play Now",
  description: "Play free Tetris unblocked game online. Classic block-stacking puzzle with no restrictions. Perfect for quick entertainment.",
  openGraph: {
    title: "Tetris Unblocked Games - Free Puzzle | Play Now",
    description: "Play free Tetris unblocked game online. Classic block-stacking puzzle with no restrictions. Perfect for quick entertainment.",
  },
};

export default function SprunkiColoringBook() {
  // 获取当前游戏
  const currentGame = games.find(game => game.path === "/games/tetris");
  // 获取其他游戏
  const otherGames = games.filter(game => game.path !== "/games/tetris");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center py-12 text-red-800 hidden md:block">
            {currentGame?.name ?? "Sprunki Coloring Book"}
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
                    Create beautiful colorful art with this fun coloring game
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Main Game Container */}
            <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-4 row-span-4 bg-white shadow-md rounded-lg hidden md:block">
              <div className="relative w-full h-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.lumpty.com/amusements/games/tetris/tetris.html"
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
              <h2 className="text-2xl font-semibold mb-4">Play Tetris Unblocked Games Online</h2>
              <p>
                Welcome to the ultimate destination for free Tetris game unblocked! Experience the classic 
                block-stacking puzzle game that has captivated players worldwide. Our platform offers 
                unrestricted access to Tetris games unblocked, perfect for gaming enthusiasts looking for 
                quick entertainment during breaks.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <h3 className="text-xl font-semibold mb-2">Why Choose Our Unblocked Games Tetris?</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Instant access - no downloads required</li>
                  <li>Completely free to play</li>
                  <li>Works on all devices</li>
                  <li>No restrictions or limitations</li>
                  <li>Classic Tetris gameplay</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How to Play Tetris Game Unblocked</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded bg-gray-50 p-4">
                  <h3 className="font-medium mb-2">Desktop Controls:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Arrow Keys: Move blocks</li>
                    <li>Up Arrow: Rotate piece</li>
                    <li>Space Bar: Hard drop</li>
                    <li>P: Pause game</li>
                  </ul>
                </div>
                <div className="rounded bg-gray-50 p-4">
                  <h3 className="font-medium mb-2">Mobile Controls:</h3>
                  <ul className="list-disc pl-6">
                    <li>Swipe: Move blocks</li>
                    <li>Tap: Rotate piece</li>
                    <li>Swipe Down: Soft drop</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-3">Game Features</h2>
              <div className="space-y-4">
                <p>Our free Tetris game unblocked includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Classic Mode: Traditional Tetris gameplay</li>
                  <li>Sprint Mode: Clear 40 lines as fast as possible</li>
                  <li>Marathon Mode: Play endlessly with increasing difficulty</li>
                  <li>Global Leaderboards: Compete with players worldwide</li>
                  <li>Mobile Optimization: Play on any device</li>
                </ul>
              </div>
            </section>

            <section className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Tips for High Scores</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Plan your moves in advance</li>
                  <li>Learn T-spin techniques</li>
                  <li>Practice speed drops for quick placement</li>
                  <li>Keep the stack level low</li>
                  <li>Save long pieces for Tetris clears</li>
                </ul>
              </div>
            </section>

            <section className="mt-8 pb-10">
              <h2 className="text-2xl font-semibold mb-4">Why Players Love Our Tetris Games Unblocked</h2>
              <p>
                Our platform provides the perfect balance of classic gameplay and modern features. 
                Whether you're a casual player or a Tetris master, our unblocked version offers 
                unrestricted access to endless entertainment. Play during breaks, compete with 
                friends, and challenge yourself to beat your high scores!
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}