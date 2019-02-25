import React, { Component } from 'react';
import { PdxLoading, PdxLayout } from '@pagerduty/pd-react-components';
import {
  Button,
  Row,
  Card,
  CardBody,
  Col,
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <PdxLayout>
        <Container>
          <Row>
            <Col>
              <h1 className="h1 mb-2">Hello World</h1>
            </Col>
            <Col>
              <div className="d-flex justify-content-end">
                <Button>New Item</Button>
              </div>
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
                <Card>
                  <CardBody>
                    <p>Main page content goes here inside this white box.</p>
                    <p>
                      Read more about how to build apps in the
                      {' '}
                      <a href="https://pagerduty.github.io/frontend-docs">PagerDuty Front-End Docs</a>
                      .
                    </p>
                    <p>
                      Go to the
                      {' '}
                      <Link to="/second-page">second example page</Link>
                      .
                    </p>
                  </CardBody>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </PdxLayout>
    );
  }
}

export default MainPage;
