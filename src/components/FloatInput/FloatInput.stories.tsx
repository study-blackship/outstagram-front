import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FloatInput from '.';

export default {
  component: FloatInput,
  title: 'forms/FloatInput',
} as ComponentMeta<typeof FloatInput>;

const Template: ComponentStory<typeof FloatInput> = (args) => (
  <FloatInput {...args} />
);

export const Username = Template.bind({});
Username.args = {
  placeholder: '전화번호, 사용자 이름 또는 이메일',
};

export const Password = Template.bind({});
Password.args = {
  placeholder: '비밀번호',
  type: 'password',
};
