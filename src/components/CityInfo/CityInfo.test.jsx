import React from 'react';
import CityInfo from './CityInfo';
import { render } from '@testing-library/react';


test('City Info Render', async () => {

    const city = "Buenos Aires"
    const country = "Argentina"
    
    // Render: Renderiza el componente y retorna una serie de funciones
    // de utilidad. En este caso utilizamos "findAllByRole" para consultar
    // a nuestro componente.
    // Vamos a analizar su estado en el "assert"
    const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)

    // Assert:
    // findAllByRole nos va a buscar en este caso todos los componentes que sean 
    // heading => h1, h2, h3, etc.
    // El resultado es un array de componentes (cityAndCountryComponents)
    const cityAndCountryComponents = await findAllByRole("heading")


    // Cuando un test es correcto??
    // Cuando en el primer elemento heading se encuentra la ciudad "Buenos Aires"
    // y cuendo en el segundo elemento se encuentra el pais "Argentina"
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country) 
    // En caso de que estas dos condiciones se cumplan (expect) el test es "ok"

})