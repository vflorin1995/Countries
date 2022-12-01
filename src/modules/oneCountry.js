import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OneCountry = () => {
  const { countryName } = useParams();
  const tari = useSelector((state) => state.countries);
  console.log(countryName);
  const tara = tari.filter((item) => item.name.common === countryName)[0];
  while (tara === undefined) {
    return (<>Loading</>);
  }
  return (
    <div className="flex country">
      <img src={tara.flags.png} className="steagu" alt="flag" />
      <div>
        <p className="bold">Country name:</p>
        {tara.name.common.split(' ').slice(0, 5).join(' ')}
      </div>
      <div>
        <p className="bold">Country capital:</p>
        {'NA' || tara.capital}
      </div>
      <div>
        <p className="bold">First language:</p>
        {'NA' || Object.values(tara.languages)[0]}
      </div>
      <div>
        <p className="bold">Latitude:</p>
        {tara.latlng[0]}
      </div>
      <div data-testid="long">
        <p className="bold">Longitude:</p>
        {tara.latlng[1]}
      </div>
      <div>
        <p className="bold">Timezone:</p>
        {(tara.timezones.length > 1) ? `${tara.timezones[0]} to ${tara.timezones[tara.timezones.length - 1]}` : tara.timezones[0] }
      </div>
    </div>
  );
};

export default OneCountry;
