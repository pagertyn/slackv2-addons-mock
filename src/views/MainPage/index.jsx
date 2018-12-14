import React, { Component } from 'react';
import { PdxLoading } from '@pagerduty/pd-react-components';
import { Button, Row, Col } from 'reactstrap';
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
    if (!this.state.loaded) {
      return (
        <div className="pd-full-page-centered d-flex align-items-center justify-content-center">
          <PdxLoading />
        </div>
      );
    }
    return (
      <section className="p-4">
        <Row>
          <Col>
            <h1 className="h1">Hello World</h1>
          </Col>
          <Col>
            <div className="d-flex justify-content-end">
              <Button>New Item</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Page content goes here.</p>
            <p>
              Take a look at the
              {' '}
              <a href="https://pagerduty.github.io/frontend-docs">PagerDuty Front-End Docs</a>
               to get started.
            </p>
            <p>
              Go to the
              {' '}
              <Link to="/second-page">second example page</Link>
              .
            </p>
          </Col>
        </Row>
      </section>
    );
  }
}

export default MainPage;
