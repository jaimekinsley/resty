import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';

const Response = ({ response }) => {
  <>
    <div>
      <ReactJson src={response} />
    </div>
  </>;
};

Response.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Response;
