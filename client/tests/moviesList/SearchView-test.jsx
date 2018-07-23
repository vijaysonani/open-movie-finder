import React from 'react';
import { shallow } from 'enzyme';
import SearchView from '../../src/moviesList/components/SearchView';

jest.unmock('../../src/moviesList/components/SearchView');

describe('Search View', () => {
  it('Renders search view with button', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <SearchView />,
    );

    expect(wrapper.find('Segment').length).toBe(1);
    expect(wrapper.find('Input').length).toBe(1);
    expect(wrapper.find('Button').length).toBe(1);

    expect(onClick).not.toBeCalled();
    wrapper.find('Button').prop('onClick')();
    expect(onClick).toBeCalled();
  });
});
