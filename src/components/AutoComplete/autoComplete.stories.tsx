import { Meta, StoryFn } from '@storybook/react';
import AutoComplete, { DataSourceType } from './autoComplete';

interface AutoCompleteDataProps {
  value: string;
  id: number;
}

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

export default {
  title: 'AutoComplete',
  id: 'AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof AutoComplete> = (args) => (
  <AutoComplete {...args} />
);

const animals = [
  { id: 0, value: 'hamster' },
  { id: 1, value: 'cat' },
  { id: 2, value: 'Dog' },
  { id: 3, value: 'Pig' },
  { id: 4, value: 'Horse' },
  { id: 5, value: 'cow' },
  { id: 6, value: 'lion' },
  { id: 7, value: 'deer' },
  { id: 8, value: 'fox' },
];
const handleFetch = (query: string) => {
  return animals.filter((item) =>
    item.value.toLowerCase().includes(query.toLowerCase()),
  );
};

export const ADefault = Template.bind({});
ADefault.args = {
  placeholder: 'default AutoComplete',
  fetchSuggestions: handleFetch,
};
ADefault.storyName = 'default AutoComplete';

const handleRenderOption = (item: DataSourceType) => {
  const itemWithId = item as DataSourceType<AutoCompleteDataProps>;
  return (
    <>
      <h2>{itemWithId.value}</h2>
      <p>ID: {itemWithId.id}</p>
    </>
  );
};
export const BRenderTemplate = Template.bind({});
BRenderTemplate.args = {
  placeholder: 'render your template',
  fetchSuggestions: handleFetch,
  renderOption: handleRenderOption,
};

export const CAjaxComplete = Template.bind({});
const handleFetchPromise = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      return (items || [])
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }));
    });
};
const renderOptionGithub = (item: DataSourceType) => {
  const itemWithGithub = item as DataSourceType<GithubUserProps>;
  return (
    <>
      <div>Name: {itemWithGithub.value}</div>
      <div>url: {itemWithGithub.url}</div>
    </>
  );
};
CAjaxComplete.args = {
  placeholder: 'input github username',
  fetchSuggestions: handleFetchPromise,
  renderOption: renderOptionGithub,
};

CAjaxComplete.storyName = 'fetch from API';
