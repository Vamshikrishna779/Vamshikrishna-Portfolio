"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code, Layers } from "lucide-react";
import styles from "./ProjectModal.module.css";

const ProjectModal = ({ isOpen, onClose, projects }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className={styles.modal}
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={24} />
                    </button>

                    <h2 className={styles.heading}>All Projects Archive</h2>

                    <motion.div
                        className={styles.grid}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}>{project.icon}</div>
                                    <span className={styles.category}>{project.category}</span>
                                </div>

                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.desc}>{project.desc}</p>

                                <div className={styles.techStack}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} className={styles.techBadge}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.footer}>
                                    <span className={styles.highlight}>{project.highlight}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
