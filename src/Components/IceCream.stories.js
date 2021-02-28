import IceCream from "./IceCream";

const config = {
  title: "Ice Cream",
  component: IceCream,
};

export default config;

const Template = (args) => <IceCream {...args} />;

export const Vanilla = Template.bind({});
Vanilla.args = {};
