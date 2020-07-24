import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <>
    <div>
      <ReactJson src={response} theme="flat" />
    </div>
  </>
);

Response.propTypes = {
  response: PropTypes.oneOf([PropTypes.object, PropTypes.array]).isRequired
};

export default Response;
