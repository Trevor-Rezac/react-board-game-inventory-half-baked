import { render, screen } from '@testing-library/react';
import ListPage from './ListPage';
// import App from './App';

test('List Page', async () => {
  render(<ListPage />);
  const linkElement = await screen.findByText(/List Page/i);
  expect(linkElement).toBeInTheDocument();
});
