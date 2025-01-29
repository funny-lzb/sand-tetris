import Link from "next/link";
import { HydrateClient } from "~/trpc/server";

export default function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-950">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-amber-900 sm:text-[5rem] dark:text-amber-100">
            Sand{" "}
            <span className="text-amber-600 dark:text-amber-400">Tetris</span>
          </h1>

          <p className="max-w-2xl text-center text-xl text-amber-800 dark:text-amber-200">
            Experience the classic Tetris reimagined with realistic sand
            physics. Watch blocks transform into flowing particles in this
            innovative puzzle game.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-md flex-col gap-4 rounded-xl bg-amber-50/80 p-6 shadow-lg transition-all hover:bg-amber-50 hover:shadow-xl dark:bg-amber-800/80 dark:hover:bg-amber-800"
              href="/blog/sand-tetris-guide"
            >
              <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
                Game Guide →
              </h3>
              <div className="text-lg text-amber-800 dark:text-amber-200">
                Learn the mechanics, strategies, and tips to master Sand Tetris.
                Perfect for both beginners and experienced players.
              </div>
            </Link>

            <Link
              className="flex max-w-md flex-col gap-4 rounded-xl bg-amber-50/80 p-6 shadow-lg transition-all hover:bg-amber-50 hover:shadow-xl dark:bg-amber-800/80 dark:hover:bg-amber-800"
              href="/game"
            >
              <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
                Play Now →
              </h3>
              <div className="text-lg text-amber-800 dark:text-amber-200">
                Jump right into the game and experience the unique sand physics
                mechanics that transform classic Tetris gameplay.
              </div>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100">
                Physics-Based
              </h4>
              <p className="text-amber-800 dark:text-amber-200">
                Realistic sand particle simulation
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100">
                Strategic Depth
              </h4>
              <p className="text-amber-800 dark:text-amber-200">
                New mechanics for creative solutions
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100">
                Innovative Gameplay
              </h4>
              <p className="text-amber-800 dark:text-amber-200">
                Classic meets modern innovation
              </p>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
