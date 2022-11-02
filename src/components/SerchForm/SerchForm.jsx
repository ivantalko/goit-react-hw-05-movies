import { PropTypes } from 'prop-types';
import React from 'react';
import { useState } from 'react';
import css from './SerchForm.module.css';

export function SearchForm({ getFormData }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    getFormData(searchValue);
  };

  return (
    <form className={css.from} onSubmit={handleSubmit}>
      <input className={css.input} onChange={handleChange} />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
}
SearchForm.propTypes = {
  getFormData: PropTypes.func.isRequired,
};
