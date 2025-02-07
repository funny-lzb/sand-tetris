import { HydrateClient } from "~/trpc/server";

export default function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900">
        <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 px-4 py-8">
          <h1 className="text-center text-4xl font-bold">Sand Tetris</h1>

          <h2 className="text-center text-2xl font-semibold text-gray-800">
            How to Play Sand Tetris
          </h2>

          <div className="prose prose-gray max-w-none">
            <p className="mx-auto mb-8 max-w-2xl text-center text-lg">
              Sand Tetris combines classic Tetris gameplay with realistic sand
              physics, creating a unique puzzle experience. Watch as blocks
              transform into flowing sand particles, adding a new layer of
              strategy to the beloved game.
            </p>

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
                <ul className="space-y-2">
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
                  Beginner&apos;s Guide
                </h3>
                <p>
                  New to Sand Tetris? Start with Easy mode where you&apos;ll
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

        <div className="mx-auto mb-8 w-full max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 text-lg font-medium text-amber-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
            Play Sand Tetris Below
          </div>
        </div>

        <div className="mx-auto mb-16 aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.crazygames.com/embed/sandtrix"
            style={{ width: "100%", height: "100%" }}
            frameBorder="0"
            allow="gamepad *;"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </HydrateClient>
  );
}
