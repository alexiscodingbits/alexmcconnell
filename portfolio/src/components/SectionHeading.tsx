export default function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="sec-head">
      <span className="num">{`${num} //`}</span>
      <h2>{title}</h2>
      <span className="rule" />
    </div>
  );
}
