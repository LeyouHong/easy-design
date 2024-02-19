import { Meta } from '@storybook/react';
import { Upload } from './upload';
import Button from '../Button/button';
import Icon from '../Icon/icon';

export default {
  title: 'Upload',
  id: 'Upload',
  component: Upload,
  tags: ['autodocs'],
} as Meta;

export const ASimpleUpload = (args) => (
  <Upload {...args} action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
    <Button size="lg" btnType="primary">
      <Icon icon="upload" /> Default Upload{' '}
    </Button>
  </Upload>
);
ASimpleUpload.storyName = 'Default Upload';

export const BCheckUpload = (args) => {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big');
      return false;
    }
    return true;
  };
  return (
    <Upload
      {...args}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={checkFileSize}
    >
      <Button size="lg" btnType="primary">
        <Icon icon="upload" /> file larger than 50Kb{' '}
      </Button>
    </Upload>
  );
};
BCheckUpload.storyName = 'Check file size';

export const CDragUpload = (args) => (
  <Upload
    {...args}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="fileName"
    multiple
    drag
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p>drag to upload</p>
  </Upload>
);
CDragUpload.storyName = 'drag to upload';
