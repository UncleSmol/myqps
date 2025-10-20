import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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

  const categories = [
    { id: 'all', name: 'All Services', icon: 'bi-grid' },
    { id: 'study', name: 'Study Resources', icon: 'bi-journal-bookmark' },
    { id: 'community', name: 'Community', icon: 'bi-people' },
    { id: 'tools', name: 'Learning Tools', icon: 'bi-tools' },
    { id: 'premium', name: 'Premium Features', icon: 'bi-star' },
  ];

  const services = [
    {
      id: 1,
      title: 'Past Papers Library',
      description:
        'Access thousands of past examination papers from various educational boards and subjects with detailed solutions.',
      icon: 'bi-file-text',
      category: 'study',
      features: [
        'Multiple exam boards',
        'Subject-wise categorization',
        'Answer keys',
        'Regular updates',
      ],
      isPopular: true,
    },
    {
      id: 2,
      title: 'Study Guides & Notes',
      description:
        'Comprehensive study materials curated by experienced educators to help you master difficult concepts.',
      icon: 'bi-journal-bookmark',
      category: 'study',
      features: [
        'Topic summaries',
        'Key concepts',
        'Revision notes',
        'Exam tips',
      ],
      isPopular: false,
    },
    {
      id: 3,
      title: 'Community Forum',
      description:
        'Connect with fellow students, ask questions, share knowledge, and learn together in our supportive community.',
      icon: 'bi-people',
      category: 'community',
      features: [
        'Q&A discussions',
        'Study groups',
        'Peer support',
        'Expert advice',
      ],
      isPopular: true,
    },
    {
      id: 4,
      title: 'Progress Tracker',
      description:
        'Monitor your learning journey, track your performance, and identify areas that need improvement.',
      icon: 'bi-graph-up',
      category: 'tools',
      features: [
        'Performance analytics',
        'Progress reports',
        'Weak area identification',
        'Goal setting',
      ],
      isPopular: false,
    },
    {
      id: 5,
      title: 'Practice Tests',
      description:
        'Take timed practice tests that simulate real exam conditions to build confidence and improve time management.',
      icon: 'bi-clock',
      category: 'tools',
      features: [
        'Timed tests',
        'Instant results',
        'Performance ranking',
        'Detailed feedback',
      ],
      isPopular: false,
    },
    {
      id: 6,
      title: 'Video Tutorials',
      description:
        'Learn through engaging video lessons that break down complex topics into easy-to-understand segments.',
      icon: 'bi-play-circle',
      category: 'study',
      features: [
        'Expert instructors',
        'Step-by-step explanations',
        'Visual learning',
        'Downloadable content',
      ],
      isPopular: true,
    },
    {
      id: 7,
      title: 'Premium Support',
      description:
        'Get personalized help from our team of educational experts and priority customer support.',
      icon: 'bi-headset',
      category: 'premium',
      features: [
        '1-on-1 assistance',
        'Priority support',
        'Custom study plans',
        'Direct expert access',
      ],
      isPopular: false,
    },
    {
      id: 8,
      title: 'Mobile Learning',
      description:
        'Access all resources on-the-go with our mobile-friendly platform and dedicated learning app.',
      icon: 'bi-phone',
      category: 'tools',
      features: [
        'Offline access',
        'Mobile app',
        'Sync across devices',
        'Push notifications',
      ],
      isPopular: false,
    },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <motion.section
      className="services-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div className="services-hero" variants={itemVariants}>
        <div className="hero-content">
          <h1>
            <i className="bi bi-tools"></i> Our Services
          </h1>
          <p className="hero-subtitle">
            Comprehensive learning tools and resources designed to boost your
            academic performance
          </p>
          <p className="hero-description">
            From past papers to community support, we provide everything you
            need to excel in your studies. Our services are crafted to make
            learning effective, engaging, and accessible to all students.
          </p>
        </div>
      </motion.div>

      {/* Categories Filter */}
      <motion.div className="categories-section" variants={itemVariants}>
        <h2>
          <i className="bi bi-filter"></i> Browse by Category
        </h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${
                activeCategory === category.id ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`bi ${category.icon}`}></i>
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div className="services-grid-section" variants={itemVariants}>
        <div className="services-grid">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              className={`service-card ${service.isPopular ? 'popular' : ''}`}
              variants={cardVariants}
              whileHover="hover"
              layout
            >
              {service.isPopular && (
                <div className="popular-badge">
                  <i className="bi bi-star-fill"></i>
                  Most Popular
                </div>
              )}
              <div className="service-icon">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                <h4>
                  <i className="bi bi-list-check"></i> Features:
                </h4>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                className="service-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-arrow-right"></i>
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pricing Tiers */}
      <motion.div className="pricing-section" variants={itemVariants}>
        <div className="section-header">
          <h2>
            <i className="bi bi-tags"></i> Choose Your Plan
          </h2>
          <p>Flexible options to suit every student's needs and budget</p>
        </div>

        <div className="pricing-grid">
          <motion.div
            className="pricing-card"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="pricing-header">
              <h3>Free</h3>
              <div className="price">
                $0<span>/month</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>
                  <i className="bi bi-check"></i> Basic past papers access
                </li>
                <li>
                  <i className="bi bi-check"></i> Community forum
                </li>
                <li>
                  <i className="bi bi-check"></i> Limited practice tests
                </li>
                <li>
                  <i className="bi bi-x"></i> No video tutorials
                </li>
                <li>
                  <i className="bi bi-x"></i> Standard support
                </li>
              </ul>
            </div>
            <motion.button
              className="pricing-btn outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
          </motion.div>

          <motion.div
            className="pricing-card popular-plan"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Pro Student</h3>
              <div className="price">
                $9.99<span>/month</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>
                  <i className="bi bi-check"></i> All past papers
                </li>
                <li>
                  <i className="bi bi-check"></i> Unlimited practice tests
                </li>
                <li>
                  <i className="bi bi-check"></i> Video tutorials
                </li>
                <li>
                  <i className="bi bi-check"></i> Progress tracking
                </li>
                <li>
                  <i className="bi bi-check"></i> Priority support
                </li>
              </ul>
            </div>
            <motion.button
              className="pricing-btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Pro Trial
            </motion.button>
          </motion.div>

          <motion.div
            className="pricing-card"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="pricing-header">
              <h3>Institution</h3>
              <div className="price">Custom</div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>
                  <i className="bi bi-check"></i> Everything in Pro
                </li>
                <li>
                  <i className="bi bi-check"></i> Multiple user accounts
                </li>
                <li>
                  <i className="bi bi-check"></i> Custom content
                </li>
                <li>
                  <i className="bi bi-check"></i> Advanced analytics
                </li>
                <li>
                  <i className="bi bi-check"></i> Dedicated support
                </li>
              </ul>
            </div>
            <motion.button
              className="pricing-btn outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div className="services-cta" variants={itemVariants}>
        <div className="cta-content">
          <h2>Ready to Enhance Your Learning Experience?</h2>
          <p>
            Join thousands of students who are already achieving academic
            success with our services
          </p>
          <div className="cta-buttons">
            <motion.a
              href="/resources"
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-rocket-takeoff"></i>
              Explore All Services
            </motion.a>
            <motion.a
              href="/contact"
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-question-circle"></i>
              Need Help Choosing?
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
