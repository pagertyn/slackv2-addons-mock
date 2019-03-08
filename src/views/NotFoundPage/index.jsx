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

const NotFoundPage = () => (
  <React.Fragment>
    <Metadata>
      <title>Page not found</title>
    </Metadata>
    <PdxLayout>
      <Container>
        <Row>
          <Col>
            <div className="pd-full-page-centered d-flex align-items-center justify-content-center">
              <h1 className="display-4">Oops, Page Not Found</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <span className="pd-full-page-centered d-flex align-items-center justify-content-center">
                  Whatever you were looking for is not here. Check your url and try again.
                </span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </PdxLayout>
  </React.Fragment>
);

export default NotFoundPage;
