import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Tile from './';

storiesOf('Tile', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Tile>default</Tile>);
