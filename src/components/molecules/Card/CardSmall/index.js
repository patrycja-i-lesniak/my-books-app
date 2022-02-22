import { useState } from 'react';
import PropTypes from 'prop-types';

import { Arrow } from 'components/atoms/Arrow';
import {
  StyledImage,
  StyledTitle,
  StyledAuthor,
  InnerWrapper,
  StyledDate,
  ButtonContentWrapper,
  ShowMore,
  StyledLink,
} from './styled';
import Wrapper from 'components/atoms/Wrapper';
import withContext from 'hoc/withContext';

const CardSmall = ({ item, pageContext }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          {(pageContext === 'home' || pageContext === 'books') && (
            <>
              <StyledLink to={`books/${item.id}`}>
                <StyledImage src={item.fields.imageUrl} />
                <StyledTitle>{item.fields.title}</StyledTitle>
                <StyledAuthor>
                  {item.fields.firstName} {item.fields.lastName}
                </StyledAuthor>
              </StyledLink>
            </>
          )}
          {pageContext === 'authors' && (
            <>
              <StyledLink to={`authors/${item.id}`}>
                <StyledImage src={item.fields.imageUrl} />
              </StyledLink>
              <StyledTitle>
                {item.fields.firstName} {item.fields.lastName}
              </StyledTitle>
            </>
          )}
        </InnerWrapper>
      </Wrapper>
      {/* </>


<> */}
      {pageContext === 'notes' && (
        <Wrapper notes>
          <InnerWrapper>
            <>
              <StyledImage src={item.fields.imageUrl} />
              <StyledTitle>{item.fields.title} </StyledTitle>
              <StyledDate>{item.fields.date}</StyledDate>
              {item.fields.content.length > 300 ? (
                <>
                  {showMore ? item.fields.content : `${item.fields.content.slice(0, 300)}...`}
                  <ShowMore onClick={() => setShowMore(!showMore)}>
                    <ButtonContentWrapper>
                      <span>
                        {showMore ? 'Show less' : 'Show more'}
                        <Arrow showMore={showMore} />
                      </span>
                    </ButtonContentWrapper>
                  </ShowMore>
                </>
              ) : (
                <>{item.fields.content}</>
              )}
            </>
          </InnerWrapper>
        </Wrapper>
      )}
    </>
  );
};

CardSmall.propTypes = {
  pageContext: PropTypes.oneOf(['home', 'books', 'authors', 'notes', 'quotes']),
  item: PropTypes.object,
  handleDelete: PropTypes.func,
};

CardSmall.defaultProps = {
  item: {},
};

export default withContext(CardSmall);
