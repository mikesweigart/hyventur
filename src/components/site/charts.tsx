import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Geometry helpers                                                   */
/* ------------------------------------------------------------------ */

function buildLine(
  values: number[],
  w: number,
  h: number,
  pad = 4,
  baselineZero = false,
) {
  const max = Math.max(...values);
  const min = baselineZero ? 0 : Math.min(...values);
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

/* ------------------------------------------------------------------ */
/*  TrendChart — gridded, labeled, optional benchmark series           */
/*  (financial-grade: y-axis ticks, gridlines, endpoint marker)        */
/* ------------------------------------------------------------------ */

export function AreaChart({
  values,
  className,
  color = "var(--color-crimson-600)",
  fill = "var(--color-crimson-600)",
  height = 150,
  width = 560,
  animate = false,
  grid = false,
  baselineZero = false,
  compare,
  compareColor = "var(--color-ink-300)",
  yFormat,
  yTicks = 4,
  showEndpoint = false,
}: {
  values: number[];
  className?: string;
  color?: string;
  fill?: string;
  height?: number;
  width?: number;
  animate?: boolean;
  grid?: boolean;
  baselineZero?: boolean;
  compare?: number[];
  compareColor?: string;
  yFormat?: (v: number) => string;
  yTicks?: number;
  showEndpoint?: boolean;
}) {
  const allVals = compare ? [...values, ...compare] : values;
  const max = Math.max(...allVals);
  const min = baselineZero ? 0 : Math.min(...allVals);
  const pts = buildLine(
    values.map((v) => (v - min) / (max - min || 1)),
    width,
    height,
    6,
  );
  const line = toSmoothPath(pts);
  const area = `${line} L${pts[pts.length - 1].x},${height} L${pts[0].x},${height} Z`;
  const gid = `area-${Math.round(width)}-${values.length}-${Math.round(values[0])}`;

  const cmpPts = compare
    ? buildLine(
        compare.map((v) => (v - min) / (max - min || 1)),
        width,
        height,
        6,
      )
    : null;
  const cmpLine = cmpPts ? toSmoothPath(cmpPts) : "";

  const last = pts[pts.length - 1];
  const endpointTopPct = (last.y / height) * 100;

  const ticks = Array.from({ length: yTicks + 1 }, (_, i) => i / yTicks);

  return (
    <div
      className={cn("relative", grid && "pl-11", className)}
      style={{ height }}
    >
      {/* y-axis labels */}
      {grid && yFormat && (
        <div className="absolute left-0 top-0 flex h-full w-10 flex-col justify-between py-[2px] text-right">
          {ticks
            .slice()
            .reverse()
            .map((t) => (
              <span
                key={t}
                className="font-mono text-[0.6rem] leading-none text-ink-300"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {yFormat(min + t * (max - min))}
              </span>
            ))}
        </div>
      )}

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-full w-full overflow-visible"
        preserveAspectRatio="none"
        role="img"
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fill} stopOpacity="0.20" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* gridlines */}
        {grid &&
          ticks.map((t) => (
            <line
              key={t}
              x1="0"
              x2={width}
              y1={t * height}
              y2={t * height}
              stroke="var(--color-ink-100)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}

        <path d={area} fill={`url(#${gid})`} />

        {/* benchmark / comparison series (dashed) */}
        {cmpLine && (
          <path
            d={cmpLine}
            fill="none"
            stroke={compareColor}
            strokeWidth="1.5"
            strokeDasharray="4 3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        )}

        <path
          d={line}
          fill="none"
          stroke={color}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
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

      {/* endpoint marker */}
      {showEndpoint && (
        <span
          className="pointer-events-none absolute right-[6px] z-10 block size-2.5 -translate-y-1/2 rounded-full border-2 border-white bg-crimson-600 shadow"
          style={{ top: `${endpointTopPct}%` }}
        />
      )}
    </div>
  );
}

export function Sparkline({
  values,
  className,
  color = "var(--color-crimson-600)",
  height = 36,
  width = 120,
  fillArea = false,
}: {
  values: number[];
  className?: string;
  color?: string;
  height?: number;
  width?: number;
  fillArea?: boolean;
}) {
  const pts = buildLine(values, width, height, 2);
  const line = toPath(pts);
  const gid = `spark-${Math.round(width)}-${values.length}-${Math.round(values[0] ?? 0)}`;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("", className)}
      preserveAspectRatio="none"
    >
      {fillArea && (
        <>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.22" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`${line} L${pts[pts.length - 1].x},${height} L${pts[0].x},${height} Z`}
            fill={`url(#${gid})`}
          />
        </>
      )}
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
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
      <div className="flex items-end gap-2" style={{ height }}>
        {values.map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end">
            <div
              className="w-full rounded-t-md transition-all"
              style={{
                height: `${(v / max) * 100}%`,
                background: i === highlightIndex ? highlightColor : color,
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

/* ------------------------------------------------------------------ */
/*  GaugeArc — semicircular risk / health score meter                  */
/* ------------------------------------------------------------------ */

export function GaugeArc({
  value,
  min = 0,
  max = 100,
  size = 160,
  thickness = 12,
  color = "var(--color-crimson-600)",
  track = "var(--color-ink-100)",
  className,
}: {
  value: number;
  min?: number;
  max?: number;
  size?: number;
  thickness?: number;
  color?: string;
  track?: string;
  className?: string;
}) {
  const h = size / 2 + thickness;
  const r = (size - thickness) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const frac = Math.max(0, Math.min(1, (value - min) / (max - min)));
  // semicircle from 180deg -> 0deg
  const polar = (t: number) => {
    const ang = Math.PI - t * Math.PI;
    return { x: cx + r * Math.cos(ang), y: cy - r * Math.sin(ang) };
  };
  const start = polar(0);
  const end = polar(1);
  const val = polar(frac);
  const trackPath = `M${start.x},${start.y} A${r},${r} 0 0 1 ${end.x},${end.y}`;
  const valPath = `M${start.x},${start.y} A${r},${r} 0 0 1 ${val.x},${val.y}`;
  return (
    <svg
      viewBox={`0 0 ${size} ${h}`}
      className={className}
      width={size}
      height={h}
    >
      <path
        d={trackPath}
        fill="none"
        stroke={track}
        strokeWidth={thickness}
        strokeLinecap="round"
      />
      <path
        d={valPath}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Heatmap — vintage / cohort recovery grid                           */
/* ------------------------------------------------------------------ */

export function Heatmap({
  rows,
  cols,
  data,
  baseColor = "158,27,51", // crimson rgb
  className,
}: {
  rows: string[];
  cols: string[];
  data: (number | null)[][]; // 0..1 intensity; null = empty
  baseColor?: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full border-separate" style={{ borderSpacing: 3 }}>
        <thead>
          <tr>
            <th className="w-24" />
            {cols.map((c) => (
              <th
                key={c}
                className="pb-1 text-center font-mono text-[0.6rem] font-medium uppercase tracking-wide text-ink-400"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rlabel, ri) => (
            <tr key={rlabel}>
              <td className="pr-2 text-right font-mono text-[0.65rem] font-medium text-ink-500 whitespace-nowrap">
                {rlabel}
              </td>
              {cols.map((_, ci) => {
                const v = data[ri]?.[ci];
                if (v == null)
                  return (
                    <td key={ci}>
                      <div className="h-8 rounded bg-ink-50" />
                    </td>
                  );
                return (
                  <td key={ci}>
                    <div
                      className="flex h-8 items-center justify-center rounded text-[0.62rem] font-semibold tabular-nums"
                      style={{
                        background: `rgba(${baseColor},${0.12 + v * 0.85})`,
                        color: v > 0.5 ? "white" : "var(--color-ink-700)",
                      }}
                    >
                      {Math.round(v * 100)}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  StackedBar — single horizontal composition bar                     */
/* ------------------------------------------------------------------ */

export function StackedBar({
  segments,
  className,
  height = 10,
}: {
  segments: { value: number; color: string; label: string }[];
  className?: string;
  height?: number;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  return (
    <div
      className={cn("flex w-full overflow-hidden rounded-full", className)}
      style={{ height }}
    >
      {segments.map((s) => (
        <div
          key={s.label}
          style={{ width: `${(s.value / total) * 100}%`, background: s.color }}
          title={`${s.label}: ${s.value}`}
        />
      ))}
    </div>
  );
}
