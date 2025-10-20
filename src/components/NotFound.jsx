import { motion } from 'framer-motion';

const NotFound = () => {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1>
          <i className="bi bi-compass"></i> Oops! You've Found Our Secret 404
          Chamber
        </h1>
        <p>
          <i className="bi bi-binoculars"></i> Looks like you've stumbled upon a
          page that's currently on vacation!
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2>
          <i className="bi bi-lightbulb"></i> While you're here, why not:
        </h2>
        <ul>
          <li>
            <i className="bi bi-journal-bookmark"></i> Explore our{' '}
            <a href="/resources">learning resources</a>
          </li>
          <li>
            <i className="bi bi-chat-dots"></i> Join the conversation in our{' '}
            <a href="/forum">community forum</a>
          </li>
          <li>
            <i className="bi bi-tools"></i> Discover our{' '}
            <a href="/services">amazing services</a>
          </li>
          <li>
            <i className="bi bi-shuffle"></i> Check out our{' '}
            <a href="/affiliates">partner programs</a>
          </li>
          <li>
            <i className="bi bi-envelope"></i>{' '}
            <a href="/contact">Send us a message</a> about your adventure here
          </li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3>
          <i className="bi bi-signpost-split"></i> Quick Escape Routes:
        </h3>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => window.history.back()}
        >
          <i className="bi bi-arrow-left-circle"></i> Beam Me Back
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => (window.location.href = '/')}
        >
          <i className="bi bi-house-door"></i> Take Me Home
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => window.location.reload()}
        >
          <i className="bi bi-arrow-clockwise"></i> Try Again
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <p>
          <i className="bi bi-quote"></i>
          <em>
            "Not all who wander are lost, but in this case... you might be!"
          </em>
        </p>
        <p>
          <i className="bi bi-stars"></i> Don't worry - even the best explorers
          take wrong turns sometimes!
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h4>
          <i className="bi bi-info-circle"></i> While we redirect the digital
          universe, here's a fun fact:
        </h4>
        <p>
          <i className="bi bi-clock-history"></i> The first 404 error was
          discovered in 1992 by Tim Berners-Lee himself! You're experiencing
          internet history!
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <p>
          <i className="bi bi-search"></i> Can't find what you're looking for?
          Try our <a href="/">search feature</a> on the homepage!
        </p>
      </motion.div>
    </motion.section>
  );
};

export default NotFound;
