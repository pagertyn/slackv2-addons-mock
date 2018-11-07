import { setNamedProperties } from '../util/general';

const ROLES = [
  'owner',
  'admin',
  'user',
  'limited_user',
  'team_responder',
  'read_only_user',
  'restricted_access'
];

export default class UserModel {

  constructor(props) {
    this.id = null;
    this.name = null;
    this.email = null;
    this.timeZone = null;
    this.role = null;
    this.avatarUrl = null;
    this.canSeeEntireAccount = null;
    this.spoofOrigin = false;
    this.isSafeSpoofing = null;
    this.accountId = null;
    this.subdomain = null;
    this.plan = null;
    this.state = null;
    this.features = [];
    this.permissions = {};
    this.setProperties(props);
  }

  // Role functions
  isAccountOwner() { return this.role === 'owner'; }
  isAdmin() { return this.role === 'admin'; }
  isReadOnly() { return this.role === 'read_only_user'; }
  isRestrictedUser() { return this.role === 'restricted_access'; }
  isSpoofed() { return this.spoofOrigin ? true : false; }
  roleIsUserOrGreater() { return this._roleIsAtLeast('user'); }
  roleIsAdminOrGreater() { return this._roleIsAtLeast('admin'); }

  // Account functions
  isExpired() { return this.state === 'expired'; }
  isTrial() { return this.state === 'trial'; }
  isActive() { return this.state === 'active'; }
  isLocked() { return this.state === 'locked'; }
  isLite() { return this.plan.match('/^lite(.*)$/'); }
  isStarter() { return this.plan.match('/^starter(.*)$/'); }
  isStandard() { return this.plan.match('/^standard(.*)$/'); }
  isEnterprise() { return this.plan.match('/^enterprise(.*)$/'); }
  subdomainIsPDT() { return this.subdomain.substr(0, 4) === 'pdt-'; }

  renderUserInfo() {
    return `${this.name} / ${this.email} / ${this.plan}`;
  }

  setProperties(props) {
    // set user properties
    const userFields = [
      'id', 'name', 'email', 'time_zone', 'role', 'avatar_url',
      'can_see_entire_account', 'spoof_origin', 'is_safe_spoofing'
    ];
    setNamedProperties(this, props.current_user, userFields);
    this.permissions = props.permissions || {};

    // set user account properties
    const accountFields = ['subdomain', 'plan', 'state'];
    setNamedProperties(this, props.current_account, accountFields);
    this.accountId = props.current_account.id;
    this.features = props.account_features.features || [];
  }

  _roleIsAtLeast(targetRole) {
    const targetIndex = ROLES.indexOf(targetRole);
    const currentIndex = ROLES.indexOf(this.get('role'));
    return (currentIndex >= 0) && (targetIndex >= currentIndex);
  }
}