import React from 'react';
import { render } from '@testing-library/react';
import Todo from '../components/Todo';

test('renders without throwing errors', () => {
  const container = render(<Todo />);
  expect(container).toMatchSnapshot();
});
