import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Notification from './';

storiesOf('Notification', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Notification>default</Notification>);
