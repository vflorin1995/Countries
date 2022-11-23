import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/fetch';
import CountryContainer from '../modules/countryContainer';

describe('Jest Snapshot testing suite', () => {
  it('Country container snapshot', () => {
    const quotes = renderer.create(
      <Provider store={store}>
        <Router>
          <CountryContainer />
        </Router>
      </Provider>,
    ).toJSON();
    expect(quotes).toMatchSnapshot();
  });
});
