import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

class Filter extends Component {
  setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
  };

  render() {
    return (
      <div>
        <h4 className={style.highlight}>Find contacts by name</h4>
        <input onChange={this.setFilterValue}></input>
      </div>
    );
  }
}

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
export default Filter;
