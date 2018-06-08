import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import LandingSection from './';

storiesOf('LandingSection', module)
  .addDecorator(StoryRouter())
  .add('default', () => <LandingSection>default</LandingSection>);
