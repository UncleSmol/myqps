import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@student.edu',
      phone: '+27 12 345 6789',
      studentId: 'STU2024001',
      dateOfBirth: '2000-01-01',
      gender: 'Male',
      address: '123 Student Street, Campus Town, 0001',
    },
    academicInfo: {
      program: 'Business Management',
      level: 'N4',
      institution: 'Technical University of South Africa',
      enrollmentDate: '2024-01-15',
      expectedGraduation: '2025-12-15',
      currentSubjects: [
        'Management Communication N4',
        'Computer Practice',
        'Entrepreneurship & Business Management',
        'Introductory Accounting N4',
      ],
    },
    preferences: {
      emailNotifications: true,
      smsNotifications: false,
      studyReminders: true,
      resourceUpdates: true,
      communityUpdates: false,
      language: 'English',
      theme: 'light',
    },
    studyStats: {
      totalStudyHours: 156,
      papersDownloaded: 47,
      testsCompleted: 23,
      averageScore: 78,
      streakDays: 14,
    },
  });

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
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleInputChange = (section, field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleArrayChange = (section, field, index, value) => {
    setProfileData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].map((item, i) =>
          i === index ? value : item
        ),
      },
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the data
    console.log('Profile saved:', profileData);
  };

  const tabs = [
    { id: 'profile', name: 'Profile Overview', icon: 'bi-person' },
    { id: 'academic', name: 'Academic Info', icon: 'bi-mortarboard' },
    { id: 'preferences', name: 'Preferences', icon: 'bi-gear' },
    { id: 'progress', name: 'Study Progress', icon: 'bi-graph-up' },
    { id: 'security', name: 'Security', icon: 'bi-shield' },
  ];

  return (
    <motion.section
      className="profile-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div className="profile-header" variants={itemVariants}>
        <div className="header-content">
          <div className="avatar-section">
            <div className="avatar">
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="user-info">
              <h1>
                {profileData.personalInfo.firstName}{' '}
                {profileData.personalInfo.lastName}
              </h1>
              <p>
                {profileData.academicInfo.program} •{' '}
                {profileData.academicInfo.level}
              </p>
              <span className="student-id">
                <i className="bi bi-person-badge"></i>
                {profileData.personalInfo.studentId}
              </span>
            </div>
          </div>
          <motion.button
            className={`edit-btn ${isEditing ? 'save' : 'edit'}`}
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-pencil'}`}></i>
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </motion.button>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div className="profile-tabs" variants={itemVariants}>
        <div className="tabs-container">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`bi ${tab.icon}`}></i>
              {tab.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Profile Overview */}
        {activeTab === 'profile' && (
          <motion.div
            className="tab-panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-grid">
              <motion.div
                className="info-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="card-header">
                  <i className="bi bi-person-vcard"></i>
                  <h3>Personal Information</h3>
                </div>
                <div className="card-content">
                  <div className="info-item">
                    <label>Full Name</label>
                    {isEditing ? (
                      <div className="name-fields">
                        <input
                          type="text"
                          value={profileData.personalInfo.firstName}
                          onChange={(e) =>
                            handleInputChange(
                              'personalInfo',
                              'firstName',
                              e.target.value
                            )
                          }
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          value={profileData.personalInfo.lastName}
                          onChange={(e) =>
                            handleInputChange(
                              'personalInfo',
                              'lastName',
                              e.target.value
                            )
                          }
                          placeholder="Last Name"
                        />
                      </div>
                    ) : (
                      <p>
                        {profileData.personalInfo.firstName}{' '}
                        {profileData.personalInfo.lastName}
                      </p>
                    )}
                  </div>
                  <div className="info-item">
                    <label>Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.personalInfo.email}
                        onChange={(e) =>
                          handleInputChange(
                            'personalInfo',
                            'email',
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      <p>{profileData.personalInfo.email}</p>
                    )}
                  </div>
                  <div className="info-item">
                    <label>Phone</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.personalInfo.phone}
                        onChange={(e) =>
                          handleInputChange(
                            'personalInfo',
                            'phone',
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      <p>{profileData.personalInfo.phone}</p>
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="info-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="card-header">
                  <i className="bi bi-building"></i>
                  <h3>Academic Summary</h3>
                </div>
                <div className="card-content">
                  <div className="info-item">
                    <label>Program</label>
                    <p>{profileData.academicInfo.program}</p>
                  </div>
                  <div className="info-item">
                    <label>Level</label>
                    <p>{profileData.academicInfo.level}</p>
                  </div>
                  <div className="info-item">
                    <label>Institution</label>
                    <p>{profileData.academicInfo.institution}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="stats-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="card-header">
                  <i className="bi bi-graph-up-arrow"></i>
                  <h3>Study Statistics</h3>
                </div>
                <div className="stats-grid">
                  <div className="stat-item">
                    <i className="bi bi-clock"></i>
                    <div>
                      <h4>{profileData.studyStats.totalStudyHours}h</h4>
                      <span>Study Time</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="bi bi-download"></i>
                    <div>
                      <h4>{profileData.studyStats.papersDownloaded}</h4>
                      <span>Papers Downloaded</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="bi bi-check-circle"></i>
                    <div>
                      <h4>{profileData.studyStats.testsCompleted}</h4>
                      <span>Tests Completed</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="bi bi-lightning"></i>
                    <div>
                      <h4>{profileData.studyStats.streakDays}d</h4>
                      <span>Study Streak</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Academic Information */}
        {activeTab === 'academic' && (
          <motion.div
            className="tab-panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="academic-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="card-header">
                <i className="bi bi-journal-bookmark"></i>
                <h3>Academic Details</h3>
              </div>
              <div className="card-content">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Program</label>
                    {isEditing ? (
                      <select
                        value={profileData.academicInfo.program}
                        onChange={(e) =>
                          handleInputChange(
                            'academicInfo',
                            'program',
                            e.target.value
                          )
                        }
                      >
                        <option value="Business Management">
                          Business Management
                        </option>
                        <option value="Tourism">Tourism</option>
                        <option value="Human Resources Management">
                          Human Resources Management
                        </option>
                        <option value="Financial Management">
                          Financial Management
                        </option>
                        <option value="Marketing Management">
                          Marketing Management
                        </option>
                      </select>
                    ) : (
                      <p>{profileData.academicInfo.program}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Level</label>
                    {isEditing ? (
                      <select
                        value={profileData.academicInfo.level}
                        onChange={(e) =>
                          handleInputChange(
                            'academicInfo',
                            'level',
                            e.target.value
                          )
                        }
                      >
                        <option value="N4">N4</option>
                        <option value="N5">N5</option>
                        <option value="N6">N6</option>
                        <option value="Level 2">Level 2</option>
                        <option value="Level 3">Level 3</option>
                        <option value="Level 4">Level 4</option>
                      </select>
                    ) : (
                      <p>{profileData.academicInfo.level}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Institution</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.academicInfo.institution}
                        onChange={(e) =>
                          handleInputChange(
                            'academicInfo',
                            'institution',
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      <p>{profileData.academicInfo.institution}</p>
                    )}
                  </div>
                </div>

                <div className="subjects-section">
                  <h4>Current Subjects</h4>
                  {isEditing ? (
                    <div className="subjects-edit">
                      {profileData.academicInfo.currentSubjects.map(
                        (subject, index) => (
                          <input
                            key={index}
                            type="text"
                            value={subject}
                            onChange={(e) =>
                              handleArrayChange(
                                'academicInfo',
                                'currentSubjects',
                                index,
                                e.target.value
                              )
                            }
                            placeholder={`Subject ${index + 1}`}
                          />
                        )
                      )}
                      <motion.button
                        className="add-subject-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          handleInputChange('academicInfo', 'currentSubjects', [
                            ...profileData.academicInfo.currentSubjects,
                            '',
                          ])
                        }
                      >
                        <i className="bi bi-plus"></i>
                        Add Subject
                      </motion.button>
                    </div>
                  ) : (
                    <div className="subjects-list">
                      {profileData.academicInfo.currentSubjects.map(
                        (subject, index) => (
                          <span key={index} className="subject-tag">
                            <i className="bi bi-book"></i>
                            {subject}
                          </span>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Preferences */}
        {activeTab === 'preferences' && (
          <motion.div
            className="tab-panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="preferences-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="card-header">
                <i className="bi bi-bell"></i>
                <h3>Notification Preferences</h3>
              </div>
              <div className="card-content">
                <div className="preferences-list">
                  {Object.entries(profileData.preferences).map(
                    ([key, value]) => {
                      if (typeof value === 'boolean') {
                        return (
                          <div key={key} className="preference-item">
                            <label>
                              {key
                                .replace(/([A-Z])/g, ' $1')
                                .replace(/^./, (str) => str.toUpperCase())}
                            </label>
                            <div className="toggle-switch">
                              <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) =>
                                  handleInputChange(
                                    'preferences',
                                    key,
                                    e.target.checked
                                  )
                                }
                                disabled={!isEditing}
                              />
                              <span className="slider"></span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Study Progress */}
        {activeTab === 'progress' && (
          <motion.div
            className="tab-panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="progress-grid">
              <motion.div
                className="progress-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="progress-circle">
                  <div className="circle-bg">
                    <div
                      className="circle-progress"
                      style={{
                        '--progress': `${profileData.studyStats.averageScore}%`,
                      }}
                    ></div>
                    <div className="circle-text">
                      <span>{profileData.studyStats.averageScore}%</span>
                      <small>Average Score</small>
                    </div>
                  </div>
                </div>
                <h3>Performance</h3>
                <p>Your overall test performance</p>
              </motion.div>

              <motion.div
                className="progress-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="streak-display">
                  <div className="streak-number">
                    {profileData.studyStats.streakDays}
                  </div>
                  <div className="streak-info">
                    <h3>Day Streak</h3>
                    <p>Keep going!</p>
                  </div>
                  <i className="bi bi-fire"></i>
                </div>
              </motion.div>

              <motion.div
                className="progress-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="study-time">
                  <i className="bi bi-clock-history"></i>
                  <div>
                    <h3>{profileData.studyStats.totalStudyHours}h</h3>
                    <p>Total Study Time</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Security */}
        {activeTab === 'security' && (
          <motion.div
            className="tab-panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="security-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="card-header">
                <i className="bi bi-shield-check"></i>
                <h3>Security Settings</h3>
              </div>
              <div className="card-content">
                <div className="security-actions">
                  <motion.button
                    className="security-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="bi bi-key"></i>
                    Change Password
                  </motion.button>
                  <motion.button
                    className="security-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="bi bi-envelope"></i>
                    Update Email
                  </motion.button>
                  <motion.button
                    className="security-btn danger"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="bi bi-trash"></i>
                    Delete Account
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default MyProfile;
