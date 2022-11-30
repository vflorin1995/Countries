import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Country from './country';

const CountryContainer = () => {
  let tari = useSelector((state) => state.countries);
  tari = tari.sort((t1, t2) => {
    if (t1.name.common > t2.name.common) {
      return 1;
    } if (t1.name.common < t2.name.common) {
      return -1;
    }
    return 0;
  });
  const optionArr = ['Africa', 'Europe', 'Asia', 'Antarctica', 'North America', 'South America', 'Oceania'];
  const [continent, setContinent] = useState('All');
  let workingArr;
  if (continent === 'All') {
    workingArr = tari;
  } else {
    workingArr = tari.filter((item) => item.continents[0] === continent);
  }
  return (
    <div className="countryContainer">
      <select className="continent" onChange={(e) => setContinent(e.target.value)}>
        <option hidden>Please select a continent</option>
        {optionArr.map((item) => <option key={item}>{item}</option>)}
      </select>
      <section className="flex">
        {workingArr.map((item) => (
          <Link className="card" key={item.name.common} data-testid="country" to={`c/${item.name.common}`}>
            <Country name={item.name.common} flags={item.flags.png} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default CountryContainer;
