import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Gallery from './';

storiesOf('Gallery', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Gallery>default</Gallery>);
