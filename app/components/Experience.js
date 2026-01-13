"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react";
import styles from "./Experience.module.css";

const Experience = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Internship Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.column}
                >
                    <div className={styles.header}>
                        <Briefcase size={28} className={styles.icon} />
                        <h2>Real-World Experience</h2>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.roleHeader}>
                            <h3>Software Developer Intern</h3>
                            <span className={styles.company}>TechCiti Technologies</span>
                        </div>
                        <div className={styles.meta}>
                            <span className={styles.tag}>May 2024 – June 2024</span>
                            <span className={styles.tag}>Django + ML</span>
                        </div>
                        <p className={styles.description}>
                            Developed a web application for Crop Yield Prediction using Django and Machine Learning.
                            Integrated ML models into the backend for real-time estimates.
                        </p>
                        <ul className={styles.list}>
                            <li>
                                <Award size={14} /> Gained hands-on full-stack experience (Python/Django)
                            </li>
                            <li>
                                <Award size={14} /> Shipped Real-time ML integration
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.column}
                >
                    <div className={styles.header}>
                        <GraduationCap size={28} className={styles.icon} />
                        <h2>Education Timeline</h2>
                    </div>

                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h3>VIT Chennai</h3>
                                <p>M.Tech (Integrated) Software Engineering</p>
                                <div className={styles.eduMeta}>
                                    <span>2021 – 2026</span>
                                    <span className={styles.grade}>CGPA: 8.53/10</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h3>SR Junior College</h3>
                                <p>12th Grade (MPC)</p>
                                <div className={styles.eduMeta}>
                                    <span>2019 – 2021</span>
                                    <span className={styles.grade}>97.4%</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h3>TS Model School</h3>
                                <p>10th Grade (SSC)</p>
                                <div className={styles.eduMeta}>
                                    <span>2019</span>
                                    <span className={styles.grade}>GPA: 9.5/10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
