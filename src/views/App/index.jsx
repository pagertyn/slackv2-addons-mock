import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PdxLoading, WithNavbar } from '@pagerduty/pd-react-components';
import { fetchCurrentUser } from '../../actions/current-user';
import getEnvironment from '../../util/environment';
import appConfig from '../../config/app';
import MainPage from '../MainPage';
import SecondPage from '../SecondPage';

const getBaseName = () => {
  if (getEnvironment() === 'development') return '';
  return appConfig.APP_NAME;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    await this.props.fetchCurrentUser();
    this.setState({ loaded: true });
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div className="pd-full-page d-flex align-items-center justify-content-center">
          <PdxLoading />
        </div>
      );
    }
    if (this.props.isError) { return (<div>An error occurred while fetching data</div>); }
    return (
      <WithNavbar currentUser={this.props.currentUser}>
        {this.state.loaded
          && (
            <BrowserRouter basename={getBaseName()}>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/second-page" component={SecondPage} />
              </Switch>
            </BrowserRouter>
          )
        }
      </WithNavbar>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser.user,
  isFetching: state.currentUser.isFetching,
  isError: state.currentUser.error !== null
});
const mapActionsToProps = { fetchCurrentUser };
export default connect(mapStateToProps, mapActionsToProps)(App);
