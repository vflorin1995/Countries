import { useParams } from 'react-router-dom';

const OneCountry = () => {
  const { countryName } = useParams();
  return (
    <>
      ONE COUNTTRY
      {countryName}
    </>
  );
};

export default OneCountry;
