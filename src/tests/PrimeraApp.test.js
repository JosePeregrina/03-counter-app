import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('El componente PrimeraApp', () => {
  /* test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    const saludo = 'Hola, Soy Goku';
     La manera sin desestructuración
     const wrapper = render(<PrimeraApp saludo={saludo}/>)
     wrapper.getByText()

    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  }); */

  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, Soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo que se mande por props', () => {
    const saludo = 'Hola soy goku';
    const subtitulo = 'Soy un guerrero Z'
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

    const textoParrafo = wrapper.find('p').text();

    expect( textoParrafo ).toBe(subtitulo);

  });
});
