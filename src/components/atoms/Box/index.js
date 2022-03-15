import './styled.css';
import PropTypes from 'prop-types';

const Box = ({ header, content, icon }) => (
  <article className="article">
    <div className="boxFront">
      <div className="text">
        <div className="flex">
          <img src={icon} />
          <h1>{header}</h1>
        </div>
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
  icon: PropTypes.string.isRequired,
};

export default Box;
