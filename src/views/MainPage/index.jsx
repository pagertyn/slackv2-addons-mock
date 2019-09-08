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
  TabContent, TabPane, Nav, NavItem, NavLink,
  Container,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import { IncomingMessage } from 'http';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      activeTab: '1',
      slackAuth: false,
      firstTimeThru: true,
      workspaceTab: false,
      channelTab: false,
      emailSelected: true,
      unlockTabs: false
    };
  }

  async componentDidMount() {
    // await some data from the back end
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.setState({ loaded: true });
  }

  // Tab toggling things
  // this.toggle = this.toggle.bind(this);


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  

  render(props) {
    const logoStyle = {
      width: "45px",
      marginRight: "12px"
    }

    const toggleAllBox = document.querySelector('input[name="MSTeamsToggleAll"]');
    console.log(toggleAllBox);
    const ToggleChecks = () => document.querySelector("input[name='toggleAllMSTeams']");


    // Fake authorization

      const fakeAuth = () => {
        alert("Let's pretend this is a Slack authoization screen and you selected a workspace called SuperStore Inc.");
        this.setState({
          slackAuth: true,
          workspaceTab: true,
          activeTab:'2'
        });
        this.componentDidMount();
      }

    // Migrate Channels Selected

    const migrateSelected = () => {
      this.setState({
        slackAuth: true,
        channelTab: true,
        activeTab:'3'
      });
    }

    // Email Owners

    const emailOwners = () => { alert("Placeholder for future feature where owners are emailed that they have channels to migrate.") };

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
                    

                  </div>
                </Col>

              </Row>

              <Row className="mb-1">
                <Col>
                  <Nav className="nav-underlines nav">
                    <NavItem>
                      {/* <RouterNavLink to="#" className="nav-link active">
                        Workspaces
                      </RouterNavLink> */}
                      <NavLink
                        className={classnames({ active:  this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}>
                        Migration
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      {/* <RouterNavLink to="#" className="nav-link active">
                        Workspaces
                      </RouterNavLink> */}
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2', disabled: this.state.workspaceTab === false })}
                        onClick={() => { this.toggle('2'); }}>
                        Workspaces
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      {/* <RouterNavLink to="#" className="nav-link">
                        Service Channels
                      </RouterNavLink> */}
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '3', disabled: this.state.channelTab === false })}
                        onClick={() => { this.toggle('3'); }}>
                        Service Channels
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
              <Row>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <div className="alert alert-success" role="alert">
                      <span className="sr-only">Slack V2 requires a bit of setup.</span>
                      <h4 className="alert-heading"><span class="badge badge-pill badge-success mr-1">STEP 1 of 3</span>  Migrate and Upgrade Slack V1 to V2 </h4>
                      <hr/>
                      <p className="fs-sm">
                        In order to make use of the new features in the updated Slack integration, PagerDuty requires additional permissions for access to your Slack workspace. These permissions also enable a seamless upgrade experience from the existing Slack application and allow you to migrate all channels on a Team-by-Team or Service-by-Service level. 
                      </p>
                      <p  className="fs-sm">
                        To authorize the PagerDuty Slack V2 Integration, you must administrative privileges in PagerDuty and the ability to install applications into your Slack workspace. Once you have installed the PagerDuty Slack app to your Slack workspace, Team or Service owners will be able to initiate the migration process when they are ready.</p>
                    
                        <button className="btn btn-primary mr-1" onClick={() => { fakeAuth() }}>Authorize Slack V2</button>
                        
                      <a  className="alert-link float-right">Another time, thanks.</a>
                    </div>

                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                      <Row className="d-flex flex-wrap">
                        <Col className="col-lg-9 col-12 flex-grow-1">
                        <div className="alert alert-success" role="alert">
                          <span className="sr-only"></span>
                          <h4 className="alert-heading"><span class="badge badge-pill badge-success mr-1">STEP 2 of 3</span>  Success!</h4>
                          <hr/>
                          <p className="fs-sm">
                            This PagerDuty account is now authorized to the workspaces below. You can return to this tab to manage your Workspace connections, or add additional workspace permissions at any time.
                          </p>
                          <p className="fs-sm">You and any Team or Service owners are now able to migrate existing PagerDuty Service's or Team's Slack channel extensions. </p>
                        
                            <button className="btn btn-primary mr-1" onClick={() => { migrateSelected() }}>Migrate Channels</button>
                            <button className="btn btn-primary mr-1" onClick={() => { emailOwners() }}>Email the Owners</button>
                            
                          <a  className="alert-link float-right">I'm good for now.</a>
                        </div>
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
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row className="d-flex flex-wrap">
                      <Col className="col-9 flex-grow-1">
                        <div className="alert alert-success" role="alert">
                          <span className="sr-only"> </span>
                          <h4 className="alert-heading">
                            <span className="badge badge-pill badge-success mr-1">STEP 3 of 3</span>
                            Migrating Service Channel Connections
                          </h4>
                          <hr/>
                          <p className="fs-sm">
                            The table below lists all the PagerDuty service and Slack channel connections created through the Slack V1 extension that currently exist within the workspaces you've authorized on the <a href="#">previous tab</a>.
                          </p>
                          <p className="fs-sm">You and any Team or Service owners are now able to migrate existing PagerDuty Service's or Team's Slack channel extensions. </p>
                        </div>
                      </Col>
                      <Col className="col-lg-3 col-12 mb-2 flex-grow-1 mb-1">
                        <p className="ml-1">What is a Service Channel?</p>
                        <p className="ml-1 fs-sm">A service channel represents the connection between a PagerDuty service and a slack channel. It is the channel where interactive notifications will be pushed to, and from where you can take action on those incidents from within Slack.</p>
                      </Col>
                      </Row>
                      <Row>
                        <Col>
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
                  </TabPane>
                </TabContent>
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
