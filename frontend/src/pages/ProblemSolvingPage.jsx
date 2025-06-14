import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Target, Code, Award, Star, ExternalLink, Medal, Users, Zap, Brain, BookOpen, Shield } from 'lucide-react'

const ProblemSolvingPage = () => {
  const [activeCategory, setActiveCategory] = useState('problem-solving')

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
      name: 'CodeChef',
      rating: '3 Star (Max: 1754)',
      problems: '180+',
      contests: '20+',
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      link: 'https://www.codechef.com/users/codewithismail'
    },
    {
      name: 'LeetCode',
      rating: 'Active Solver',
      problems: '150+',
      contests: 'Regular',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      link: 'https://leetcode.com/u/CodeWithIsmail'
    }
  ]

  const achievementCategories = {
    'problem-solving': {
      title: 'Problem Solving',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
      achievements: [
        {
          title: 'Codeforces Specialist',
          description: '1250+ problems solved | Max rating 1427 | 85+ contests participated',
          year: '2023-Present',
          icon: <Code className="w-6 h-6" />,
          link: 'https://codeforces.com/profile/Code_with_Ismail'
        },
        {
          title: 'CodeChef 3 Star Coder',
          description: '180+ problems solved | Max rating 1754 | 20+ contests participated',
          year: '2023-Present',
          icon: <Star className="w-6 h-6" />,
          link: 'https://www.codechef.com/users/codewithismail'
        },
        {
          title: 'Battle of Brains 2024',
          description: 'Ranked 13th among 68 participants in competitive programming contest, CSE, DU',
          year: '2024',
          icon: <Trophy className="w-6 h-6" />
        },
        {
          title: 'Multi-Platform Problem Solver',
          description: 'Solved 200+ problems on CSES, LightOJ, Toph platforms',
          year: '2023-Present',
          icon: <Target className="w-6 h-6" />
        },
        {
          title: 'CF Explorer Platform',
          description: 'Built platform for competitive programmers on Codeforces with 900+ users',
          year: '2024-2025',
          icon: <Users className="w-6 h-6" />,
          link: 'https://cfexplorer.vercel.app'
        },
        {
          title: 'Problem Setter & Tester',
          description: 'Problem Setter for National High School Programming Contest 2025 & KiU CSE FEST 2024',
          year: '2024-2025',
          icon: <Brain className="w-6 h-6" />
        },
        {
          title: 'Programming Contest Judge',
          description: 'Judge for Bangladesh Artificial Intelligence Olympiad 2025 (Competitive Programming Segment)',
          year: '2025',
          icon: <Shield className="w-6 h-6" />
        },
        {
          title: 'Competitive Programming Trainer',
          description: 'Trainer under IITSEC, mentoring first-year students in problem-solving and programming',
          year: '2024-Present',
          icon: <BookOpen className="w-6 h-6" />
        }
      ]
    },
    'hackathon': {
      title: 'Hackathon',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600',
      achievements: [
        {
          title: 'S.N. Bose National Science Olympiad IT Hackathon',
          description: 'Finalist (Top 14 out of 50 teams) - Built BigganPathshala platform with Team DU_CodeSynthesis',
          year: '2025',
          icon: <Trophy className="w-6 h-6" />,
          link: 'https://bigganpathshala.vercel.app'
        },
        {
          title: 'Learnathon 3.0',
          description: 'Participated and completed hackathon organized by Geeky Solutions, Sponsored by Brain Station 23 - Built DU Tutors with Team React_ive',
          year: '2024',
          icon: <Award className="w-6 h-6" />,
          link: 'https://dututors.onrender.com'
        }
      ]
    },
    // 'others': {
    //   title: 'Others',
    //   icon: <Medal className="w-6 h-6" />,
    //   color: 'from-purple-500 to-pink-600',
    //   achievements: [
    //     {
    //       title: 'IITSEC Competitive Programming Trainer',
    //       description: 'Mentoring beginners in problem solving and competitive programming',
    //       year: '2024-Present',
    //       icon: <Users className="w-6 h-6" />
    //     },
    //     {
    //       title: 'Learnathon 3.0 Certificate',
    //       description: 'Certificate of completion from Geeky Solutions, Sponsored by Brain Station 23',
    //       year: '2024-2025',
    //       icon: <Award className="w-6 h-6" />,
    //       link: 'https://learnathonproducts.geeky.solutions/products/df7c95d0-290c-40b4-a647-723003e88107/certificate'
    //     },
    //     {
    //       title: 'LLMs in Industry and Academia Workshop',
    //       description: 'Current trend Workshop by DSSE Research group, University of Dhaka',
    //       year: '2025',
    //       icon: <Brain className="w-6 h-6" />
    //     },
    //     {
    //       title: 'Academic Excellence',
    //       description: 'CGPA: 3.43 in Software Engineering, IIT, University of Dhaka',
    //       year: '2022-Present',
    //       icon: <Star className="w-6 h-6" />
    //     }
    //   ]
    // }
  }

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
            Achievements &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Problem Solving</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in competitive programming, hackathons, and various achievements in software development
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

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(achievementCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {achievementCategories[activeCategory].achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${achievementCategories[activeCategory].color} text-white`}>
                  {achievement.icon}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                  {achievement.link && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Skills Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Core Problem Solving Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-3 p-4 rounded-xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Star className="w-5 h-5 text-yellow-500 fill-current flex-shrink-0" />
                <span className="text-gray-900 dark:text-white font-medium text-left">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  )
}

export default ProblemSolvingPage
