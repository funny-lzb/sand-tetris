import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Image from "next/image";
import { games } from "~/config/games";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sand Tetris - Free Sandtris Unblocked",
  description:
    "Play Sand Tetris online - Free unblocked game with realistic sand physics. No download needed, start playing now!",
};

export default function Home() {
  // Get current game
  const currentGame = games.find((game) => game.path === "/");
  // Get other games
  const otherGames = games.filter((game) => game.path !== "/");

  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-gray-900">
      {/* Game Section - Adjusted padding */}
      <div className="mx-auto w-full max-w-4xl px-4 py-4">
        <div className="aspect-[4/3] max-h-[75vh] w-full overflow-hidden rounded-lg bg-black shadow-xl">
          <iframe
            src="https://www.crazygames.com/embed/sandtrix"
            className="h-full w-full"
            frameBorder="0"
            allow="gamepad *;"
            allowFullScreen
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl px-4 pb-12">
        {/* Main Title */}
        <h1 className="mb-8 mt-12 text-4xl font-bold text-gray-900">
          Sand Tetris
        </h1>

        {/* How to Play Section - Right after title */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            How to Play Sand Tetris
          </h2>

          <p className="mb-8 text-lg text-gray-700">
            Sand Tetris combines classic Tetris gameplay with realistic sand
            physics, creating a unique puzzle experience. Watch as blocks
            transform into flowing sand particles, adding a new layer of
            strategy to the beloved game.
          </p>

          {/* Getting Started Steps */}
          <div className="mb-8 rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-lg font-medium text-gray-900">
              Getting Started
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                  1
                </span>
                <p className="text-gray-700">
                  Click "Play Now" and watch a brief 5-second advertisement
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                  2
                </span>
                <p className="text-gray-700">
                  Look for the flashing "Press Enter" prompt and click it
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                  3
                </span>
                <p className="text-gray-700">
                  Click "Start" to begin your Sand Tetris adventure
                </p>
              </div>
            </div>
          </div>

          {/* Game Rules */}
          <div className="rounded-lg bg-amber-50 p-6">
            <h3 className="mb-4 text-lg font-medium text-gray-900">
              Game Rules
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                The key to success in Sand Tetris is strategic color placement:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Position same-colored sand blocks together</li>
                <li>Keep green sand on the left side and right side</li>
                <li>
                  When matching colors connect, they'll disappear and add to
                  your score
                </li>
                <li>Continue this process to achieve higher scores</li>
                <li>
                  Your scores are automatically saved to our server after each
                  game
                </li>
              </ul>
            </div>
          </div>

          {/* Rest of the existing How to Play content (Controls, Game Modes, etc.) */}
          <div className="mt-8 grid gap-8">
            <section>
              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Game Modes
              </h3>
              <div className="rounded-lg bg-gray-100 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        Classic Endless:
                      </strong>
                      <p className="text-gray-600">
                        Play until the sand fills the screen, with increasing
                        speed as you progress.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        3-Minute Challenge:
                      </strong>
                      <p className="text-gray-600">
                        Race against time to achieve the highest possible score.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">Clear 40:</strong>
                      <p className="text-gray-600">
                        Clear exactly 40 rows at your own pace - perfect for
                        mastering the mechanics.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Controls
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-gray-100 p-6">
                  <p className="mb-3 font-medium text-gray-900">On Desktop:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        ↑
                      </kbd>
                      <span>or</span>
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        W
                      </kbd>
                      <span>Rotate blocks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        ←
                      </kbd>
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        →
                      </kbd>
                      <span>or</span>
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        A
                      </kbd>
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        D
                      </kbd>
                      <span>Move left/right</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        ↓
                      </kbd>
                      <span>or</span>
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        S
                      </kbd>
                      <span>Drop blocks faster</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <p className="mb-3 font-medium text-gray-900">On Mobile:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Tap screen to rotate</li>
                    <li>Swipe left/right to move</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-lg bg-amber-50 p-6">
              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Pro Tips
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Clear multiple rows quickly to build combos up to 10x
                  multiplier
                </li>
                <li>• Each sand particle cleared adds to your score</li>
                <li>• Start with Easy mode to learn sand physics behavior</li>
                <li>
                  • Plan your moves carefully - sand flows differently than
                  solid blocks
                </li>
              </ul>
            </section>
          </div>
        </section>

        {/* YouTube Video */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/J59rsotSqb4?si=NBhob6ibUGnnaEwb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* SEO Content Sections */}
        <div className="mt-12 space-y-8">
          {/* Core Game Introduction */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Play Sand Tetris Online - Free Unblocked Game
            </h2>
            <p className="mb-4 text-gray-700">
              Experience the unique blend of classic tetris and sand physics in
              this innovative puzzle game. Our sand tetris game offers a fresh
              take on the traditional block-stacking formula, with particles
              that flow and behave like real sand.
            </p>
          </section>

          {/* Game Variants */}
          <section>
            <h3 className="mb-3 text-xl font-medium text-gray-800">
              Tetris Sand Game Variations
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-gray-100 p-6">
                <h4 className="mb-2 font-medium text-gray-900">
                  Classic Sand Tetris
                </h4>
                <p className="text-gray-600">
                  The original sand tetris online experience with realistic
                  physics and flowing particles. Perfect for both beginners and
                  veterans.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-6">
                <h4 className="mb-2 font-medium text-gray-900">
                  Sand Tetris Unblocked
                </h4>
                <p className="text-gray-600">
                  Play anywhere, anytime with our unblocked version. No
                  restrictions, just pure tetris sand gameplay at your
                  fingertips.
                </p>
              </div>
            </div>
          </section>

          {/* Records and Achievements */}
          <section className="rounded-lg bg-amber-50 p-6">
            <h3 className="mb-3 text-xl font-medium text-gray-800">
              Sand Tetris Records and Challenges
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Set new sand tetris records in various game modes. Challenge
                yourself with:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>High score challenges in Classic mode</li>
                <li>Speed records in Time Attack</li>
                <li>Precision achievements in Sand Control mode</li>
              </ul>
            </div>
          </section>

          {/* Mobile Gaming */}
          <section>
            <h3 className="mb-3 text-xl font-medium text-gray-800">
              Play Tetris Sand Game on Mobile
            </h3>
            <p className="text-gray-700">
              Our tetris sand unblocked version is fully optimized for mobile
              devices. Enjoy the same fluid sand physics and engaging gameplay
              on your smartphone or tablet. The touch controls are intuitive and
              responsive, making it easy to play sand tetris online wherever you
              go.
            </p>
          </section>
        </div>

        {/* Game Information */}
        <div className="space-y-8">
          {/* Bottom Section */}
          <div className="mt-12 space-y-6 border-t border-gray-200 pt-8">
            {/* Bookmark Tip */}
            <div className="rounded-lg bg-blue-50 p-4 text-center">
              <p className="flex items-center justify-center gap-2 text-blue-800">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span>
                  Love this game? Press
                  <kbd className="mx-1 rounded bg-white px-2 py-0.5 text-sm shadow">
                    Control
                  </kbd>
                  +
                  <kbd className="mx-1 rounded bg-white px-2 py-0.5 text-sm shadow">
                    D
                  </kbd>
                  to bookmark for quick access next time!
                </span>
              </p>
            </div>

            {/* External Game Link */}
            <div className="text-center">
              <Link
                href="https://football-bros.net/"
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-800"
              >
                Want to play Ball Game ? Try -&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
