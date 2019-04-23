import React, { Component } from 'react';
import { PdxLoading } from '@pagerduty/pd-react-components';
import {
  Row,
  Card,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Metadata from '../Metadata';

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.pageTitle = 'Another Page';
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
          <Container className="pb-4 pt-2 flex-grow-1 d-flex flex-column">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/">React Skeleton App</Link></BreadcrumbItem>
              <BreadcrumbItem active>{this.pageTitle}</BreadcrumbItem>
            </Breadcrumb>

            <Row>
              <Col>
                <h1 className="h1 font-weight-normal">{this.pageTitle}</h1>
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
                    <p>This is another page.</p>
                    <p><Link to="/">Go back</Link></p>
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

export default SecondPage;
