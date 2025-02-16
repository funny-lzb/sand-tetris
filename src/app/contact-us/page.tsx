export default function ContactUs() {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold">Contact Us</h1>
        
        <section className="mb-8">
          <p className="mb-6 text-gray-600">
            We value your feedback and are here to help! Whether you have questions, suggestions, or just want to say hello, feel free to reach out to us.
          </p>
        </section>
  
        <section className="mb-8">
          <p className="text-lg text-gray-600">
            You can contact us at{" "}
            <a
              href="mailto:lzb129239@gmail.com"
              className="text-blue-600 hover:text-blue-800"
            >
              lzb129239@gmail.com
            </a>
          </p>
        </section>
  
        <section className="mb-8">
          <p className="text-gray-600">
            We strive to respond to all inquiries within 24-48 hours during business days. For urgent matters, please ensure to include "URGENT" in your email subject line.
          </p>
        </section>
      </div>
    );
  }