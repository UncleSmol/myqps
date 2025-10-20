import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Resources.css';

const Resources = () => {
  const [expandedFolders, setExpandedFolders] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const toggleFolder = (folderPath) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderPath]: !prev[folderPath],
    }));
  };

  const structure = {
    'Business Studies': {
      Tourism: {
        N4: [
          'Tourism Communication',
          'Tourist Destinations',
          'Travel Office Procedures',
          'Travel Services',
        ],
        N5: [
          'Travel Services',
          'Tourism Communication',
          'Tourist Destinations',
          'Travel Office Procedures',
        ],
        N6: [
          'Travel Services',
          'Hotel Reception',
          'Tourist Destinations',
          'Travel Office Procedures',
        ],
      },
      'Human Resources Management': {
        N4: [
          'Computer Practice',
          'Entrepreneurship Business Management',
          'Management Communication',
          'Personnel Management',
        ],
        N5: [
          'Labour Relations',
          'Personnel Management',
          'Computer Practice',
          'Personnel Training',
        ],
        N6: [
          'Computer Practice',
          'Labour Relations',
          'Personnel Management',
          'Personnel Training',
        ],
      },
      'Art & Design': {
        N4: ['Drawing', 'Jewellery Manufacturing', 'Jewellery Design'],
        N5: [
          'Drawing',
          'History of Art',
          'Jewellery Design',
          'Jewellery Manufacturing',
        ],
        N6: [
          'Drawing',
          'History of Art',
          'Jewellery Design',
          'Jewellery Manufacturing',
        ],
      },
      'Business Management': {
        N4: [
          'Management Communication N4',
          'Computer Practice',
          'Entrepreneurship & Business Management',
          'Introductory Accounting N4',
        ],
        N5: ['Sales Management'],
        N6: [
          'Computer Practice',
          'Entrepreneurship & Business Management',
          'Sales Management',
        ],
      },
      Educare: {
        N4: [
          'Child Health',
          'Day Care Personnel Development',
          'Educare Didactics',
          'Education',
        ],
        N5: [
          'Day Care Communication',
          'Educare Didactics',
          'Education Psychology',
        ],
        N6: [
          'Day Care Communication',
          'Day Care Management',
          'Educare Didactics',
          'Education Psychology',
        ],
      },
      'Financial Management': {
        N4: ['Computerised Financial Systems N4', 'Financial Accounting N4'],
        N5: [
          'Computerised Financial Systems',
          'Cost & Management Accounting',
          'Financial Accounting',
        ],
        N6: [
          'Financial Accounting',
          'Computerised Financial Systems',
          'Cost & Management Accounting',
        ],
      },
      Hospitality: {
        N4: [
          'Applied Management',
          'Catering: Theory & Practical',
          'Nutrition & Menu Planning',
          'Sanitation & Safety',
        ],
        N5: [
          'Applied Management',
          'Catering: Theory & Practical',
          'Food & Beverage Services',
        ],
        N6: [
          'Applied Management',
          'Catering: Theory & Practical',
          'Communication & Human Relations',
        ],
      },
      'Management Assistant': {
        N4: ['Financial Accounting', 'Introductory Accounting N4'],
        N5: [
          'Entrepreneurship & Business Management',
          'Financial Accounting',
          'Sales Management',
        ],
        N6: ['Entrepreneurship & Business Management', 'Sales Management'],
      },
      'Marketing Management': {
        N4: ['Introductory Computer Practice', 'Marketing Management'],
        N5: ['Marketing Management'],
        N6: [
          'Market Research',
          'Marketing Communication',
          'Marketing Management',
        ],
      },
      'Legal Secretary': {
        N4: ['Mercantile Law'],
        N5: ['Legal Practice', 'Mercantile Law'],
      },
      'Popular Music Performance': {
        N4: [
          'Aural & Ensemble',
          'Improvisation',
          'Music Business & Styles',
          'Practical Guitar',
          'Practical Piano-Keyboard',
          'Practical Vocal',
        ],
        N5: [
          'Aural & Ensemble',
          'Improvisation',
          'Music Business & Styles',
          'Practical Guitar',
          'Practical Piano-Keyboard',
          'Practical Vocal',
        ],
        N6: [
          'Aural & Ensemble',
          'Improvisation',
          'Music Business & Styles',
          'Practical Guitar',
          'Practical Piano-Keyboard',
          'Practical Vocal',
        ],
      },
      'Medical Secretary': {
        N4: [
          'Communication',
          'Information Processing',
          'Medical Practice',
          'Office Practice',
        ],
        N5: [
          'Communication',
          'Information Processing',
          'Medical Practice',
          'Office Practice',
        ],
      },
    },
    Engineering: {
      'Electrical Engineering': {
        N1: ['Industrial Electronics', 'ETT (Electrical Trade Theory)'],
        N2: ['Electrical Trade Theory', 'Industrial Electronics'],
        N3: [
          'Electrical Trade Theory',
          'Electrotechnology',
          'Industrial Electronics',
        ],
        N4: ['Electrotechnics N4', 'Industrial Electronics N4'],
        N5: ['Electrotechnics', 'Industrial Electronics'],
        N6: ['Electrotechnics', 'Industrial Electronics'],
      },
      'Civil Engineering': {
        N2: [
          'Bricklaying and Plastering Theory',
          'Building Drawing',
          'Building Science',
          'Mathematics',
          'Carpentry and Roofing Theory',
          'Plumbing Theory',
        ],
        N3: [
          'Building Science',
          'Building & Civil Technology',
          'Building Drawing',
        ],
        N4: [
          'Engineering Science',
          'Building Administration',
          'Building and Structural Construction',
          'Building and Structural Surveying',
          'Quantity Surveying',
        ],
        N5: [
          'Surveying Quantity',
          'Building & Structural Construction',
          'Building & Structural Surveying',
          'Building Administration',
        ],
        N6: [
          'Building Administration',
          'Quantity Surveying',
          'Building & Structural Construction',
          'Building & Structural Surveying',
        ],
      },
      'Mechanical Engineering': {
        N1: [
          'Eng Drawing',
          'Fitting & Machining',
          "Plater's Theory",
          'Plating & Structural Steel Drawing',
        ],
        N2: [
          'Diesel Trade Theory',
          'Fitting & Machining',
          'Engineering Drawing',
          'PSSD',
        ],
        N3: [
          'Diesel Trade Theory',
          'Motor Bodywork Theory',
          'Motor Electrical Theory',
          'Engineering Drawing',
          'Mechanotechnics',
        ],
        N4: [
          'Mechanotechnics Production',
          'Mechanic Draughting',
          'Plating & Structural Steel Drawing',
        ],
        N5: [
          'Mechanic Draughting',
          'Mechanotechnics Production',
          'Plating & Structural Steel Drawing',
        ],
        N6: [
          'Mechanotechnics Production',
          'Mechanic Draughting',
          'Plating & Structural Steel Drawing',
        ],
      },
    },
    NCV: {
      'Tourism NCV': {
        'Level 2': [
          'Science of Tourism',
          'Sustainable Tourism in South Africa',
          'Tourism Operations',
        ],
        'Level 3': [
          'Sustainable Tourism in South Africa',
          'Science of Tourism',
          'Tourism Operations',
        ],
        'Level 4': [
          'Sustainable Tourism in South Africa',
          'Science of Tourism',
          'Tourism Operations',
        ],
      },
      'Civil Engineering & Building Construction': {
        'Level 2': [
          'Construction Carpentry & Roof Work',
          'Construction Materials',
          'Construction Planning',
          'Construction Plant & Equipment',
          'Construction Plumbing',
          'Construction Supervisor',
          'Masonry & Tiling',
          'Roads & Concrete Structure',
        ],
        'Level 3': [
          'Construction Carpentry & Roof Work',
          'Construction Materials',
          'Construction Planning',
          'Construction Plant & Equipment',
          'Construction Plumbing',
          'Construction Supervisor',
          'Masonry & Tiling',
          'Roads & Concrete Structure',
        ],
        'Level 4': [
          'Construction Carpentry & Roof Work',
          'Construction Materials',
          'Construction Planning',
          'Construction Plant & Equipment',
          'Construction Plumbing',
          'Construction Supervisor',
          'Masonry & Tiling',
          'Roads & Concrete Structure',
        ],
      },
      'Office Administration': {
        'Level 2': [
          'Business Practice',
          'Office Data Processing',
          'Office Practice',
          'Wholesale & Retail',
        ],
        'Level 3': [
          'Business Practice',
          'Office Data Processing',
          'Office Practice',
          'Wholesale & Retail',
        ],
        'Level 4': [
          'Business Practice',
          'Office Data Processing',
          'Office Practice',
          'Wholesale & Retail',
        ],
      },
      'Electrical Infrastructure Construction': {
        'Level 2': [
          'Electrical Principles and Practice',
          'Electrical Systems and Construction',
          'Electronic Control and Digital Electronics',
          'Electrical Workmanship',
        ],
        'Level 3': [
          'Electrical Principles and Practice',
          'Electrical Systems and Construction',
          'Electrical Workmanship',
          'Electronic Control and Digital Electronics',
        ],
        'Level 4': [
          'Electrical Principles and Practice',
          'Electrical Systems and Construction',
          'Electrical Workmanship',
          'Electronic Control and Digital Electronics',
        ],
      },
      'Engineering & Related Design': {
        'Level 2': [
          'Applied Engineering Technology',
          'Automotive Repair & Maintenance',
          'Engineering Fabrication',
          'Engineering Practice & Maintenance',
          'Engineering Processes & Technology',
          'Engineering Systems, Graphic Design',
          'Engineering Technology',
          'Fitting & Turning',
          'Materials Technology',
          'Professional Engineering Practice',
          'Refrigeration & Air-Conditioning',
          'Welding',
        ],
        'Level 3': [
          'Applied Engineering Technology',
          'Automotive Repair & Maintenance',
          'Engineering Fabrication',
          'Engineering Practice & Maintenance',
          'Engineering Processes & Technology',
          'Engineering Systems, Graphic Design',
          'Engineering Technology',
          'Fitting & Turning',
          'Materials Technology',
          'Professional Engineering Practice',
          'Refrigeration & Air-Conditioning',
          'Welding',
        ],
        'Level 4': [
          'Applied Engineering Technology',
          'Automotive Repair & Maintenance',
          'Engineering Fabrication',
          'Engineering Practice & Maintenance',
          'Engineering Processes & Technology',
          'Engineering Systems, Graphic Design',
          'Engineering Technology',
          'Fitting & Turning',
          'Materials Technology',
          'Professional Engineering Practice',
          'Refrigeration & Air-Conditioning',
          'Welding',
        ],
      },
      'Finance, Economics & Accounting': {
        'Level 2': [
          'Applied Accounting',
          'Financial Management',
          'New Venture Creation',
        ],
        'Level 3': [
          'Applied Accounting',
          'Financial Management',
          'New Venture Creation',
        ],
        'Level 4': [
          'Applied Accounting',
          'Financial Management',
          'New Venture Creation',
        ],
      },
      Management: {
        'Level 2': [
          'Management Practice',
          'Operations Management',
          'Project Management',
          'Marketing',
        ],
        'Level 3': [
          'Management Practice',
          'Operations Management',
          'Project Management',
          'Marketing',
        ],
        'Level 4': [
          'Management Practice',
          'Operations Management',
          'Project Management',
          'Marketing',
        ],
      },
      'Primary Health': {
        'Level 2': [
          'Health Promotion',
          'Human Body and Mind',
          'Primary Health',
        ],
        'Level 3': [
          'Human Body and Mind',
          'Primary Health',
          'Office Practice and Medical Administration',
        ],
        'Level 4': [
          'Human Body and Mind',
          'Office Practice and Medical Administration',
          'Primary Health',
        ],
      },
      'Information Technology': {
        'Level 2': [
          'Introduction to Systems Development',
          'Introduction to Programming',
          'Electronics',
        ],
        'Level 3': [
          'Introduction to Systems Development',
          'Introduction to Programming',
          'Electronics',
        ],
        'Level 4': [
          'Introduction to Systems Development',
          'Introduction to Programming',
          'Electronics',
        ],
      },
      'Transport & Logistics': {
        'Level 2': [
          'Freight Logistics',
          'Introduction to Transport',
          'Transport Economics',
        ],
        'Level 3': [
          'Freight Logistics',
          'Introduction to Transport',
          'Transport Economics',
        ],
        'Level 4': [
          'Freight Logistics',
          'Introduction to Transport',
          'Transport Economics',
        ],
      },
    },
  };

  const getDriveLink = (subject, program, level, category) => {
    // This would be replaced with actual Google Drive folder links
    const baseUrl = 'https://drive.google.com/drive/folders/';
    // For now, return a placeholder link - in production, you'd have actual folder IDs
    return `${baseUrl}${btoa(
      `${category}-${program}-${level}-${subject}`
    ).replace(/=/g, '')}`;
  };

  const renderStructure = (data, path = '') => {
    return Object.entries(data).map(([key, value]) => {
      const currentPath = path ? `${path}.${key}` : key;
      const isExpanded = expandedFolders[currentPath];

      if (Array.isArray(value)) {
        // This is a subject list
        return (
          <motion.div
            key={currentPath}
            className="level-container"
            variants={itemVariants}
          >
            <div className="level-header">
              <i className="bi bi-folder2-open"></i>
              <span className="level-title">{key}</span>
            </div>
            <div className="subjects-list">
              {value.map((subject, index) => (
                <motion.a
                  key={`${currentPath}-${index}`}
                  href={getDriveLink(
                    subject,
                    path.split('.').pop(),
                    key,
                    path.split('.')[0]
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="subject-link"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi bi-file-earmark-pdf"></i>
                  {subject}
                  <i className="bi bi-box-arrow-up-right"></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        );
      } else {
        // This is a folder
        return (
          <motion.div
            key={currentPath}
            className="folder-container"
            variants={itemVariants}
          >
            <div
              className="folder-header"
              onClick={() => toggleFolder(currentPath)}
            >
              <i
                className={`bi ${
                  isExpanded ? 'bi-folder2-open' : 'bi-folder2'
                }`}
              ></i>
              <span className="folder-title">{key}</span>
              <i
                className={`bi bi-chevron-${isExpanded ? 'down' : 'right'}`}
              ></i>
            </div>
            {isExpanded && (
              <motion.div
                className="folder-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                {renderStructure(value, currentPath)}
              </motion.div>
            )}
          </motion.div>
        );
      }
    });
  };

  return (
    <motion.section
      className="resources-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div className="resources-header" variants={itemVariants}>
        <h1>
          <i className="bi bi-journal-bookmark"></i> Educational Resources
        </h1>
        <p className="hero-subtitle">
          Comprehensive collection of past papers and study materials for all
          programs and levels
        </p>
        <p className="hero-description">
          Browse through our extensive library of educational resources. Click
          on any subject to access past papers and study materials.
        </p>
      </motion.div>

      {/* Search Section */}
      <motion.div className="search-section" variants={itemVariants}>
        <div className="search-container">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search for subjects, programs, or levels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div className="stats-section" variants={itemVariants}>
        <div className="stats-grid">
          <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
            <i className="bi bi-folder2"></i>
            <h3>3</h3>
            <p>Main Categories</p>
          </motion.div>
          <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
            <i className="bi bi-journals"></i>
            <h3>25+</h3>
            <p>Programs</p>
          </motion.div>
          <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
            <i className="bi bi-file-earmark-text"></i>
            <h3>200+</h3>
            <p>Subjects</p>
          </motion.div>
          <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
            <i className="bi bi-download"></i>
            <h3>1000+</h3>
            <p>Resources</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Resources Tree */}
      <motion.div className="resources-tree" variants={itemVariants}>
        <h2>
          <i className="bi bi-diagram-3"></i> Browse Resources
        </h2>
        <div className="tree-container">{renderStructure(structure)}</div>
      </motion.div>

      {/* CTA Section */}
      <motion.div className="resources-cta" variants={itemVariants}>
        <div className="cta-content">
          <h2>Can't Find What You're Looking For?</h2>
          <p>Request specific resources or report missing materials</p>
          <div className="cta-buttons">
            <motion.a
              href="/contact"
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-envelope"></i>
              Request Resources
            </motion.a>
            <motion.a
              href="/forum"
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-people"></i>
              Ask Community
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Resources;
