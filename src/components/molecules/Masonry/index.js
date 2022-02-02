import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { MasonryWrapper, MasonryColumn } from './styled';

const Masonry = ({ columns = 3, gridGap = '2rem', isProvideLi = true, children }) => {
  const output = Children.toArray(children).reduce((acc, child, i) => {
    acc[i % columns] = [
      ...acc[i % columns],
      isProvideLi ? <li key={child.key}>{child}</li> : child,
    ];
    return acc;
  }, new Array(columns).fill([]));

  return (
    <MasonryWrapper columns={columns} gridGap={gridGap}>
      {output.map((column, i) => (
        <MasonryColumn key={i} gridGap={gridGap}>
          {column}
        </MasonryColumn>
      ))}
    </MasonryWrapper>
  );
};

Masonry.propTypes = {
  columns: PropTypes.number.isRequired,
  gridGap: PropTypes.string.isRequired,
  isProvideLi: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};

export default Masonry;
