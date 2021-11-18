import styles from 'components/atoms/Box/Box.module.scss';
import PropTypes from 'prop-types';

const Box = ({ header, content }) => (
  <article className={styles.article}>
    <div className={styles.boxFront}>
      <div className={styles.text}>
        <h1>{header}</h1>
      </div>
    </div>
    <div className={styles.boxBack}>
      <div className={styles.text}>
        <p>{content}</p>
      </div>
    </div>
  </article>
);

Box.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Box;
