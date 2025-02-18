interface Config {
    websiteName: string;
    websiteUrl: string;
    contactEmail: string;
  }
  
  const config: Config = {
    websiteName: "Sand Tetris",
    websiteUrl: "sand-tetris.online",
    contactEmail: "lzb129239@gmail.com",
  };
  
  export default function TermsOfService() {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold">Terms of Service</h1>
        
        <section className="mb-8">
          <p className="mb-4 text-gray-600">
            Welcome to {config.websiteName}. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">1. User Agreement</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              By using {config.websiteName}, you agree to:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Play games fairly and not use any cheats or exploits</li>
              <li>Not attempt to manipulate scores or leaderboards</li>
              <li>Respect other players and maintain appropriate conduct</li>
              <li>Not use automated systems or bots to play games</li>
              <li>Not attempt to disrupt or interfere with the service</li>
            </ul>
          </div>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">2. Intellectual Property</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              All games, content, and materials on {config.websiteName} are protected by intellectual property rights. You may not:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Copy or modify the games or website content</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Create derivative works based on our games</li>
            </ul>
          </div>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">3. Game Rules and Fair Play</h2>
          <p className="text-gray-600">
            We strive to maintain fair gameplay for all users. Any attempt to cheat, hack, or exploit game mechanics may result in immediate account suspension or termination. We reserve the right to reset scores or remove users from leaderboards if we suspect unfair play.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">4. Service Availability</h2>
          <p className="text-gray-600">
            While we strive to provide uninterrupted gaming service, we do not guarantee that the service will be available at all times. We may need to perform maintenance, updates, or face technical issues that could temporarily affect service availability.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">5. User Content</h2>
          <p className="text-gray-600">
            If our service allows you to post comments or interact with other users, you are responsible for any content you post. We reserve the right to remove any content that violates these terms or is otherwise inappropriate.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">6. Disclaimer</h2>
          <p className="text-gray-600">
            {config.websiteName} is provided &quot;as is&quot; without any warranties. We are not responsible for any loss of progress, scores, or other game-related data that may occur due to technical issues or service interruptions.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">7. Modifications to Terms</h2>
          <p className="text-gray-600">
            We may update these terms of service at any time without notice. Continued use of the website after any modifications indicates your acceptance of the updated terms.
          </p>
        </section>
  
        <footer className="mt-12 text-sm text-gray-500">
          <p className="mt-2">
            For any questions about these Terms of Service, please contact us at{" "}
            <a
              href={`mailto:${config.contactEmail}`}
              className="text-gray-600 cursor-pointer"
            >
              {config.contactEmail}
            </a>
          </p>
        </footer>
      </div>
    );
  }