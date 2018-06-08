import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Textbox from './';

storiesOf('Textbox', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Textbox>default</Textbox>);
