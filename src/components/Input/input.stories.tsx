import { Meta, StoryFn } from '@storybook/react';
import Input from './index';

export default {
  title: 'Input',
  id: 'Input',
  component: Input,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const ADefault = Template.bind({});
ADefault.args = {
  placeholder: 'default Input',
};
ADefault.storyName = 'default Input';

export const BDisabled = Template.bind({});
BDisabled.args = {
  placeholder: 'disabled input',
  disabled: true,
};
BDisabled.storyName = 'disabled Input';

export const CIcon = Template.bind({});
CIcon.args = {
  placeholder: 'Search input',
  icon: 'search',
};
CIcon.storyName = 'Search Input';

export const DSizeInput = () => (
  <>
    <Input defaultValue="large size" size="lg" />
    <Input placeholder="small size" size="sm" />
  </>
);
DSizeInput.storyName = 'different size Input';
export const EPandInput = () => (
  <>
    <Input defaultValue="prepend text" prepend="https://" />
    <Input defaultValue="google" append=".com" />
  </>
);

EPandInput.storyName = 'prepend and append Input';
