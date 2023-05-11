import { render, screen } from '@testing-library/react';
import Waiter from "@/pages/waiter";
import '@testing-library/jest-dom';
 
describe('Home', () => {
  it('renders a header with title', () => {
    render(<Waiter />);
 
    const heading = screen.getByRole('heading', {
      name: "BURGER QUEEN",
    });
 
    expect(heading).toBeInTheDocument();
  });
});