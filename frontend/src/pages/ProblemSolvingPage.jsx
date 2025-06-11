import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Target, Code, Award, Star, ExternalLink } from 'lucide-react'

const ProblemSolvingPage = () => {
  const platforms = [
    {
      name: 'Codeforces',
      rating: 'Specialist (Max: 1427)',
      problems: '1250+',
      contests: '85+',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      link: 'https://codeforces.com/profile/Code_with_Ismail'
    },
    {
      name: 'AtCoder',
      rating: 'Brown (Max: 892)',
      problems: '350+',
      contests: '25+',
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      link: 'https://atcoder.jp/users/Code_with_Ismail'
    },
    {
      name: 'LeetCode',
      rating: 'Guardian (Max: 1650)',
      problems: '800+',
      contests: '40+',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      link: 'https://leetcode.com/Code_with_Ismail'
    }
  ]

  const achievements = [
    {
      title: 'ICPC Dhaka Regional',
      description: 'Participated in ACM ICPC Dhaka Regional Programming Contest',
      year: '2023',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'University Programming Contest',
      description: 'Top 15 in IIT DU Intra University Programming Contest',
      year: '2023',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: 'Problem Setting',
      description: 'Problem setter for university programming contests',
      year: '2023-2024',
      icon: <Code className="w-6 h-6" />
    }
  ]

  const skills = [
    'Algorithm Design & Analysis',
    'Data Structures Implementation',
    'Dynamic Programming',
    'Graph Theory & Algorithms',
    'Number Theory',
    'Combinatorics',
    'String Algorithms',
    'Computational Geometry'
  ]

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
            Problem
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solving</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in competitive programming and algorithmic problem-solving achievements
          </p>
        </motion.div>

        {/* Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${platform.color} text-white`}>
                    {platform.icon}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-6">
                  {platform.rating}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {platform.problems}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Problems Solved
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {platform.contests}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Contests Participated
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Achievements
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Core Skills
            </h2>
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-3 p-4 rounded-xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-gray-900 dark:text-white font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProblemSolvingPage
