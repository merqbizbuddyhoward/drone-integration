import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Container from './';

storiesOf('Container', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Container>default</Container>);
