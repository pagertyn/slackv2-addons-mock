import React from 'react';
import { Helmet } from 'react-helmet';

export default props => (<Helmet defaultTitle="PagerDuty" titleTemplate="%s - PagerDuty" {...props} />);
