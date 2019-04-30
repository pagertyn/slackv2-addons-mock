import React, { Component } from 'react';
import { PdxLoading } from '@pagerduty/pd-react-components';
import {
  Card,
  Container,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class SecondPage extends Component {
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
          <title>Another Page</title>
        </Helmet>

        <Container className="pb-4 h-100 d-flex flex-column">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/">React Skeleton App</Link></BreadcrumbItem>
            <BreadcrumbItem active>Another Page</BreadcrumbItem>
          </Breadcrumb>

          <h1 className="h1 font-weight-normal">This is Another Page</h1>

          {!this.state.loaded && (
            <div className="flex-grow-1">
              <PdxLoading center />
            </div>
          )}

          {this.state.loaded && (
            <Card body className="flex-grow-0 mb-n1">
              <p>This is another page.</p>
              <p className="mb-0">
                <Link to="/">Go back</Link>
              </p>
            </Card>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default SecondPage;
