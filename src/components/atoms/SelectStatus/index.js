import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
  margin-top: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.lipstick};
  border-radius: 5px;
  padding: 10px 0;
  outline: none;
  font-size: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lipstick};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 80%;
  }
`;

const Option = styled.option`
  
`;

class SelectStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Selected status: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Select value={this.state.value} onChange={this.handleChange}>
        <Option value="">Select status</Option>
        <Option value="read">read</Option>
        <Option value="in progress">in progress</Option>
        <Option value="to read">to read</Option>
        <Option value="to buy">to buy</Option>
        <Option value="borrowed">borrowed</Option>
      </Select>
    );
  }
}

export default SelectStatus;