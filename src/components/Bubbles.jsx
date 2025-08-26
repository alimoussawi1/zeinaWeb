import React from "react";
import { motion } from "framer-motion";

// Titles only
const topics = [
    "ADHD", "Alcohol Use", "Anger Management", "Antisocial Personality", "Anxiety", "Behavioral Issues",
    "Bipolar Disorder", "Career Counseling", "Child", "Chronic Illness", "Chronic Pain", "Codependency",
    "Coping Skills", "Depression", "Developmental Disorders", "Divorce", "Domestic Abuse", "Domestic Violence",
    "Dual Diagnosis", "Eating Disorders", "Elderly Persons Disorders", "Emotional Disturbance", "Family Conflict",
    "Gambling", "Grief", "Hoarding", "Impulse Control Disorders", "Infertility", "Infidelity", "Life Coaching",
    "Life Transitions", "Marital and Premarital", "Men's Issues", "Mood Disorders", "Obsessive-Compulsive (OCD)",
    "Parenting", "Peer Relationships", "Personality Disorders", "Pregnancy, Prenatal, Postpartum",
    "Relationship Issues", "School Issues", "Self Esteem", "Sexual Abuse", "Sleep or Insomnia", "Spirituality",
    "Stress", "Substance Use", "Suicidal Ideation", "Trauma and PTSD", "Weight Loss", "Weight Gain", "Women's Issues",
];

// Split into TWO rows
const split = Math.ceil(topics.length / 2);
const rows = [topics.slice(0, split), topics.slice(split)];

const InfiniteRow = ({ items, speed, direction }) => (
    <motion.div
        className="flex items-center gap-4 whitespace-nowrap my-6"
        style={{ width: "max-content" }}
        animate={{ x: direction === "left" ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
    >
        {[...items, ...items].map((label, i) => (
            <div
                key={`${label}-${i}`}
                className="flex-shrink-0 rounded-full border border-[#8B9A6B]/30 bg-[#8B9A6B]  px-4 py-2 text-sm text-white shadow-sm backdrop-blur "
            >
                {label}
            </div>
        ))}
    </motion.div>
);

export default function ConditionsMarquee() {
    return (
        <div className="relative w-full overflow-hidden py-6 bg-white">
            <InfiniteRow items={rows[0]} speed={56} direction="left" />
            <InfiniteRow items={rows[1]} speed={64} direction="right" />
        </div>
    );
}
