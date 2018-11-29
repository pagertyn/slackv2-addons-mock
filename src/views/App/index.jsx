import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PdxLoading, WithNavbar } from '@pagerduty/pd-react-components';
import { fetchCurrentUser } from '../../actions/current-user';

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
          && <h1 className="display-1 text-center mt-5">Your app here!</h1>
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
