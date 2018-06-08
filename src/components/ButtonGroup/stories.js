import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import ButtonGroup from './';

storiesOf('ButtonGroup', module)
  .addDecorator(StoryRouter())
  .add('default', () => <ButtonGroup>default</ButtonGroup>);
