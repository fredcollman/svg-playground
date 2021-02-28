import { Story } from "@storybook/react";
import Fish from "./Fish";

const config = {
  title: "Fish",
  component: Fish,
};

export default config;

const Template: Story<null> = () => (
  <div style={{ width: "200px", padding: "20px" }}>
    <Fish />
  </div>
);

export const Default = Template.bind({});
