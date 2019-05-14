import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class RedButton extends PureComponent {

  static proptypes = {
    color: PropTypes.string.isRequired
  };

  // clickHandler = clickEvent => {
  //   console.log('Red Button Is Selected');
  // }

  render() {
    return (
      <section className={styles.ColorPicker}>
        <h2>Color:</h2>
        <h3>this.props.color</h3>
      </section>
    );
  }
}
