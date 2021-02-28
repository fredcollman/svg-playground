import "./Eye.css";

const EYE_COLORS = {
  blue: "blue",
  green: "#0e8c53",
  brown: "#592b04",
} as const;

type EyeColor = keyof typeof EYE_COLORS;

export interface Props {
  color: EyeColor;
}

const Eye = ({ color }: Props) => (
  <svg
    className={`eye`}
    viewBox="0 0 100 100"
    style={{ ["--eye-color" as any]: EYE_COLORS[color] }}
  >
    <ellipse className="eyeball" cx="50" cy="50" rx="50" ry="30" />
    <circle className="iris" cx="50" cy="50" r="20" />
    <circle className="pupil" cx="50" cy="50" r="8" />
  </svg>
);

export default Eye;
