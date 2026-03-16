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
  const inner = size - stroke * 2;
  const pct = Math.max(0, Math.min(100, percentage));
  const gradient = `conic-gradient(${color} 0% ${pct}%, #F1EFFF ${pct}% 100%)`;
  const radius = size / 2 - stroke / 2;
  const center = size / 2;
  const endAngle = pct * 3.6 - 90;
  const endAngleRad = (endAngle * Math.PI) / 180;
  const capSize = stroke * 1.05;
  const startCapX = center;
  const startCapY = center - radius;
  const endCapX = center + radius * Math.cos(endAngleRad);
  const endCapY = center + radius * Math.sin(endAngleRad);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "visible",
      }}
    >
      
      {pct > 0 && (
        <>
          {/* <div
            className="animate-cap-pulse"
            style={{
              position: "absolute",
              width: capSize,
              height: capSize,
              borderRadius: "50%",
              left: startCapX,
              top: startCapY,
              transform: "translate(-50%, -50%)",
              background: color,
              opacity: 0.65,
               
            }}
          /> */}
          <div
            className="animate-cap-pulse"
            style={{
              position: "absolute",
              width: capSize,
              height: capSize,
              borderRadius: "50%",
              left: endCapX,
              top: endCapY,
              transform: "translate(-50%, -50%)",
              background: color,
              opacity:0.65,
              
            }}
          />
        </>
      )}
      <div
        style={{
          width: inner,
          height: inner,
          borderRadius: "50%",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         
          transformOrigin: "center",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div
          style={{ fontSize: size * 0.18, color: "#6B6B6B", fontWeight: 500 }}
        >
          {String(pct).padStart(2, "0")}%
        </div>
      </div>
    </div>
  );
};
export default CircularProgress