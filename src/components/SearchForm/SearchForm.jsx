import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ api, jsonBody, method, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="api" value={api} onChange={onChange} />

    <label>
        GET
      <input type="radio" name="method" value="get" checked={method === 'get'} onChange={onChange}/>
    </label>
    <label>
        POST
      <input type="radio" name="method" value="post" checked={method === 'post'} onChange={onChange} />
    </label>
    <label>
        PUT
      <input type="radio" name="method" value="put" checked={method === 'put'} onChange={onChange}/>
    </label>
    <label>
        PATCH
      <input type="radio" name="method" value="patch" checked={method === 'patch'} onChange={onChange} />
    </label>
    <label>
        DELETE
      <input type="radio" name="method" value="delete" checked={method === 'delete'} onChange={onChange}/>
    </label>

    <input type="textarea" name="jsonBody" value={jsonBody} onChange={onChange} />

    <button>Submit</button>
  </form>
);

SearchForm.propTypes = {
  api: PropTypes.string.isRequired,
  JSON: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
