import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Forum.css';

const Forum = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'general',
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

  // Sample data - in real app, this would come from API
  const categories = [
    { id: 'all', name: 'All Topics', icon: 'bi-grid', count: 45 },
    {
      id: 'academic',
      name: 'Academic Help',
      icon: 'bi-mortarboard',
      count: 23,
    },
    {
      id: 'resources',
      name: 'Study Resources',
      icon: 'bi-journal-bookmark',
      count: 12,
    },
    { id: 'career', name: 'Career Advice', icon: 'bi-briefcase', count: 8 },
    { id: 'general', name: 'General Discussion', icon: 'bi-chat', count: 15 },
    {
      id: 'announcements',
      name: 'Announcements',
      icon: 'bi-megaphone',
      count: 5,
    },
  ];

  const posts = [
    {
      id: 1,
      title: 'Help with Financial Accounting N4',
      content:
        "I'm struggling with the cash flow statements chapter. Does anyone have good study tips or resources?",
      author: { name: 'Sarah M.', role: 'Student', avatar: 'SM' },
      category: 'academic',
      tags: ['Financial Accounting', 'N4', 'Help'],
      likes: 24,
      comments: 8,
      shares: 3,
      isFavorited: true,
      isAdminPost: false,
      timestamp: '2 hours ago',
      isPinned: false,
    },
    {
      id: 2,
      title: 'New Past Papers Uploaded - Business Management N5',
      content:
        "We've just uploaded the latest past papers for Business Management N5. Check them out in the resources section!",
      author: { name: 'Admin', role: 'Administrator', avatar: 'A' },
      category: 'announcements',
      tags: ['Business Management', 'N5', 'Past Papers'],
      likes: 45,
      comments: 12,
      shares: 15,
      isFavorited: false,
      isAdminPost: true,
      timestamp: '5 hours ago',
      isPinned: true,
    },
    {
      id: 3,
      title: 'Study Group for Tourism N6',
      content:
        'Looking to form a study group for Tourism N6 subjects. We can meet weekly and share notes/resources.',
      author: { name: 'David T.', role: 'Student', avatar: 'DT' },
      category: 'resources',
      tags: ['Tourism', 'N6', 'Study Group'],
      likes: 18,
      comments: 6,
      shares: 2,
      isFavorited: true,
      isAdminPost: false,
      timestamp: '1 day ago',
      isPinned: false,
    },
  ];

  const blogs = [
    {
      id: 1,
      title: 'How to Effectively Use Past Papers for Exam Preparation',
      excerpt:
        'Learn the best strategies for using past papers to maximize your exam performance and build confidence.',
      author: { name: 'Admin', role: 'Administrator', avatar: 'A' },
      image: '/blog-images/study-tips.jpg',
      readTime: '5 min read',
      likes: 89,
      comments: 23,
      timestamp: '3 days ago',
      category: 'study-tips',
    },
    {
      id: 2,
      title: 'Time Management Tips for Busy Students',
      excerpt:
        'Discover practical time management techniques that can help you balance studies, work, and personal life.',
      author: { name: 'Lisa K.', role: 'Student Mentor', avatar: 'LK' },
      image: '/blog-images/time-management.jpg',
      readTime: '4 min read',
      likes: 67,
      comments: 15,
      timestamp: '1 week ago',
      category: 'productivity',
    },
  ];

  const [comments, setComments] = useState({
    1: [
      {
        id: 1,
        content:
          'I found this YouTube channel really helpful for cash flow statements!',
        author: { name: 'Mike R.', role: 'Student', avatar: 'MR' },
        likes: 5,
        timestamp: '1 hour ago',
      },
      {
        id: 2,
        content:
          'Check out the examples in chapter 7 of the textbook, they explain it well.',
        author: { name: 'Admin', role: 'Administrator', avatar: 'A' },
        likes: 3,
        timestamp: '45 minutes ago',
      },
    ],
  });

  const [newComments, setNewComments] = useState({});

  const handleLikePost = (postId) => {
    // In real app, this would be an API call
    console.log('Liked post:', postId);
  };

  const handleFavoritePost = (postId) => {
    // In real app, this would be an API call
    console.log('Favorited post:', postId);
  };

  const handleSharePost = (postId) => {
    // In real app, this would share the post
    console.log('Shared post:', postId);
  };

  const handleAddComment = (postId, content) => {
    // In real app, this would be an API call
    const newComment = {
      id: Date.now(),
      content,
      author: { name: 'Current User', role: 'Student', avatar: 'CU' },
      likes: 0,
      timestamp: 'Just now',
    };

    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment],
    }));

    setNewComments((prev) => ({ ...prev, [postId]: '' }));
  };

  const handleCreatePost = () => {
    // In real app, this would be an API call
    console.log('Creating new post:', newPost);
    setNewPost({ title: '', content: '', category: 'general' });
  };

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <motion.section
      className="forum-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div className="forum-header" variants={itemVariants}>
        <div className="header-content">
          <h1>
            <i className="bi bi-people"></i> Student Community
          </h1>
          <p className="subtitle">
            Connect, share, and learn together with students from all programs
          </p>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div className="forum-tabs" variants={itemVariants}>
        <div className="tabs-container">
          <motion.button
            className={`tab-btn ${activeTab === 'discussions' ? 'active' : ''}`}
            onClick={() => setActiveTab('discussions')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bi bi-chat-dots"></i>
            Discussions
          </motion.button>
          <motion.button
            className={`tab-btn ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveTab('blogs')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bi bi-journal-text"></i>
            Blogs
          </motion.button>
          <motion.button
            className={`tab-btn ${activeTab === 'my-posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-posts')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bi bi-person"></i>
            My Posts
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="forum-content">
        {activeTab === 'discussions' && (
          <motion.div
            className="discussions-tab"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="discussions-layout">
              {/* Categories Sidebar */}
              <motion.div
                className="categories-sidebar"
                variants={itemVariants}
              >
                <h3>
                  <i className="bi bi-folder"></i>
                  Categories
                </h3>
                <div className="categories-list">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      className={`category-btn ${
                        selectedCategory === category.id ? 'active' : ''
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`bi ${category.icon}`}></i>
                      <span className="category-name">{category.name}</span>
                      <span className="post-count">{category.count}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Create New Post */}
                <motion.div
                  className="create-post-card"
                  variants={cardVariants}
                >
                  <h4>Create New Post</h4>
                  <div className="post-form">
                    <input
                      type="text"
                      placeholder="Post title..."
                      value={newPost.title}
                      onChange={(e) =>
                        setNewPost({ ...newPost, title: e.target.value })
                      }
                      className="post-title-input"
                    />
                    <textarea
                      placeholder="What would you like to discuss?"
                      value={newPost.content}
                      onChange={(e) =>
                        setNewPost({ ...newPost, content: e.target.value })
                      }
                      className="post-content-input"
                      rows="3"
                    />
                    <select
                      value={newPost.category}
                      onChange={(e) =>
                        setNewPost({ ...newPost, category: e.target.value })
                      }
                      className="category-select"
                    >
                      <option value="general">General Discussion</option>
                      <option value="academic">Academic Help</option>
                      <option value="resources">Study Resources</option>
                      <option value="career">Career Advice</option>
                    </select>
                    <motion.button
                      className="create-post-btn"
                      onClick={handleCreatePost}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={!newPost.title || !newPost.content}
                    >
                      <i className="bi bi-send"></i>
                      Create Post
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Posts Feed */}
              <motion.div className="posts-feed" variants={itemVariants}>
                <div className="feed-header">
                  <h2>
                    {selectedCategory === 'all'
                      ? 'All Discussions'
                      : categories.find((c) => c.id === selectedCategory)?.name}
                  </h2>
                  <div className="sort-options">
                    <select className="sort-select">
                      <option>Newest First</option>
                      <option>Most Popular</option>
                      <option>Most Comments</option>
                    </select>
                  </div>
                </div>

                <div className="posts-list">
                  {filteredPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      className={`post-card ${post.isPinned ? 'pinned' : ''} ${
                        post.isAdminPost ? 'admin-post' : ''
                      }`}
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      {post.isPinned && (
                        <div className="pinned-badge">
                          <i className="bi bi-pin-angle"></i>
                          Pinned
                        </div>
                      )}

                      <div className="post-header">
                        <div className="author-info">
                          <div className="avatar">{post.author.avatar}</div>
                          <div>
                            <h4>{post.author.name}</h4>
                            <span
                              className={`role ${post.author.role.toLowerCase()}`}
                            >
                              {post.author.role}
                            </span>
                          </div>
                        </div>
                        <div className="post-meta">
                          <span className="category-tag">{post.category}</span>
                          <span className="timestamp">{post.timestamp}</span>
                        </div>
                      </div>

                      <div className="post-content">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <div className="post-tags">
                          {post.tags.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="post-actions">
                        <motion.button
                          className={`action-btn ${
                            post.likes > 0 ? 'liked' : ''
                          }`}
                          onClick={() => handleLikePost(post.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className="bi bi-hand-thumbs-up"></i>
                          {post.likes}
                        </motion.button>

                        <motion.button
                          className="action-btn"
                          onClick={() =>
                            setNewComments((prev) => ({
                              ...prev,
                              [post.id]: !prev[post.id],
                            }))
                          }
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className="bi bi-chat"></i>
                          {post.comments}
                        </motion.button>

                        <motion.button
                          className={`action-btn ${
                            post.isFavorited ? 'favorited' : ''
                          }`}
                          onClick={() => handleFavoritePost(post.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className="bi bi-star"></i>
                        </motion.button>

                        <motion.button
                          className="action-btn"
                          onClick={() => handleSharePost(post.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className="bi bi-share"></i>
                          {post.shares}
                        </motion.button>
                      </div>

                      {/* Comments Section */}
                      {newComments[post.id] && (
                        <motion.div
                          className="comments-section"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                        >
                          <div className="add-comment">
                            <textarea
                              placeholder="Write a comment..."
                              value={newComments[post.id] || ''}
                              onChange={(e) =>
                                setNewComments((prev) => ({
                                  ...prev,
                                  [post.id]: e.target.value,
                                }))
                              }
                              rows="2"
                            />
                            <motion.button
                              className="post-comment-btn"
                              onClick={() =>
                                handleAddComment(post.id, newComments[post.id])
                              }
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              disabled={!newComments[post.id]}
                            >
                              <i className="bi bi-send"></i>
                              Post
                            </motion.button>
                          </div>

                          {(comments[post.id] || []).map((comment) => (
                            <div key={comment.id} className="comment">
                              <div className="comment-author">
                                <div className="avatar small">
                                  {comment.author.avatar}
                                </div>
                                <div>
                                  <strong>{comment.author.name}</strong>
                                  <span className="timestamp">
                                    {comment.timestamp}
                                  </span>
                                </div>
                              </div>
                              <p>{comment.content}</p>
                              <button className="comment-like">
                                <i className="bi bi-hand-thumbs-up"></i>
                                {comment.likes}
                              </button>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {activeTab === 'blogs' && (
          <motion.div
            className="blogs-tab"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="blogs-header">
              <h2>Educational Blogs & Articles</h2>
              <p>Learn from expert advice and student experiences</p>
            </div>

            <div className="blogs-grid">
              {blogs.map((blog) => (
                <motion.article
                  key={blog.id}
                  className="blog-card"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="blog-image">
                    <i className="bi bi-journal-text"></i>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="category">{blog.category}</span>
                      <span className="read-time">{blog.readTime}</span>
                    </div>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <div className="blog-footer">
                      <div className="author">
                        <div className="avatar">{blog.author.avatar}</div>
                        <div>
                          <strong>{blog.author.name}</strong>
                          <span>{blog.author.role}</span>
                        </div>
                      </div>
                      <div className="blog-stats">
                        <span>
                          <i className="bi bi-hand-thumbs-up"></i> {blog.likes}
                        </span>
                        <span>
                          <i className="bi bi-chat"></i> {blog.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'my-posts' && (
          <motion.div
            className="my-posts-tab"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="my-posts-header">
              <h2>My Posts & Interactions</h2>
              <p>Manage your discussions and track your community activity</p>
            </div>

            <motion.div className="activity-stats" variants={itemVariants}>
              <div className="stat-card">
                <i className="bi bi-file-earmark-text"></i>
                <div>
                  <h3>12</h3>
                  <span>Posts Created</span>
                </div>
              </div>
              <div className="stat-card">
                <i className="bi bi-chat"></i>
                <div>
                  <h3>47</h3>
                  <span>Comments</span>
                </div>
              </div>
              <div className="stat-card">
                <i className="bi bi-hand-thumbs-up"></i>
                <div>
                  <h3>156</h3>
                  <span>Likes Received</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Forum;
