import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ api, jsonBody, method, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="api" placeholder="API URL" value={api} onChange={onChange} />

    <label>
      <input type="radio" name="method" value="get" checked={method === 'get'} onChange={onChange}/>
        GET
    </label>
    <label>
      <input type="radio" name="method" value="post" checked={method === 'post'} onChange={onChange} />
        POST
    </label>
    <label>
      <input type="radio" name="method" value="put" checked={method === 'put'} onChange={onChange}/>
        PUT
    </label>
    <label>
      <input type="radio" name="method" value="patch" checked={method === 'patch'} onChange={onChange} />
        PATCH
    </label>
    <label>
      <input type="radio" name="method" value="delete" checked={method === 'delete'} onChange={onChange}/>
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
