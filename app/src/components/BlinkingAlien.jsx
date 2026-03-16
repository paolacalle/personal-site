import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function BlinkingAlien() {
  const [isBlinking, setIsBlinking] = useState(false);
  const blinkTimeoutRef = useRef(null);
  const nextBlinkTimeoutRef = useRef(null);

  useEffect(() => {
    const scheduleBlink = () => {
      const nextBlinkDelay = Math.random() * 2500 + 1800; // 1.8s to 4.3s

      nextBlinkTimeoutRef.current = setTimeout(() => {
        setIsBlinking(true);

        blinkTimeoutRef.current = setTimeout(() => {
          setIsBlinking(false);
          scheduleBlink();
        }, 160); // blink duration
      }, nextBlinkDelay);
    };

    scheduleBlink();

    return () => {
      if (blinkTimeoutRef.current) clearTimeout(blinkTimeoutRef.current);
      if (nextBlinkTimeoutRef.current) clearTimeout(nextBlinkTimeoutRef.current);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black px-6 text-center text-white">
      {/* subtle stars */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[12%] top-[16%] h-1.5 w-1.5 rounded-full bg-white/80" />
        <div className="absolute left-[24%] top-[30%] h-1 w-1 rounded-full bg-white/70" />
        <div className="absolute right-[18%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/80" />
        <div className="absolute right-[28%] top-[36%] h-1 w-1 rounded-full bg-white/60" />
        <div className="absolute left-[20%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-white/70" />
        <div className="absolute right-[16%] bottom-[18%] h-1 w-1 rounded-full bg-white/60" />
      </div>

      <motion.div
        className="mb-8"
        animate={{ y: [0, -10, 0], rotate: [0, -1, 1, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="300"
          height="360"
          viewBox="0 0 300 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_30px_rgba(120,255,170,0.25)]"
          role="img"
          aria-label="Cute blinking alien"
        >
          {/* glow */}
          <ellipse cx="150" cy="160" rx="105" ry="120" fill="#7FFF7F" opacity="0.08" />

          {/* antennas */}
          <g>
            <motion.g
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "100px 62px" }}
            >
              <line
                x1="105"
                y1="65"
                x2="80"
                y2="25"
                stroke="#88F58D"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <circle cx="80" cy="25" r="11" fill="#56D86A" />
            </motion.g>

            <motion.g
              animate={{ rotate: [2, -2, 2] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "200px 62px" }}
            >
              <line
                x1="195"
                y1="65"
                x2="220"
                y2="25"
                stroke="#88F58D"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <circle cx="220" cy="25" r="11" fill="#56D86A" />
            </motion.g>
          </g>

          {/* body */}
          <ellipse cx="150" cy="275" rx="52" ry="44" fill="#72F27E" />

          {/* arms */}
          <ellipse
            cx="92"
            cy="265"
            rx="14"
            ry="34"
            transform="rotate(28 92 265)"
            fill="#72F27E"
          />
          <ellipse
            cx="208"
            cy="265"
            rx="14"
            ry="34"
            transform="rotate(-28 208 265)"
            fill="#72F27E"
          />

          {/* head */}
          <ellipse cx="150" cy="155" rx="95" ry="115" fill="#8DFFA0" />

          {/* cheeks */}
          <circle cx="92" cy="195" r="10" fill="#FF9DB5" opacity="0.45" />
          <circle cx="208" cy="195" r="10" fill="#FF9DB5" opacity="0.45" />

          {/* eyes */}
          <g>
            <motion.g
              animate={{ scaleY: isBlinking ? 0.08 : 1 }}
              transition={{ duration: 0.09 }}
              style={{ transformOrigin: "110px 145px" }}
            >
              <ellipse cx="110" cy="145" rx="24" ry="34" fill="#111827" />
              <circle cx="118" cy="135" r="7" fill="white" />
              <circle cx="113" cy="145" r="3" fill="white" opacity="0.9" />
            </motion.g>

            <motion.g
              animate={{ scaleY: isBlinking ? 0.08 : 1 }}
              transition={{ duration: 0.09 }}
              style={{ transformOrigin: "190px 145px" }}
            >
              <ellipse cx="190" cy="145" rx="24" ry="34" fill="#111827" />
              <circle cx="198" cy="135" r="7" fill="white" />
              <circle cx="193" cy="145" r="3" fill="white" opacity="0.9" />
            </motion.g>
          </g>

          {/* nose */}
          <ellipse cx="143" cy="185" rx="3.5" ry="5.5" fill="#56D86A" />
          <ellipse cx="157" cy="185" rx="3.5" ry="5.5" fill="#56D86A" />

          {/* mouth */}
          <motion.path
            d="M122 215 Q150 232 178 215"
            stroke="#2F7A3D"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: isBlinking
                ? "M122 215 Q150 238 178 215"
                : "M122 215 Q150 232 178 215",
            }}
            transition={{ duration: 0.12 }}
          />
        </svg>
      </motion.div>

      <motion.h1
        className="text-3xl font-bold tracking-tight sm:text-4xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        404 — This page drifted into space
      </motion.h1>

      <motion.p
        className="mt-3 max-w-md text-sm text-white/70 sm:text-base"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        Looks like this route got abducted. Let's get you back to Earth.
      </motion.p>

      <a
        href="/"
        className="mt-6 rounded-full bg-lime-300 px-5 py-2.5 font-medium text-slate-950 transition hover:scale-105"
      >
        Take me home
      </a>
    </div>
  );
}