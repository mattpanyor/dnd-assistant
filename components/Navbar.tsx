"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavItem } from "@/data/nav";
import DALogo from "@/components/DALogo";

interface NavbarProps {
  navItems: NavItem[];
}

export default function Navbar({ navItems }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    // Check initial theme
    setIsDark(document.documentElement.classList.contains("dark"));

    // Handle scroll to show/hide sticky navbar
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 64); // Show after scrolling past navbar height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {/* Static navbar - takes up space */}
      <NavbarContent
        navItems={navItems}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isDark={isDark}
        toggleTheme={toggleTheme}
        showMobileMenu={!showStickyNav}
      />

      {/* Sticky clone - appears on scroll (desktop only on mobile) */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showStickyNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <NavbarContent
          navItems={navItems}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isDark={isDark}
          toggleTheme={toggleTheme}
          showMobileMenu={showStickyNav}
        />
      </div>
    </>
  );
}

function NavbarContent({
  navItems,
  mobileMenuOpen,
  setMobileMenuOpen,
  isDark,
  toggleTheme,
  showMobileMenu
}: {
  navItems: NavItem[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isDark: boolean;
  toggleTheme: () => void;
  showMobileMenu: boolean;
}) {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Icon - Left Side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <DALogo className="w-10 h-10" />
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <NavItemDesktop key={item.label} item={item} />
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle ml-6"
              aria-label="Toggle theme"
            >
              {isDark ? (
                // Moon icon for dark mode
                <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                // Sun icon for light mode
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile: Theme Toggle and Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && showMobileMenu && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 top-16"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && showMobileMenu && (
        <div className="md:hidden fixed right-0 top-16 w-64 bg-white dark:bg-gray-900 border-l border-b border-gray-200 dark:border-gray-800 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto z-50">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <NavItemMobile
                key={item.label}
                item={item}
                onNavigate={() => setMobileMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItemDesktop({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = item.href === pathname || item.items?.some(subItem => subItem.href === pathname);

  if (item.items) {
    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className={`nav-item ${isActive ? 'active' : ''}`}>
          {item.label}
          <svg
            className="inline-block ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="nav-dropdown">
            <div className="py-1">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href || "#"}
                  className="nav-dropdown-item"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      className={`nav-item ${isActive ? 'active' : ''}`}
    >
      {item.label}
    </Link>
  );
}

function NavItemMobile({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const isActive = item.href === pathname || item.items?.some(subItem => subItem.href === pathname);

  if (item.items) {
    return (
      <div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full text-left nav-item flex justify-between items-center ${isActive ? 'active' : ''}`}
        >
          {item.label}
          <svg
            className={`w-4 h-4 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isExpanded && (
          <div className="ml-4 mt-1 space-y-1">
            {item.items.map((subItem) => (
              <Link
                key={subItem.label}
                href={subItem.href || "#"}
                onClick={onNavigate}
                className="nav-dropdown-item"
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      onClick={onNavigate}
      className={`nav-item block ${isActive ? 'active' : ''}`}
    >
      {item.label}
    </Link>
  );
}
