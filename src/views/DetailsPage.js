import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DetailsPageTemplate from 'templates/DetailsPageTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'books',
  };

  componentDidMount() {
    const {match} = this.props;

    switch (match.path) {
      case routes.book:
        this.setState({ pageType: 'books' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.author:
        this.setState({ pageType: 'authors' });
        break;
      default:
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    
      const sampleNote = {
        id: 1,
        title: 'Title',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        imageUrl: 'http://image.url',
      };

const {pageType} = this.state;

      return (
        <DetailsPageTemplate
        pageType={pageType}
        title={sampleNote.title}
        content={sampleNote.content}
        imageUrl={sampleNote.imageUrl}
    />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
