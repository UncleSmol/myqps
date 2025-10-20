import { useState } from 'react';
import { motion } from 'framer-motion';
import AppLogo from '../assets/MyQps-Logo.svg';
import DevSig from '../assets/dev-doc-logo.svg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
    { icon: 'bell', action: 'notifications', label: 'Notifications' },
    { icon: 'person', action: 'profile', label: 'Profile' },
  ];

  // Hamburger menu animation variants
  const hamburgerVariants = {
    open: {
      rotate: 45,
      transition: { duration: 0.3 },
    },
    closed: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
  };

  const hamburgerLineVariants = {
    open: (custom) => ({
      opacity: custom === 2 ? 0 : 1,
      y: custom === 1 ? 7 : custom === 3 ? -7 : 0,
      transition: { duration: 0.3 },
    }),
    closed: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    }),
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      pointerEvents: 'none',
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
    },
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
      },
    }),
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* App Logo */}
        <div className="logo-container">
          <img src={AppLogo} alt="MyQps" className="app-logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.path}
              className="nav-link"
              custom={index}
              initial="initial"
              animate="animate"
              variants={navItemVariants}
              whileHover={{ x: 4 }}
            >
              <i className={`bi bi-${item.icon} nav-icon`}></i>
              <span>{item.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="nav-right">
          {rightIcons.map((item) => (
            <motion.button
              key={item.label}
              className={`icon-btn ${
                item.action === 'notifications' ? 'has-badge' : ''
              }`}
              onClick={() => {
                if (item.action === 'search') setIsSearchOpen(!isSearchOpen);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`bi bi-${item.icon}`}></i>
              {item.action === 'notifications' && (
                <span className="badge">3</span>
              )}
            </motion.button>
          ))}

          {/* Animated Mobile Menu Toggle */}
          <motion.button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="hamburger-container"
              variants={hamburgerVariants}
              animate={isMenuOpen ? 'open' : 'closed'}
            >
              <motion.span
                className="hamburger-line"
                custom={1}
                variants={hamburgerLineVariants}
                animate={isMenuOpen ? 'open' : 'closed'}
              />
              <motion.span
                className="hamburger-line"
                custom={2}
                variants={hamburgerLineVariants}
                animate={isMenuOpen ? 'open' : 'closed'}
              />
              <motion.span
                className="hamburger-line"
                custom={3}
                variants={hamburgerLineVariants}
                animate={isMenuOpen ? 'open' : 'closed'}
              />
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Search Dropdown */}
      <motion.div
        className="search-dropdown"
        variants={menuVariants}
        initial="closed"
        animate={isSearchOpen ? 'open' : 'closed'}
      >
        <div className="search-container">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search papers, resources..."
          />
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="mobile-menu"
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
      >
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.path}
            className="mobile-nav-link"
            whileHover={{ x: 8 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <i className={`bi bi-${item.icon} mobile-nav-icon`}></i>
            <span>{item.label}</span>
          </motion.a>
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
      </motion.div>
    </header>
  );
};

export default Navigation;