import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import { base } from 'airtable/base';
import CardSmall from 'components/molecules/Card/CardSmall';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    base('authors')
      .select({ view: 'Grid view', pageSize: 24, sort: [{ field: 'lastName'}] })
      .eachPage(
        (records, fetchNextPage) => {
          setAuthors(records);
          fetchNextPage();
          console.log(records);
        },
        function (err) {
          if (err) {
            console.error(err);
            return;
          }
        },
      );
  }, []);

  return (
    <GridTemplate pageType="authors">
      {authors &&
        authors.map(author => (
          <CardSmall cardType="authors" author={author} id={author.id} key={author.id} />
        ))}
    </GridTemplate>
  );
};

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

Authors.defaultProps = {
  authors: [],
};

export default Authors;
