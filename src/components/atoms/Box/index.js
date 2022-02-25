import './styled.css';
import PropTypes from 'prop-types';

const Box = ({ header, content }) => (
  <article className="article">
    <div className="boxFront">
      <div className="text">
        <h1>{header}</h1>
      </div>
    </div>
    <div className="boxBack">
      <div className="text">
        <p>{content}</p>
      </div>
    </div>
  </article>
);

Box.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Box;
