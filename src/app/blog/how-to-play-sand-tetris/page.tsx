import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Play Sand Tetris: Complete Beginner&apos;s Guide 2024",
  description:
    "Learn how to play Sand Tetris with our comprehensive guide. Master the unique sand physics, scoring system, and advanced strategies to improve your gameplay.",
  openGraph: {
    title: "How to Play Sand Tetris: Complete Beginner&apos;s Guide 2024",
    description:
      "Master Sand Tetris with our step-by-step guide. Learn mechanics, strategies, and pro tips for better gameplay.",
    type: "article",
    images: [
      {
        url: "/images/sand-tetris-guide-cover.png",
        width: 1200,
        height: 630,
        alt: "Sand Tetris Gameplay Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Play Sand Tetris: Complete Beginner&apos;s Guide 2024",
    description:
      "Master Sand Tetris with our step-by-step guide. Learn mechanics, strategies, and pro tips for better gameplay.",
  },
};

export default function SandTetrisGuidePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          How to Play Sand Tetris: Complete Beginner&apos;s Guide
        </h1>
        <div className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Last Updated: March 19, 2024
        </div>
      </header>

      <div className="prose prose-xl dark:prose-invert space-y-8">
        <p className="lead mb-12 mt-8 text-xl">
          Sand Tetris combines classic Tetris gameplay with realistic sand
          physics, creating a unique puzzle experience. This comprehensive guide
          will teach you everything from basic controls to advanced techniques.
        </p>

        <section className="space-y-6">
          <h2 className="mt-12 text-3xl font-bold">
            Getting Started with Sand Tetris
          </h2>
          <h3 className="mt-8 text-2xl font-bold">Basic Controls</h3>
          <ul className="my-6 list-disc pl-6">
            <li>Left/Right Arrow: Move pieces horizontally</li>
            <li>Down Arrow: Soft drop</li>
            <li>Space Bar: Hard drop</li>
            <li>Up Arrow: Rotate piece</li>
          </ul>

          <h3 className="mt-8 text-2xl font-bold">
            Understanding Sand Physics
          </h3>
          <p>
            Unlike traditional Tetris, blocks in Sand Tetris transform into
            flowing sand particles upon landing. This creates unique gameplay
            mechanics:
          </p>
          <ul className="my-6 list-disc pl-6">
            <li>Sand flows naturally based on gravity</li>
            <li>Particles can fill gaps and create new patterns</li>
            <li>Line clears work differently due to sand mechanics</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="mt-12 text-3xl font-bold">Core Game Mechanics</h2>
          <h3 className="mt-8 text-2xl font-bold">Scoring System</h3>
          <p>Points are awarded based on:</p>
          <ul className="my-6 list-disc pl-6">
            <li>Single line clears: 100 points</li>
            <li>Sand flow combos: Bonus multipliers</li>
            <li>Quick drops: Speed bonuses</li>
          </ul>

          <h3 className="mt-8 text-2xl font-bold">Level Progression</h3>
          <p>As you clear more lines:</p>
          <ul className="my-6 list-disc pl-6">
            <li>Game speed increases</li>
            <li>Sand behavior becomes more challenging</li>
            <li>Higher scoring opportunities appear</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="mt-12 text-3xl font-bold">Advanced Strategies</h2>
          <h3 className="mt-8 text-2xl font-bold">Sand Management</h3>
          <ul className="my-6 list-disc pl-6">
            <li>Create stable foundations</li>
            <li>Utilize sand flow for chain reactions</li>
            <li>Plan for particle settling time</li>
          </ul>

          <h3 className="mt-8 text-2xl font-bold">High Score Techniques</h3>
          <ul className="my-6 list-disc pl-6">
            <li>Master quick-stacking methods</li>
            <li>Set up multi-line clears</li>
            <li>Use sand physics to your advantage</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="mt-12 text-3xl font-bold">Pro Tips and Tricks</h2>
          <h3 className="mt-8 text-2xl font-bold">Common Mistakes to Avoid</h3>
          <ul className="my-6 list-disc pl-6">
            <li>Don&apos;t ignore sand settling patterns</li>
            <li>Avoid creating unstable structures</li>
            <li>Plan ahead for particle flow</li>
          </ul>

          <h3 className="mt-8 text-2xl font-bold">Practice Exercises</h3>
          <p>Improve your skills with these focused practice routines:</p>
          <ol className="my-6 list-decimal pl-6">
            <li>Basic stacking drills</li>
            <li>Sand flow prediction exercises</li>
            <li>Speed and accuracy training</li>
          </ol>
        </section>

        <section className="space-y-6">
          <h2 className="mt-12 text-3xl font-bold">Conclusion</h2>
          <p>
            Mastering Sand Tetris requires understanding both traditional Tetris
            skills and unique sand physics mechanics. Practice these techniques
            regularly, and you&apos;ll see your scores improve dramatically.
            Remember, the key to success is patience and consistent practice.
          </p>

          <div className="mt-8 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            <h3 className="text-xl font-bold">Quick Reference Guide</h3>
            <ul className="mt-4 space-y-2">
              <li>✓ Learn the basic controls</li>
              <li>✓ Understand sand physics</li>
              <li>✓ Practice stable stacking</li>
              <li>✓ Master flow predictions</li>
              <li>✓ Keep improving with regular practice</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}
