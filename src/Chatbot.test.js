import React from 'react';
import { render } from '@testing-library/react';
import Chatbot from './Chatbot';

test('renders learn react link', () => {
  const { getByText } = render(<Chatbot />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
