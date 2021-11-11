import React, {useState} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
display: flex;
justify-content: center;;
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-flex;
  margin: 0 30px 50px;
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
`;

const StyledInput = styled.input`
  /* opacity: 0; */
  position: absolute;
  left: -30px;
  cursor: pointer;
`;

// const StyledRadioButton = styled.input`
//   margin-right: 5px;
//   width: 15px;
//   height: 15px;
//   border-radius: 50%;
//   border: 1px solid ${({ theme }) => theme.colors.lipstick};
//   background-color: ${({ theme }) => theme.colors.white};
// `;

const Radio = () => {
  const [itemType, setItemType] = useState('book');

  const handleRadioButtonChange = (e) => {
    setItemType(e.target.value);
  };

  return (
    <StyledWrapper>
      <StyledLabel>
        <StyledInput
          type="radio"
          value="book"
          checked={itemType === 'book'}
          onChange={handleRadioButtonChange}
        />
        book
        {/* <StyledRadioButton/> */}
        {/* {children} */}
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          type="radio"
          value="author"
          checked={itemType === 'author'}
          onChange={handleRadioButtonChange}
        />
        author
        {/* <StyledRadioButton />
        {children} */}
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          type="radio"
          value="note"
          checked={itemType === 'note'}
          onChange={handleRadioButtonChange}
        />
        note
        {/* <StyledRadioButton />
        {children} */}
      </StyledLabel>
    </StyledWrapper>
  );
};

export default Radio;

