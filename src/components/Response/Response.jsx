import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => ({ response });

Response.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Response;
