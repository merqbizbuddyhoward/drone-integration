import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Form from './';

storiesOf('Form', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Form>default</Form>);
