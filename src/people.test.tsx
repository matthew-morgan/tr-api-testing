import { render, waitFor } from '@testing-library/react';
import People from './people';


describe('People', () => {

  it('renders the first person', async () => {
    const { getByText } = render(<People />);
    const personName = await waitFor(() => getByText('Luke Skywalker'));
    expect(personName).toBeInTheDocument();
  });
});
