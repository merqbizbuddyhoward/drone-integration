import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import CategoryTile from './';

storiesOf('CategoryTile', module)
  .addDecorator(StoryRouter())
  .add('default', () => <CategoryTile>default</CategoryTile>);
