import config from 'src/config/app';

export default {
  current_user: {
    name: 'Some User',
    email: 'someuser@pagerduty.com',
    time_zone: 'America/New_York',
    color: 'midnight-blue',
    avatar_url: 'https://secure.gravatar.com/avatar/21e204e34914c10fc225a1537337aad6.png?d=mm&r=PG',
    billed: true,
    role: 'user',
    description: null,
    invitation_sent: false,
    job_title: null,
    id: 'ABCDEFG',
    type: 'user',
    summary: 'Some User',
    can_see_entire_account: false,
    can_see_operational_reviews: true,
    can_create_configure_archive_operational_reviews: true,
    toggles: [{ name: config.FEATURE_TOGGLE }]
  },
  current_account: {
    id: 'PFIGZHD',
    subdomain: 'pdt-circular',
    name: 'PagerDuty Internal Alerts',
    time_zone: 'America/Los_Angeles',
    state: 'active',
    plan: 'paid'
  },
  account_features: {
    features: [
      'ack_as_assignment',
      'advanced_event_actions',
      'advanced_reports',
      'advanced_reports_users_report',
      'advanced_urgencies',
      'alert_grouping_awareness',
      'allow_increased_targets_per_ep_level',
      'alpha_incident_indexing',
      'async_webhooks',
      'batch_resolve',
      'beta_alerts_list',
      'beta_api_user_tokens',
      'beta_custom_oet',
      'beta_ember_teams',
      'beta_event_transforms',
      'beta_new_event_rules_ui',
      'beta_pd_cef_ui',
      'beta_read_only_users',
      'beta_unreleased_cef_integrations_in_ui',
      'beta_websockets',
      'better_rvs',
      'bff_routing',
      'console_settings',
      'design_system',
      'dial_extensions',
      'email_parsers',
      'ember',
      'enable_artemis_notify_updates',
      'event_routing_priority',
      'example_app',
      'fast_schedules',
      'freshest_not_best',
      'get_incidents_from_artemis',
      'google_auth',
      'group_alerting_multi_ack',
      'group_alerting_polyrules',
      'grouped_nav',
      'hack_day_html_emails',
      'incident_resolve_confirm_dialog',
      'incidents_auto_refresh',
      'incidents_punting',
      'info_notification_rules',
      'kiosk_mode',
      'les_querier_cutover',
      'maintenance_mode',
      'manual_escalation',
      'manual_unacknowledge',
      'minute_zero_notifications',
      'new_alerts_page',
      'new_locking',
      'occ_custom_url_module',
      'occ_heatmap_module',
      'ochon_notify_advance',
      'on_call_api',
      'on_call_timeline',
      'oncall_handoffs',
      'operations_command_console',
      'operations_health',
      'permissions_service',
      'platform_ecosystem',
      'postmortem_realtime',
      'postmortem_tags',
      'preview_business_services',
      'preview_coordinated_response',
      'preview_event_routing',
      'preview_event_routing_field_selector',
      'preview_incident_alert_split',
      'preview_incident_command_console',
      'preview_incident_priority',
      'preview_incident_slack_channels',
      'preview_intelligent_alert_grouping',
      'preview_scheduled_event_rules',
      'preview_stakeholders',
      'preview_threshold_triggering',
      'preview_use_alert_severity_for_incident_urgency',
      'push_ochon',
      'response_automation',
      'response_bridge_on_response_plays',
      'responseplays_mobile_android_v1',
      'responseplays_mobile_ios_v1',
      'schedule_snapshots',
      'send_test_notification',
      'server_side_sessions',
      'similar_incidents',
      'single_sign_on',
      'slacktion',
      'sms_ochon',
      'stakeholder_comms_long_sms_status_updates',
      'stakeholder_comms_sms_contains_update_content',
      'stakeholder_comms_use_compact_email_status_update',
      'teams',
      'teams_hierarchy',
      'time_based_alert_grouping',
      'universal_event_transform',
      'urgencies',
      'use_incident_priority',
      'use_team_service',
      'user_color',
      'user_report_live_updates',
      'ux_20',
      'webhooks',
      'wip_assign_incident_to_people',
      'wip_editable_incident_title',
      'wip_hours_on_call_column',
      'wip_icicle',
      'wip_papi',
      'wip_preview_alert_grouping_tab',
      'test_mode',
      'enterprise'
    ]
  },
  permissions: {},
  roles: [
    'owner', 'admin', 'user', 'limited_user', 'observer', 'read_only_user', 'restricted_access', 'read_only_limited_user'
  ]
};
