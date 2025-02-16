import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { games } from "~/config/games";

export const metadata: Metadata = {
  title: "Winter Wolf - Christmas Adventure Game | Free Platform Game",
  description: "Guide your wolf through a snowy Christmas adventure. Collect stars, avoid hunters, and master double-jump mechanics in this free platform game.",
  openGraph: {
    title: "Winter Wolf - Christmas Adventure Game | Free Platform Game",
    description: "Guide your wolf through a snowy Christmas adventure. Collect stars, avoid hunters, and master double-jump mechanics in this free platform game.",
  },
};

export default function WinterWolf() {
  // 获取当前游戏
  const currentGame = games.find(game => game.path === "/games/winter-wolf");
  // 获取其他游戏
  const otherGames = games.filter(game => game.path !== "/games/winter-wolf");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center py-12 text-blue-800 hidden md:block">
            {currentGame?.name ?? "Winter Wolf"}
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

                <button className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-3xl transition-colors">
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
                    Embark on a snowy adventure in this Christmas-themed platform game
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
                  src="https://html5.gamedistribution.com/cb801674259e4640b677139a1427f768/?gd_sdk_referrer_url=sand-tetris.online/games/winter-wolf"
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
              <h2 className="text-2xl font-semibold mb-4">Winter Wolf Adventure</h2>
              <p>
                Winter has come, and a magical Christmas adventure awaits! In this enchanting platform game, 
                you play as a determined wolf on a quest to collect three precious stars. Navigate through 
                snowy landscapes, hunt sheep carefully, and gather bones while avoiding dangerous hunters.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h3 className="text-xl font-semibold mb-2">Mission Objectives</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Collect 3 stars from sheep</li>
                  <li>Gather all bones along your path</li>
                  <li>Avoid hunters in the forest</li>
                  <li>Reach the dark portal to complete levels</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How to Play</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded bg-gray-50 p-4">
                  <h3 className="font-medium mb-2">Game Controls:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>W: Jump (Double tap for double jump)</li>
                    <li>A: Move Left</li>
                    <li>S: Move Down</li>
                    <li>D: Move Right</li>
                  </ul>
                </div>
                <div className="rounded bg-gray-50 p-4">
                  <h3 className="font-medium mb-2">Special Abilities:</h3>
                  <ul className="list-disc pl-6">
                    <li>Double Jump: Press W twice</li>
                    <li>Quick Movement: Combine keys for precise control</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-3">Game Features</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Beautiful winter environment</li>
                  <li>Challenging platform gameplay</li>
                  <li>Double-jump mechanics</li>
                  <li>Strategic hunting elements</li>
                  <li>Multiple collectibles</li>
                </ul>
              </div>
            </section>

            <section className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Tips for Success</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Master the double-jump timing</li>
                  <li>Watch hunter patrol patterns</li>
                  <li>Collect bones to maintain strength</li>
                  <li>Plan your route carefully</li>
                  <li>Use the environment to your advantage</li>
                </ul>
              </div>
            </section>

            <section className="mt-8 pb-10">
              <h2 className="text-2xl font-semibold mb-4">Ready for Adventure?</h2>
              <p>
                Embark on this magical winter journey as you guide your wolf through snowy challenges. 
                With precise controls, beautiful winter environments, and engaging gameplay, Winter Wolf 
                offers a unique platform gaming experience. Can you collect all the stars and complete 
                your Christmas mission?
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}