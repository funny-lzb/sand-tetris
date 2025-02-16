export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">About Sand Tetris</h1>
      
      <section className="mb-8">
        <p className="mb-4 text-gray-600">
          Welcome to Sand Tetris (sand-tetris.online), your premier destination for engaging block-matching puzzle games. We specialize in creating innovative variations of the classic Tetris game, bringing you endless hours of entertainment right in your web browser - no downloads needed!
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">What We Offer</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            At Sand Tetris, we're passionate about creating engaging puzzle experiences. Our platform features:
          </p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>Classic Tetris with modern twists</li>
            <li>Browser-based gameplay - play instantly</li>
            <li>Responsive controls optimized for desktop</li>
            <li>Regular updates with new game modes</li>
            <li>Competitive leaderboards</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to modernize classic block-matching puzzle games for today's web. We believe that great games should be instantly accessible to everyone, anywhere, without the need for downloads or installations. Through innovative gameplay mechanics and thoughtful design, we aim to create engaging experiences that challenge and entertain players of all skill levels.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Future Plans</h2>
        <p className="text-gray-600">
          We're constantly working to enhance the Sand Tetris experience. Our upcoming features include:
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 pl-4 text-gray-600">
          <li>New game modes and variations</li>
          <li>Mobile-optimized controls</li>
          <li>Global leaderboards</li>
          <li>Achievement system</li>
          <li>Multiplayer challenges</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Contact Us</h2>
        <p className="text-gray-600">
          We value your feedback and are always eager to hear from our players! Whether you have suggestions for improvements, found a bug, or just want to share your experience, feel free to reach out to us.
        </p>
        <p className="mt-4 text-gray-600">
          You can contact us at: <a href="mailto:lzb129239@gmail.com" className="text-blue-600 hover:text-blue-800">lzb129239@gmail.com</a>
        </p>
        <p className="mt-4 text-gray-600">
          We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please include "URGENT" in your email subject line.
        </p>
      </section>
    </div>
  );
}