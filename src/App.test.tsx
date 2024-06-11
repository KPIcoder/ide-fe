import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);

    expect(screen.getByText('Counter')).toBeInTheDocument();

    expect(screen.getByText('increment')).toBeEnabled();
    expect(screen.getByText('reduce')).toBeEnabled();
  });
});
