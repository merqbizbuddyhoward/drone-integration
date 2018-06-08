import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Avatar from './';

storiesOf('Avatar', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Avatar>default</Avatar>);
