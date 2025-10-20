import { motion } from 'framer-motion';
import '../styles/Info.css';

const Info = () => {
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

  const cardVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  const teamMembers = [
    {
      name: 'Academic Experts',
      role: 'Content Creation',
      description: 'Seasoned educators and subject matter specialists',
      icon: 'bi-mortarboard'
    },
    {
      name: 'Tech Innovators',
      role: 'Platform Development',
      description: 'Dedicated developers creating seamless learning experiences',
      icon: 'bi-laptop'
    },
    {
      name: 'Support Team',
      role: 'User Assistance',
      description: 'Friendly support staff ready to help you succeed',
      icon: 'bi-headset'
    }
  ];

  const values = [
    {
      icon: 'bi-gem',
      title: 'Quality First',
      description: 'We maintain the highest standards in all our educational materials and resources.'
    },
    {
      icon: 'bi-people',
      title: 'Community Driven',
      description: 'Our platform grows and improves through valuable feedback from our user community.'
    },
    {
      icon: 'bi-globe',
      title: 'Accessibility',
      description: 'Education should be available to everyone, everywhere, regardless of background.'
    },
    {
      icon: 'bi-graph-up',
      title: 'Continuous Improvement',
      description: 'We constantly update and enhance our platform based on user needs and educational trends.'
    }
  ];

  return (
    <motion.section
      className="info-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div className="info-hero" variants={itemVariants}>
        <div className="hero-content">
          <h1>
            <i className="bi bi-info-circle"></i> About MyQps
          </h1>
          <p className="hero-subtitle">
            Empowering students worldwide with accessible, quality educational resources
          </p>
          <p className="hero-description">
            MyQps was born from a simple vision: to make quality education accessible to every student, 
            regardless of their location or background. We believe that every learner deserves the tools 
            and resources to achieve their academic dreams.
          </p>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div className="mission-vision" variants={itemVariants}>
        <div className="mission-vision-grid">
          <motion.div 
            className="mission-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <i className="bi bi-bullseye"></i>
            <h2>Our Mission</h2>
            <p>
              To provide students with comprehensive, high-quality past papers and learning resources 
              that enhance their academic performance and build confidence in their abilities.
            </p>
          </motion.div>

          <motion.div 
            className="vision-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <i className="bi bi-eye"></i>
            <h2>Our Vision</h2>
            <p>
              To become the world's most trusted educational platform, breaking down barriers to 
              quality education and creating equal opportunities for learners everywhere.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* What We Offer */}
      <motion.div className="offerings-section" variants={itemVariants}>
        <div className="section-header">
          <h2>
            <i className="bi bi-gift"></i> What We Offer
          </h2>
          <p>Comprehensive tools and resources for academic success</p>
        </div>
        
        <div className="offerings-grid">
          <motion.div 
            className="offering-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <i className="bi bi-journal-bookmark"></i>
            <h3>Extensive Past Papers</h3>
            <p>Access thousands of past examination papers from various educational boards and subjects.</p>
            <ul>
              <li><i className="bi bi-check"></i> Multiple exam boards</li>
              <li><i className="bi bi-check"></i> Various difficulty levels</li>
              <li><i className="bi bi-check"></i> Regular updates</li>
            </ul>
          </motion.div>

          <motion.div 
            className="offering-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <i className="bi bi-lightbulb"></i>
            <h3>Study Resources</h3>
            <p>Curated learning materials, study guides, and revision notes to supplement your learning.</p>
            <ul>
              <li><i className="bi bi-check"></i> Study guides</li>
              <li><i className="bi bi-check"></i> Revision notes</li>
              <li><i className="bi bi-check"></i> Practice questions</li>
            </ul>
          </motion.div>

          <motion.div 
            className="offering-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <i className="bi bi-people"></i>
            <h3>Community Support</h3>
            <p>Connect with fellow students, share knowledge, and get help from the community.</p>
            <ul>
              <li><i className="bi bi-check"></i> Discussion forums</li>
              <li><i className="bi bi-check"></i> Peer support</li>
              <li><i className="bi bi-check"></i> Expert Q&A</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Our Values */}
      <motion.div className="values-section" variants={itemVariants}>
        <div className="section-header">
          <h2>
            <i className="bi bi-heart"></i> Our Values
          </h2>
          <p>The principles that guide everything we do</p>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="value-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <i className={`bi ${value.icon}`}></i>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div className="team-section" variants={itemVariants}>
        <div className="section-header">
          <h2>
            <i className="bi bi-people-fill"></i> Behind MyQps
          </h2>
          <p>Meet the dedicated team working to improve your learning experience</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <i className={`bi ${member.icon}`}></i>
              <h3>{member.name}</h3>
              <span className="role">{member.role}</span>
              <p>{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div className="info-stats" variants={itemVariants}>
        <div className="stats-grid">
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
          >
            <i className="bi bi-download"></i>
            <h3>10,000+</h3>
            <p>Resources Downloaded</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
          >
            <i className="bi bi-people"></i>
            <h3>50,000+</h3>
            <p>Students Helped</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
          >
            <i className="bi bi-globe"></i>
            <h3>100+</h3>
            <p>Countries Reached</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05 }}
          >
            <i className="bi bi-star"></i>
            <h3>4.8/5</h3>
            <p>User Rating</p>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div className="info-cta" variants={itemVariants}>
        <div className="cta-content">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of successful students who trust MyQps for their academic success</p>
          <div className="cta-buttons">
            <motion.a
              href="/resources"
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-rocket-takeoff"></i>
              Explore Resources
            </motion.a>
            <motion.a
              href="/contact"
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-chat-dots"></i>
              Get In Touch
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Info;