import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Display from './Display';

describe('Display Component', () => {
  test('renders the value prop correctly', () => {
    render(<Display value="12345" />);

    expect(screen.getByText('12345')).toBeInTheDocument();
  });
});
