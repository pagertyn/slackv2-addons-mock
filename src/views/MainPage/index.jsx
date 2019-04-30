import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  PdxLoading
} from '@pagerduty/pd-react-components';
import {
  Row,
  Card,
  CardTitle,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    // await some data from the back end
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.setState({ loaded: true });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>React Skeleton App</title>
        </Helmet>

        <Container className="pb-4 h-100 d-flex flex-column">
          <Breadcrumb>
            <BreadcrumbItem>React Skeleton App</BreadcrumbItem>
          </Breadcrumb>

          <Row>
            <Col>
              <h1 className="h1 font-weight-normal">Welcome to the React Skeleton App</h1>
            </Col>
            <Col sm="auto" className="mb-1">
              <Link to="/second-page" className="a11y-link">Link to Another Page</Link>
            </Col>
          </Row>

          {!this.state.loaded && (
            <div className="flex-grow-1">
              <PdxLoading center />
            </div>
          )}

          {this.state.loaded && (
            <Card body className="flex-grow-0">
              <CardTitle tag="h2">Hello World!</CardTitle>

              <p>Congratulations on setting up the PagerDuty React Skeleton App.</p>
              <p>
                You are ready to start building.
                Take a look at the
                {' '}
                <a href="https://pagerduty.github.io/frontend-docs">PagerDuty Front-End Docs</a>
                .
              </p>

              <CardTitle tag="h2" className="mt-2">Mock User Data</CardTitle>

              Logged in user and account data comes for free with your PD React app.
              For example:
              <ul style={{ listStyle: 'none' }}>
                <li>{`User ID: ${this.props.currentUser.id}`}</li>
                <li>{`User Name: ${this.props.currentUser.name}`}</li>
                <li>{`User Email: ${this.props.currentUser.email}`}</li>
                <li>{`Account ID: ${this.props.currentAccount.id}`}</li>
                <li>{`Account Subdomain: ${this.props.currentAccount.subdomain}`}</li>
                <li>{`Account Name: ${this.props.currentAccount.name}`}</li>
              </ul>
            </Card>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.feData.user,
  currentAccount: state.feData.account,
});
export default connect(mapStateToProps)(MainPage);
