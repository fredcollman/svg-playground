import { Story } from "@storybook/react";
import House from "./House";

const config = {
  title: "House",
  component: House,
};

export default config;

const Template: Story<null> = () => (
  <div style={{ width: "200px", padding: "20px" }}>
    <House />
  </div>
);

export const Default = Template.bind({});
