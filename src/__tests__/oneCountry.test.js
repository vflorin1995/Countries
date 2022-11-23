import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/fetch';
import OneCountry from '../modules/oneCountry';

describe('Jest Snapshot testing suite', () => {
  it('OneCountry snapshot', () => {
    const quotes = renderer.create(
      <Provider store={store}>
        <Router>
          <OneCountry />
        </Router>
      </Provider>,
    ).toJSON();
    expect(quotes).toMatchSnapshot();
  });
});
