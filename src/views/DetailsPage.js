import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsPageTemplate from 'templates/DetailsPageTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'books',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.book:
        this.setState({ pageType: 'books' });
        break;

      case routes.author:
        this.setState({ pageType: 'authors' });
        break;

      case routes.note:
        this.setState({ pageType: 'notes' });
        break;

      default:
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    const exampleNote = {
      id: 10,
      title: 'Example note Title',
      content:
        'Lorem ipsum dolor sit amet. Aut consequatur pariatur ut odio ut doloribus vero a nihil cumque ut eligendi totam. Est dolor quasi a quos aliquid et deleniti explicabo? Ex sunt adipisci sit vero mollitia qui quam perspiciatis in suscipit illum et officiis illo quasi harum! Est quisquam quam vel dicta deleniti sed facere enim sit excepturi consectetur ad perferendis magni. Perferendis sapiente in sint placeat ut itaque quam. Vel eligendi iure sed sapiente assumenda a explicabo voluptatem quo quia possimus At autem officia. Ut unde odio eos quam dignissimos qui atque aliquam nam delectus quasi rem provident laudantium ex porro nisi. In consequatur provident ad doloremque aliquam est dolores maiores? Aut internos omnis vel minus enim et sapiente voluptatibus?',
      imageUrl: 'http://image.url',
    };

    const { pageType } = this.state;

    return (
      <DetailsPageTemplate
        pageType={pageType}
        title={exampleNote.title}
        content={exampleNote.content}
        imageUrl={exampleNote.imageUrl}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsPage;
