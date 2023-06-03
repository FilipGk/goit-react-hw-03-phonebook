import style from './ContactForm.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let contactForAdd = { name: this.state.name, number: this.state.number };
    this.props.onSubmitData(contactForAdd);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div className={style.contactform}>
        <form type="submit" onSubmit={this.handleSubmit}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label className={style.label}>
            Number
            <input
              className={style.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>

          <button type="submit" className={style.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
export default ContactForm;
