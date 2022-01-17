import {render} from '@testing-library/react';
import Private from './Private';
import React from "react";

describe('Private', () => {

  it('should render successfully', () => {
    const {baseElement, getByText} = render(
      <Private/>
    );

    expect(baseElement).toBeTruthy();
    expect(getByText(/Welcome/)).toBeTruthy();
  });
});
