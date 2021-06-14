import "./styles.css";

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
