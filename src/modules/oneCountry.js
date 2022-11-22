import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Countries from '../redux/fetch';

const OneCountry = () => {
  const { countryName } = useParams();
  const tari = useSelector(Countries);
  const tara = tari.filter((item) => item.name.common === countryName)[0];
  if (tara === undefined) {
    return (<>Loading</>);
  }
  return (
    <>
      <img src={tara.flags.png} alt="flag" />
      <div>
        Country name:
        {tara.name.common}
      </div>
      <div>
        Country capital:
        {tara.capital}
      </div>
      <div>
        First language:
        {Object.values(tara.languages)[0]}
      </div>
      <div>
        Latitude:
        {tara.latlng[0]}
      </div>
      <div>
        Longitude:
        {tara.latlng[1]}
      </div>
      <div>
        Timezone
        {tara.timezones}
      </div>
    </>
  );
};

export default OneCountry;
