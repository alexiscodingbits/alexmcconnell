export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-grid/30 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-heading)] text-xs text-slate/40 tracking-wider">
          Alex McConnell &copy; {new Date().getFullYear()}
        </p>
        <p className="font-[family-name:var(--font-heading)] text-[10px] text-slate/25 tracking-wider">
          Designed &amp; built from scratch
        </p>
      </div>
    </footer>
  );
}
