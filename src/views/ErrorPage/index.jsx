import React from 'react';
import { PdxLayout } from '@pagerduty/pd-react-components';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';
import Metadata from '../Metadata';

const ErrorPage = () => (
  <React.Fragment>
    <Metadata>
      <title>Error!</title>
    </Metadata>
    <PdxLayout>
      <Container>
        <Row>
          <Col>
            <div className="pd-full-page-centered d-flex align-items-center justify-content-center">
              <h1 className="display-4">Oops, something went wrong.</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <span className="pd-full-page-centered d-flex align-items-center justify-content-center">
                There was an error loading the page. Check your url and make sure
                you have access. You can check our status page for open incidents.
                </span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </PdxLayout>
  </React.Fragment>
);

export default ErrorPage;
