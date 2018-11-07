import * as React from 'react';
import { ReactComponent as Spinner } from '../assets/images/spinner.svg';

const PdxLoading = () => {
  return (
    <div className ="pdx-loading__container">
      <Spinner className="pdx-loading__spinner"/>
    </div>
  );

};

export default PdxLoading;
