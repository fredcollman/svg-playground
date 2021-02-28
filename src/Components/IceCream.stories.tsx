import { Story } from "@storybook/react";
import IceCream, { Props } from "./IceCream";

const config = {
  title: "Ice Cream",
  component: IceCream,
};

export default config;

const Template: Story<Props> = (args) => <IceCream {...args} />;

export const Vanilla = Template.bind({});
Vanilla.args = { flavour: "vanilla" };

export const Strawberry = Template.bind({});
Strawberry.args = { flavour: "strawberry" };
