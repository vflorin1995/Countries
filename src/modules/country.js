import { PropTypes } from 'prop-types';

const Country = ({ name, flags }) => (
  <>
    <img className="countryFlag" src={flags} alt="flag" />
    <div className="title">{name}</div>
  </>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  flags: PropTypes.string.isRequired,
};

export default Country;
