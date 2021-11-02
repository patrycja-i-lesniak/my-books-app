import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { authorsData } from 'assets/booksData';

const authors = authorsData;

const Authors = () => (
  <GridTemplate pageType="authors">
    {authors.map(({ name, imageUrl, id, date, content, oficialPage }) => (
      <Card
        imageUrl={imageUrl}
        title={name}
        date={date}
        oficialPage={oficialPage}
        key={id}
        content={content}
      />
    ))}
  </GridTemplate>
);
export default Authors;
