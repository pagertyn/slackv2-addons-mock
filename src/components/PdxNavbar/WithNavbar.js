import React from 'react';
import PdxNavbar from './PdxNavbar';
import PdxLegacyNavbar from './PdxLegacyNavbar';

const WithNavbar = ({ legacy, currentUser, children }) => {
  const flexDirection = legacy ? 'flex-column' : 'flex-row';
  const theNavbar = legacy ? <PdxLegacyNavbar currentUser={currentUser} /> : <PdxNavbar />;

  return (
    <div className={['d-flex', flexDirection].join(' ')}>
      <div className="flex-shrink-0 max-width-2">
        {theNavbar}
      </div>
      <div className="flex-grow-1">
        {children}
      </div>
    </div>
  );
};

export default WithNavbar;
