import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Button from './';

storiesOf('Button', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Button>default</Button>);
