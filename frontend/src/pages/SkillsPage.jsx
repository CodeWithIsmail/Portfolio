import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Laptop, Server, Wrench, Trophy, Star } from 'lucide-react'

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState('languages')

  const skillCategories = {
    languages: {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-yellow-400', textColor: 'text-yellow-600' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-500', textColor: 'text-blue-600' },
        { name: 'Java', level: 85, color: 'bg-orange-500', textColor: 'text-orange-600' },
        { name: 'C++', level: 90, color: 'bg-blue-600', textColor: 'text-blue-600' },
        { name: 'C', level: 85, color: 'bg-gray-500', textColor: 'text-gray-600' },
        { name: 'Dart', level: 80, color: 'bg-cyan-500', textColor: 'text-cyan-600' },
        { name: 'Python', level: 75, color: 'bg-green-500', textColor: 'text-green-600' }
      ]
    },
    frontend: {
      title: 'Frontend Development',
      icon: <Laptop className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 90, color: 'bg-cyan-400', textColor: 'text-cyan-600' },
        { name: 'HTML5', level: 95, color: 'bg-orange-500', textColor: 'text-orange-600' },
        { name: 'CSS3', level: 90, color: 'bg-blue-500', textColor: 'text-blue-600' },
        { name: 'Flutter', level: 85, color: 'bg-blue-600', textColor: 'text-blue-600' },
        { name: 'React Native', level: 80, color: 'bg-cyan-400', textColor: 'text-cyan-600' }
      ]
    },
    backend: {
      title: 'Backend & Database',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-500', textColor: 'text-green-600' },
        { name: 'MongoDB', level: 80, color: 'bg-green-600', textColor: 'text-green-600' },
        { name: 'SQL', level: 85, color: 'bg-blue-600', textColor: 'text-blue-600' },
        { name: 'Firebase', level: 90, color: 'bg-yellow-500', textColor: 'text-yellow-600' },
        { name: 'Cloudinary', level: 75, color: 'bg-indigo-500', textColor: 'text-indigo-600' }
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 90, color: 'bg-red-500', textColor: 'text-red-600' },
        { name: 'GitHub', level: 90, color: 'bg-gray-800', textColor: 'text-gray-600' },
        { name: 'VS Code', level: 95, color: 'bg-blue-600', textColor: 'text-blue-600' },
        { name: 'Android Studio', level: 80, color: 'bg-green-500', textColor: 'text-green-600' },
        { name: 'IntelliJ IDEA', level: 85, color: 'bg-gray-800', textColor: 'text-gray-600' }
      ]
    }
  }

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
            Technical
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Skills</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-6 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(skill.level / 20)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                  <span className={`text-sm font-semibold ${skill.textColor}`}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-2 rounded-full ${skill.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Continuously learning and expanding my skill set
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsPage
