import { motion } from "framer-motion";
import {
  Briefcase,
  Building,
  Calendar,
  ChevronsRight,
  MapPin,
} from "lucide-react";

const ExperiencePage = () => {
  const experienceData = [
    {
      id: 1,
      title: "Trainee Software Engineer",
      company: "Cefalo Bangladesh Ltd.",
      duration: "Oct 2025 - Mar 2026",
      location: "Dhaka, Bangladesh",
      description:
        "Completed a comprehensive training program and contributed to real-world projects, gaining hands-on experience with modern web technologies and agile development practices.",
      responsibilities: [
        "Completed hands-on training on HTTP, REST, JavaScript, TypeScript, NodeJS, ExpressJS, ReactJS, PostgreSQL etc.",
        "Developed CareerStory - a full-stack web application of job interview experience.",
        "Contributed to an in-house project using NestJS, Next.js, MySQL, Prisma etc.",
        "Experienced in Git, GitHub, Jira, and Agile workflows following industry standard.",
      ],
    },
    // Add more experiences here
  ];

  return (
    <div className="min-h-screen text-gray-900 dark:text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and contributions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute top-5 left-5 w-0.5 h-full bg-blue-300 dark:bg-blue-700 hidden md:block"></div>
              <div className="md:pl-12 relative">
                <div className="absolute top-2 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h2>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronsRight className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
