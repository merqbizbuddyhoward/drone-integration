import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Title from './';

storiesOf('Title', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Title>default</Title>);
