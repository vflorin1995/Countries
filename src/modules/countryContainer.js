import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Country from './country';

const CountryContainer = () => {
  const tari = useSelector((state) => state.countries);
  const optionArr = ['Africa', 'Europe', 'Asia', 'Antarctica', 'North America', 'South America', 'Oceania'];
  const [continent, setContinent] = useState('Africa');
  const workingArr = tari.filter((item) => item.continents[0] === continent);
  console.log(workingArr);
  return (
    <div className="countryContainer">
      <select className="continent" onChange={(e) => setContinent(e.target.value)}>
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
