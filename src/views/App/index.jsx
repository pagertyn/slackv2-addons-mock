import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PdxLoading, WithNavbar } from '@pagerduty/pd-react-components';
import { fetchCurrentUser } from '../../actions/current-user';
import {
  redirectToSignIn,
  isSignedInByMetadata,
  isUserDataValid,
  hasFeatureFlag
} from '../../util/current-user';
import { redirectTo } from '../../util/general';
import getEnvironment from '../../util/environment';
import config from '../../config/app';
import MainPage from '../MainPage';
import SecondPage from '../SecondPage';

const getBaseName = () => (getEnvironment() === 'development' ? '' : config.APP_NAME);

const isAuthError = error => error && error.response && error.response.status === 401;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    if (!isSignedInByMetadata()) {
      redirectToSignIn();
      return;
    }

    await this.props.fetchCurrentUser();

    // fetch error is 401 Unauthorized
    if (this.props.error && isAuthError(this.props.error)) {
      redirectToSignIn();
      return;
    }

    // no fetch errors, but the user data is bad
    if (!this.props.error && !isUserDataValid(this.props.currentUser)) {
      redirectToSignIn();
      return;
    }

    // no fetch errors, but missing the feature flag
    if (!this.props.error && !hasFeatureFlag(this.props.currentUser)) {
      redirectTo('/404');
      return;
    }

    this.setState({ loaded: true });
  }

  render() {
    if (!this.state.loaded) {
      return (
        <div className="pd-full-page d-flex align-items-center justify-content-center">
          <h1 className="sr-only">The App is Loading.</h1>
          <PdxLoading />
        </div>
      );
    }

    if (this.props.error) {
      return (
        <section className="p-4">
          <h1 className="h1">An error occurred while fetching data</h1>
        </section>
      );
    }

    return (
      <WithNavbar currentUser={this.props.currentUser}>
        <BrowserRouter basename={getBaseName()}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/second-page" component={SecondPage} />
          </Switch>
        </BrowserRouter>
      </WithNavbar>
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
