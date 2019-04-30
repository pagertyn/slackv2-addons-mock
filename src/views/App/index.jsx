import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  PdxErrorPage,
  PdxLayout,
  PdxLoading,
  PdxNotFoundPage
} from '@pagerduty/pd-react-components';
import { Helmet } from 'react-helmet';
import { fetchFeData } from 'src/features/fe-data/actions';
import {
  redirectToSignIn,
  isSignedInByMetadata,
  isUserDataValid,
  hasFeatureToggle
} from 'src/features/fe-data/user/util';
import getEnvironment from 'src/util/environment';
import config from 'src/config/app';
import MainPage from 'src/views/MainPage';
import SecondPage from 'src/views/SecondPage';

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
    await this.props.fetchFeData();

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
    if (this.state.loaded && !this.hasFeature) {
      const errorMessage = 'You do not have access to this feature.';
      return <PdxErrorPage message={errorMessage} />;
    }

    return (
      <BrowserRouter basename={getBaseName()}>
        <PdxLayout>
          <Helmet defaultTitle="PagerDuty" titleTemplate="%s | PagerDuty" />

          {!this.state.loaded && (
            <div className="h-100">
              <PdxLoading center />
            </div>
          )}

          {this.state.loaded && (
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/second-page" component={SecondPage} />
              <Route component={PdxNotFoundPage} />
            </Switch>
          )}
        </PdxLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.feData.user,
  currentAccount: state.feData.account,
  isFetching: state.feData.isFetching,
  error: state.feData.error
});
const mapActionsToProps = { fetchFeData };
export default connect(mapStateToProps, mapActionsToProps)(App);
