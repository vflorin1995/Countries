import { configureStore } from '@reduxjs/toolkit';

const ADDDATA = 'ADDDATA';
const URL = 'https://restcountries.com/v3.1/all';

export function Data(payload) {
  return {
    type: ADDDATA,
    payload,
  };
}

export default function Countries(state = [], action = {}) {
  switch (action.type) {
    case ADDDATA:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
}

export const fetchData = () => async (dispatch) => {
  let countryList = [];
  await fetch(URL)
    .then((response) => response.json())
    .then((data) => { countryList = data; });
  dispatch(Data(countryList));
};

export const store = configureStore({ reducer: { countries: Countries } });
