import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          <p className={css.text}>
            {name}: {phone}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ContactList;
