import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChangeText }) => {
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleChangeText}
      value={searchValue}
      placeholder="type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChangeText: P.func.isRequired,
};
