import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCurrentUserData } from '../../actions/current-user';
import PdxLoading from '../../components/PdxLoading';
import WithNavbar from '../../components/PdxNavbar/WithNavbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    await this.props.loadCurrentUserData();
    this.setState({ loaded: true });
  }

  render() {
    if (this.props.isFetching) { return <PdxLoading />; }
    if (this.props.isError) { return (<div>An error occurred while fetching data</div>); }
    return (
      <WithNavbar currentUser={this.props.currentUser}>
        {this.state.loaded && <div>Your app here!</div>}
      </WithNavbar>
    );
  }
}


const mapStateToProps = state => ({
  currentUser: state.currentUser.user,
  isFetching: state.currentUser.isFetching,
  isError: state.currentUser.isError
});
const mapActionsToProps = { loadCurrentUserData };
export default connect(mapStateToProps,mapActionsToProps)(App);
