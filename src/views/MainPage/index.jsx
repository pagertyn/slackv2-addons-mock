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
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Metadata from 'src/views/Metadata';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.pageTitle = 'Homepage';
    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <React.Fragment>

        <Metadata>
          <title>{this.pageTitle}</title>
        </Metadata>

        <div className="d-flex flex-column h-100">
          <Container className="pb-4 pt-4 flex-grow-1 d-flex flex-column">

            <Row>
              <Col>
                <h1 className="h1 font-weight-normal">{this.pageTitle}</h1>
              </Col>
              <Col sm="auto" className="mb-1">
                <Link to="/second-page" className="a11y-link">Action Item on Another Page</Link>
              </Col>
            </Row>

            <Row>
              <Col>
                {!this.state.loaded && (
                  <Row>
                    <Col>
                      <PdxLoading center />
                    </Col>
                  </Row>
                )}
                {this.state.loaded && (
                  <Card body>
                    <CardTitle tag="h2">Hello World!</CardTitle>
                    <p>Congratulations on setting up the PagerDuty React Skeleton App.</p>
                    <p>
                      You are ready to start building.
                      Take a look at the
                      {' '}
                      <a href="https://pagerduty.github.io/frontend-docs">PagerDuty Front-End Docs</a>
                      .
                    </p>

                    <CardTitle tag="h3">Mock User Data</CardTitle>
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
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.feData.user,
  currentAccount: state.feData.account,
});
export default connect(mapStateToProps)(MainPage);
