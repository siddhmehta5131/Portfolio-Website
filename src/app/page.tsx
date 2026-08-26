"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, ExternalLink, Download } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* 1. Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-14">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl w-full"
        >
          <motion.h1 
            variants={fadeUp}
            className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-foreground mb-6"
          >
            Siddh Mehta
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-medium tracking-tight mb-8"
          >
            Mechanical Engineering · IIT Jodhpur
          </motion.p>
          <motion.div variants={fadeUp}>
            <p className="text-lg text-foreground/80 font-light max-w-2xl mx-auto">
              "Where hardware meets intelligence."
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-text-secondary" />
        </motion.div>
      </section>

      {/* 2. About Me */}
      <section id="about" className="py-32 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-[1fr_2fr] gap-12 items-start"
          >
            <motion.div variants={fadeUp} className="relative aspect-[3/4] w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/assets/profile.png" 
                alt="Siddh Mehta" 
                fill 
                className="object-cover object-[25%_center]"
                priority
              />
            </motion.div>
            
            <motion.div variants={fadeUp} className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About</h2>
              
              <div className="prose prose-lg text-foreground/80">
                <p>
                  Third-year Mechanical Engineering undergraduate at IIT Jodhpur (CGPA: 8.16/10) with deep interest in full-cycle mechanical development — from CAD ideation through FEA validation to manufacturing. Currently leading a 40-member SAE Supra team as Vice Captain while exploring the intersection of robotics, simulation, and autonomous systems.
                </p>
                <p>
                  Experienced in PX4/Gazebo flight simulation (IndiFlo), composite manufacturing R&D (Alt Carbon), and building real UAVs. Passionate about bridging physical engineering with computational tools — SolidWorks, ANSYS, ROS 2, Python, and C++.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Fluid Mechanics", "Mechanics of Solids", "Heat Transfer", "Kinematics & Dynamics"].map((course) => (
                  <span key={course} className="px-4 py-2 bg-background rounded-full text-sm font-medium border border-border/50 shadow-sm">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Projects */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-center">Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SAE Supra 2026",
                desc: "Formula-style combustion race car — chassis, suspension, aero, powertrain",
                tools: "SolidWorks, ANSYS, MATLAB",
                img: "sae_supra.png"
              },
              {
                title: "6-DOF Robot Simulation",
                desc: "Gesture-controlled robot arm in Gazebo with live PlotJuggler data plotting",
                tools: "ROS 2, Gazebo, MediaPipe",
                img: "6dof_robot.png"
              },
              {
                title: "VTOL Tailsitter Simulation",
                desc: "PX4-Gazebo 2-rotor VTOL with custom plugins and aero validation",
                tools: "PX4, Gazebo, SolidWorks",
                img: "vtol_sim.png"
              },
              {
                title: "Motor Failure Detection",
                desc: "Single-motor fault detection via Gazebo plugins and telemetry classification",
                tools: "Gazebo, PX4, Python",
                img: "motor_failure.png"
              },
              {
                title: "Fixed-Wing Recon UAV",
                desc: "Real-time video + GPS navigation on custom airframe",
                tools: "iNav, Matek F411, GPS",
                img: "recon_uav.png"
              },
              {
                title: "Basalt Powder Spreader",
                desc: "Automated distribution mechanism for composite manufacturing",
                tools: "SolidWorks, CAD-driven design",
                img: "basalt_spreader.png"
              },
              {
                title: "Topology Optimized Drone",
                desc: "SIMP-based optimization achieving 34.6% mass reduction",
                tools: "ANSYS, SolidWorks, SLS",
                img: "topo_drone.png"
              }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-surface rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/40 hover:border-accent/30"
              >
                <div className="relative h-64 w-full overflow-hidden bg-white">
                  <Image
                    src={`/assets/${project.img}`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed h-10">
                    {project.desc}
                  </p>
                  <p className="text-xs font-mono text-foreground/60 uppercase tracking-wider">
                    {project.tools}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Experience & Activities */}
      <section id="experience" className="py-32 px-6 bg-surface">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-20">
          
          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Experience</motion.h2>
            
            <div className="space-y-12 border-l-2 border-border/50 pl-6 ml-3">
              <motion.div variants={fadeUp} className="relative">
                <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-surface" />
                <h3 className="text-xl font-bold">Vice Captain / Team Manager</h3>
                <p className="text-text-secondary font-medium mt-1">SAE Supra, IIT Jodhpur</p>
                <p className="text-sm text-foreground/50 mt-1 mb-3">Oct 2025 – Sep 2026</p>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Leading 40-member team, overseeing budgeting & procurement, coordinating subsystems (chassis, suspension, powertrain, aero, electronics), managing 50–60 trainees.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="relative">
                <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-border ring-4 ring-surface" />
                <h3 className="text-xl font-bold">Intern — VTOL Simulation</h3>
                <p className="text-text-secondary font-medium mt-1">IndiFlo, Bengaluru</p>
                <p className="text-sm text-foreground/50 mt-1 mb-3">Jun 2025 – Oct 2025</p>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  PX4-Gazebo VTOL tailsitter simulation, custom Gazebo plugins, SDF updates, SolidWorks/Blender airframe modeling, AVL aero coefficients, ROS 2-PlotJuggler monitoring.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="relative">
                <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-border ring-4 ring-surface" />
                <h3 className="text-xl font-bold">Mechanical Design Intern</h3>
                <p className="text-text-secondary font-medium mt-1">Alt Carbon, Kolkata</p>
                <p className="text-sm text-foreground/50 mt-1 mb-3">Jan 2025 – Mar 2025</p>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Designed basalt-powder distribution mechanisms, remote testing and clogging elimination, CAD-driven iterative refinement.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Activities</motion.h2>
            
            <div className="space-y-8">
              {[
                { role: "General Secretary", org: "Boltheads — The Automobile Society", date: "Jul 2025 – Present" },
                { role: "Election Committee Member", org: "College Elections", date: "Recent" },
                { role: "Team Member", org: "Robotics Club, IIT Jodhpur", date: "2024 – 2025" },
                { role: "Point of Contact, Guest Relations", org: "Prometeo '24 (Tech Fest)", date: "Jan – Feb 2024" },
                { role: "Participant / Organizer", org: "SolidWorks Training Camp (11 weeks)", date: "2024" }
              ].map((act, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-background p-6 rounded-2xl border border-border/40 shadow-sm">
                  <h3 className="font-bold text-lg">{act.role}</h3>
                  <p className="text-text-secondary mt-1">{act.org}</p>
                  <p className="text-sm text-foreground/50 mt-2">{act.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. Skills */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">Technical Arsenal</motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CAD & Design", skills: ["SolidWorks", "Blender", "AutoCAD"] },
              { title: "Simulation & Analysis", skills: ["ANSYS", "MATLAB", "ADAMS", "Gazebo", "AVL"] },
              { title: "Robotics", skills: ["ROS", "ROS 2", "PX4", "QGroundControl", "RViz", "iNav"] },
              { title: "Programming", skills: ["C++", "Python", "Arduino", "LINGO"] },
              { title: "ML & Data", skills: ["PyTorch", "Scikit-Learn", "NumPy", "Pandas"] },
              { title: "Fabrication", skills: ["3D Printing (SLS/FDM)", "CNC", "Composites"] },
              { title: "Relevant Coursework", skills: ["Flight Dynamics", "Comp Fluid Mechanics", "Finite Element Method", "Engineering Design", "Heat Transfer", "Applied Thermodynamics"] }
            ].map((category, i) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-surface border border-border/30"
              >
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map(skill => (
                    <li key={skill} className="flex items-center text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer / Contact */}
      <footer className="py-20 px-6 bg-surface border-t border-border/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2">Let's build something.</h2>
            <p className="text-text-secondary">Open to full-time opportunities and collaboration.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="mailto:siddhm1301@gmail.com" className="p-3 bg-background rounded-full hover:bg-border/50 hover:text-accent transition-colors shadow-sm">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/siddhmehta5131" target="_blank" className="p-3 bg-background rounded-full hover:bg-border/50 hover:text-accent transition-colors shadow-sm">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/siddh-mehta-a182ba3b7" target="_blank" className="p-3 bg-background rounded-full hover:bg-border/50 hover:text-accent transition-colors shadow-sm">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="/assets/resume.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-accent hover:text-white transition-colors font-medium shadow-md ml-4">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-16 text-center text-sm text-foreground/40">
          <p>© 2026 Siddh Mehta</p>
        </div>
      </footer>
    </main>
  );
}
