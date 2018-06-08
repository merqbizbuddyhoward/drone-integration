import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import ContentSwitcher from './';

storiesOf('ContentSwitcher', module)
  .addDecorator(StoryRouter())
  .add('default', () => <ContentSwitcher>default</ContentSwitcher>);
