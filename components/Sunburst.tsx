const RAY_COUNT = 24;
const rays = Array.from({ length: RAY_COUNT }, (_, index) => {
  const angle = (Math.PI * index) / (RAY_COUNT - 1);
  const inner = 70;
  const outer = index % 2 === 0 ? 190 : 150;
  return {
    x1: 200 - Math.cos(angle) * inner,
    y1: 200 - Math.sin(angle) * inner,
    x2: 200 - Math.cos(angle) * outer,
    y2: 200 - Math.sin(angle) * outer,
  };
});

/** Static decorative rays, in the spirit of the sun in the logo. */
export default function Sunburst({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {rays.map((ray, index) => (
        <line
          key={index}
          x1={ray.x1}
          y1={ray.y1}
          x2={ray.x2}
          y2={ray.y2}
          stroke="#E0B64A"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
