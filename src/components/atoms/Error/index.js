import PropTypes from 'prop-types';
import { ErrorIcon, StyledNavLink, Subtitle, Title, Wrapper } from './styled';
import errorIcon from 'assets/icons/error.svg';

const Error = ({ reloadButton }) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Wrapper>
      <ErrorIcon src={errorIcon} alt='error'/>
      <Title>Ooops! Something went wrong... </Title>
      <Subtitle>Please check your network connection and try again</Subtitle>

      {reloadButton ? (
        <StyledNavLink as="button" onClick={reloadPage}>
          Reload page
        </StyledNavLink>
      ) : (
        <StyledNavLink to="/">Back to homepage</StyledNavLink>
      )}
    </Wrapper>
  );
};

Error.propTypes = {
  reloadButton: PropTypes.string,
};

export default Error;
