import { HydrateClient } from "~/trpc/server";

export default function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 py-8">
          <h1 className="text-center text-4xl font-bold">Sand Tetris</h1>

          <p className="max-w-2xl text-center text-lg">
            Experience the classic Tetris reimagined with realistic sand
            physics.
          </p>
        </div>
        <div className="h-screen w-full">
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
