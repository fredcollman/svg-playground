import "./Fish.css";

const points = [
  "M 10 30",
  "v 40",
  "l 20 -20",
  "l -20 -20",
  "M 25 50",
  "Q 40 -20 90 50",
  "Q 40 120 25 50",
];

const Fish = () => (
  <svg className="fish" viewBox="0 0 100 100">
    <path d={points.join(" ")} />
    <circle className="eye" cx="80" cy="45" r="3" />
  </svg>
);

export default Fish;
