import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Trophy,
  Download,
  Github,
  Linkedin,
  Youtube,
  Facebook,
  ExternalLink,
  Mail,
} from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const roles = useMemo(
    () => [
      "Problem Solver",
      "Competitive Programmer",
      "Web Developer",
      "Flutter App Developer",
    ],
    []
  );

  useEffect(() => {
    const typeSpeed = isDeleting ? 70 : 140;
    const pauseDuration = 1400;

    const timeout = setTimeout(
      () => {
        const fullText = roles[currentRole];

        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          if (displayText === "") {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          } else {
            setDisplayText(fullText.substring(0, displayText.length - 1));
          }
        } else {
          if (displayText === fullText) {
            setIsPaused(true);
          } else {
            setDisplayText(fullText.substring(0, displayText.length + 1));
          }
        }
      },
      isPaused ? pauseDuration : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, currentRole, roles]);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Web Applications",
      description:
        "I build complete web solutions from responsive frontends to robust backends, handling everything from user interfaces to database design and API development.",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Java",
        "Spring Boot",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cross-Platform Mobile Apps",
      description:
        "I develop high-performance mobile applications that work seamlessly across iOS and Android, with beautiful UIs and smooth user experiences.",
      techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "Provider"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Algorithm Design & Problem Solving",
      description:
        "I solve complex computational problems through efficient algorithms and data structures, optimizing performance for competitive programming and real-world applications.",
      techStack: [
        "Dynamic Programming",
        "Number Theory",
        "Graph Theory",
        "Greedy",
        "Binary Search",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 px-10 py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Main Hero Section */}
        <div className="grid lg:grid-cols-2 gap-2 items-center min-h-[80vh]">
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
                  Ismail Hossain
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
                <span className="ml-1 text-blue-600 dark:text-blue-400 animate-pulse">
                  |
                </span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
            >
              I'm a Software Engineering undergrad student at University of
              Dhaka, with expertise in Flutter app development, full-stack web
              development. My active participation in competitive programming
              contests has honed my problem-solving and algorithmic thinking
              skills.
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
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center space-x-4"
            >
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
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://www.facebook.com/ismail.hossain.101004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://youtube.com/@codewithismail360?feature=shared"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="mailto:ismail.iit.du@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Full Height Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center lg:justify-center"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative background elements */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20"></div>

                {/* Photo container */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/118668314?v=4"
                    alt="Mohammad Ismail Hossain"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback content */}
                  <div
                    className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-8xl font-bold rounded-3xl"
                    style={{ display: "none" }}
                  >
                    MI
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* What I Do Section - Full Width at Bottom */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 w-full"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              What I{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Do
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              I specialize in creating innovative solutions through code,
              combining creativity with technical expertise
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="p-8 rounded-3xl backdrop-blur-md border bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 shadow-lg`}
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 1.6 + index * 0.2 + techIndex * 0.1,
                            }}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Hero;
