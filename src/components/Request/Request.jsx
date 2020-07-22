import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ method, api }) => (
  <>
    <p>{method}</p>
    <p>{api}</p>
  </>
);

Request.propTypes = {
  method: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired
};

export default Request;
