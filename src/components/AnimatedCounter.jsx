import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, delay = 0, className = "" }) => {
    const [num, setNum] = useState(0);
    const [suffix, setSuffix] = useState('');
    const [isInteger, setIsInteger] = useState(true);

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        return isInteger ? Math.round(latest) : latest.toFixed(1);
    });

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "100px" });

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const match = value.match(/^([\d.]+)(.*)$/);
        if (match) {
            setNum(parseFloat(match[1]));
            setSuffix(match[2]);
            setIsInteger(!match[1].includes('.'));
        } else {
            setNum(0);
            setSuffix(value);
        }
    }, [value]);

    useEffect(() => {
        if (!isInView || num === 0) return;

        const playAnimation = () => {
            count.set(0);
            setIsPlaying(true);

            const controls = animate(count, num, {
                duration: 1.8,
                ease: "easeOut",
                delay: delay,
                onComplete: () => {
                    setIsPlaying(false);
                }
            });

            return controls;
        };

        const controls = playAnimation();

        return () => {
            controls.stop();
            setIsPlaying(false);
        };
    }, [isInView, num, delay, count]);

    return (
        <motion.h3
            ref={ref}
            animate={isPlaying ? {
                scale: [1, 1.05, 1],
                filter: [
                    "drop-shadow(0px 0px 0px rgba(255,35,63,0))",
                    "drop-shadow(0px 0px 12px rgba(255,35,63,0.5))",
                    "drop-shadow(0px 0px 0px rgba(255,35,63,0))"
                ]
            } : {
                scale: 1,
                filter: "drop-shadow(0px 0px 0px rgba(255,35,63,0))"
            }}
            transition={{
                duration: 1.8,
                delay: delay,
                ease: "easeOut"
            }}
            className={className || `text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF233F] to-[#53020C] bg-clip-text text-transparent`}
        >
            <motion.span>{rounded}</motion.span>
            <span>{suffix}</span>
        </motion.h3>
    );
};

export default AnimatedCounter;
