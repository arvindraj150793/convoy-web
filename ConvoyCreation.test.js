import { render, screen } from '@testing-library/react';
import ConvoyCreation from '../components/convoy/ConvoyCreation';

test('renders route type buttons', () => {
  render(<ConvoyCreation />);
  expect(screen.getByText('Public Road')).toBeInTheDocument();
});