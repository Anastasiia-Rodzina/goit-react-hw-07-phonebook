import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const changeFilter = ({ target }) => {
    const action = setFilter(target.value);
    dispatch(action);
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input className={css.filter} type="text" onChange={changeFilter} />
    </label>
  );
}
export default Filter;
