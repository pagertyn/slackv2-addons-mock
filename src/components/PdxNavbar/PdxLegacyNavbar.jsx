import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from 'reactstrap';

import './PdxLegacyNavbar.css';

const PdxLegacyNavbar = ({ currentUser }) => (
  <Navbar className="legacy" color="light" dark expand="lg">
    <NavbarBrand href="/">Pagerduty</NavbarBrand>

    <Nav className="mr-auto" navbar>
      <NavItem>
        <NavLink href="/">Incidents</NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="/">Alerts</NavLink>
      </NavItem>

      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Configuration
        </DropdownToggle>
        <DropdownMenu left="true" className="dark">
          <DropdownItem>
            Schedules
          </DropdownItem>
          <DropdownItem>
            Services
          </DropdownItem>
          <DropdownItem>
            Event Rules
            {' '}
            <Badge color="dark">New</Badge>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Analytics
        </DropdownToggle>
        <DropdownMenu left="true" className="dark">
          <DropdownItem>
            Operations Health
          </DropdownItem>
          <DropdownItem>
            Operational Reviews
            {' '}
            <Badge color="dark">New</Badge>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Postmortems
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>

    <UncontrolledDropdown>
      <DropdownToggle nav caret>
        <Badge color="default" className="question-mark-badge">New</Badge>
        <span className="question-mark">?</span>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          Help
        </DropdownItem>
        <DropdownItem>
          Contact Support
        </DropdownItem>
        <DropdownItem>
          Community Discussions
        </DropdownItem>
        <DropdownItem>
          What&apos;s New in PagerDuty
          {' '}
          <span className="red-dot" />
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>

    <UncontrolledDropdown>
      <DropdownToggle nav caret>
        <img src="https://www.gravatar.com/avatar/21e204e34914c10fc225a1537337aad6?s=60&amp;d=mm" size="30" width="30" height="30" alt="Andrew Zamojc" title="Andrew Zamojc" />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <div className="d-flex">
            <img src="https://www.gravatar.com/avatar/21e204e34914c10fc225a1537337aad6?s=60&amp;d=mm" size="30" width="30" height="30" alt="Andrew Zamojc" title="Andrew Zamojc" />
            <div className="ml-1">
              <div>{currentUser.name}</div>
              <div>{currentUser.email}</div>
            </div>
          </div>
        </DropdownItem>
        <DropdownItem>
          My Profile
        </DropdownItem>
        <DropdownItem>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Navbar>
);

export default PdxLegacyNavbar;
