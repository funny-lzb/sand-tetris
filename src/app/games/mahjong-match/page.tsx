import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Play Mahjong Match - Free Online Tile Matching Game | Sand Tetris",
  description: "Enjoy the classic Chinese Mahjong game with a modern twist! Match identical tiles, plan strategic moves, and challenge yourself with increasingly difficult levels. Perfect for puzzle lovers and Mahjong enthusiasts. Play for free in your browser!",
  openGraph: {
    title: "Play Mahjong Match - Free Online Tile Matching Game | Sand Tetris",
    description: "Enjoy the classic Chinese Mahjong game with a modern twist! Match identical tiles, plan strategic moves, and challenge yourself with increasingly difficult levels. Perfect for puzzle lovers and Mahjong enthusiasts. Play for free in your browser!",
  },
};

export default function MahjongMatch() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white text-gray-900 p-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">Mahjong Match</h1>

        {/* Game Container */}
        <div className="relative w-full mb-8" style={{ paddingTop: '75%' }}>
          <iframe
            src="https://html5.gamedistribution.com/fe22c2e8ce44494cbde70fa8b30105d2/?gd_sdk_referrer_url=https://sand-tetris.online/games/mahjong-match"
            className="absolute top-0 left-0 w-full h-full rounded-md"
            scrolling="none"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        {/* Game Information */}
        <div className="prose prose-lg max-w-none">
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

        {/* Game List Section */}
        <section className="w-full max-w-4xl mt-12 border-t pt-8 pb-10">
          <h2 className="text-2xl font-bold text-center mb-6">Other online games</h2>
          <div className="grid gap-4">
            <Link href="/" className="block group">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 group-hover:text-blue-800">
                      Sand Tetris
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Experience a unique twist on classic Tetris with realistic sand physics. Watch blocks transform 
                      into flowing particles, creating an innovative puzzle-solving experience.
                    </p>
                  </div>
                  <span className="text-blue-600 text-sm font-medium px-3 py-1 bg-blue-100 rounded-full">
                    Physics Puzzle
                  </span>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span className="mr-4">🏆 Most Popular</span>
                  <span>🎮 Free to Play</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}