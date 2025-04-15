import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Research", path: "/research" },
    // { name: 'Publications', path: '/publications' },
    // { name: "News", path: "/news" },
    // { name: "Teaching", path: "/teaching" },
    // { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          {/* Logo/Name */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-primary transition-colors hover:text-primary/80"
          >
            <span>Deepali Mishra</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 flex flex-col bg-background pt-16"
          >
            <nav className="container mx-auto px-4 py-8">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`text-xl font-medium transition-colors hover:text-primary ${
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground/70"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container mx-auto px-4 py-8 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Deepali Mishra. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:email@example.com"
                className="text-foreground/70 transition-colors hover:text-primary"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
