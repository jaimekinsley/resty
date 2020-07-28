import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ api, method, jsonBody, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="api" placeholder="API URL" value={api} onChange={onChange} />

    <label>
      <input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange}/>
        GET
    </label>
    <label>
      <input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange} />
        POST
    </label>
    <label>
      <input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange}/>
        PUT
    </label>
    <label>
      <input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange} />
        PATCH
    </label>
    <label>
      <input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange}/>
        DELETE
    </label>

    <input type="textarea" name="jsonBody" value={jsonBody} onChange={onChange} />

    <button>Submit</button>
  </form>
);

SearchForm.propTypes = {
  api: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  jsonBody: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
