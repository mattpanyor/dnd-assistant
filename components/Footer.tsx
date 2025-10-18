import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Left: Copyright */}
          <div className="text-sm text-gray-600 dark:text-gray-400 font-cormorant">
            <p>&copy; {currentYear} D&D Assistant. All rights reserved.</p>
          </div>

          {/* Right: Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors font-cormorant"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Optional: Additional info row */}
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-900">
          <p className="text-xs text-center text-gray-500 dark:text-gray-500 font-cormorant">
            Built for adventurers, dungeon masters, and heroes alike.
          </p>
        </div>
      </div>
    </footer>
  );
}
