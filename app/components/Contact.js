"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, ArrowUp } from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className={styles.footer}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.container}
            >
                <div className={styles.dock}>
                    <a
                        href="mailto:vamshikrishna9608@gmail.com"
                        className={styles.dockItem}
                        title="Email"
                    >
                        <Mail size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/vamshikrishna9608"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.dockItem}
                        title="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/vamshikrishna779"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.dockItem}
                        title="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a href="/resume.pdf" download className={styles.dockItem} title="Resume">
                        <FileText size={24} />
                    </a>
                </div>

                <p className={styles.contactInfo}>
                    Garige Vamshikrishna • +91 7997410508 • Telangana, India
                </p>

                <div className={styles.line}></div>

                <p className={styles.tagline}>
                    Always curious. <span className={styles.highlight}>Always building.</span>
                </p>

                <button onClick={scrollToTop} className={styles.scrollTop}>
                    <ArrowUp size={20} />
                </button>
            </motion.div>
        </footer>
    );
};

export default Contact;
