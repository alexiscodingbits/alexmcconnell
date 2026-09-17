export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <p>Alex McConnell &copy; {new Date().getFullYear()}</p>
        <p className="right">
          (Not) Made from scratch &mdash;{" "}
          <span className="serif">
            &ldquo;If you wish to make an apple pie from scratch, you must first invent the universe&rdquo;
          </span>{" "}
          &mdash; Carl Sagan
        </p>
      </div>
    </footer>
  );
}
