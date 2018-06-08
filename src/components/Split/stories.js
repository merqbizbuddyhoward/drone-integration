import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Split from './';

storiesOf('Split', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Split>default</Split>);
