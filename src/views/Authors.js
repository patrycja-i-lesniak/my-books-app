import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import { base } from 'airtable/base';
import Card from 'components/molecules/Card';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

   useEffect(() => {
     base('authors')
       .select({ view: 'Grid view' })
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
        <Card
          cardType="authors"
          author={author}
          id={author.id}
          key={author.id}
          imageUrl={author.imageUrl}
          firstName={author.firstName}
          lastName={author.lastName}
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
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
  ),
};

Authors.defaultProps = {
  authors: [],
};

export default Authors;
