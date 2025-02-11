import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { games } from "~/config/games";

export const metadata: Metadata = {
  title: "How to Build a Chicken Run | Free Online Chicken Game Guide",
  description: "Learn how to build a chicken run, discover tips for managing multiple roosters, and enjoy our free chicken running game! Get expert advice on chicken runs and play our exciting endless runner game.",
  openGraph: {
    title: "How to Build a Chicken Run | Free Online Chicken Game Guide",
    description: "Learn how to build a chicken run, discover tips for managing multiple roosters, and enjoy our free chicken running game! Get expert advice on chicken runs and play our exciting endless runner game.",
  },
};

export default function ChickenRun() {
  // Get current game
  const currentGame = games.find(game => game.path === "/games/chicken-run");
  // Get other games
  const otherGames = games.filter(game => game.path !== "/games/chicken-run");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center py-12 text-red-800 hidden md:block">
            {currentGame?.name ?? "Chicken Run Guide & Game"}
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
                    Guide your chicken through obstacles and collect coins in this exciting runner game
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
                  src="https://html5.gamedistribution.com/54866edc07d34e5d84d9e48cf4443923/?gd_sdk_referrer_url=https://sand-tetris.online/games/chicken-run"
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
              <h2 className="text-2xl font-semibold mb-4">How to Build a Chicken Run</h2>
              <p>
                Building a proper chicken run is essential for your feathered friends&apos; health and happiness.
                Here&apos;s a comprehensive guide to creating the perfect chicken run:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Choose a suitable location with good drainage and partial shade</li>
                <li>Plan the size - allow at least 4 square feet per chicken</li>
                <li>Use strong fencing materials to protect from predators</li>
                <li>Install proper ventilation and weather protection</li>
                <li>Create designated areas for food, water, and dust baths</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Managing Multiple Roosters</h2>
              <p>
                Wondering if you can have multiple roosters in your chicken run? Here&apos;s what you need to know
                about keeping two or more roosters together:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Ensure adequate space to minimize territorial disputes</li>
                <li>Introduce roosters gradually to establish hierarchy</li>
                <li>Provide multiple feeding and watering stations</li>
                <li>Monitor behavior for signs of aggression</li>
                <li>Consider the ratio of hens to roosters (recommended 8-10 hens per rooster)</li>
              </ul>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">DIY Chicken Run Tips</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use hardware cloth instead of chicken wire for better protection</li>
                <li>Build raised platforms for additional space</li>
                <li>Include enrichment items like perches and swings</li>
                <li>Create a covered area for protection from rain</li>
                <li>Install easy-to-clean feeding stations</li>
                <li>Add secure latches to all doors and gates</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Play Our Chicken Run Game</h2>
              <p>
                While learning about real chicken runs, why not enjoy our exciting chicken running game?
                Guide your chicken through obstacles, collect coins, and activate power-ups for an
                entertaining gaming experience. Simple tap controls make it easy to play - just tap
                to change direction and see how far you can run!
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
