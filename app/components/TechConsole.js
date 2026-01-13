"use client";

import { motion } from "framer-motion";
import styles from "./TechConsole.module.css";
import { Terminal, Code, Layers, Wrench, Cloud, Smartphone, Monitor, Database, Cpu, Globe, Activity } from "lucide-react";

const techStack = [
    {
        category: "Programming Languages",
        icon: <Code size={20} />,
        items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "PHP"],
    },
    {
        category: "Mobile Development",
        icon: <Smartphone size={20} />,
        items: ["Android (Native)", "React Native", "Expo"],
    },
    {
        category: "Frontend",
        icon: <Monitor size={20} />,
        items: ["React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        category: "Backend & APIs",
        icon: <Layers size={20} />,
        items: ["FastAPI", "Django", "Firebase (Auth, Firestore, DB)"],
    },
    {
        category: "AI / Machine Learning",
        icon: <Activity size={20} />,
        items: ["Machine Learning", "Text-to-SQL", "Local LLMs (Ollama/Gemma)"],
    },
    {
        category: "Databases",
        icon: <Database size={20} />,
        items: ["MySQL", "SQLite", "Firebase Firestore"],
    },
    {
        category: "Data Visualization",
        icon: <Activity size={20} />,
        items: ["Chart.js"],
    },
    {
        category: "APIs & Integrations",
        icon: <Globe size={20} />,
        items: ["TMDB API", "Google Maps API", "Google Sign-In", "Razorpay"],
    },
    {
        category: "IoT & Hardware",
        icon: <Cpu size={20} />,
        items: ["ESP32", "Arduino", "Face Recognition Systems"],
    },
    {
        category: "Tools & Platforms",
        icon: <Wrench size={20} />,
        items: ["Git", "GitHub", "Android Studio", "VS Code", "Google Cloud"],
    },
];

const TechConsole = () => {
    return (
        <section className={styles.section}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.header}
            >
                <Terminal size={32} className={styles.headerIcon} />
                <h2>Tech Stack Console</h2>
            </motion.div>

            <div className={styles.grid}>
                {techStack.map((group, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={styles.card}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}>{group.icon}</div>
                            <h3>{group.category}</h3>
                        </div>
                        <div className={styles.items}>
                            {group.items.map((item, idx) => (
                                <span key={idx} className={styles.item}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechConsole;
