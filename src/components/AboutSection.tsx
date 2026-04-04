import { motion } from "framer-motion";
import profileImg from "@/profile.jpg";

const AboutSection = () => {

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-4 text-foreground leading-relaxed">
              <p>
                Hello! I'm Galuh Esa Ibrahim, Since 2020 I have created many web applications using several technologies, frameworks and cloud servers to deliver scalable, efficient, and innovative solutions that transform business challenges into competitive advantages. My expertise spans backend development, with robust experience in creating core engine web application.
              </p>
              <p>
                I specialize in developing custom software solutions that are not just technically sound, but strategically aligned with your unique business needs. Whether you're looking to streamline internal processes, create customer-facing platforms, or develop data-driven applications, I leverage cutting-edge technologies to craft solutions that are both powerful and user-friendly. My technical toolkit includes:
              </p>
            </div>

            <div className="relative group">
              <div className="relative z-10 rounded-lg overflow-hidden bg-primary/10 aspect-square">
                <img src={profileImg} alt="Galuh Esa Ibrahim" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
