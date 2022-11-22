import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './modules/nav';
import { fetchData } from './redux/fetch';
import CountryContainer from './modules/countryContainer';
import OneCountry from './modules/oneCountry';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<CountryContainer />} />
        <Route path="/:countryName" element={<OneCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
