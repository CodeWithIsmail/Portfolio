import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ContactPage from "./pages/ContactPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ProblemSolvingPage from "./pages/ProblemSolvingPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
            : "bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100"
        }`}
      >
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 100, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-40 right-1/4 w-36 h-36 bg-pink-500/10 rounded-full blur-xl"
            animate={{
              x: [0, 90, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/problem-solving" element={<ProblemSolvingPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: darkMode ? "#1f2937" : "#ffffff",
              color: darkMode ? "#f9fafb" : "#111827",
              border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
              borderRadius: "0.75rem",
              backdropFilter: "blur(10px)",
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
