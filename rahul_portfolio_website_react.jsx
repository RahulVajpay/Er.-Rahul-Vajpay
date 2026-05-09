import { motion } from "framer-motion";

export default function PortfolioWebsite() {
  const skills = [
    "Smart3D Administration",
    "Python Programming",
    "Automation",
    "Engineering Support",
    "Problem Solving",
    "Technical Documentation",
  ];

  const projects = [
    {
      title: "Smart3D Administration",
      description:
        "Managed Smart3D environments, user support, project setup, and engineering workflows for industrial projects.",
    },
    {
      title: "Python Learning Journey",
      description:
        "Built beginner-to-advanced Python programs including palindrome checkers, Armstrong number tools, and automation scripts.",
    },
    {
      title: "Engineering Automation",
      description:
        "Worked on workflow improvements and automation concepts to increase productivity and reduce repetitive tasks.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/20 blur-3xl rounded-full animate-pulse" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />

        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-sky-400 text-lg mb-4 tracking-wide">
              Hello, I am
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Rahul Vajpay
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mt-6 font-semibold">
              Smart3D Admin & Python Enthusiast
            </h2>

            <p className="text-slate-400 mt-6 text-lg leading-relaxed max-w-xl">
              Passionate about engineering technology, automation, and learning
              modern programming. I enjoy building efficient workflows and
              solving real-world technical problems.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-sky-500 hover:bg-sky-400 transition-all duration-300 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105">
                View Projects
              </button>

              <button className="border border-slate-500 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 px-6 py-3 rounded-2xl font-semibold hover:scale-105">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-80 h-80 rounded-[2.5rem] bg-gradient-to-br from-sky-400 via-cyan-500 to-indigo-600 shadow-[0_0_80px_rgba(56,189,248,0.4)] flex items-center justify-center text-7xl font-bold border border-white/10 backdrop-blur-xl"
            >
              RV
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:border-sky-400/30 transition-all duration-500"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              I am currently working in the engineering and Smart3D domain with
              experience in supporting complex industrial projects. Alongside my
              professional work, I am actively learning Python and exploring
              automation, AI, and software development.
            </p>
          </motion.div>
        </section>

        {/* Skills */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-xl"
              >
                <p className="text-lg font-semibold text-slate-200">
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-sky-400/30 transition-all duration-500 shadow-[0_0_40px_rgba(56,189,248,0.08)] backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-500/20 flex items-center justify-center mb-6 text-2xl">
                  🚀
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-10 text-center shadow-[0_0_60px_rgba(99,102,241,0.25)]"
          >
            <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>

            <p className="text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed">
              Interested in collaborating, engineering solutions, or discussing
              technology and automation? Feel free to reach out.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300">
                Email Me
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                LinkedIn
              </button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-8 mt-10 text-center text-slate-500">
          <p>© 2026 Rahul Vajpay. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
