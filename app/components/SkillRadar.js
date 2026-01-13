"use client";

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Target } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./SkillRadar.module.css";
import { useTheme } from "../context/ThemeContext";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const data = {
    labels: ["Java", "Python", "React Native", "React/Next", "ML/AI", "SQL"],
    datasets: [
        {
            label: "Skill Proficiency",
            data: [90, 85, 95, 88, 80, 85],
            backgroundColor: "rgba(0, 243, 255, 0.2)",
            borderColor: "#00f3ff",
            borderWidth: 2,
            pointBackgroundColor: "#00f3ff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#00f3ff",
        },
    ],
};

const options = {
    scales: {
        r: {
            angleLines: {
                color: "rgba(255, 255, 255, 0.1)",
            },
            grid: {
                color: "rgba(255, 255, 255, 0.1)",
            },
            pointLabels: {
                color: "#a1a1aa", // Function below overrides this with theme color
                font: {
                    family: "var(--font-mono)",
                    size: 12, // Increased from 11
                    weight: "bold",
                },
                padding: 10, // Add padding around labels
            },
            ticks: {
                display: false,
                backdropColor: "transparent",
            },
            suggestedMin: 0,
            suggestedMax: 100,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            backgroundColor: "rgba(11, 15, 20, 0.9)",
            titleColor: "#00f3ff",
            bodyColor: "#fff",
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderWidth: 1,
            padding: 12,
            displayColors: false,
            callbacks: {
                label: function (context) {
                    const map = {
                        Java: "Android, Backend",
                        Python: "Django, AI",
                        "React Native": "Mobile Apps",
                        "React/Next": "Web Dev",
                        "ML/AI": "Data Science",
                        SQL: "Database",
                    };
                    return map[context.label] || `${context.raw}%`;
                },
            },
        },
    },
    layout: {
        padding: 10, // Ensure labels aren't cut off by canvas edge
    },
    maintainAspectRatio: false,
};

const SkillRadar = () => {
    const { theme } = useTheme();

    const getThemeColors = () => {
        switch (theme) {
            case "clean-slate":
                return {
                    primary: "#2563eb",
                    bg: "rgba(37, 99, 235, 0.2)",
                    grid: "#e4e4e7",
                    text: "#52525b",
                    point: "#18181b",
                    tooltip: "#fff",
                };
            case "hacker-terminal":
                return {
                    primary: "#00ff41",
                    bg: "rgba(0, 255, 65, 0.1)",
                    grid: "#003b00",
                    text: "#008f11",
                    point: "#00ff41",
                    tooltip: "#0d0d0d",
                };
            case "synthwave":
                return {
                    primary: "#ff00ff",
                    bg: "rgba(255, 0, 255, 0.2)",
                    grid: "#564f6f",
                    text: "#d1b3ff",
                    point: "#ffee00",
                    tooltip: "#2b213a",
                };
            default: // control-room
                return {
                    primary: "#00f3ff",
                    bg: "rgba(0, 243, 255, 0.2)",
                    grid: "rgba(255, 255, 255, 0.1)",
                    text: "#a1a1aa",
                    point: "#fff",
                    tooltip: "rgba(11, 15, 20, 0.9)",
                };
        }
    };

    const colors = getThemeColors();

    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: "Skill Proficiency",
                data: data.datasets[0].data,
                backgroundColor: colors.bg,
                borderColor: colors.primary,
                borderWidth: 2,
                pointBackgroundColor: colors.primary,
                pointBorderColor: colors.point,
                pointHoverBackgroundColor: colors.point,
                pointHoverBorderColor: colors.primary,
            },
        ],
    };

    const chartOptions = {
        ...options,
        scales: {
            r: {
                ...options.scales.r,
                angleLines: { color: colors.grid },
                grid: { color: colors.grid },
                pointLabels: {
                    ...options.scales.r.pointLabels,
                    color: colors.text,
                },
            },
        },
        plugins: {
            ...options.plugins,
            tooltip: {
                ...options.plugins.tooltip,
                backgroundColor: colors.tooltip,
                titleColor: colors.primary,
                bodyColor: theme === "clean-slate" ? "#000" : "#fff",
                borderColor: colors.grid,
            },
        },
    };

    return (
        <section className={styles.section}>
            <motion.div
                className={styles.chartContainer}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.title}>Live Skill Radar</h2>
                <div className={styles.chartWrapper}>
                    <Radar data={chartData} options={chartOptions} />
                </div>
                <div className={styles.caption}>
                    <Target /> <span className={styles.highlight}> {theme === "synthwave" ? "RETRO MODE" : "Hover to scan"}</span>
                </div>
            </motion.div>
        </section>
    );
};

export default SkillRadar;
