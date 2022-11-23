import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithProviders from '../utils/utils';
import App from '../App';

describe('Testing clicks', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  it('Checking country renders correctly', () => {
    const country = screen.getByTestId('country');
    fireEvent.click(country);
    const long = screen.getByTestId('long');
    expect(long.textContent).toBe('Longitude:30');
  });
});
