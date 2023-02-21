import React from 'react';
import { render } from '@testing-library/react';
import Drinks from "../pages/Drinks";


describe('Drinks', () => {
    test('renders the component', () => {
      const { getByText } = render(<Drinks />);
      const linkElement = getByText(filterDrinks());
      expect(linkElement).toBeInTheDocument();
    });
  });
  