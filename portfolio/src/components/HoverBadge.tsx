export default function HoverBadge() {
  return (
    <span
      className="font-[family-name:var(--font-heading)] text-[10px] tracking-wide px-2 py-0.5 rounded shrink-0"
      style={{
        background: "rgba(212,136,74,0.15)",
        border: "1px solid rgba(212,136,74,0.3)",
        color: "rgba(212,136,74,0.75)",
      }}
    >
      👋 hover me!
    </span>
  );
}
