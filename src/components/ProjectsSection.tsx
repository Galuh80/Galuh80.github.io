import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Fleet Management System",
    slug: "fleet-management-system",
    description:
      "TransporTech.ai is a multi-tenant Fleet Management SaaS platform designed to manage transportation and logistics operations for companies of all sizes.",
    tech: ["TypeScript", "NestJS", "ReactJS", "PostgreSQL", "Redis", "OneSignal"],
    github: "#",
    live: "https://transportech.ai/",
  },
  {
    title: "DCP (Data Consolidation Platform)",
    slug: "dcp-data-consolidation-platform",
    description:
      "The Data Consolidation Platform was developed to overcome key challenges in data management and utilization. The platform aims to consolidate data from multiple sources, standardize formats, fill in missing data, and provide flexible data input methods. This application is also used as a data feed in the DSAS (Dynamic Scheduling Automation System) application developed by PT. SES and Dassault Systeme",
    tech: ["C#", "ASP.NET 6", "Microsoft SQL Server", "Azure"],
    github: "#",
    live: "#",
  },
  {
    title: "Tower Monitoring Application",
    slug: "tower-monitoring-application",
    description:
      "A real-time monitoring solution for tracking and managing tower infrastructure with alerting and reporting capabilities.",
    tech: ["Python", "Django", "PostgreSQL", "Redis", "Grafana"],
    github: "#",
    live: "#",
  },
  {
    title: "Eureka Edutech Application",
    slug: "eureka-edutech-application",
    description:
      "The application is designed to aid students in preparing for national assessments by offering a comprehensive suite of study tools and resources. It features many practice questions, interactive quizzes, and detailed explanations across various subjects aligned with the national curriculum. The app also includes personalized study plans, progress tracking, and performance analytics to help students identify their strengths and areas needing improvement. With its user-friendly interface and adaptive learning technology, the application aims to enhance students' knowledge retention and test-taking skills, ensuring they are well-prepared for their exams.",
    tech: ["Node.js", "MySQL", "AWS", "Redis", "Grafana"],
    github: "#",
    live: "#",
  },
  {
    title: "PSSI Cirebon (ASKAB) Application",
    slug: "pssi-cirebon-askab-application",
    description:
      "The PSSI Kabupaten Cirebon application is a comprehensive tool designed to manage football league activities within the Cirebon Regency.",
    tech: ["Laravel", "MySQL", "AWS", "Redis", "Grafana"],
    github: "#",
    live: "#",
  },
  {
    title: "Student Admission Application",
    slug: "student-admission-application",
    description:
      "The Student Admission Application is a web-based platform designed to streamline the student admission process for educational institutions.",
    tech: ["Laravel", "MySQL", "AWS", "Redis", "Grafana"],
    github: "#",
    live: "https://alharaki.sch.id/",
  },
  {
    title: "Odoo Digital Inspection Application",
    slug: "odoo-digital-inspection-application",
    description:
      "Our Odoo ERP application is a versatile and comprehensive solution designed to streamline business operations across various departments. It integrates key functions such as accounting, inventory management, sales, human resources, and customer relationship management into a single, cohesive platform. The application offers customizable modules, user-friendly interfaces, and real-time data analytics, enabling businesses to optimize processes, enhance efficiency, and make informed decisions. With its scalable architecture and extensive support for third-party integrations, our Odoo ERP application is ideal for businesses of all sizes looking to improve their operational effectiveness and drive growth.",
    tech: ["Python", "Odoo 12", "PostgreSQL", "Linux Server"],
    github: "https://www.jasamaritim.co.id/",
    live: "#",
  },
  {
    title: "Odoo Project Controlling Application",
    slug: "odoo-project-controlling-application",
    description:
      "The Project Controlling app in Odoo 14 is designed to help businesses effectively manage, track, and analyze project-related activities, costs, and performance.",
    tech: ["Python", "Odoo 14", "PostgreSQL", "AWS"],
    github: "#",
    live: "#",
  },
  {
    title: "SIMAK (Sistem Informasi Akademik)",
    slug: "simak-sistem-informasi-akademik",
    description:
      "Sistem Informasi Manajemen Kampus (SIMAK) is designed to enhance the educational experience by providing a comprehensive, user-friendly platform for managing and delivering academic content. The application supports course creation, enrollment management, and interactive learning through features such as discussion forums, quizzes, and multimedia integration. It also offers tools for tracking student progress, grading, and providing feedback, ensuring a seamless communication channel between instructors and students. With robust analytics and reporting capabilities, our LMS helps universities monitor performance and optimize educational outcomes, fostering an engaging and effective learning environment.",
    tech: ["PHP", "CodeIgniter 3", "MySQL", "Linux Server"],
    github: "#",
    live: "#",
  },
  {
    title: "Human Resource Information System (HRIS)",
    slug: "hris-human-resource-information-system",
    description:
      "The Human Resource Information System (HRIS) is a comprehensive solution designed to streamline and automate various human resources processes. It provides a centralized platform for managing employee data, tracking attendance, processing payroll, and facilitating communication between employees and management. With its intuitive interface and robust features, the HRIS helps organizations improve efficiency, ensure compliance, and enhance the overall employee experience.",
    tech: ["Python", "Django", "PostgreSQL", "AWS", "Redis"],
    github: "#",
    live: "#",
  },
  {
    title: "Learning Management System (LMS)",
    slug: "lms-learning-management-system",
    description:
      "Renaci (Renewable Academy Indonesia) is a Learning Management System dedicated to renewable energy education. The platform provides comprehensive courses covering solar, wind, hydro, and other sustainable energy topics, empowering the next generation of sustainable energy professionals in Indonesia.",
    tech: ["Python", "Django", "PostgreSQL", "AWS", "Redis"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Projects
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg p-8 border border-border hover:border-glow transition-all group"
              >
                <Link to={`/project/${project.slug}`} className="block">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-primary font-mono text-xs mb-1">Featured Project</p>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-primary/80 bg-primary/5 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
