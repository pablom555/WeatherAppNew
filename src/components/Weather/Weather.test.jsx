import React from 'react';
import Weather from './Weather';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("Weather Render Sunny", async () => {

    const { findByRole } = render(<Weather temperature={10} state="sunny"></Weather>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")

})