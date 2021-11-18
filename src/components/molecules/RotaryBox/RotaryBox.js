import styled from 'styled-components';
import Box from "components/atoms/Box";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-bottom: 40px;
  `;

const RotaryBox = () => (
  <>
    <Wrapper>
      <Box
        header="I read"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
      />
      <Box
        header="Want to read"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
      />
      <Box
       header="I want to buy"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
      />
    </Wrapper>
  </>
);

export default RotaryBox;

