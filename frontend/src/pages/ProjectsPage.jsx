import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Users, Star, Filter, Download, Calendar, Award, Code2, Smartphone, Globe, Trophy } from 'lucide-react'
import { 
  SiReact, SiFirebase, SiVercel, SiFlutter, SiMongodb, SiNodedotjs, SiExpress,
  SiCloudinary, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiDart,
  SiGooglecloud, SiAndroid, SiIos, SiMysql, SiPostgresql, SiTailwindcss,
  SiBootstrap, SiTypescript, SiPython, SiGit, SiGithub, SiDocker
} from 'react-icons/si'
import { FaGamepad, FaJava } from 'react-icons/fa'

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'CF Explorer',
      subtitle: 'Your ultimate Codeforces companion',
      description: 'Platform for Competitive programmers on Codeforces to track progress, analyze stats, prep for contests, explore problems, and compare with peers.',
      category: 'fullstack',
      type: 'Web & Mobile',
      duration: 'Dec 2024 – Mar 2025',
      technologies: ['React', 'Firebase', 'Vercel', 'Flutter'],
      webUrl: 'https://cfexplorer.vercel.app',
      webDemo: 'https://youtu.be/VSUXCiAALdM',
      apkUrl: 'https://github.com/CodeWithIsmail/CF-Explorer-App/releases/tag/v1.0.0',
      appDemo: 'https://youtu.be/49m8BC4dgdE',
      githubUrl: 'https://github.com/CodeWithIsmail/CF-Explorer',
      users: '900+',
      featured: true,
      achievements: ['900+ users', 'Dual Platform'],
      icon: '🏆'
    },
    {
      id: 2,
      title: 'HealthMate',
      subtitle: 'Personal Health Tracking Solution',
      description: 'Health tracking app with uploading and analyzing medical report, monitoring trends, and sharing health insights.',
      category: 'mobile',
      type: 'Mobile App',
      duration: 'Oct 2024 – Feb 2025',
      technologies: ['Flutter', 'Firebase', 'Cloudinary', 'MongoDB', 'Node.js'],
      apkUrl: 'https://github.com/CodeWithIsmail/Personal-Health-Tracker/releases/tag/v1.0.0',
      githubUrl: 'https://github.com/CodeWithIsmail/Personal-Health-Tracker',
      demoUrl: 'https://youtu.be/hkaHRGe4GR4',
      featured: true,
      achievements: ['5th Semester SPL-2 Project'],
      icon: '🏥'
    },
    {
      id: 3,
      title: 'DU Tutors',
      subtitle: 'Tuition Job Platform for DU Students',
      description: 'Web app for DU students to find and apply for tuition jobs, with profiles, applications, and chat features.',
      category: 'web',
      type: 'Web Application',
      duration: 'Dec 2024 – Apr 2025',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      liveUrl: 'https://dututors.onrender.com',
      githubUrl: 'https://github.com/Learnathon-By-Geeky-Solutions/react-ive',
      featured: true,
      achievements: ['Team React_ive', 'Learnathon 3.0'],
      icon: '🎓'
    },
    {
      id: 4,
      title: 'BigganPathshala',
      subtitle: 'Interactive Science Learning Platform',
      description: 'Interactive science learning and science content-sharing platform with tutorials, blogs, and quizzes.',
      category: 'web',
      type: 'Web Application',
      duration: 'May 2025',
      technologies: ['React', 'Firebase', 'Cloudinary', 'Vercel'],
      liveUrl: 'https://bigganpathshala.vercel.app',
      githubUrl: 'https://github.com/CodeWithIsmail/BigganPathshala',
      featured: true,
      achievements: ['Team DU_CodeSynthesis', 'S.N. Bose National Science Olympiad IT Hackathon'],
      icon: '🔬'
    },
    {
      id: 5,
      title: 'MoneyMate',
      subtitle: 'Personal Finance Management',
      description: 'Personal finance management app to track income/expenses, visualize trends, and gain financial insights.',
      category: 'mobile',
      type: 'Mobile App',
      duration: 'Jul 2024 – Aug 2024',
      technologies: ['Flutter', 'Firebase'],
      apkUrl: 'https://github.com/CodeWithIsmail/MoneyMate/releases/tag/v1.0.0',
      githubUrl: 'https://github.com/CodeWithIsmail/MoneyMate',
      demoUrl: 'https://youtu.be/B9e9mVc1600',
      featured: false,
      achievements: ['Personal Project'],
      icon: '💰'
    },
    {
      id: 6,
      title: 'BanglaLens',
      subtitle: 'Text Recognition & Translation',
      description: 'Text recognition and translation app designed to automatically extract English word and Bangla meaning from image.',
      category: 'mobile',
      type: 'Mobile App',
      duration: 'Aug 2024 – Sept 2024',
      technologies: ['Flutter', 'Firebase', 'Google ML Kit'],
      apkUrl: 'https://github.com/CodeWithIsmail/BanglaLens/releases/tag/v1.0.0',
      githubUrl: 'https://github.com/CodeWithIsmail/BanglaLens',
      featured: false,
      achievements: ['ML Integration'],
      icon: '📷'
    },
    {
      id: 7,
      title: 'StudyMate',
      subtitle: 'Academic Study Management',
      description: 'Academic study management Application for students to record activities, tasks and stay updated on coursework.',
      category: 'desktop',
      type: 'Desktop Application',
      duration: 'Jul 2023 – Sept 2023',
      technologies: ['Java', 'Swing', 'OOP'],
      githubUrl: 'https://github.com/CodeWithIsmail/StudyMate',
      featured: false,
      achievements: ['3rd Semester OOP Project'],
      icon: '📚'
    },
    {
      id: 8,
      title: 'Typing Master',
      subtitle: 'Typing Skills Improvement',
      description: 'Application to improve typing skills with tutorial lessons, structured practice, and a gamified typing challenge.',
      category: 'desktop',
      type: 'Desktop Application',
      duration: 'Jul 2023 – Dec 2023',
      technologies: ['C++', 'Game Development'],
      githubUrl: 'https://github.com/CodeWithIsmail/SPL-1',
      featured: false,
      achievements: ['3rd Semester SPL-1 Project'],
      icon: '⌨️'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { key: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'desktop', label: 'Desktop Apps', count: projects.filter(p => p.category === 'desktop').length }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.category === filter)

  const getTypeIcon = (category) => {
    switch(category) {
      case 'fullstack': return <Code2 className="w-5 h-5" />
      case 'web': return <Globe className="w-5 h-5" />
      case 'mobile': return <Smartphone className="w-5 h-5" />
      case 'desktop': return <Code2 className="w-5 h-5" />
      default: return <Code2 className="w-5 h-5" />
    }
  }

  const getTechIcon = (tech) => {
    const iconClass = "w-4 h-4"
    switch(tech.toLowerCase()) {
      case 'react': return <SiReact className={iconClass} style={{color: '#61DAFB'}} />
      case 'firebase': return <SiFirebase className={iconClass} style={{color: '#FFCA28'}} />
      case 'vercel': return <SiVercel className={iconClass} style={{color: '#000000'}} />
      case 'flutter': return <SiFlutter className={iconClass} style={{color: '#02569B'}} />
      case 'mongodb': return <SiMongodb className={iconClass} style={{color: '#47A248'}} />
      case 'node.js': return <SiNodedotjs className={iconClass} style={{color: '#339933'}} />
      case 'express.js': return <SiExpress className={iconClass} style={{color: '#000000'}} />
      case 'cloudinary': return <SiCloudinary className={iconClass} style={{color: '#3448C5'}} />
      case 'java': return <FaJava className={iconClass} style={{color: '#ED8B00'}} />
      case 'c++': return <SiCplusplus className={iconClass} style={{color: '#00599C'}} />
      case 'javascript': return <SiJavascript className={iconClass} style={{color: '#F7DF1E'}} />
      case 'dart': return <SiDart className={iconClass} style={{color: '#0175C2'}} />
      case 'google ml kit': return <SiGooglecloud className={iconClass} style={{color: '#4285F4'}} />
      case 'swing': return <FaJava className={iconClass} style={{color: '#ED8B00'}} />
      case 'oop': return <Code2 className={iconClass} />
      case 'game development': return <FaGamepad className={iconClass} />
      default: return <Code2 className={iconClass} />
    }
  }

  return (
    <div className="min-h-screen pt-24 px-4 py-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A comprehensive showcase of my software development journey spanning web applications, mobile apps, full-stack solutions, and competitive programming tools
          </p>
          
          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">8+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">900+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Platforms</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Hackathons</div>
            </motion.div>
          </div> */}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                filter === category.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{category.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                filter === category.key
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">
                      {project.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(project.category)}
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.type}</span>
                      </div>
                    </div>
                  </div>
                  {project.users && (
                    <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                      <Users className="w-3 h-3" />
                      <span>{project.users}</span>
                    </div>
                  )}
                </div>

                {/* Duration */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>

                {/* Project Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Achievements */}
                {project.achievements && project.achievements.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center space-x-1 px-2 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium"
                        >
                          <Award className="w-3 h-3" />
                          <span>{achievement}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center space-x-1 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md text-xs font-medium border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {/* Primary Actions Row */}
                  <div className="flex items-center space-x-2">
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live</span>
                      </motion.a>
                    )}

                    {project.webUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
                      >
                        <Globe className="w-3 h-3" />
                        <span>Web</span>
                      </motion.a>
                    )}

                    {project.apkUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.apkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                      >
                        <Download className="w-3 h-3" />
                        <span>APK</span>
                      </motion.a>
                    )}
                  </div>

                  {/* Secondary Actions Row */}
                  <div className="flex items-center space-x-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </motion.a>

                    {project.demoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        <Play className="w-3 h-3" />
                        <span>Demo</span>
                      </motion.a>
                    )}

                    {project.webDemo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.webDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 px-2 py-1 rounded text-xs font-medium transition-colors"
                      >
                        <Play className="w-3 h-3" />
                        <span>Web Demo</span>
                      </motion.a>
                    )}

                    {project.appDemo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.appDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 px-2 py-1 rounded text-xs font-medium transition-colors"
                      >
                        <Smartphone className="w-3 h-3" />
                        <span>App Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category filter to explore more projects
            </p>
          </motion.div>
        )}

        {/* Additional Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🎯 Project Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Hackathon Finalist</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Multiple competition projects</div>
              </div>
              <div>
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-lg font-semibold text-gray-900 dark:text-white">900+ Users</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CF Explorer platform</div>
              </div>
              <div>
                <Code2 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Full Stack Expert</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">End-to-end App & Web development</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsPage
