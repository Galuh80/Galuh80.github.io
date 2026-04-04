import { motion } from "framer-motion";

const skills = [
  { category: "Programming Language", items: ["Python", "PHP", "C#", "Javascript"] },
  { category: "Backend Framework", items: ["Django", "FastAPI", "Odoo ERP", "Laravel", "CodeIgniter", "ASP.NET"] },
  { category: "Frontend Framework", items: ["ReactJS", "Tailwind CSS"] },
  { category: "Database", items: ["PostgreSQL", "MySQL", "Microsoft SQL Server"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Skills</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg p-6 border border-border hover:border-glow transition-colors glow-accent"
              >
                <h3 className="font-display text-lg font-semibold text-primary mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono bg-muted text-foreground px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
