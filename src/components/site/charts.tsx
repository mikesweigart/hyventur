import { cn } from "@/lib/utils";

/* Build a smooth-ish path through points using simple line segments. */
function buildLine(values: number[], w: number, h: number, pad = 4) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const stepX = (w - pad * 2) / (values.length - 1);
  return values.map((v, i) => {
    const x = pad + i * stepX;
    const y = pad + (h - pad * 2) * (1 - (v - min) / range);
    return { x, y };
  });
}

function toPath(pts: { x: number; y: number }[]) {
  return pts
    .map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`))
    .join(" ");
}

/* Smooth cubic path for a nicer curve. */
function toSmoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const cx = (p0.x + p1.x) / 2;
    d += ` C${cx},${p0.y} ${cx},${p1.y} ${p1.x},${p1.y}`;
  }
  return d;
}

export function AreaChart({
  values,
  className,
  color = "var(--color-crimson-600)",
  fill = "var(--color-crimson-600)",
  height = 120,
  width = 320,
  animate = false,
}: {
  values: number[];
  className?: string;
  color?: string;
  fill?: string;
  height?: number;
  width?: number;
  animate?: boolean;
}) {
  const pts = buildLine(values, width, height);
  const line = toSmoothPath(pts);
  const area = `${line} L${pts[pts.length - 1].x},${height} L${pts[0].x},${height} Z`;
  const gid = `area-${Math.round(width)}-${values.length}-${Math.round(values[0])}`;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("w-full", className)}
      preserveAspectRatio="none"
      role="img"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fill} stopOpacity="0.22" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gid})`} />
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          animate
            ? {
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
                animation: "drawLine 1.6s ease-out forwards",
              }
            : undefined
        }
      />
    </svg>
  );
}

export function Sparkline({
  values,
  className,
  color = "var(--color-crimson-600)",
  height = 36,
  width = 120,
}: {
  values: number[];
  className?: string;
  color?: string;
  height?: number;
  width?: number;
}) {
  const pts = buildLine(values, width, height, 2);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("", className)}
      preserveAspectRatio="none"
    >
      <path
        d={toPath(pts)}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BarChart({
  values,
  labels,
  className,
  color = "var(--color-ink-800)",
  highlightColor = "var(--color-crimson-600)",
  highlightIndex,
  height = 160,
}: {
  values: number[];
  labels?: string[];
  className?: string;
  color?: string;
  highlightColor?: string;
  highlightIndex?: number;
  height?: number;
}) {
  const max = Math.max(...values) || 1;
  return (
    <div className={cn("flex flex-col", className)}>
      <div
        className="flex items-end gap-2"
        style={{ height }}
      >
        {values.map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end">
            <div
              className="w-full rounded-t-md transition-all"
              style={{
                height: `${(v / max) * 100}%`,
                background:
                  i === highlightIndex ? highlightColor : color,
                opacity: i === highlightIndex ? 1 : 0.85,
                transformOrigin: "bottom",
                animation: "barGrow 0.8s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: `${i * 60}ms`,
              }}
            />
          </div>
        ))}
      </div>
      {labels && (
        <div className="mt-2 flex gap-2">
          {labels.map((l, i) => (
            <span
              key={i}
              className="flex-1 text-center text-[0.65rem] font-medium text-ink-400"
            >
              {l}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function Donut({
  segments,
  size = 140,
  thickness = 18,
  className,
}: {
  segments: { value: number; color: string; label: string }[];
  size?: number;
  thickness?: number;
  className?: string;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={cn("", className)}
      width={size}
      height={size}
    >
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        {segments.map((seg, i) => {
          const frac = seg.value / total;
          const dash = frac * c;
          const el = (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth={thickness}
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          );
          offset += dash;
          return el;
        })}
      </g>
    </svg>
  );
}
