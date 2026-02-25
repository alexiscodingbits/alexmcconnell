export default function HoverBadge({ audio = false }: { audio?: boolean }) {
  return (
    <span className="flex items-center gap-1.5">
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
      {audio && (
        <span
          className="flex items-center justify-center rounded shrink-0 px-1.5 py-0.5"
          style={{
            background: "rgba(212,136,74,0.15)",
            border: "1px solid rgba(212,136,74,0.3)",
          }}
          title="plays audio"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(212,136,74,0.75)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        </span>
      )}
    </span>
  );
}
