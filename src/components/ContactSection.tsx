import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4">04. What's Next?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="font-display text-lg leading-relaxed mb-10">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, my inbox is always open and I'll try my best to get
            back to you!
          </p>
          <a
            href="mailto:galuh.ibrahiim@gmail.com"
            className="inline-block border border-primary text-primary px-10 py-4 rounded-md font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
