import React from "react";
import { motion } from "framer-motion";
import { Code, Laptop, Database, Wrench, TestTube, Brain } from "lucide-react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiPython,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiTypeorm,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiDocker,
  SiIntellijidea,
  SiAndroidstudio,
  SiPostman,
  SiSwagger,
  SiVercel,
  SiJest,
  SiSelenium,
  SiWireshark,
  SiVirtualbox,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600",
      skills: [
        {
          name: "C",
          icon: <SiC className="w-8 h-8" style={{ color: "#A8B9CC" }} />,
        },
        {
          name: "C++",
          icon: (
            <SiCplusplus className="w-8 h-8" style={{ color: "#00599C" }} />
          ),
        },

        {
          name: "JavaScript",
          icon: (
            <SiJavascript className="w-8 h-8" style={{ color: "#F7DF1E" }} />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <SiTypescript className="w-8 h-8" style={{ color: "#3178C6" }} />
          ),
        },
        {
          name: "Java",
          icon: <FaJava className="w-8 h-8" style={{ color: "#ED8B00" }} />,
        },
        {
          name: "Dart",
          icon: <SiDart className="w-8 h-8" style={{ color: "#0175C2" }} />,
        },
        {
          name: "Python",
          icon: <SiPython className="w-8 h-8" style={{ color: "#3776AB" }} />,
        },
      ],
    },
    {
      title: "Web & Mobile Development",
      icon: <Laptop className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600",
      skills: [
        {
          name: "HTML",
          icon: <SiHtml5 className="w-8 h-8" style={{ color: "#E34F26" }} />,
        },
        {
          name: "CSS",
          icon: <SiCss3 className="w-8 h-8" style={{ color: "#1572B6" }} />,
        },
        {
          name: "ReactJs",
          icon: <SiReact className="w-8 h-8" style={{ color: "#61DAFB" }} />,
        },
        {
          name: "NextJs",
          icon: (
            <SiNextdotjs className="w-8 h-8" style={{ color: "#000000" }} />
          ),
        },
        {
          name: "NodeJs",
          icon: (
            <SiNodedotjs className="w-8 h-8" style={{ color: "#339933" }} />
          ),
        },
        {
          name: "ExpressJs",
          icon: <SiExpress className="w-8 h-8" style={{ color: "#000000" }} />,
        },
        {
          name: "NestJS",
          icon: <SiNestjs className="w-8 h-8" style={{ color: "#EA2845" }} />,
        },
        {
          name: "Flutter",
          icon: <SiFlutter className="w-8 h-8" style={{ color: "#02569B" }} />,
        },
      ],
    },
    {
      title: "Databases & ORM",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql className="w-8 h-8" style={{ color: "#4479A1" }} />,
        },
        {
          name: "PostgreSQL",
          icon: (
            <SiPostgresql className="w-8 h-8" style={{ color: "#336791" }} />
          ),
        },
        {
          name: "Prisma",
          icon: <SiPrisma className="w-8 h-8" style={{ color: "#2D3748" }} />,
        },
        {
          name: "TypeORM",
          icon: <SiTypeorm className="w-8 h-8" style={{ color: "#339933" }} />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-8 h-8" style={{ color: "#47A248" }} />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-8 h-8" style={{ color: "#FFCA28" }} />,
        },
        {
          name: "Cloudinary",
          icon: (
            <SiCloudinary className="w-8 h-8" style={{ color: "#3448C5" }} />
          ),
        },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      skills: [
        {
          name: "Git",
          icon: <SiGit className="w-8 h-8" style={{ color: "#F05032" }} />,
        },
        {
          name: "GitHub",
          icon: <SiGithub className="w-8 h-8" style={{ color: "#181717" }} />,
        },
        {
          name: "Docker",
          icon: <SiDocker className="w-8 h-8" style={{ color: "#2496ED" }} />,
        },
        {
          name: "VS Code",
          icon: (
            <BiLogoVisualStudio
              className="w-8 h-8"
              style={{ color: "#007ACC" }}
            />
          ),
        },
        {
          name: "IntelliJ IDEA",
          icon: (
            <SiIntellijidea className="w-8 h-8" style={{ color: "#000000" }} />
          ),
        },
        {
          name: "Android Studio",
          icon: (
            <SiAndroidstudio className="w-8 h-8" style={{ color: "#3DDC84" }} />
          ),
        },
        {
          name: "Postman",
          icon: <SiPostman className="w-8 h-8" style={{ color: "#FF6C37" }} />,
        },
        {
          name: "Swagger",
          icon: <SiSwagger className="w-8 h-8" style={{ color: "#85EA2D" }} />,
        },
        {
          name: "Vercel",
          icon: <SiVercel className="w-8 h-8" style={{ color: "#000000" }} />,
        },
      ],
    },
    {
      title: "Testing & Others",
      icon: <TestTube className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        {
          name: "Jest",
          icon: <SiJest className="w-8 h-8" style={{ color: "#C21325" }} />,
        },
        {
          name: "Selenium",
          icon: <SiSelenium className="w-8 h-8" style={{ color: "#43B02A" }} />,
        },
        {
          name: "Wireshark",
          icon: (
            <SiWireshark className="w-8 h-8" style={{ color: "#1679A7" }} />
          ),
        },
        {
          name: "VirtualBox",
          icon: (
            <SiVirtualbox className="w-8 h-8" style={{ color: "#183A61" }} />
          ),
        },
      ],
    },
    {
      title: "Core Concepts",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-600",
      skills: [
        { name: "DSA", icon: <Code className="w-8 h-8" /> },
        { name: "OOP", icon: <Code className="w-8 h-8" /> },
        { name: "Design Patterns", icon: <Code className="w-8 h-8" /> },
        { name: "SRS", icon: <Code className="w-8 h-8" /> },
        { name: "DBMS", icon: <Database className="w-8 h-8" /> },
        { name: "SDLC", icon: <Code className="w-8 h-8" /> },
        { name: "Testing", icon: <TestTube className="w-8 h-8" /> },
      ],
    },
  ];

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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Skills
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various
            domains of software development
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg"
              >
                <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Programming Excellence
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Strong foundation in multiple programming languages and
                  paradigms
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg"
              >
                <Laptop className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Full-Stack Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  End-to-end application development from frontend to backend
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-lg"
              >
                <TestTube className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Quality Assurance
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Testing and debugging skills to ensure robust applications
                </p>
              </motion.div>
            </div>

            <div className="inline-flex  items-center space-x-0 px-0 py-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
              {/* <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Passionate about solving complex problems with elegant solutions
              </span> */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
