import React from 'react';
import CityList from './CityList';
import { render, fireEvent } from '@testing-library/react';

const cities = [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Bogotá", country: "Colombia"},
    {city: "Cordoba", country: "Argentina"}
]

test("CityList render", async () => {

    const { findAllByRole } = render(<CityList cities={cities} />)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(3)

})

test("CityList click on Item", async () => {

    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole("listitem")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
    
})