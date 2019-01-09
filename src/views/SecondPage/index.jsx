import React, { Component } from 'react';
import { PdxLoading } from '@pagerduty/pd-react-components';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class SecondPage extends Component {
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
            <h1 className="h1">Another Page</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {!this.state.loaded &&
              <div className="pd-full-page-centered d-flex align-items-center justify-content-center">
                <PdxLoading />
              </div>
            }
            {this.state.loaded &&
              <React.Fragment>
                <p>This is another page.</p>
                <p><Link to="/">Go back</Link></p>
              </React.Fragment>
            }
          </Col>
        </Row>
      </section>
    );
  }
}

export default SecondPage;
