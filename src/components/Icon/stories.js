import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Icon from './';

storiesOf('Icon', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Icon>default</Icon>);
