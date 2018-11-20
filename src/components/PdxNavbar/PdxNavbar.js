import React from 'react';

const PdxNavbar = ({ currentUser }) => (
  <div className="bg-dark p-2 h-100" style={{ minHeight: '100vh' }}>
    <svg className="w-75" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 40">
      <path fill="#4caf50" d="M32.2 14.5a4.4 4.4 0 0 0-2.8-2.3 5 5 0 0 0-1.6-.3h-8.6v3.4h8.6c.4 0 .8.1 1.1.4.3.3.4.6.4 1.1v1.5h-6.6c-.9 0-1.7.2-2.3.5a4.4 4.4 0 0 0-2.3 2.8 5 5 0 0 0 .2 3.9 4.4 4.4 0 0 0 2.8 2.3 5 5 0 0 0 1.6.3h5c.9 0 1.7-.2 2.3-.5a4.4 4.4 0 0 0 2.3-2.8 5 5 0 0 0 .3-1.6v-6.4c.1-.9 0-1.7-.4-2.3zm-2.9 8.7c0 .4-.1.8-.4 1.1-.3.3-.6.4-1.1.4h-5c-.4 0-.8-.1-1.1-.4-.3-.3-.5-.6-.5-1.1 0-.4.1-.8.4-1.1.3-.3.6-.4 1.1-.4h6.6v1.5zM61.4 21.7c.9 0 1.7-.2 2.3-.5a5 5 0 0 0 2.4-2.8 5 5 0 0 0-.2-3.9 5 5 0 0 0-2.8-2.4 5 5 0 0 0-1.6-.3h-5.1c-.9 0-1.7.2-2.3.5a5 5 0 0 0-2.4 2.8 5 5 0 0 0-.3 1.6v6.5c0 .9.2 1.7.5 2.3a4.4 4.4 0 0 0 2.8 2.3 5 5 0 0 0 1.6.3h9.5v-3.4h-9.5c-.4 0-.8-.1-1.1-.4-.3-.3-.4-.6-.4-1.1v-1.5h6.6zm-6.6-4.9c0-.4.1-.8.4-1.1.3-.3.6-.4 1.1-.4h5.1c.4 0 .8.1 1.1.4.3.3.4.6.4 1.1 0 .4-.1.8-.4 1.1-.3.3-.6.4-1.1.4h-6.6v-1.5zM91 28.1h-5.4c-1.9 0-3.1-.8-3.7-1.4-1.2-1.3-1.2-3-1.2-3.5v-6.5c0-1.9.8-3 1.4-3.6 1.3-1.2 3-1.3 3.5-1.2h6.8V6h3.5v17.3c0 1.8-.7 2.9-1.3 3.5-1.4 1.3-3.2 1.3-3.6 1.3zm-6.8-4.7c0 .2 0 .7.3 1 .3.3.7.3 1.1.3H91c1.4 0 1.4-1 1.4-1.4v-8h-6.9c-.2 0-.7.1-1 .3-.2.2-.3.6-.3 1.1v6.7zM4.5 34H1V16.6c0-1.8.7-2.9 1.3-3.5a5.6 5.6 0 0 1 3.5-1.4h5.4c1.9 0 3.1.8 3.7 1.4 1.2 1.3 1.2 3 1.2 3.5v6.5c0 1.9-.8 3-1.4 3.6a4.7 4.7 0 0 1-3.5 1.2H4.5V34zm6.9-9.3c.2 0 .7-.1 1-.3.2-.2.3-.6.3-1.1v-6.7c0-.2 0-.7-.3-1-.3-.3-.7-.3-1.1-.3H5.8c-1.4 0-1.4 1-1.4 1.4v8h7zM71.2 28.1h-3.5V16.7c0-1.8.7-2.9 1.3-3.5a5.6 5.6 0 0 1 3.5-1.4h6.7v3.5h-6.7c-1.4 0-1.4 1-1.4 1.4v11.4zM102.5 28.2c-.3 0-2.1-.1-3.5-1.4a4.7 4.7 0 0 1-1.3-3.4V11.8h3.5v11.5c0 .8.3 1 .5 1.2.3.2.7.2.9.2h6.8V11.8h3.5v16.3l-10.4.1zM44.6 33.8h-8.2v-3.5h8.2c.9 0 1.2-.3 1.4-.7l.3-1v-.7h-6.5c-.4 0-2.3 0-3.7-1.3-.7-.6-1.5-1.8-1.5-3.8v-6c0-.4 0-2.3 1.3-3.7.6-.7 1.8-1.5 3.8-1.5h4.9c2 0 5.1 1.4 5.1 5.1v11.9c-.1 2.2-1.5 5.2-5.1 5.2zm-6.6-17v6.1c0 .6.1 1 .4 1.3.4.4 1.1.4 1.1.4H46.2v-7.7c0-.9-.4-1.2-.7-1.4-.4-.2-.9-.2-.9-.2h-4.9c-.6 0-1 .1-1.3.4-.4.3-.4.9-.4 1.1zM141.5 33.9h-8.2v-3.5h8.2c.9 0 1.2-.3 1.3-.7l.3-1v-.6h-6.5c-2 0-3.2-.8-3.8-1.5-1.3-1.4-1.3-3.2-1.3-3.7V11.8h3.5v11.3c0 .2.1.8.4 1.2.2.3.7.4 1.3.4h6.5V11.8h3.5v17c-.1 2.1-1.5 5.1-5.2 5.1zM123.8 28.2h-3.5V15.3h-5.8v-3.5h5.8V7.4h3.5v4.4h5.9v3.5h-5.9z" />
    </svg>
    <span className="d-block text-white-50 small mb-1">pdt-circular</span>

    <nav className="nav nav-global nav-global-hover navbar-dark flex-column nav-pills mr-auto">
      <a className="nav-link" href="/incidents">Incidents</a>
      <a className="nav-link" href="/alerts">Alerts</a>
      <div className="dropdown">
        <a className="nav-link dropdown-toggle active" role="button" aria-haspopup="true" aria-expanded="false" href="/">Configuration</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/schedules">Schedules</a>
          <a className="dropdown-item" href="/services">Services</a>
          <a className="dropdown-item active" href="/maintenance-windows">Maintenance Windows</a>
          <a className="dropdown-item" href="/rules">
Event Rules
            <span className="badge badge-primary">NEW</span>
          </a>
          <a className="dropdown-item" href="/escalation_policies">Escalation Policies</a>
          <a className="dropdown-item" href="/response_plays">Response Plays</a>
          <a className="dropdown-item" href="/users">Users</a>
          <a className="dropdown-item" href="/teams">Teams</a>
          <a className="dropdown-item" href="/api_keys">API Access</a>
          <a className="dropdown-item" href="/extensions">Extensions</a>
          <a className="dropdown-item" href="/incident_priorities">
Incident Priorities
            <span className="badge badge-primary">NEW</span>
          </a>
          <a className="dropdown-item" href="/account/settings/subscription">Account Settings</a>
        </div>
      </div>
      <div className="dropdown">
        <a className="nav-link dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" href="/">Analytics</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/ohms">Operations Health</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="/operational_reviews">Operational Reviews</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="/reports#notifications">Notification Volume</a>
          <a className="dropdown-item" href="/reports#incidents">Incident Volume</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="/reports#system">System Report</a>
          <a className="dropdown-item" href="/reports#team">Team Report</a>
          <a className="dropdown-item" href="/reports#user">User Report</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="/postmortems">Postmortems</a>
        </div>
      </div>
      <div className="dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Add-ons
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Product Operability</a>
          <a className="dropdown-item" href="/">PD Uptime (Wormly)</a>
          <a className="dropdown-item" href="/">Popular PD Integrations (inbound)</a>
          <a className="dropdown-item" href="/">Live Call Routing</a>
          <a className="dropdown-item" href="/">PD Visualized (beta)</a>
          <a className="dropdown-item" href="/">SleepyDuty</a>
        </div>
      </div>
      <a className="nav-link" href="/visibility">Visibility</a>
      <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Apps
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">App Directory</a>
          <a className="dropdown-item" href="/">Sleepy-Duty</a>
        </div>
      </div>
      <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Help
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="https://support.pagerduty.com/docs/quick-start-guide" target="_blank" rel="noopener noreferrer">Quick Start Guide</a>
          <a className="dropdown-item" href="https://tickets.pagerduty.com/hc/en-us/requests/new" target="_blank" rel="noopener noreferrer">Contact Support</a>
          <a className="dropdown-item" href="https://community.pagerduty.com" target="_blank" rel="noopener noreferrer">Community Discussions</a>
          <a className="dropdown-item" href="https://www.pagerduty.com/whats-new/" target="_blank" rel="noopener noreferrer">What&apos;s New in PagerDuty</a>
        </div>
      </div>
      <div className="nav-divider" />
      <div className="nav-global-footer text-light dropdown">
        <div className="nav-global-footer-user">
          <img className="user__avatar" src="//placekitten.com/150/150" alt="Clifford Carson" />
          <div className="user__details">
            <div className="user__name" title="Wendy Carson The Third Jr.">
              Wendy Carson The Third Jr.
            </div>
            <div className="user__on-call-status">
              <div className="on-call-status__indicator" />
              <div className="on-call-status__label">
                on-call now
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-menu nav-global-footer-links text-light">
          <a href="/users/{currentUser.id}/on-call" className="dropdown-item">On-Call Schedule</a>
          <a href="/users/{currentUser.id}?tab=user_settings" className="dropdown-item">Settings</a>
          <a href="/sign_out" className="dropdown-item">Sign Out</a>
        </div>
      </div>
    </nav>
  </div>
);

export default PdxNavbar;
