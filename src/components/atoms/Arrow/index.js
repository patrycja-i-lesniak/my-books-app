import { StyledArrow } from "./styled";
import PropTypes from 'prop-types';

export const Arrow = ({ showMore }) => (
    <StyledArrow
        showMore={showMore}
        width="12"
        height="12"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M979.0208 301.99808l-47.104-47.04768-419.98848 419.9424-419.89632-419.9424-47.0528 47.0528 419.89632 419.93728v0.00512l47.09888 47.104 47.04256-47.0528z"
        />
    </StyledArrow>
);

Arrow.propTypes = {
    showMore: PropTypes.bool,
}





