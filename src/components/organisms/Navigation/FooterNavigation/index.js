import { StyledWrapper} from './styled';
import { MobileNavigation } from 'components/organisms/Navigation';
import { ContactMe } from './ContactMe';

const FooterNavigation = () => {
  return (
    <StyledWrapper>
      <ContactMe />
      <MobileNavigation />
    </StyledWrapper>
  );
};

export default FooterNavigation;
