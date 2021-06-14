import P from 'prop-types';
import './styles.css';

export const PostCard = ({ title, body, cover, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div key={id} className="post-content">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
  id: P.number.isRequired,
};
