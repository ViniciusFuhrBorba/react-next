import P from 'prop-types';
import './styles.css';

//as props ja estão implicitas na "classe"
export const Button = ({ text, onClick, disabled = false }) => (
  <button className="button" disabled={disabled} onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  disable: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
