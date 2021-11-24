import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { fetchAuthors } from 'api/authors';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  const fetchData = async () => {
    const data = await fetchAuthors();
    setAuthors(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GridTemplate pageType="authors">
      {authors.map(author => (
        <Card
          cardType="authors"
          id={author.id}
          firstName={author.firstName}
          lastName={author.lastName}
          imageUrl={author.imageUrl}
          key={author.id}
        />
      ))}
    </GridTemplate>
  );
};

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};

Authors.defaultProps = {
  authors: [],
};

export default Authors;
