export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-grid/30 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-heading)] text-xs text-slate/40 tracking-wider">
          Alex McConnell &copy; {new Date().getFullYear()}
        </p>
        <p className="font-[family-name:var(--font-heading)] text-xs text-slate/30 tracking-wider text-center md:text-right max-w-xs">
          <span className="text-[10px]">(Not)</span> Made from scratch &mdash;{" "}
          <span className="italic">&ldquo;If you wish to make an apple pie from scratch, you must first invent the universe&rdquo; &mdash; Carl Sagan</span>
        </p>
      </div>
    </footer>
  );
}
