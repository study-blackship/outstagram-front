import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '.';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Button,
  title: 'Example/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'Click me!',
};

export const Large = Template.bind({});
Large.args = {
  ...Base.args,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  ...Base.args,
  size: 'small',
};
