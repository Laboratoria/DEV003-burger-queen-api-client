import { render, screen } from '@testing-library/react';
import Waiter from "@/pages/waiter";
import '@testing-library/jest-dom';
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Waiter />);
 
    const heading = screen.getByRole('heading', {
      name: "menús",
    });
 
    expect(heading).toBeInTheDocument();
  });
});