import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { selectFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { addContact } from '../../redux/contacts/contacts-operations';

const ContactForm = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    phone: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.phone === phone
      )
    ) {
      alert(`${name} or ${phone} is already in contacts.`);
      return state;
    }
    const action = addContact({ name, phone });
    dispatch(action);
    setState({
      name: '',
      phone: '',
    });
  };

  const { name, phone } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.label}>
        <label>Name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.label}>
        <label>Number</label>
        <input
          className={css.input}
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          required
        />
      </div>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
