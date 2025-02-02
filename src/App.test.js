import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders input box', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/x distance/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders add button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/add/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders material selection', () => {
  render(<App />);
  const materialElement = screen.getByText(/select material/i);
  expect(materialElement).toBeInTheDocument();
});

test('renders submit button', () => {
  render(<App />);
  const submitButton = screen.getByText(/submit/i);
  expect(submitButton).toBeInTheDocument();
});