import { motion } from 'framer-motion';
import DevSig from '../assets/dev-doc-logo.svg';
import '../styles/Footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="footer-content">
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="footer-section">
          <h3>
            <i className="bi bi-stars"></i> MyQps
          </h3>
          <p>
            <i className="bi bi-lightbulb"></i> Empowering students and
            educators with quality educational resources and tools for academic
            success.
          </p>
          <div className="social-links">
            <motion.a href="#" variants={iconVariants} whileHover="hover">
              <i className="bi bi-facebook"></i>
            </motion.a>
            <motion.a href="#" variants={iconVariants} whileHover="hover">
              <i className="bi bi-twitter"></i>
            </motion.a>
            <motion.a href="#" variants={iconVariants} whileHover="hover">
              <i className="bi bi-linkedin"></i>
            </motion.a>
            <motion.a href="#" variants={iconVariants} whileHover="hover">
              <i className="bi bi-github"></i>
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} className="footer-section">
          <h4>
            <i className="bi bi-compass"></i> Quick Links
          </h4>
          <ul>
            <li>
              <a href="/">
                <i className="bi bi-house"></i> Homepage
              </a>
            </li>
            <li>
              <a href="/info">
                <i className="bi bi-info-circle"></i> About Us
              </a>
            </li>
            <li>
              <a href="/services">
                <i className="bi bi-tools"></i> Services
              </a>
            </li>
            <li>
              <a href="/resources">
                <i className="bi bi-journal-bookmark"></i> Resources
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div variants={itemVariants} className="footer-section">
          <h4>
            <i className="bi bi-headset"></i> Support
          </h4>
          <ul>
            <li>
              <a href="/forum">
                <i className="bi bi-chat-dots"></i> Community Forum
              </a>
            </li>
            <li>
              <a href="/contact">
                <i className="bi bi-envelope"></i> Contact Us
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-question-circle"></i> Help Center
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-book"></i> Documentation
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div variants={itemVariants} className="footer-section">
          <h4>
            <i className="bi bi-shield-check"></i> Legal
          </h4>
          <ul>
            <li>
              <a href="#">
                <i className="bi bi-file-text"></i> Privacy Policy
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-file-earmark-text"></i> Terms of Service
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-cookie"></i> Cookie Policy
              </a>
            </li>
            <li>
              <a href="/affiliates">
                <i className="bi bi-shuffle"></i> Affiliates
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div variants={itemVariants} className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            <i className="bi bi-copyright"></i> {currentYear} MyQps. All rights
            reserved.
          </p>
          <motion.div
            className="devsig-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="developed-by">Developed By</span>
            <a
              href="https://unclesmol.github.io/dev-doc"
              target="_blank"
              rel="noopener noreferrer"
              className="devsig-link"
            >
              <img
                src={DevSig}
                alt="Dev Documentation"
                className="devsig-logo"
              />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
