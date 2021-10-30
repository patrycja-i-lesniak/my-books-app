import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { authorsData } from 'assets/booksData';

const authors = authorsData;

const Authors = () => (
  <GridTemplate pageType="authors">
    {authors.map(({ name, imageUrl, id, date, description, oficialPage }) => (
      <Card
        imageUrl={imageUrl}
        name={name}
        date={date}
        oficialPage={oficialPage}
        key={id}
        description={description}
      />
    ))}
  </GridTemplate>
);
export default Authors;
