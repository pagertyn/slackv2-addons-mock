import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PdxLoading } from '@pagerduty/pd-react-components';
import { fetchCurrentUser } from '../../actions/current-user';
import {
  redirectToSignIn,
  isSignedInByMetadata,
  isUserDataValid,
  hasFeatureToggle
} from '../../util/current-user';
import { redirectTo } from '../../util/general';
import getEnvironment from '../../util/environment';
import config from '../../config/app';
import MainPage from '../MainPage';
import SecondPage from '../SecondPage';
import ErrorPage from '../ErrorPage';
import NotFoundPage from '../NotFoundPage';

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
    // user metadata is not in the page
    if (!isSignedInByMetadata()) {
      redirectToSignIn();
      return;
    }

    // fetch user data using user id and account id from page metadata
    await this.props.fetchCurrentUser();

    // fetch error is 401 Unauthorized OR some other fetch error
    if (this.props.error) {
      if (isAuthError(this.props.error)) {
        redirectToSignIn();
        return;
      }
      redirectTo('/error');
      return;
    }

    // user data is bad
    if (!isUserDataValid(this.props.currentUser)) {
      redirectToSignIn();
      return;
    }

    // missing the feature toggle
    if (!hasFeatureToggle(this.props.currentUser)) {
      redirectTo('/error');
      return;
    }

    this.setState({ loaded: true });
  }

  render() {
    if (!this.state.loaded) {
      return (
        <main role="main">
          <h1 className="h1 sr-only">PagerDuty</h1>
          <div className="p-3"><PdxLoading center /></div>
        </main>
      );
    }

    return (
      <BrowserRouter basename={getBaseName()}>
        {this.state.loaded && (
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/second-page" component={SecondPage} />
            <Route exact path="/error" component={ErrorPage} />
            <Route component={NotFoundPage} />
          </Switch>
        )}
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
