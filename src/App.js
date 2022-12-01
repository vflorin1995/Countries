import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Nav from './modules/nav';
import { fetchData } from './redux/fetch';
import CountryContainer from './modules/countryContainer';
import OneCountry from './modules/oneCountry';
import NotFound from './modules/404';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<CountryContainer />} />
        <Route path="/c/:countryName" element={<OneCountry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
