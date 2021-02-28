import "./House.css";

const roofTop = 2;
const roofHeight = 28;
const roofBottom = roofTop + roofHeight;
const houseBottom = 90;
const doorWidth = 8;
const doorHeight = 20;

const doorLeft = (100 - doorWidth) / 2;
const doorRight = (100 + doorWidth) / 2;

const points = [
  `11 ${roofBottom}`,
  `89 ${roofBottom}`,
  `89 ${houseBottom}`,
  `${doorRight} ${houseBottom}`,
  `${doorRight} ${houseBottom - doorHeight}`,
  `${doorLeft} ${houseBottom - doorHeight}`,
  `${doorLeft} ${houseBottom}`,
  `11 ${houseBottom}`,
];

const roofPoints = [
  `20 ${roofTop}`,
  `80 ${roofTop}`,
  `90 ${roofBottom}`,
  `10 ${roofBottom}`,
];

const House = () => (
  <svg className="house" viewBox="0 0 100 100">
    <defs>
      <pattern id="brick" width="4" height="2"></pattern>
      <pattern
        id="pattern-bricks"
        x="0"
        y="0"
        width="4"
        height="4"
        patternUnits="userSpaceOnUse"
      >
        <rect className="house__brick" x="0" y="0" width="3" height="1" />
        <rect className="house__brick" x="-2" y="2" width="3" height="1" />
        <rect className="house__brick" x="2" y="2" width="2" height="1" />
      </pattern>
    </defs>
    <polygon className="house__roof" points={roofPoints.join(" ")} />
    <polygon
      className="house__frame"
      fill="url(#pattern-bricks)"
      points={points.join(" ")}
    />
  </svg>
);

export default House;
