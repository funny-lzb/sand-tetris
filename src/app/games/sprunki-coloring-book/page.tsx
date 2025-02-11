import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { games } from "~/config/games";

export const metadata: Metadata = {
  title: "What is Sprunki? Parents' Guide to the Popular Kids Game | Safe Gaming",
  description: "Learn what Sprunki is - a creative music-mixing game based on Incredibox. Understand why kids love it, get safety tips for parents, and discover how to make it a positive creative experience for children.",
  openGraph: {
    title: "What is Sprunki? Parents' Guide to the Popular Kids Game | Safe Gaming",
    description: "Learn what Sprunki is - a creative music-mixing game based on Incredibox. Understand why kids love it, get safety tips for parents, and discover how to make it a positive creative experience for children.",
  },
};

export default function SprunkiColoringBook() {
  // 获取当前游戏
  const currentGame = games.find(game => game.path === "/games/sprunki-coloring-book");
  // 获取其他游戏
  const otherGames = games.filter(game => game.path !== "/games/sprunki-coloring-book");

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
                  src="https://html5.gamedistribution.com/c6a247522ac147a48c602cd87558dccc/?gd_sdk_referrer_url=https://sand-tetris.online/games/sprunki-coloring-book"
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
              <h2 className="text-2xl font-semibold mb-4">What is Sprunki?</h2>
              <p>
                Sprunki is an online fangame inspired by Incredibox, a creative music-mixing platform. Originally 
                created by a 15-year-old developer, it has evolved into a unique creative ecosystem that combines 
                music creation, character customization, and interactive gameplay. The game has gained significant 
                popularity among young audiences, particularly children aged 4-8.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <h3 className="text-xl font-semibold mb-2">Important Note for Parents</h3>
                <p>
                  While Sprunki begins as a creative music game, some user-generated content may contain 
                  elements that require parental guidance. We recommend supervision and using appropriate 
                  content filters for younger players.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How to Edit Sprunki Games</h2>
              <p>
                Sprunki games can be modified and customized using various creative tools:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use Scratch-based modding tools to create custom characters</li>
                <li>Modify existing music patterns and create new sound combinations</li>
                <li>Design unique character animations and movements</li>
                <li>Create custom color schemes and visual effects</li>
                <li>Share your modified creations with the community</li>
              </ul>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-3">The Sprunki Language</h2>
              <div className="space-y-4">
                <p>
                  The Sprunki language refers to both the creative system and the community-driven content creation process:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visual Programming: Uses Scratch-like blocks for game modification</li>
                  <li>Music Syntax: Special commands for creating and mixing sound patterns</li>
                  <li>Character Scripts: Custom scripts for character behavior and animation</li>
                  <li>Community Terms: Unique terminology developed by the Sprunki community</li>
                  <li>Modding Framework: Tools and templates for game customization</li>
                </ul>
              </div>
            </section>

            <section className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">How Are Sprunki Games Made?</h2>
              <div className="space-y-4">
                <p>
                  Sprunki games are created through a combination of tools and community contributions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Base Engine: Built on Incredibox's music-mixing foundation</li>
                  <li>Custom Tools: Community-developed modding and editing tools</li>
                  <li>Character Editor: Tools for creating and customizing characters</li>
                  <li>Sound Studio: Interface for creating and mixing music</li>
                  <li>Sharing Platform: System for distributing user-created content</li>
                </ul>
              </div>
            </section>

            <section className="mt-8 pb-10">
              <h2 className="text-2xl font-semibold mb-4">Join the Creative Community</h2>
              <p>
                The Sprunki community is constantly growing and evolving. Whether you're interested in 
                creating music, designing characters, or sharing your creations, there's a place for 
                everyone in the Sprunki creative ecosystem. Join other creators and share your unique 
                vision while maintaining appropriate content guidelines.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}