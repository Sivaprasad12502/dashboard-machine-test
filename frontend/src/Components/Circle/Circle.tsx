import { useEffect, useMemo, useState } from "react";

type CircleProps = {
  size?: number;
  maxValue?: number;
  durationMs?: number;
};

const Circle = ({ size = 140, maxValue , durationMs = 3000 }: CircleProps) => {
  const [progress, setProgress] = useState(0);
  const segmentCount = 4;

  useEffect(() => {
    const holdAtFullMs = 500;
    let animationFrame = 0;
    let cycleStart: number | null = null;
    let holdStart: number | null = null;

    const animate = (timestamp: number) => {
      if (cycleStart === null) {
        cycleStart = timestamp;
      }

      const elapsed = timestamp - cycleStart;
      const ratio = Math.min(1, elapsed / durationMs);

      if (ratio >= 1) {
        setProgress(1);

        if (holdStart === null) {
          holdStart = timestamp;
        }

        if (timestamp - holdStart >= holdAtFullMs) {
          setProgress(0);
          cycleStart = timestamp;
          holdStart = null;
        }
      } else {
        setProgress(ratio);
        holdStart = null;
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [durationMs]);

  const outerRing = useMemo(() => {
    const stroke = Math.max(8, size * 0.05);
    const radius = size / 2 - stroke;
    const circumference = 2 * Math.PI * radius;
    const segmentUnit = circumference / segmentCount;
    const segmentLength = segmentUnit * 0.7;
    const gapLength = segmentUnit - segmentLength;
    const center = size / 2;

    return { stroke, radius, circumference, segmentLength, gapLength, center };
  }, [size]);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 30% 25%, #22AFE8 0%, #0E9DDD 65%, #0B93D1 100%)",
        boxShadow:
          "0 0 56px rgba(24, 170, 229, 0.38), 0 16px 26px rgba(0, 120, 175, 0.28)",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}
      >
        {Array.from({ length: segmentCount }).map((_, index) => {
          const segmentStart = index * (outerRing.segmentLength + outerRing.gapLength);
          const localProgress = Math.max(
            0,
            Math.min(1, progress * segmentCount - index)
          );
          const activeLength = outerRing.segmentLength * localProgress;

          return (
            <g key={index}>
              <circle
                cx={outerRing.center}
                cy={outerRing.center}
                r={outerRing.radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.92)"
                strokeWidth={outerRing.stroke * 0.62}
                strokeLinecap="round"
                strokeDasharray={`${outerRing.segmentLength} ${outerRing.circumference}`}
                strokeDashoffset={-segmentStart}
              />
              {activeLength > 0.01 && (
                <circle
                  cx={outerRing.center}
                  cy={outerRing.center}
                  r={outerRing.radius}
                  fill="none"
                  stroke="#4BE35F"
                  strokeWidth={outerRing.stroke * 0.56}
                  strokeLinecap="round"
                  strokeDasharray={`${activeLength} ${outerRing.circumference}`}
                  strokeDashoffset={-segmentStart}
                  style={{
                    transition:
                      "stroke-dasharray 140ms cubic-bezier(0.22, 1, 0.36, 1), stroke-dashoffset 140ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
              )}
            </g>
          );
        })}
      </svg>

      <div
        style={{
          width: size * 0.72,
          height: size * 0.72,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 35% 25%, #20A9E3 0%, #109FDC 65%, #0D97D5 100%)",
          border: "2px solid rgba(0, 95, 140, 0.12)",
          boxShadow: "inset 0 3px 10px rgba(255,255,255,0.2), inset 0 -8px 16px rgba(0, 95, 140, 0.22)",
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: size * 0.28,
            lineHeight: 1,
            fontWeight: 300,
            letterSpacing: 0.5,
            userSelect: "none",
          }}
        >
          {maxValue}
        </span>
      </div>
    </div>
  );
};

export default Circle;
