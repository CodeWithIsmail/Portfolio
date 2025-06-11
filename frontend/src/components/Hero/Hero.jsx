import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Trophy, Download, Github, Linkedin, ExternalLink } from 'lucide-react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const roles = useMemo(() => [
    'Software Engineer',
    'Problem Solver', 
    'Competitive Programmer',
    'Full Stack Developer',
    'Mobile App Developer'
  ], [])

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const pauseDuration = 2000

    const timeout = setTimeout(() => {
      const fullText = roles[currentRole]
      
      if (isPaused) {
        setIsPaused(false)
        setIsDeleting(true)
        return
      }

      if (isDeleting) {
        if (displayText === '') {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        } else {
          setDisplayText(fullText.substring(0, displayText.length - 1))
        }
      } else {
        if (displayText === fullText) {
          setIsPaused(true)
        } else {
          setDisplayText(fullText.substring(0, displayText.length + 1))
        }
      }
    }, isPaused ? pauseDuration : typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, currentRole, roles])

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web applications with modern technologies"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development", 
      description: "Cross-platform mobile applications"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Competitive programming and algorithmic solutions"
    }
  ]

  const techIcons = [
    { name: 'React', symbol: '⚛️', color: 'text-blue-400' },
    { name: 'JavaScript', symbol: 'JS', color: 'text-yellow-400' },
    { name: 'Node.js', symbol: '🟢', color: 'text-green-400' },
    { name: 'Python', symbol: '🐍', color: 'text-blue-300' },
    { name: 'Java', symbol: '☕', color: 'text-orange-400' },
    { name: 'Android', symbol: '🤖', color: 'text-green-500' },
    { name: 'C++', symbol: 'C++', color: 'text-purple-400' },
    { name: 'C', symbol: 'C', color: 'text-blue-500' },
    { name: 'Database', symbol: '🗄️', color: 'text-indigo-400' },
    { name: 'Git', symbol: '🔧', color: 'text-red-400' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="text-lg font-medium text-blue-600 dark:text-blue-400">
                Hello, I'm
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Mohammad
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ismail
                </span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-16 flex items-center"
            >
              <span className="text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300">
                {displayText}
                <span className="ml-1 text-blue-600 dark:text-blue-400 animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
            >
              Software Engineering student at IIT DU with expertise in competitive programming, 
              full-stack development, and problem-solving. Passionate about creating innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/1433_Mohammad_Ismail_Hossain_CV.pdf"
                download
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Get in Touch</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-600 dark:text-gray-400">Follow me:</span>
              <div className="flex space-x-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://github.com/CodeWithIsmail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://linkedin.com/in/ismail-iitdu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                What I Do
              </h3>
            </div>

            <div className="grid gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-6 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`absolute text-4xl ${tech.color} opacity-20`}
              style={{
                left: `${10 + (index * 8) % 80}%`,
                top: `${20 + (index * 10) % 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {tech.symbol}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
