import PropTypes from 'prop-types';
import { ErrorIcon, Subtitle, Title, Wrapper } from './styled';
import errorIcon from 'assets/icons/error.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Error = ({ reloadButton }) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Wrapper>
      <ErrorIcon src={errorIcon} alt='error'/>
      <Title>Ooops! Something went wrong... </Title>
      <Subtitle>Please check your network connection and try again.</Subtitle>

      {reloadButton ? (
        <Button type="button" onClick={reloadPage}>
          Reload page
        </Button>
      
      ) : (
        <Button as={Link} to="/books">Back to Books</Button>
        // <StyledNavLink to="/">Back to homepage</StyledNavLink>
      )}
    </Wrapper>
  );
};

Error.propTypes = {
  reloadButton: PropTypes.bool,
};

export default Error;
