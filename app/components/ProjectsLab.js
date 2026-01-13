"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Folder, ExternalLink, Smartphone, Database, MapPin, Eye, Film, Mic, Zap, CreditCard, ArrowRight, Brain } from "lucide-react";
import styles from "./ProjectsLab.module.css";
import ProjectModal from "./ProjectModal";

const projects = [
    {
        title: "Cine Match",
        category: "ML • Recommendation System",
        icon: <Film size={32} />,
        desc: "Machine learning-based movie recommendation system using collaborative and content-based filtering. Built with Streamlit.",
        tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
        highlight: "Personalized Recommendations",
    },
    {
        title: "EmotionSense",
        category: "AI • Audio Processing",
        icon: <Mic size={32} />,
        desc: "Speech emotion recognition utilizing Ensemble Learning (RandomForest, SVM, GBM) to classify emotions from audio files.",
        tech: ["Python", "Librosa", "Flask", "Ensemble ML"],
        highlight: "91.07% Accuracy",
    },
    {
        title: "My Stuff App",
        category: "Mobile • React Native • Firebase",
        icon: <Smartphone size={32} />,
        desc: "Cross-platform app for tracking movies/TV. Features collaborative watchlists, in-app chat, and voice search.",
        tech: ["React Native", "Firebase", "FlashList", "Razorpay"],
        highlight: "Real-time Collaboration",
    },
    {
        title: "E-Commerce AI Assistant",
        category: "AI • FastAPI • Ollama",
        icon: <Database size={32} />,
        desc: "Text-to-SQL engine using Gemma 3. Translates natural language to queries and auto-selects visualizations.",
        tech: ["FastAPI", "Ollama (Gemma)", "SQL", "Chart.js"],
        highlight: "Local LLM Integration",
    },
    {
        title: "India's Green Energy Hub",
        category: "Web • Sustainability",
        icon: <Zap size={32} />,
        desc: "Platform promoting sustainable energy. Connects individuals and policymakers with renewable energy advancements.",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        highlight: "Community Engagement",
    },
    {
        title: "Electricity Billing System",
        category: "Java • Desktop App",
        icon: <CreditCard size={32} />,
        desc: "Java Desktop application for automated bill calculation. Features user management and print functionality.",
        tech: ["Java", "Swing", "NetBeans", "MySQL"],
        highlight: "Automated Calculation",
    },
    {
        title: "resQfood",
        category: "Social Impact • Java • Android",
        icon: <MapPin size={32} />,
        desc: "Location-based donation matching to connect donors with NGOs.",
        tech: ["Java", "Android Studio", "Firebase", "Google Maps"],
        highlight: "Geospatial Queries",
    },
    {
        title: "Smart Garage Door",
        category: "IoT • Security • Hardware",
        icon: <Eye size={32} />,
        desc: "IoT secure access system with ESP32 and facial recognition.",
        tech: ["ESP32", "Face Recognition", "Arduino", "IoT"],
        highlight: "Hardware Integration",
    },
    {
        title: "Psychiatrist Bot",
        category: "AI • Mental Health • Flask",
        icon: <Brain size={32} />,
        desc: "AI mental health assistant providing empathetic support using Gemini 1.5 Pro. Features real-time chat and context-aware persona.",
        tech: ["Python", "Flask", "Gemini API", "Vanilla JS"],
        highlight: "Empathic AI Persona",
    },
];

const ProjectsLab = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const displayedProjects = projects.slice(0, 3);

    return (
        <section className={styles.section}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.header}>
                    <h2 className={styles.title}>Projects Lab</h2>
                    <p className={styles.subtitle}>Selected Works & Experiments</p>
                </div>

                <div className={styles.grid}>
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>{project.icon}</div>
                                <span className={styles.category}>{project.category}</span>
                            </div>

                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDesc}>{project.desc}</p>

                            <div className={styles.techStack}>
                                {project.tech.map((t, i) => (
                                    <span key={i} className={styles.techBadge}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className={styles.cardFooter}>
                                <span className={styles.highlight}>{project.highlight}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.viewMoreContainer}>
                    <button
                        className={styles.viewMoreBtn}
                        onClick={() => setIsModalOpen(true)}
                    >
                        View All Projects <ArrowRight size={18} />
                    </button>
                </div>

                <ProjectModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    projects={projects}
                />
            </motion.div>
        </section>
    );
};

export default ProjectsLab;
