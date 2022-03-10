import styled from 'styled-components';
import Box from 'components/atoms/Box';
import bookIcon from 'assets/icons/bookIcon.svg';
import readingIcon from 'assets/icons/readingIcon.svg';
import buyIcon from 'assets/icons/buyIcon.svg';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    flex-wrap: wrap;
  }
`;

const RotaryBox = () => (
  <>
    <Wrapper>
      <Box
        icon={bookIcon}
        header="I read"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
      />
      <Box
        icon={readingIcon}
        header="Want to read"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
      />
      <Box
        icon={buyIcon}
        header="I want to buy"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
      />
    </Wrapper>
  </>
);

export default RotaryBox;
