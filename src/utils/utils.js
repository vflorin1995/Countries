import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Countries from '../redux/fetch';

const rootState = {
  countries: [
    {
      capital: ['Lusaka'],
      name: { common: 'Zambia' },
      languages: { eng: 'English' },
      latlng: [-15, 30],
      timezones: ['UTC+02:00'],
      continents: ['Africa'],
      flags: { png: 'google.com' },
    },
  ],
};
export default function renderWithProviders(
  ui,
  {
    preloadedState = rootState,
    store = configureStore({
      reducer: { countries: Countries },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) { /* eslint-disable-line */
    return (
      <Provider store={store}>{children}</Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
