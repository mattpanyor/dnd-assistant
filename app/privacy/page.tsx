export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-8 font-serif">
          Privacy Policy
        </h1>

        <div className="prose prose-amber dark:prose-invert max-w-none space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mt-8 mb-4 font-serif">
              1. Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to D&D Assistant. We respect your privacy and are committed to protecting your personal data.
              This privacy policy explains how we handle your information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mt-8 mb-4 font-serif">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our website is designed with privacy in mind. We collect minimal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Local Storage Data:</strong> We store your dice roll history and theme preferences locally in your browser using localStorage. This data never leaves your device.</li>
              <li><strong>No Personal Information:</strong> We do not collect, store, or transmit any personally identifiable information such as names, email addresses, or IP addresses.</li>
              <li><strong>No Cookies:</strong> We do not use cookies or tracking technologies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mt-8 mb-4 font-serif">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The data stored locally on your device is used solely to enhance your experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Dice Roll History:</strong> Your dice roll history is saved in your browser's localStorage to allow you to review past rolls during your gaming sessions.</li>
              <li><strong>Theme Preference:</strong> Your light/dark mode preference is saved to maintain your chosen theme across visits.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              All of this data remains on your device and is never transmitted to our servers or any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mt-8 mb-4 font-serif">
              4. Data Storage and Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All data is stored locally in your browser using the browser's localStorage API. This data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-4">
              <li>Remains on your device only</li>
              <li>Is not transmitted over the internet</li>
              <li>Is not accessible to us or any third parties</li>
              <li>Can be cleared at any time by clearing your browser's local storage or using the "Clear History" button in the dice roller</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mt-8 mb-4 font-serif">
              5. Third-Party Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-4">
              <li><strong>Google Fonts:</strong> We use Google Fonts to load custom typefaces. When you visit our site, Google may collect limited technical information. Please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline">Google's Privacy Policy</a> for more information.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We do not use any analytics services, advertising networks, or other tracking technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mt-8 mb-4 font-serif">
              6. Your Rights and Control
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You have full control over your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-4">
              <li><strong>Access:</strong> You can view all locally stored data using your browser's developer tools.</li>
              <li><strong>Delete:</strong> You can clear your dice roll history using the "Clear History" button in the dice roller, or clear all data by clearing your browser's localStorage.</li>
              <li><strong>Opt-Out:</strong> You can disable JavaScript or use private browsing mode to prevent any local storage.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mt-8 mb-4 font-serif">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our website does not knowingly collect any information from anyone, including children under the age of 13.
              All functionality operates entirely within your browser using local storage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mt-8 mb-4 font-serif">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated
              revision date. We encourage you to review this privacy policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mt-8 mb-4 font-serif">
              9. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please feel free to reach out
              through the contact information provided on our website.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-amber-300 dark:border-purple-700">
            <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200 mb-4 font-serif">
              Summary
            </h2>
            <div className="bg-amber-100 dark:bg-purple-900/50 p-6 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-semibold mb-2">
                In short:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>We don't collect your personal information</li>
                <li>All data is stored locally in your browser only</li>
                <li>We don't use cookies or tracking</li>
                <li>No data is transmitted to our servers or third parties</li>
                <li>You have full control to view and delete your local data at any time</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
