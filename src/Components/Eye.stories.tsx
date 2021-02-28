import { Story } from "@storybook/react";
import Eye, { Props } from "./Eye";

const config = {
  title: "Eye",
  component: Eye,
};

export default config;

const DEFAULT_SKIN = "pink";

const Template: Story<Props> = (args) => (
  <div style={{ background: DEFAULT_SKIN, width: "200px", padding: "20px" }}>
    <Eye {...args} />
  </div>
);

export const Default = Template.bind({});
