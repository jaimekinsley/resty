import React from 'react';
import PropTypes from 'prop-types';

const FilledRequest = ({ method, api }) => (
  <>
    <p>{method}</p>
    <p>{api}</p>
  </>
);

FilledRequest.propTypes = {
  method: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired
};

export default FilledRequest;
