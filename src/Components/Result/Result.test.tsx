import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Result from './Result';

describe('Result Component', () => {
  test('renders the value prop correctly', () => {
    render(<Result value="98765" />);
    expect(screen.getByText('98765')).toBeInTheDocument();
  });
});
