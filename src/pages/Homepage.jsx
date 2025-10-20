import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

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

  const learningPaths = [
    {
      level: 'N4-N6',
      programs: ['Business Management', 'Financial Management', 'Marketing'],
      color: 'primary'
    },
    {
      level: 'Engineering',
      programs: ['Civil', 'Electrical', 'Mechanical'],
      color: 'secondary'
    },
    {
      level: 'NCV',
      programs: ['Tourism', 'Office Administration', 'IT'],
      color: 'accent'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      program: 'Business Management N6',
      text: 'MyQps helped me improve my grades by 25%! The past papers were exactly what I needed.',
      avatar: 'SM'
    },
    {
      name: 'David T.',
      program: 'Civil Engineering N5',
      text: 'The community support and study resources made complex topics so much easier to understand.',
      avatar: 'DT'
    },
    {
      name: 'Lisa K.',
      program: 'Tourism NCV',
      text: 'I passed all my exams thanks to the comprehensive study materials and practice tests.',
      avatar: 'LK'
    }
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

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <motion.section
      className={`homepage-section ${videoLoaded ? 'has-video' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Video Background */}
      {videoLoaded && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`background-video ${videoLoaded ? 'loaded' : ''}`}
            onLoadedData={handleVideoLoad}
            poster="https://cdn.pixabay.com/photo/2025/04/07/05/37/ai-generated-8946410_1280.jpg"
          >
            <source src="https://cdn.pixabay.com/video/2025/04/07/270540_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </>
      )}

      {/* Hero Section */}
      <div className="homepage-content">
        <div className="hero-section">
          <motion.div className="hero-content" variants={itemVariants}>
            <h1>
              Conquer Your Exams with <span className="brand">MyQps</span>
            </h1>
            <p className="hero-subtitle">
              Turning past papers into your blueprint for academic success.
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
      </div>

      {/* Learning Paths Section */}
      <motion.div className="learning-paths-section" variants={itemVariants}>
        <div className="section-header">
          <h2>Explore Learning Paths</h2>
          <p>Choose your program and level to access tailored resources</p>
        </div>
        <div className="paths-grid">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.level}
              className={`path-card path-${path.color}`}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="path-header">
                <h3>{path.level}</h3>
                <i className="bi bi-arrow-right"></i>
              </div>
              <div className="path-programs">
                {path.programs.map((program, idx) => (
                  <span key={idx} className="program-tag">
                    {program}
                  </span>
                ))}
              </div>
              <motion.a
                href={`/resources?level=${path.level.toLowerCase()}`}
                className="path-link"
                whileHover={{ x: 5 }}
              >
                Explore Resources <i className="bi bi-arrow-right"></i>
              </motion.a>
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

      {/* How It Works Section */}
      <motion.div className="how-it-works-section" variants={itemVariants}>
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Start your journey to academic excellence in three simple steps</p>
        </div>
        <div className="steps-grid">
          <motion.div 
            className="step-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="step-number">1</div>
            <i className="bi bi-search"></i>
            <h3>Find Resources</h3>
            <p>Browse our extensive library of past papers and study materials by subject and level</p>
          </motion.div>
          <motion.div 
            className="step-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="step-number">2</div>
            <i className="bi bi-download"></i>
            <h3>Study Smart</h3>
            <p>Download materials, join study groups, and use our interactive learning tools</p>
          </motion.div>
          <motion.div 
            className="step-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="step-number">3</div>
            <i className="bi bi-trophy"></i>
            <h3>Ace Your Exams</h3>
            <p>Track your progress, identify weak areas, and achieve your academic goals</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div className="testimonials-section" variants={itemVariants}>
        <div className="section-header">
          <h2>Success Stories</h2>
          <p>Hear from students who transformed their academic journey with MyQps</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-card"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.program}</span>
                </div>
              </div>
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