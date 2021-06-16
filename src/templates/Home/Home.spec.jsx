import { render, screen } from '@testing-library/react';
import { Home } from '.';

describe('<Home/>', () => {
  it('should render search, posts and load more', () => {
    render(<Home />);
    screen.debug();
  });
});
