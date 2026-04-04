import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-24 flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-primary font-mono text-sm mb-4"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-display text-5xl md:text-7xl font-bold text-foreground mb-2"
        >
          Galuh Esa Ibrahim.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="font-display max-w-lg text-lg leading-relaxed mb-10"
        >
          Let's talk about your business problems that I can solve with technology. I have experience in building web applications, APIs, and automation tools using a variety of technologies. I'm passionate about creating efficient and scalable solutions that help businesses grow.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          href="#projects"
          className="inline-block border border-primary text-primary px-8 py-4 rounded-md font-mono text-sm hover:bg-primary/10 transition-colors"
        >
          Check out my work →
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
