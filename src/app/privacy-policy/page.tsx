interface PrivacyConfig {
    websiteName: string;
    websiteUrl: string;
    contactEmail: string;
  }
  
  const config: PrivacyConfig = {
    websiteName: "Sand Tetris",
    websiteUrl: "sand-tetris.online",
    contactEmail: "lzb129239@gmail.com",
  };
  
  export default function PrivacyPolicy() {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
  
        <section className="mb-8">
          <p className="mb-4 text-gray-600">
            At {config.websiteName}, accessible from{" "}
            <a 
              href={`https://${config.websiteUrl}`} 
              className="text-gray-600 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://{config.websiteUrl}
            </a>
            , we prioritize the privacy of our players. 
            This Privacy Policy document outlines the types of information we collect and how we utilize it.
          </p>
          <p className="mb-4 text-gray-600">
            If you have any questions about our Privacy Policy, 
            please contact us at{" "}
            <a href={`mailto:${config.contactEmail}`} className="text-gray-600 cursor-pointer">
              {config.contactEmail}
            </a>.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Information We Collect</h2>
          <div className="space-y-4 text-gray-600">
            <h3 className="font-medium">Log Files</h3>
            <p>
              {config.websiteName} follows standard procedures for using log files. These files log visitors when they 
              access our website. The information collected by log files includes:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Internet Protocol (IP) addresses</li>
              <li>Browser type and version</li>
              <li>Game scores and progress</li>
              <li>Time and date of your visit</li>
              <li>Game session information</li>
            </ul>
            <p>
              This information is used for improving game performance, analyzing trends, and enhancing the player experience.
            </p>
          </div>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Cookies and Web Storage</h2>
          <p className="mb-4 text-gray-600">
            {config.websiteName} uses cookies and local storage to enhance your gaming experience. These are used to:
          </p>
          <ul className="list-inside list-disc space-y-2 pl-4 text-gray-600">
            <li>Save your game progress</li>
            <li>Remember your preferences</li>
            <li>Maintain your session information</li>
            <li>Track your high scores</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Third Party Services</h2>
          <p className="text-gray-600">
            {config.websiteName} may use third-party services for analytics and performance monitoring.
            These services may collect anonymous usage data to help us improve our games.
            We recommend reviewing the privacy policies of these third-party services for more information.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Children&apos;s Information</h2>
          <p className="text-gray-600">
            While our games are enjoyed by players of all ages, {config.websiteName} does not knowingly collect 
            personal information from children under 13. If you believe your child has provided personal information,
            please contact us immediately and we will promptly remove such information.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Updates to This Policy</h2>
          <p className="text-gray-600">
            We may update this privacy policy from time to time. We will notify you of any changes by posting 
            the new privacy policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Consent</h2>
          <p className="text-gray-600">
            By using our website and games, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </section>
  
        <footer className="mt-12 text-sm text-gray-500">
     
          <p className="mt-2">
            For any questions about this Privacy Policy, please contact us at{" "}
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