import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Users, Star, Filter } from 'lucide-react'

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'CF Explorer',
      description: 'Ultimate Codeforces companion for competitive programmers to track progress and analyze statistics',
      category: 'web',
      technologies: ['React', 'Firebase', 'Vercel'],
      image: '/assets/cf-explorer.jpg',
      liveUrl: 'https://cfexplorer.vercel.app',
      githubUrl: 'https://github.com/CodeWithIsmail/CF-Explorer',
      demoUrl: 'https://youtu.be/VSUXCiAALdM',
      users: '900+',
      featured: true
    },
    {
      id: 2,
      title: 'HealthMate',
      description: 'Health tracking app with medical report analysis and trend monitoring',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'MongoDB', 'Node.js'],
      image: '/assets/healthmate.jpg',
      githubUrl: 'https://github.com/CodeWithIsmail/Personal-Health-Tracker',
      demoUrl: 'https://youtu.be/hkaHRGe4GR4',
      featured: true
    },
    {
      id: 3,
      title: 'UniHub',
      description: 'University management system with student portal and administrative features',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/assets/unihub.jpg',
      githubUrl: 'https://github.com/CodeWithIsmail/UniHub',
      demoUrl: 'https://youtu.be/example3',
      featured: false
    },
    {
      id: 4,
      title: 'Task Manager Pro',
      description: 'Advanced task management application with team collaboration features',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: '/assets/taskmanager.jpg',
      githubUrl: 'https://github.com/CodeWithIsmail/TaskManager',
      liveUrl: 'https://taskmanager-pro.vercel.app',
      featured: false
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { key: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.category === filter)

  return (
    <div className="min-h-screen pt-24 px-4">
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
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my software development projects spanning web applications, mobile apps, and competitive programming tools
          </p>
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
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-4xl text-blue-600 dark:text-blue-400">
                    {project.category === 'web' ? '🌐' : '📱'}
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.users && (
                      <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{project.users}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4 pt-4">
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>

                    {project.demoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        <span>Demo</span>
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
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category filter
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
