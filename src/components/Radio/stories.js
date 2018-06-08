import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Radio from './';

storiesOf('Radio', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Radio>default</Radio>);
