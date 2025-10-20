import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navigation.css';
import AppLogo from '../assets/MyQps-Logo.svg';
import DevSig from '../assets/dev-doc-logo.svg';

const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navItems = [
    { label: 'Homepage', icon: 'house', path: '/' },
    { label: 'Info', icon: 'info-circle', path: '/info' },
    { label: 'Services', icon: 'gear', path: '/services' },
    { label: 'Resources', icon: 'bookmark-check', path: '/resources' },
    { label: 'Forum', icon: 'people', path: '/forum' },
    { label: 'Affiliates', icon: 'link', path: '/affiliates' },
    { label: 'Contact', icon: 'telephone', path: '/contact' },
  ];

  const rightIcons = [
    { icon: 'search', action: 'search', label: 'Search' },
    { icon: 'person', action: 'profile', label: 'Profile' },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigate]);

  // Close search when menu opens and vice versa
  useEffect(() => {
    if (isMenuOpen) {
      setIsSearchOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setIsMenuOpen(false);
    }
  }, [isSearchOpen]);

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleProfileClick = () => {
    navigate('/my-profile');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchTerm);
    setIsSearchOpen(false);
    setSearchTerm('');
  };

  // Hamburger animation
  const hamburgerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const lineVariants = {
    open: {
      rotate: 45,
      y: 6,
    },
    closed: {
      rotate: 0,
      y: 0,
    },
  };

  const lineVariants2 = {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  };

  const lineVariants3 = {
    open: {
      rotate: -45,
      y: -6,
    },
    closed: {
      rotate: 0,
      y: 0,
    },
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // Search dropdown variants
  const searchVariants = {
    closed: {
      height: 0,
      opacity: 0,
    },
    open: {
      height: 'auto',
      opacity: 1,
    },
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* App Logo */}
        <div className="logo-container">
          <button
            className="logo-btn"
            onClick={() => handleNavClick('/')}
            aria-label="Home"
          >
            <img src={AppLogo} alt="MyQps" className="app-logo" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.path)}
              className="nav-link"
            >
              <i className={`bi bi-${item.icon} nav-icon`}></i>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="nav-right">
          {rightIcons.map((item) => (
            <button
              key={item.label}
              className="icon-btn"
              onClick={() => {
                if (item.action === 'search') {
                  handleSearchToggle();
                } else if (item.action === 'profile') {
                  handleProfileClick();
                }
              }}
              aria-label={item.label}
            >
              <i className={`bi bi-${item.icon}`}></i>
            </button>
          ))}

          {/* Mobile Menu Toggle */}
          <motion.button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <motion.div
              className="hamburger-container"
              variants={hamburgerVariants}
              initial="closed"
              animate={isMenuOpen ? 'open' : 'closed'}
            >
              <motion.span
                className="hamburger-line"
                variants={lineVariants}
              />
              <motion.span
                className="hamburger-line"
                variants={lineVariants2}
              />
              <motion.span
                className="hamburger-line"
                variants={lineVariants3}
              />
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Search Dropdown */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="search-dropdown"
            variants={searchVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSearchSubmit} className="search-container">
              <i className="bi bi-search search-icon"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search papers, resources..."
                value={searchTerm}
                onChange={handleSearchChange}
                autoFocus
              />
              {searchTerm && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setSearchTerm('')}
                >
                  <i className="bi bi-x"></i>
                </button>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mobile-menu-content">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.path)}
                    className="mobile-nav-link"
                  >
                    <i className={`bi bi-${item.icon} mobile-nav-icon`}></i>
                    <span>{item.label}</span>
                  </button>
                ))}

                {/* DevSig - Only visible on mobile */}
                <div className="devsig-container">
                  <div className="developed-by-text">Developed By</div>
                  <a
                    href="https://unclesmol.github.io/dev-doc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="devsig-link"
                  >
                    <img src={DevSig} alt="Dev Documentation" className="devsig-logo" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;