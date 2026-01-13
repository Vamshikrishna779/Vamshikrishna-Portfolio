"use client";

import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Sunset } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./ThemeSwitcher.module.css";

const themes = [
    { id: "control-room", icon: <Moon size={20} />, label: "Control Room" },
    { id: "clean-slate", icon: <Sun size={20} />, label: "Clean Slate" },
    { id: "synthwave", icon: <Sunset size={20} />, label: "Synthwave" },
];

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <motion.button
                className={styles.toggleBtn}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {themes.find((t) => t.id === theme)?.icon}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.menu}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                className={`${styles.menuItem} ${theme === t.id ? styles.active : ""
                                    }`}
                                onClick={() => {
                                    toggleTheme(t.id);
                                    setIsOpen(false);
                                }}
                            >
                                {t.icon}
                                <span>{t.label}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSwitcher;
