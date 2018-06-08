import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Slider from './';

storiesOf('Slider', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Slider>default</Slider>);
