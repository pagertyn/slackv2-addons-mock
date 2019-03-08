import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  PdxErrorPage,
  PdxLoadingPage,
  PdxNotFoundPage
} from '@pagerduty/pd-react-components';
import { fetchCurrentUser } from '../../actions/current-user';
import {
  redirectToSignIn,
  isSignedInByMetadata,
  isUserDataValid,
  hasFeatureToggle
} from '../../util/current-user';
import getEnvironment from '../../util/environment';
import config from '../../config/app';
import MainPage from '../MainPage';
import SecondPage from '../SecondPage';

const getBaseName = () => (getEnvironment() === 'development' ? '' : config.APP_NAME);

const isAuthError = error => error && error.response && error.response.status === 401;

class App extends Component {
  constructor(props) {
    super(props);
    this.hasFeature = false;
    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    // user metadata is not in the page
    if (!isSignedInByMetadata()) {
      redirectToSignIn();
    }

    // fetch user data using user id and account id from page metadata
    await this.props.fetchCurrentUser();

    // fetch error is 401 Unauthorized OR some other fetch error
    //  OR user data is bad
    if ((this.props.error && isAuthError(this.props.error))
        || !isUserDataValid(this.props.currentUser)) {
      redirectToSignIn();
    }

    this.hasFeature = hasFeatureToggle(this.props.currentUser);
    this.setState({ loaded: true });
  }

  render() {
    if (!this.state.loaded) return <PdxLoadingPage />;

    if (!this.hasFeature) {
      const errorMessage = 'You do not have access to this feature.';
      return <PdxErrorPage message={errorMessage} />;
    }

    return (
      <BrowserRouter basename={getBaseName()}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/second-page" component={SecondPage} />
          <Route component={PdxNotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser.user,
  isFetching: state.currentUser.isFetching,
  error: state.currentUser.error
});
const mapActionsToProps = { fetchCurrentUser };
export default connect(mapStateToProps, mapActionsToProps)(App);
