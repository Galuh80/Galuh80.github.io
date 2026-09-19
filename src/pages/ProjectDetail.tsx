import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projectsData: Record<string, {
  title: string;
  description: string;
  longDescription: string[];
  tech: string[];
  techCategories?: Record<string, string>;
  features: string[];
  live: string;
  role: string;
  year: string;
}> = {
  "fleet-management-system": {
    title: "Fleet Management System",
    description: "TransporTech.ai is a multi-tenant Fleet Management SaaS platform covering Dispatch, HR, Finance, Fleet, and Live Tracking, with a cross-platform driver mobile app and an AI-powered assistant.",
    longDescription: [
      "TransporTech.ai is a comprehensive multi-tenant Fleet Management SaaS platform built from the ground up to support end-to-end fleet operations (Dispatch, HR, Finance, Fleet, and Live Tracking) for multiple concurrent business clients.",
      "The platform provides real-time GPS fleet tracking and automated revenue reconciliation across third-party ride-hailing integrations (Uber, Bolt, Moniic). An LLM API integration adds AI-powered assistant capabilities, enabling intelligent automation within fleet workflows.",
      "The cross-platform (iOS/Android) driver mobile app spans 56 screens covering trip management, booking, driver onboarding/KYC, EV charging, and earnings/payroll. It integrates native device capabilities (camera-based document OCR, geolocation-based trip metering, QR-code vehicle handover, OneSignal push notifications), PWA offline support via Workbox, and bilingual (EN/AR) localization.",
      "Built with NestJS for the backend API and ReactJS for the frontend, backed by PostgreSQL for data persistence and Redis for caching and real-time features.",
    ],
    tech: ["TypeScript", "NestJS", "ReactJS", "PostgreSQL", "Redis", "OneSignal", "Workbox", "LLM API", "Docker", "Ubuntu Server", "Cloudflare"],
    techCategories: {
      "Architecture": "Multi Tenant",
      "Backend": "NestJS (TypeScript)",
      "Frontend": "ReactJS (TypeScript), PWA (Workbox)",
      "Mobile": "Cross-platform iOS/Android Driver App",
      "Database": "PostgreSQL",
      "AI / LLM": "LLM, RAG, CAG, Zeroclaw",
      "Tools": "Redis, OneSignal, Github Action, CI/CD",
      "Infrastructure": "Docker, Ubuntu Server, Cloudflare",
    },
    features: [
      "Multi-tenant architecture with isolated company data",
      "Dispatch, HR, Finance, and Fleet management modules",
      "Real-time GPS fleet tracking",
      "Automated revenue reconciliation with Uber, Bolt, and Moniic",
      "Driver mobile app (iOS/Android, 56 screens): trips, booking, onboarding/KYC, EV charging, earnings/payroll",
      "Camera-based document OCR, geolocation trip metering, and QR-code vehicle handover",
      "Push notifications via OneSignal and PWA offline support",
      "Bilingual (EN/AR) localization",
      "AI-powered assistant via LLM API integration",
    ],
    live: "https://transportech.ai/",
    role: "Fullstack Engineer",
    year: "2025 - present",
  },
  "dcp-data-consolidation-platform": {
    title: "DCP (Data Consolidation Platform)",
    description: "The Data Consolidation Platform was developed to overcome key challenges in data management and utilization.",
    longDescription: [
      "The Data Consolidation Platform (DCP) was developed to overcome key challenges in data management and utilization. The platform aims to consolidate data from multiple external systems (including Quintiq), standardize formats, fill in missing data, and provide flexible data input methods, reducing manual data handling and improving reporting consistency.",
      "This application is also used as a data feed in the DSAS (Dynamic Scheduling Automation System) application developed by PT. SES and Dassault Systeme, enabling seamless integration between data consolidation and dynamic scheduling workflows.",
      "Built on ASP.NET 6 with C# and deployed on Azure, the platform leverages Microsoft SQL Server for robust data storage and processing capabilities.",
    ],
    tech: ["C#", "ASP.NET 6", "CSS", "JavaScript", "Bootstrap", "Microsoft SQL Server", "TFS", "CI/CD", "Grafana", "Azure", "IIS"],
    techCategories: {
      "Architecture": "Monolith",
      "Backend": "ASP.NET 6 (C#)",
      "Frontend": "CSS, JavaScript, Bootstrap",
      "Database": "Microsoft SQL Server",
      "Tools": "TFS, CI/CD, Grafana",
      "Infrastructure": "Azure, IIS",
    },
    features: [
      "Data consolidation from multiple external systems (including Quintiq)",
      "Automated data format standardization",
      "Missing data detection and filling",
      "Flexible data input methods",
      "Integration with DSAS application",
      "Azure cloud deployment for scalability",
    ],
    live: "#",
    role: "Backend Developer",
    year: "2025",
  },
  "tower-monitoring-application": {
    title: "Tower Monitoring Application",
    description: "A real-time monitoring solution for tracking and managing tower infrastructure with alerting and reporting capabilities.",
    longDescription: [
      "The Tower Monitoring Application is a real-time monitoring solution designed to track and manage tower infrastructure efficiently. It provides comprehensive alerting and reporting capabilities for infrastructure teams.",
      "The system collects and processes data from tower sensors, providing real-time dashboards through Grafana integration for visual monitoring. Redis is used for caching and real-time data processing.",
      "Built with Python and Django, the application offers a robust backend with PostgreSQL for reliable data storage, ensuring all monitoring data is accurately recorded and easily accessible.",
    ],
    tech: ["Python", "Django", "Bootstrap", "JavaScript", "PostgreSQL", "PostGIS", "Git", "CI/CD", "Redis", "Grafana", "Ubuntu Server"],
    techCategories: {
      "Architecture": "Monolith",
      "Backend": "Django (Python)",
      "Frontend": "Bootstrap & JavaScript",
      "Database": "PostgreSQL, PostGIS",
      "Tools": "Git, CI/CD, Redis, Grafana",
      "Infrastructure": "Ubuntu Server",
    },
    features: [
      "Real-time tower infrastructure monitoring",
      "Automated alerting for critical conditions",
      "Grafana dashboard integration for visualization",
      "Historical data tracking and reporting",
      "Sensor data collection and processing",
      "Role-based access control for teams",
    ],
    live: "#",
    role: "Backend Developer",
    year: "2024",
  },
  "eureka-edutech-application": {
    title: "Eureka Edutech Application",
    description: "The application is designed to aid students in preparing for national assessments by offering a comprehensive suite of study tools and resources.",
    longDescription: [
      "The Eureka Edutech Application is designed to aid students in preparing for national assessments by offering a comprehensive suite of study tools and resources. It features many practice questions, interactive quizzes, and detailed explanations across various subjects aligned with the national curriculum.",
      "The app includes personalized study plans, progress tracking, and performance analytics to help students identify their strengths and areas needing improvement.",
      "With its user-friendly interface and adaptive learning technology, the application aims to enhance students' knowledge retention and test-taking skills, ensuring they are well-prepared for their exams.",
    ],
    tech: ["NodeJS", "JavaScript", "ReactJS", "MySQL", "Git", "CI/CD", "Redis", "Grafana", "Ubuntu Server"],
    techCategories: {
      "Architecture": "Monolith",
      "Backend": "NodeJS (JavaScript)",
      "Frontend": "ReactJS",
      "Database": "MySQL",
      "Tools": "Git, CI/CD, Redis, Grafana",
      "Infrastructure": "Ubuntu Server",
    },
    features: [
      "Comprehensive practice questions and interactive quizzes",
      "Detailed explanations aligned with national curriculum",
      "Personalized study plans",
      "Progress tracking and performance analytics",
      "Adaptive learning technology",
      "User-friendly interface for students",
    ],
    live: "#",
    role: "Backend Developer",
    year: "2023 - 2024",
  },
  "pssi-cirebon-askab-application": {
    title: "PSSI Cirebon (ASKAB) Application",
    description: "The PSSI Kabupaten Cirebon application is a comprehensive tool designed to manage football league activities within the Cirebon Regency.",
    longDescription: [
      "The PSSI Kabupaten Cirebon (ASKAB) application is a comprehensive tool designed to manage football league activities within the Cirebon Regency.",
      "The platform handles team registration, match scheduling, score tracking, and league standings management, providing a centralized system for all football-related operations in the region.",
      "Built with Laravel and MySQL, the application is deployed on AWS for reliable performance and scalability.",
    ],
    tech: ["Laravel", "PHP", "Bootstrap", "JavaScript", "MySQL", "Git", "CI/CD", "Grafana", "Ubuntu Server"],
    techCategories: {
      "Architecture": "Monolith",
      "Backend": "Laravel (PHP)",
      "Frontend": "Bootstrap, JavaScript",
      "Database": "MySQL",
      "Tools": "Git, CI/CD, Grafana",
      "Infrastructure": "Ubuntu Server",
    },
    features: [
      "Team and player registration management",
      "Match scheduling and calendar",
      "Live score tracking and updates",
      "League standings and statistics",
      "Admin dashboard for league management",
      "Reporting and analytics",
    ],
    live: "#",
    role: "Backend Engineer",
    year: "2020",
  },
  "student-admission-application": {
    title: "Student Admission Application",
    description: "The Student Admission Application is a web-based platform designed to streamline the student admission process for educational institutions.",
    longDescription: [
      "The Student Admission Application is a web-based platform designed to streamline the student admission process for educational institutions.",
      "The system automates the entire admission workflow from application submission, document verification, to enrollment confirmation, reducing manual effort and improving efficiency.",
      "Built with Laravel and deployed on AWS, the platform provides a user-friendly interface for both applicants and administrators.",
    ],
    tech: ["Laravel", "PHP", "Bootstrap", "JavaScript", "MySQL", "Git", "CI/CD", "Grafana", "Ubuntu Server"],
    techCategories: {
      "Architecture": "Monolith",
      "Backend": "Laravel (PHP)",
      "Frontend": "Bootstrap, JavaScript",
      "Database": "MySQL",
      "Tools": "Git, CI/CD, Grafana",
      "Infrastructure": "Ubuntu Server",
    },
    features: [
      "Online application submission",
      "Document upload and verification",
      "Application status tracking",
      "Automated enrollment workflow",
      "Admin dashboard for admission management",
      "Reporting and analytics for admission data",
    ],
    live: "https://alharaki.sch.id/",
    role: "Full Stack Developer",
    year: "2022",
  },
  "odoo-digital-inspection-application": {
    title: "Odoo Digital Inspection Application",
    description: "Custom Odoo modules for employee management, inspections, document handling, and project administration.",
    longDescription: [
      "The Odoo Digital Inspection Application is a set of custom Odoo modules designed and implemented for employee management, inspections, document handling, and project administration.",
      "It automates several manual HR and inspection workflows by translating operational requirements into ERP-based solutions.",
      "Built on Odoo 12 with PostgreSQL and deployed on a Linux server.",
    ],
    tech: ["Python", "Odoo 12", "Bootstrap", "JavaScript", "PostgreSQL", "Git", "CI/CD", "Grafana", "Ubuntu Server"],
    techCategories: {
      "Architecture": "Monolith",
      "Backend": "Odoo 12 (Python)",
      "Frontend": "Bootstrap, JavaScript",
      "Database": "PostgreSQL",
      "Tools": "Git, CI/CD, Grafana",
      "Infrastructure": "Ubuntu Server",
    },
    features: [
      "Digital inspection workflow management",
      "Employee management module",
      "Document handling and administration",
      "Project administration",
      "Automated HR and inspection workflows",
      "Customizable Odoo modules",
    ],
    live: "https://www.pelindosolusimaritim.co.id/",
    role: "Odoo Developer",
    year: "2021",
  },
  "odoo-project-controlling-application": {
    title: "Odoo Project Controlling Application",
    description: "The Project Controlling app in Odoo 16 is designed to help businesses effectively manage, track, and analyze project-related activities, costs, and performance.",
    longDescription: [
      "The Project Controlling app in Odoo 16 is designed to help businesses effectively manage, track, and analyze project-related activities, costs, and performance.",
      "The application provides project management tools that standardize workflows and improve cross-team coordination, including budget tracking, resource allocation, timeline management, and cost analysis.",
      "Built on Odoo 16 with PostgreSQL and deployed on AWS, the system offers a robust and scalable solution for project-based organizations.",
    ],
    tech: ["Python", "Odoo 16", "CSS", "JavaScript", "PostgreSQL", "Git", "CI/CD", "Grafana", "Ubuntu Server"],
    techCategories: {
      "Architecture": "Monolith",
      "Backend": "Odoo 16 (Python)",
      "Frontend": "CSS, JavaScript",
      "Database": "PostgreSQL",
      "Tools": "Git, CI/CD, Grafana",
      "Infrastructure": "Ubuntu Server",
    },
    features: [
      "Project budget tracking and cost analysis",
      "Resource allocation and management",
      "Timeline and milestone management",
      "Performance analytics and reporting",
      "Multi-project dashboard",
      "Integration with Odoo accounting modules",
    ],
    live: "#",
    role: "Odoo Developer",
    year: "2022",
  },
  "simak-sistem-informasi-akademik": {
    title: "SIMAK (Sistem Informasi Akademik)",
    description: "Sistem Informasi Akademik (SIMAK) is an academic information system supporting course management, student records, and grade processing.",
    longDescription: [
      "Sistem Informasi Akademik (SIMAK) is an academic information system supporting course management, student records, and grade processing. It automates key administrative workflows and gives lecturers and staff centralized access to academic data.",
      "The application supports course creation, enrollment management, and interactive learning through features such as discussion forums, quizzes, and multimedia integration. It also offers tools for tracking student progress, grading, and providing feedback.",
      "With robust analytics and reporting capabilities, SIMAK helps universities monitor performance and optimize educational outcomes, fostering an engaging and effective learning environment.",
    ],
    tech: ["PHP", "CodeIgniter 3", "Bootstrap", "JavaScript", "MySQL", "Git", "Ubuntu Server"],
    techCategories: {
      "Architecture": "Monolith",
      "Backend": "CodeIgniter 3 (PHP)",
      "Frontend": "Bootstrap & JavaScript",
      "Database": "MySQL",
      "Tools": "Git",
      "Infrastructure": "Ubuntu Server",
    },
    features: [
      "Course management and enrollment",
      "Student records management",
      "Grade processing and progress tracking",
      "Automated administrative workflows",
      "Centralized academic data access for lecturers and staff",
      "Discussion forums and interactive quizzes",
      "Multimedia content integration",
      "Analytics and reporting capabilities",
      "Communication tools between instructors and students",
    ],
    live: "https://unucirebon.ac.id/web/",
    role: "Backend Engineer",
    year: "2018 - 2019",
  },
  "hris-human-resource-information-system": {
    title: "Human Resource Information System (HRIS)",
    description: "The HRIS is a comprehensive solution designed to streamline and automate various human resources processes.",
    longDescription: [
      "The Human Resource Information System (HRIS) is a comprehensive solution designed to streamline and automate various human resources processes.",
      "It provides a centralized platform for managing employee data, tracking attendance, processing payroll, and facilitating communication between employees and management.",
      "With its intuitive interface and robust features, the HRIS helps organizations improve efficiency, ensure compliance, and enhance the overall employee experience.",
    ],
    tech: ["Python", "Django", "CSS", "JavaScript", "PostgreSQL", "Git", "CI/CD", "Grafana", "Redis", "Ubuntu Server"],
    techCategories: {
      "Architecture": "Monolith",
      "Backend": "Django (Python)",
      "Frontend": "CSS, JavaScript",
      "Database": "PostgreSQL",
      "Tools": "Git, CI/CD, Grafana, Redis",
      "Infrastructure": "Ubuntu Server",
    },
    features: [
      "Employee data management",
      "Attendance tracking system",
      "Payroll processing and management",
      "Employee-management communication tools",
      "Compliance reporting",
      "Performance review and analytics",
    ],
    live: "#",
    role: "Backend Developer",
    year: "2021",
  },
  "lms-learning-management-system": {
    title: "Learning Management System (LMS)",
    description: "Renaci (Renewable Academy Indonesia) is a Learning Management System focused on renewable energy education, providing comprehensive courses and resources for sustainable energy learning.",
    longDescription: [
      "Renaci (Renewable Academy Indonesia) is a Learning Management System dedicated to renewable energy education. The platform provides a comprehensive suite of courses covering solar, wind, hydro, and other sustainable energy topics for learners across Indonesia.",
      "The system offers a centralized platform for managing renewable energy courses, tracking student progress, and facilitating communication between instructors and students. It supports multimedia content delivery, interactive assessments, and certification for completed courses.",
      "With its intuitive interface and robust features, Renaci helps bridge the knowledge gap in renewable energy by providing accessible and engaging learning experiences, empowering the next generation of sustainable energy professionals in Indonesia.",
    ],
    tech: ["Python", "Django", "ReactJS", "PostgreSQL", "Git", "CI/CD", "Grafana", "Ubuntu Server"],
    techCategories: {
      "Architecture": "Monolith",
      "Backend": "Django (Python)",
      "Frontend": "ReactJS",
      "Database": "PostgreSQL",
      "Tools": "Git, CI/CD, Grafana",
      "Infrastructure": "Ubuntu Server",
    },
    features: [
      "Course management and delivery",
      "Student progress tracking",
      "Instructor-student communication tools",
      "Assessment and grading system",
      "Content management and multimedia support",
      "Analytics and reporting dashboard",
    ],
    live: "#",
    role: "Backend Developer",
    year: "2021",
  },
};

const projectImages: Record<string, string[]> = {
  // TODO: ganti path ini dengan screenshot/thumbnail project yang sebenarnya.
  "fleet-management-system": ["/images/transportech/tt-1.png", "/images/transportech/tt-2.png", "/images/transportech/tt-3.png", "/images/transportech/tt-4.png", "/images/transportech/tt-5.png", "/images/transportech/tt-6.png"],
  "dcp-data-consolidation-platform": ["/images/dcp/dcp-1.png", "/images/dcp/dcp-2.png"],
  "tower-monitoring-application": ["/images/tower/tower-1.png", "/images/tower/tower-2.png", "/images/tower/tower-3.png", "/images/tower/tower-4.png"],
  "eureka-edutech-application": ["/images/eureka/eureka-1.png", "/images/eureka/eureka-2.png", "/images/eureka/eureka-3.png"],
  "pssi-cirebon-askab-application": ["/images/pssi/pssi-1.png", "/images/pssi/pssi-2.png", "/images/pssi/pssi-3.png", "/images/pssi/pssi-4.png", "/images/pssi/pssi-5.png"],
  "student-admission-application": ["/images/pmb/pmb-1.png", "/images/pmb/pmb-2.png", "/images/pmb/pmb-3.png", "/images/pmb/pmb-4.png"],
  "odoo-digital-inspection-application": ["/images/jppi/jppi-1.png", "/images/jppi/jppi-2.png", "/images/jppi/jppi-3.png"],
  "odoo-project-controlling-application": ["/images/odoo/odoo-1.png", "/images/odoo/odoo-2.png", "/images/odoo/odoo-3.png"],
  "simak-sistem-informasi-akademik": ["/images/unu/unu-1.png", "/images/unu/unu-2.png", "/images/unu/unu-3.png", "/images/unu/unu-4.png"],
  "hris-human-resource-information-system": ["/images/hris/hris-1.png", "/images/hris/hris-2.png", "/images/hris/hris-3.png", "/images/hris/hris-4.png", "/images/hris/hris-5.png"],
  "lms-learning-management-system": ["/images/renaci/renaci.png", "/images/renaci/renaci2.png", "/images/renaci/renaci3.png", "/images/renaci/renaci4.png"],
};

function ProjectImagesCarousel({ projectTitle, slug }: { projectTitle: string; slug?: string }) {
  const images = slug ? projectImages[slug] ?? ["/placeholder.svg"] : ["/placeholder.svg"];

  return (
    <div className="mb-10">
      <Carousel>
        <CarouselContent>
          {images.map((src, idx) => (
            <CarouselItem key={`${src}-${idx}`}>
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={src}
                  alt={`${projectTitle} screenshot ${idx + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 ? (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        ) : null}
      </Carousel>
    </div>
  );
}

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary font-mono text-sm hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline mb-12"
          >
            <ArrowLeft size={16} /> Back to All Projects
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-primary font-mono text-xs">{project.year}</span>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-muted-foreground font-mono text-xs">{project.role}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-foreground text-lg leading-relaxed mb-8">{project.description}</p>

          <ProjectImagesCarousel projectTitle={project.title} slug={slug} />

          {project.live && project.live !== "#" && (
            <div className="flex gap-4 mb-16">
              <a
                href={project.live}
                target="_blank"
                className="inline-flex items-center gap-2 bg-primary text-accent-foreground px-6 py-3 rounded-md font-mono text-sm hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">01.</span> Overview
          </h2>
          <div className="space-y-4">
            {project.longDescription.map((paragraph, i) => (
              <p key={i} className="text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">02.</span> Key Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
              >
                <span className="text-primary mt-0.5">▹</span>
                <span className="text-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">03.</span> Tech Stack
          </h2>
          {project.techCategories ? (
            <div className="grid gap-3">
              {Object.entries(project.techCategories).map(([category, value]) => (
                <div
                  key={category}
                  className="flex items-center gap-3 bg-muted/50 rounded-lg border border-border px-4 py-3"
                >
                  <span className="text-sm font-mono text-primary font-semibold min-w-[120px]">
                    {category}
                  </span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-sm font-mono text-foreground">{value}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm font-mono bg-muted text-foreground px-4 py-2 rounded-full border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
