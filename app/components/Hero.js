"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight, Play } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.gridBackground}></div>
            <div className={styles.overlay}></div>

            {/* Logo absolute positioning */}
            {/* Branding: Logo + Name */}
            <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <img src="/logo.png" alt="Logo" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    letterSpacing: '-0.02em'
                }}>
                    Vamshikrishna
                </span>
            </div>

            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.mainText}
                >
                    <h1>
                        I build software that connects <br />
                        <span className={styles.highlight}>data</span>,{" "}
                        <span className={styles.highlight}>people</span>, and{" "}
                        <span className={styles.highlight}>intelligence</span>.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className={styles.subText}
                >
                    Software Engineering Student • Full-Stack • Mobile • AI
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className={styles.badges}
                >
                    {["Java", "React Native", "Firebase", "Machine Learning", "Android"].map(
                        (badge, index) => (
                            <span key={index} className={styles.badge}>
                                {badge}
                            </span>
                        )
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className={styles.actions}
                >
                    <button className={styles.primaryButton}>
                        View My Projects <ChevronRight size={20} />
                    </button>
                    <a href="/resume.pdf" download="Vamshi_Resume" className={styles.secondaryButton}>
                        Download Resume <Download size={20} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span>Scroll to Explore</span>
            </motion.div>
        </section>
    );
};

export default Hero;
