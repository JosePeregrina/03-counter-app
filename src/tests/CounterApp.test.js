import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('El componente CounterApp', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('cargarse correctamente con sus valores por defecto "hacer snapshot"', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostar el valor por defecto de 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counterValue = Number.parseInt(wrapper.find('h2').text());

    expect(counterValue).toBe(value);
  });

  test('debe de incrementar con el botón de +1 ', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterValue = Number.parseInt(wrapper.find('h2').text());

    expect(counterValue).toBe(11);
  });

  test('debe de decrementar con el botón de -1 ', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterValue = Number.parseInt(wrapper.find('h2').text());

    expect(counterValue).toBe(9);
  });

  test('debe de resetear el valor con el botón de reset ', () => {
    const wrapper = shallow(<CounterApp value={15} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterValue = Number.parseInt(wrapper.find('h2').text());

    expect(counterValue).toBe(15);
  })
  
});
