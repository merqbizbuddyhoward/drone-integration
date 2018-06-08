import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import MediaPlayer from './';

storiesOf('MediaPlayer', module)
  .addDecorator(StoryRouter())
  .add('default', () => <MediaPlayer>default</MediaPlayer>);
