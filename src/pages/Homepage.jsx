import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: 'bi-journal-bookmark',
      title: 'Past Papers',
      description: 'Access comprehensive collection of past examination papers'
    },
    {
      icon: 'bi-lightbulb',
      title: 'Study Resources',
      description: 'Curated learning materials and study guides'
    },
    {
      icon: 'bi-people',
      title: 'Community',
      description: 'Connect with fellow students and educators'
    },
    {
      icon: 'bi-graph-up',
      title: 'Progress Tracking',
      description: 'Monitor your learning journey and improvements'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Past Papers', icon: 'bi-file-text' },
    { number: '50K+', label: 'Active Users', icon: 'bi-people' },
    { number: '100+', label: 'Subjects', icon: 'bi-book' },
    { number: '24/7', label: 'Support', icon: 'bi-clock' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const featureVariants = {
    enter: {
      opacity: 0,
      y: 20
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      className="homepage-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <div className="hero-section">
        <motion.div className="hero-content" variants={itemVariants}>
          <h1>
            Welcome to <span className="brand">MyQps</span>
          </h1>
          <p className="hero-subtitle">
            Your ultimate platform for past papers, study resources, and academic success
          </p>
          <p className="hero-description">
            Join thousands of students who are achieving their academic goals with our comprehensive 
            collection of past papers, interactive learning tools, and supportive community.
          </p>
          <div className="hero-buttons">
            <motion.a
              href="/resources"
              className="btn primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="bi bi-rocket-takeoff"></i>
              Get Started
            </motion.a>
            <motion.a
              href="/info"
              className="btn secondary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="bi bi-play-circle"></i>
              Learn More
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="hero-features" variants={itemVariants}>
          <motion.div
            key={currentFeature}
            variants={featureVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="feature-highlight"
          >
            <i className={`bi ${features[currentFeature].icon}`}></i>
            <h3>{features[currentFeature].title}</h3>
            <p>{features[currentFeature].description}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div className="stats-section" variants={itemVariants}>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <i className={`bi ${stat.icon}`}></i>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div className="features-section" variants={itemVariants}>
        <div className="section-header">
          <h2>Why Choose MyQps?</h2>
          <p>Everything you need to excel in your academic journey</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <i className={`bi ${feature.icon}`}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div className="cta-section" variants={itemVariants}>
        <div className="cta-content">
          <h2>Ready to Boost Your Grades?</h2>
          <p>Join MyQps today and access thousands of past papers and study resources</p>
          <motion.div className="cta-buttons">
            <motion.a
              href="/forum"
              className="btn outline"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="bi bi-people"></i>
              Join Community
            </motion.a>
            <motion.a
              href="/resources"
              className="btn primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="bi bi-search"></i>
              Browse Resources
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Partners Section */}
      <motion.div className="partners-section" variants={itemVariants}>
        <div className="section-header">
          <h2>Trusted By Students Worldwide</h2>
          <p>Join our growing community of successful learners</p>
        </div>
        <div className="partners-grid">
          <motion.div className="partner-item" whileHover={{ scale: 1.1 }}>
            <i className="bi bi-award"></i>
            <span>Top Rated</span>
          </motion.div>
          <motion.div className="partner-item" whileHover={{ scale: 1.1 }}>
            <i className="bi bi-shield-check"></i>
            <span>Verified Content</span>
          </motion.div>
          <motion.div className="partner-item" whileHover={{ scale: 1.1 }}>
            <i className="bi bi-graph-up-arrow"></i>
            <span>Proven Results</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Homepage;