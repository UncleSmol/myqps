import { motion } from 'framer-motion';
import '../styles/Affiliates.css';
import SurveyTimes from '../assets/survey-times.png';
import TvetTutorials from '../assets/tvet-tutorials.jpg';

const Affiliates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleSurveyTimesClick = () => {
    window.location.href = '/not-found';
  };

  const affiliates = [
    {
      name: 'TVET Tutorials',
      description:
        'YouTube channel providing Technical and Vocational Education training tutorials for hands-on skills development',
      icon: 'bi-youtube',
      category: 'Education',
      benefits: [
        'Free video tutorials',
        'Practical skills training',
        'Technical education resources',
        'Career-focused learning',
      ],
      links: {
        website: 'https://tvettutorials.co.za/',
        youtube: 'https://www.youtube.com/@TVETTutorials',
        facebook: 'https://www.facebook.com/tvetttut/',
        twitter: 'https://twitter.com/TutorialsTvet',
        instagram: 'https://www.instagram.com/tvettutorials/',
      },
      image: TvetTutorials,
    },
    {
      name: 'Survey Times',
      description:
        'Get paid in USD via PayPal for completing surveys. Earn money sharing your opinions on various topics and products',
      icon: 'bi-cash-coin',
      category: 'Earnings',
      benefits: [
        'Get paid in US Dollars',
        'PayPal payments',
        'Flexible survey schedule',
        'Multiple survey opportunities daily',
      ],
      image: SurveyTimes,
      isComingSoon: true,
    },
  ];

  return (
    <motion.section
      className="affiliates-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div className="affiliates-header" variants={itemVariants}>
        <h1>
          <i className="bi bi-shuffle"></i> Our Trusted Partners
        </h1>
        <p>
          <i className="bi bi-handshake"></i> We collaborate with exceptional
          platforms to bring you diverse opportunities for learning and earning.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div className="benefits-section" variants={itemVariants}>
        <h2>
          <i className="bi bi-stars"></i> Why Partner With Us?
        </h2>
        <div className="benefits-grid">
          <motion.div className="benefit-card" variants={itemVariants}>
            <i className="bi bi-mortarboard"></i>
            <h3>Quality Education</h3>
            <p>
              Access to premium educational content and practical skills
              training
            </p>
          </motion.div>
          <motion.div className="benefit-card" variants={itemVariants}>
            <i className="bi bi-wallet2"></i>
            <h3>Earning Opportunities</h3>
            <p>Legitimate ways to earn money while contributing to research</p>
          </motion.div>
          <motion.div className="benefit-card" variants={itemVariants}>
            <i className="bi bi-globe"></i>
            <h3>Global Access</h3>
            <p>Connect with international platforms and opportunities</p>
          </motion.div>
          <motion.div className="benefit-card" variants={itemVariants}>
            <i className="bi bi-shield-check"></i>
            <h3>Trusted Platforms</h3>
            <p>We only partner with verified and reliable services</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Affiliates Grid */}
      <motion.div className="affiliates-main" variants={itemVariants}>
        <h2>
          <i className="bi bi-building"></i> Our Partners
        </h2>

        <div className="affiliates-grid">
          {affiliates.map((affiliate, index) => (
            <motion.div
              key={affiliate.name}
              className="affiliate-card"
              variants={cardVariants}
              whileHover="hover"
            >
              {affiliate.image && (
                <div className="affiliate-image">
                  <img src={affiliate.image} alt={affiliate.name} />
                </div>
              )}
              <div className="affiliate-header">
                <i className={`bi ${affiliate.icon}`}></i>
                <span className="category-badge">{affiliate.category}</span>
                {affiliate.isComingSoon && (
                  <span className="coming-soon-badge">Coming Soon</span>
                )}
              </div>
              <h3>{affiliate.name}</h3>
              <p>{affiliate.description}</p>

              {affiliate.links && (
                <div className="social-links">
                  <h4>
                    <i className="bi bi-link-45deg"></i> Connect:
                  </h4>
                  <div className="link-buttons">
                    {affiliate.links.website && (
                      <a
                        href={affiliate.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-globe"></i> Website
                      </a>
                    )}
                    {affiliate.links.youtube && (
                      <a
                        href={affiliate.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-youtube"></i> YouTube
                      </a>
                    )}
                    {affiliate.links.facebook && (
                      <a
                        href={affiliate.links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-facebook"></i> Facebook
                      </a>
                    )}
                    {affiliate.links.twitter && (
                      <a
                        href={affiliate.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-twitter"></i> Twitter
                      </a>
                    )}
                    {affiliate.links.instagram && (
                      <a
                        href={affiliate.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-instagram"></i> Instagram
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="benefits-list">
                <h4>
                  <i className="bi bi-gift"></i> Key Features:
                </h4>
                <ul>
                  {affiliate.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <i className="bi bi-check-circle"></i> {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                className={`partner-btn ${
                  affiliate.isComingSoon ? 'coming-soon' : ''
                }`}
                whileHover={{ scale: affiliate.isComingSoon ? 1 : 1.05 }}
                whileTap={{ scale: affiliate.isComingSoon ? 1 : 0.95 }}
                onClick={
                  affiliate.name === 'Survey Times'
                    ? handleSurveyTimesClick
                    : undefined
                }
                disabled={affiliate.isComingSoon}
              >
                <i className="bi bi-link"></i>
                {affiliate.isComingSoon ? 'Coming Soon' : 'Learn More'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div className="cta-section" variants={itemVariants}>
        <div className="cta-content">
          <h2>
            <i className="bi bi-plus-circle"></i> Want to Partner With Us?
          </h2>
          <p>
            We're always looking for quality educational and earning platforms
            to recommend to our community.
          </p>
          <div className="cta-buttons">
            <motion.button
              className="cta-btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-envelope"></i> Contact Partnerships
            </motion.button>
            <motion.button
              className="cta-btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-file-text"></i> Partnership Criteria
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Affiliates;
