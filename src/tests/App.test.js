import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('doesn\'t explode', () => {
  const { _ } = render(<App />);
});
