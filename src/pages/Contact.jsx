import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <motion.section
      className="contact-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div className="contact-header" variants={itemVariants}>
        <h1>
          <i className="bi bi-chat-dots"></i> Get In Touch
        </h1>
        <p>
          <i className="bi bi-envelope-paper"></i> Have questions, suggestions,
          or partnership inquiries? We'd love to hear from you!
        </p>
      </motion.div>

      <div className="contact-content">
        {/* Contact Information */}
        <motion.div className="contact-info" variants={itemVariants}>
          <h2>
            <i className="bi bi-info-circle"></i> Contact Information
          </h2>

          <div className="contact-methods">
            <motion.div className="contact-method" whileHover={{ scale: 1.05 }}>
              <i className="bi bi-envelope"></i>
              <div>
                <h3>Email Us</h3>
                <p>support@myqps.com</p>
                <span>We'll respond within 24 hours</span>
              </div>
            </motion.div>

            <motion.div className="contact-method" whileHover={{ scale: 1.05 }}>
              <i className="bi bi-clock"></i>
              <div>
                <h3>Response Time</h3>
                <p>24-48 Hours</p>
                <span>During business days</span>
              </div>
            </motion.div>

            <motion.div className="contact-method" whileHover={{ scale: 1.05 }}>
              <i className="bi bi-globe"></i>
              <div>
                <h3>Global Support</h3>
                <p>Worldwide</p>
                <span>Available for all timezones</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Help Section */}
          <motion.div className="quick-help" variants={itemVariants}>
            <h3>
              <i className="bi bi-lightbulb"></i> Quick Help
            </h3>
            <div className="help-options">
              <motion.a href="/forum" whileHover={{ x: 5 }}>
                <i className="bi bi-people"></i>
                <span>Community Forum</span>
                <i className="bi bi-arrow-right"></i>
              </motion.a>
              <motion.a href="/resources" whileHover={{ x: 5 }}>
                <i className="bi bi-journal-bookmark"></i>
                <span>Help Resources</span>
                <i className="bi bi-arrow-right"></i>
              </motion.a>
              <motion.a href="/affiliates" whileHover={{ x: 5 }}>
                <i className="bi bi-shuffle"></i>
                <span>Partnerships</span>
                <i className="bi bi-arrow-right"></i>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="contact-form-container" variants={itemVariants}>
          <h2>
            <i className="bi bi-send"></i> Send us a Message
          </h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="name">
                <i className="bi bi-person"></i> Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="email">
                <i className="bi bi-envelope"></i> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="subject">
                <i className="bi bi-tag"></i> Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="bug">Report a Bug</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="message">
                <i className="bi bi-chat-text"></i> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.subject ||
                !formData.message
              }
            >
              <i className="bi bi-send-check"></i> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div className="faq-section" variants={itemVariants}>
        <h2>
          <i className="bi bi-question-circle"></i> Frequently Asked Questions
        </h2>
        <div className="faq-grid">
          <motion.div className="faq-item" whileHover={{ y: -5 }}>
            <h3>
              <i className="bi bi-clock-history"></i> How long does it take to
              get a response?
            </h3>
            <p>
              We typically respond to all inquiries within 24-48 hours during
              business days.
            </p>
          </motion.div>

          <motion.div className="faq-item" whileHover={{ y: -5 }}>
            <h3>
              <i className="bi bi-shield-check"></i> Is my information secure?
            </h3>
            <p>
              Yes, we take your privacy seriously. Your information is encrypted
              and never shared with third parties.
            </p>
          </motion.div>

          <motion.div className="faq-item" whileHover={{ y: -5 }}>
            <h3>
              <i className="bi bi-briefcase"></i> Do you offer partnership
              opportunities?
            </h3>
            <p>
              Absolutely! We're always open to discussing partnerships. Use the
              partnership subject in the form.
            </p>
          </motion.div>

          <motion.div className="faq-item" whileHover={{ y: -5 }}>
            <h3>
              <i className="bi bi-globe2"></i> Do you support international
              users?
            </h3>
            <p>
              Yes, MyQps is available worldwide and we support users from all
              countries and timezones.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
