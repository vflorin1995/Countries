import { PropTypes } from 'prop-types';

const Country = ({ name, flags }) => (
  <>
    <img src={flags} alt="flag" />
    <div>{name}</div>
  </>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  flags: PropTypes.string.isRequired,
};

export default Country;
