import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  PdxLoading,
  PdxPaginator
} from '@pagerduty/pd-react-components';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import {
  Row,
  Card,
  CardTitle, CardText,
  Button,
  Col,
  TabContent, TabPane, Nav, NavItem,
  Container,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
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
    const logoStyle = {
      width: "45px",

      marginRight: "12px"
    }

    const toggleAllBox = document.querySelector('input[name="MSTeamsToggleAll"]');
    console.log(toggleAllBox);
    const ToggleChecks = () => document.querySelector("input[name='toggleAllMSTeams']");

    return (
      <React.Fragment>
        <Helmet>
          <title>Slack V2 Settings</title>
        </Helmet>

        <Container className="pb-4 h-100 d-flex flex-column">
          <Breadcrumb>
            <BreadcrumbItem>Integrations > Slack V2</BreadcrumbItem>
          </Breadcrumb>


          {!this.state.loaded && (
            <div>
              <PdxLoading center />
            </div>
          )}

          {this.state.loaded && (

            <div>
              <Row>
                <Col>
                  <h1 className="h1 font-weight-normal">
                    <img style={logoStyle} src="https://www.stickpng.com/assets/images/5cb480cd5f1b6d3fbadece79.png" alt="Microsoft Teams Logo"/>
                    Slack V2
                  </h1>
                </Col>

              </Row>
              <Row>
                <Col>
                  <div>
                    <p className="fs-s">
                      Welcome, {this.props.currentUser.name}!
                      {/* Text that displays if user does not have permission to edit settings. This can later flow into ability to render edit options. */}
                      { (this.props.currentUser.role <= 2) ? ('You currently <em>do not </em> have permissions to edit MS Teams configuration for your PagerDuty account.') : ``}
                  
                    </p>
                    <p>Here you will be able to configure your Slack workspaces, notification channels, and migrate old Slack V1 to our new integration.</p>
                    <div className="alert alert-info" role="alert">
                      <span className="sr-only">Slack V2 requires a bit of setup.</span>
                      <h4 className="alert-heading">Migrate and Upgrade Slack V1 to V2</h4>
                      <hr/>
                      <p className="fs-sm">
                        In order to make use of the new features in the updated Slack integration, PagerDuty requires additional permissions to your Slack workspace. These permissions also enable a seamless upgrade experience from the existing Slack application and allow you to migrate on a Team-by-Team or Service-by-Service level. 
                      </p>
                      <p  className="fs-sm">
                        To map your PagerDuty account to your Slack workspace, you will require administrative privileges in PagerDuty and the ability to install applications into your Slack workspace. Once you have installed the PagerDuty Slack app to your Slack workspace, Team or Service owners will be able to initiate the migration process when they are ready.</p>
                     
                        <Link to="/second-page"><button className="btn btn-secondary mr-1">Begin Migration</button></Link>
                        
                      <a  className="alert-link float-right">Another time, thanks.</a>
                    </div>


                  </div>
                </Col>

              </Row>

              <Row>
                <Col>
                  <Nav className="nav-underlines nav">
                    <NavItem>
                      <RouterNavLink to="#" className="nav-link active">
                        Workspaces
                      </RouterNavLink>
                    </NavItem>
                    <NavItem>
                      <RouterNavLink to="#" className="nav-link">
                        Service Channels
                      </RouterNavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>

              <Row className="d-flex flex-wrap">
                <Col className="col-lg-9 col-12 flex-grow-1">
                  <Card body className="mb-lg-2 mb-1">
                    <CardTitle tag="h2">Slack Workspaces</CardTitle>
                    <table className="table table-hover">
                    <caption className="sr-only">Table for managing which MS Teams the PagerDuty integration is installed on.</caption>
                      <thead>
                        <tr>
                          <th scope="col"><input type="checkbox" name="toggleAllMSTeams" value="toggleAll"/></th>
                          <th scope="col">Workspace</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row"><input type="checkbox" name="" value=""/></td>
                          <td scope="row">SuperStore Inc.</td>
                          <td scope="row" ><button className="btn btn-danger btn-sm">Uninstall</button></td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <Button className="btn btn-danger btn-sm">Uninstall Selected</Button>
                    </div>

                  </Card>
                </Col>
                <Col className="col-lg-3 col-12 mb-2 flex-grow-1 mb-1">
                  <p className="ml-1">What is a Slack Workspace?</p>
                  <p className="ml-1 fs-sm">A Slack Workspace is a shared hub made up of channels where a team or organization's members can communicate and work together. Previously, V1 webhooks only connected to specified channels within your workspace. V2 links your PagerDuty account to the entire workspace, enabling better cross-channel communication and a variety of new features. Learn more <a href="#">here</a>.</p>
                </Col>
              </Row>
              <Row className="d-flex flex-wrap">
                <Col className="col-12 flex-grow-1">
                  <Card body className="mb-lg-2 mb-1">
                  <CardTitle tag="h2">Service Channels</CardTitle>
                    <table className="table table-hover">
                    <caption className="sr-only">Table for managing which MS Teams the PagerDuty integration is installed on.</caption>
                      <thead>
                        <tr>
                          <th scope="col"><input type="checkbox" name="toggleAllMSTeams" value="toggleAll"/></th>
                          <th scope="col">PD Team</th>
                          <th scope="col">PD Service</th>
                          <th scope="col">Slack Workspace</th>
                          <th scope="col">Slack Channel</th>
                          <th scope="col">Version</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row"><input type="checkbox" name="" value=""/></td>
                          <td scope="row">Retail Operations</td>
                          <td scope="row">Checkout Systems</td>
                          <td scope="row">SuperStore Inc.</td>
                          <td scope="row">#retail-monitoring</td>
                          <td scope="row"><span className="badge badge-warning">V1</span></td>
                          <td scope="row" >
                            <button className="btn btn-secondary btn-sm">Migrate to V2</button>
                            <button className="btn btn-secondary btn-sm">Edit Configuration</button>
                            <button className="btn btn-secondary btn-sm">Manage Notifications</button>
                            <button className="btn btn-secondary btn-sm">Remove</button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row"><input type="checkbox" name="" value=""/></td>
                          <td scope="row">Retail Operations</td>
                          <td scope="row">Scheduling Manager Service</td>
                          <td scope="row">SuperStore Inc.</td>
                          <td scope="row">#retail-monitoring</td>
                          <td scope="row"><span className="badge badge-warning">V1</span></td>
                          <td scope="row" >
                            <button className="btn btn-secondary btn-sm">Migrate to V2</button>
                            <button className="btn btn-secondary btn-sm">Edit Configuration</button>
                            <button className="btn btn-secondary btn-sm">Manage Notifications</button>
                            <button className="btn btn-secondary btn-sm">Remove</button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row"><input type="checkbox" name="" value=""/></td>
                          <td scope="row">Web & eCommerce</td>
                          <td scope="row">Webhook Transformers</td>
                          <td scope="row">SuperStore Inc.</td>
                          <td scope="row">#apis</td>
                          <td scope="row"><span className="badge badge-success">V2</span></td>
                          <td scope="row" >
                            <button className="btn btn-secondary btn-sm">Edit Configuration</button>
                            <button className="btn btn-secondary btn-sm">Manage Notifications</button>
                            <button className="btn btn-secondary btn-sm">Remove</button>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row"><input type="checkbox" name="" value=""/></td>
                          <td scope="row">Web & eCommerce</td>
                          <td scope="row">Search API</td>
                          <td scope="row">SuperStore Inc.</td>
                          <td scope="row">#apis</td>
                          <td scope="row"><span className="badge badge-success">V2</span></td>
                          <td scope="row" >
                            <button className="btn btn-secondary btn-sm">Edit Configuration</button>
                            <button className="btn btn-secondary btn-sm">Manage Notifications</button>
                            <button className="btn btn-secondary btn-sm">Remove</button>
                          </td>
                        </tr>
                        

                      </tbody>
                    </table>
                    <Row>
                      <Col className="dropdown">
                        <button className="btn  btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Bulk Actions
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Migrate to V2</a>
                          <a className="dropdown-item" href="#">Remove</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </Col>
                      <Col>
                        <PdxPaginator className=" btn-sm d-flex" currentPage={1} pageCount={5} />
                      </Col>
                    </Row>
                  </Card>
                </Col>
                
              </Row>
            </div>
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
