import PropTypes from 'prop-types';

export default {
  abbr_address: PropTypes.string,
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  id: PropTypes.string,
  is_homie_exclusive: PropTypes.bool,
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  name: PropTypes.string,
  parkings: PropTypes.number,
  pet_friendly: PropTypes.bool,
  photos: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
  sqare_mts: PropTypes.number,
};
