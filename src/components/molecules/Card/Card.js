import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import {connect} from 'react-redux';
import {removeItemAction} from 'actions';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  width: 200px;
  padding: 20px;
  margin: 0;
  transition: transform 0.3s;
  box-shadow: ${({ theme }) => theme.shadows.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    transform: scale(1.03);
    background-color: ${({ theme }) => theme.colors.lipstick};
  }
`;

const StyledImage = styled.img`
  height: 225px;
  background-color: transparent;
  margin-bottom: 10px;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.bold};
  text-align: center;
  margin: 0;

  ${StyledWrapper}:hover & {
    color: white;
  }
`;

const StyledAuthor = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.regular};
  margin: 0;
  text-align: center;

  ${StyledWrapper}:hover & {
    color: white;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const StyledButton = styled(Button)`
  border: none;
  box-shadow: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.font.light};
  height: 20px;

  ${StyledWrapper}:hover & {
    color: white;
  }

  &:active {
    font-weight: ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: inline-block;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { removeItem, cardType, id, imageUrl, title, author, content, date } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }
    return (
      <StyledWrapper>
        <div onClick={this.handleCardClick}>
          <StyledImage src={imageUrl} />
          <InnerWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledAuthor>{author}</StyledAuthor>
            <StyledParagraph>{date}</StyledParagraph>
            <Paragraph>{content}</Paragraph>
          </InnerWrapper>
        </div>
        <StyledButton seeMore>read more</StyledButton>
        <Button secondary onClick={() => removeItem(cardType, id)}>REMOVE</Button>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['books', 'authors', 'notes']),
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.any,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: 'books',
  title: null,
  imageUrl: null,
  author: null,
  date: null,
  description: null,
  content: null,
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
