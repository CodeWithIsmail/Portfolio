import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, School, Award, Calendar, MapPin, Star } from 'lucide-react'

const EducationPage = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Software Engineering",
      institution: "Institute of Information Technology, University of Dhaka",
      duration: "2022 - 2026 (Expected)",
      cgpa: "3.43/4.00",
      status: "Current",
      icon: <GraduationCap className="w-6 h-6" />,
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        "Web Development",
        "Mobile Application Development",
        "Computer Networks",
        "Operating Systems"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      duration: "2019 - 2021",
      cgpa: "GPA: 5.00/5.00",
      status: "Completed",
      icon: <School className="w-6 h-6" />,
      courses: [
        "Physics",
        "Chemistry", 
        "Mathematics",
        "Biology",
        "English",
        "Bangla"
      ]
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Motijheel Model High School",
      duration: "2017 - 2019",
      cgpa: "GPA: 5.00/5.00",
      status: "Completed",
      icon: <School className="w-6 h-6" />,
      courses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Bangla",
        "ICT"
      ]
    }
  ]

  const achievements = [
    "Dean's List for academic excellence",
    "Competitive Programming Contest Participant",
    "University Programming Contest Finalist",
    "Merit Scholarship Recipient"
  ]

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and educational achievements that shaped my passion for technology and problem-solving
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
              )}
              
              <div className={`flex flex-col md:flex-row items-start gap-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Marker */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      edu.status === 'Current' 
                        ? 'bg-gradient-to-r from-green-500 to-blue-500' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600'
                    } text-white shadow-lg`}
                  >
                    {edu.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-1 p-8 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Current'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                    }`}>
                      {edu.status}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{edu.institution}</span>
                  </div>

                  {/* CGPA */}
                  <div className="flex items-center text-lg font-semibold text-blue-600 dark:text-blue-400 mb-6">
                    <Star className="w-5 h-5 mr-2" />
                    {edu.cgpa}
                  </div>

                  {/* Coursework */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <motion.span
                          key={courseIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * courseIndex }}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Academic Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-900 dark:text-white font-medium">
                    {achievement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default EducationPage
