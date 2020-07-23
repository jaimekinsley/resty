import React from 'react';
import PropTypes from 'prop-types';
import FilledRequest from '../FilledRequest/FilledRequest';

const FilledRequests = ({ filledRequests }) => {
  const filledRequestElements = filledRequests.map(filledRequest => (
    <li key={Date.now()}>
      <FilledRequest {...filledRequest} />
    </li>
  ));
  return (
    <ul>
      {filledRequestElements}
    </ul>
  );
};

FilledRequests.propTypes = {
  filledRequests: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired
  }))
};

export default FilledRequests;
