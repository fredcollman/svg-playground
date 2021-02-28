import "./IceCream.css";

export const FLAVOURS = ["vanilla", "strawberry", "chocolate", "mint"] as const;

type Flavour = typeof FLAVOURS[number];

export interface Props {
  flavour: Flavour;
}

const IceCream = ({ flavour }: Props) => (
  <svg className={`${flavour} ice-cream`} viewBox="0 0 100 120">
    <g>
      <path className="cone" d="M 20 30 l 30 90 l 30 -90 z" />
      <circle className="scoop" cx="50" cy="20" r="33" />
    </g>
  </svg>
);

export default IceCream;
