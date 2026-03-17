const CircularProgress = ({
  size = 96,
  stroke = 10,
  percentage = 75,
  color = "#2FA04A",
}: {
  size?: number;
  stroke?: number;
  percentage?: number;
  color?: string;
}) => {
  const pct = Math.max(0, Math.min(100, percentage));

  const center = size / 2;
  const radius = (size - stroke) / 2;

  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  // angles
  const startAngle = -90;
  const endAngle = pct * 3.6 - 90;

  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;

  const startX = center + radius * Math.cos(startRad);
  const startY = center + radius * Math.sin(startRad);

  const endX = center + radius * Math.cos(endRad);
  const endY = center + radius * Math.sin(endRad);

  const capSize = stroke * 0.9;

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
      }}
    >
      <svg width={size} height={size}>
       
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#F1EFFF"
          strokeWidth={stroke}
          fill="transparent"
        />

        
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${center} ${center})`}
        />

        
        {pct > 0 && (
          <circle
            cx={startX}
            cy={startY}
            r={capSize / 2}
            fill={color}
            opacity={0.7}
          />
        )}

       
        {pct > 0 && (
          <circle
            cx={endX}
            cy={endY}
            r={capSize / 2}
            fill={color}
            opacity={0.7}
          />
        )}
      </svg>

      
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.18,
          color: "#6B6B6B",
          fontWeight: 500,
        }}
      >
        {pct}%
      </div>
    </div>
  );
};

export default CircularProgress;