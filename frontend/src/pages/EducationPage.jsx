import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  Award,
  Calendar,
  MapPin,
  Star,
  BookOpen,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";

const EducationPage = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Software Engineering",
      institution: "Institute of Information Technology, University of Dhaka",
      duration: "2022 - 2026 (Expected)",
      cgpa: "CGPA: 3.43/4.00",
      status: "Current",
      icon: <GraduationCap className="w-6 h-6" />,
      description:
        "Specialized in software development, algorithms, and system design with hands-on experience in modern programming languages and frameworks.",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        "Web Technologies",
        "Computer Networks",
        "Operating Systems",
        "Software Architecture",
      ],
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka Imperial College",
      duration: "2019 - 2021",
      cgpa: "GPA: 5.00/5.00",
      status: "Completed",
      icon: <School className="w-6 h-6" />,
      description: "",
      courses: [
        // "Higher Mathematics",
        // "Physics",
        // "Chemistry",
        // "Biology",
        // "ICT",
        // "English",
        // "Bangla"
      ],
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Rampura Ekramunnesa High School",
      duration: "2017 - 2019",
      cgpa: "GPA: 5.00/5.00",
      status: "Completed",
      icon: <School className="w-6 h-6" />,
      description: "",
      courses: [],
    },
  ];

  const notableCourses = [
    {
      title: "Data Structures & Algorithms",
      institution: "IIT, University of Dhaka",
      description:
        "Comprehensive study of fundamental data structures and algorithmic problem-solving techniques.",
      icon: <Code className="w-5 h-5" />,
      skills: [
        "Arrays",
        "Linked Lists",
        "Trees",
        "Graphs",
        "Dynamic Programming",
        "Sorting Algorithms",
      ],
    },
    {
      title: "Object-Oriented Programming",
      institution: "IIT, University of Dhaka",
      description:
        "Advanced concepts in OOP using Java and C++, including design patterns and software architecture.",
      icon: <Code className="w-5 h-5" />,
      skills: [
        "Java",
        "C++",
        "Design Patterns",
        "SOLID Principles",
        "Inheritance",
        "Polymorphism",
      ],
    },
    {
      title: "Database Management Systems",
      institution: "IIT, University of Dhaka",
      description:
        "Database design, SQL, NoSQL, and database optimization techniques.",
      icon: <Database className="w-5 h-5" />,
      skills: [
        "SQL",
        "MySQL",
        "MongoDB",
        "Database Design",
        "Normalization",
        "Query Optimization",
      ],
    },
    {
      title: "Web Technologies",
      institution: "IIT, University of Dhaka",
      description:
        "Full-stack web development using modern frameworks and technologies.",
      icon: <Globe className="w-5 h-5" />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "Software Engineering",
      institution: "IIT, University of Dhaka",
      description:
        "Software development lifecycle, project management, and team collaboration methodologies.",
      icon: <BookOpen className="w-5 h-5" />,
      skills: [
        "SDLC",
        "Agile",
        "Scrum",
        "Version Control",
        "Testing",
        "Documentation",
      ],
    },
    {
      title: "Design Patterns",
      institution: "IIT, University of Dhaka",
      description:
        "Design patterns in software development, focusing on reusable solutions to common problems.",
      icon: <Code className="w-5 h-5" />,
      skills: [
        "Singleton",
        "Factory",
        "Observer",
        "Decorator",
        "Strategy",
        "Command",
      ],
    },
  ];

  const certifications = [
    {
      title: "Complete Web Development Course",
      issuer: "Programming Hero",
      date: "2023",
      credentialId: "WD-2023-001",
      link: "#",
      description:
        "Comprehensive web development training covering frontend and backend technologies.",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
    },
    {
      title: "Problem Solving Certification",
      issuer: "HackerRank",
      date: "2023",
      credentialId: "HR-PS-2023",
      link: "#",
      description:
        "Demonstrated proficiency in algorithmic problem solving and data structures.",
      skills: ["Algorithms", "Data Structures", "Problem Solving"],
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "FCC-JS-2022",
      link: "#",
      description:
        "Comprehensive course covering JavaScript fundamentals and algorithmic thinking.",
      skills: ["JavaScript", "ES6+", "Algorithms", "Functional Programming"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 py-2">
      <div className="max-w-6xl mx-auto">
        {/* Education Timeline */}
        <div className="space-y-8 mb-20">
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

              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Timeline Marker */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      edu.status === "Current"
                        ? "bg-gradient-to-r from-green-500 to-blue-500"
                        : "bg-gradient-to-r from-blue-500 to-purple-600"
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
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === "Current"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      }`}
                    >
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
                  <div className="flex items-center text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    <Star className="w-5 h-5 mr-2" />
                    {edu.cgpa}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notable Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Notable Courses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notableCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {course.institution}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {course.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Licenses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Certifications & Licenses
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {/* <Certificate className="w-6 h-6 text-yellow-500 mr-3" /> */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Issued: {cert.date}</span>
                </div>

                {cert.credentialId && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Credential ID: {cert.credentialId}
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default EducationPage;
