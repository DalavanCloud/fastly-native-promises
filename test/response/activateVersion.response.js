'use strict';

module.exports.activateVersion = {
  testing: false,
  locked: true,
  number: 253,
  active: true,
  service_id: 'SU1Z0isxPaozGVKXdv0eY',
  staging: false,
  created_at: '2017-12-28T23:18:24Z',
  deleted_at: null,
  comment: '',
  updated_at: '2017-12-28T23:18:24Z',
  deployed: false,
  msg: null,
};

module.exports.activateVersionDefault = {
  testing: false,
  locked: true,
  number: 3,
  active: true,
  service_id: 'SU1Z0isxPaozGVKXdv0eY',
  staging: false,
  created_at: '2017-12-28T23:18:24Z',
  deleted_at: null,
  comment: '',
  updated_at: '2017-12-28T23:18:24Z',
  deployed: false,
  msg: null,
};

module.exports.activateVersion400 = { msg: 'Bad request', detail: 'Syntax error: Expected one of: `acl`, `callback`, `sub`, `backend`, `director`, `import`, `table`, or `pragma`\nat: (input Line 1001 Pos 1)\n{\n#' };

module.exports.activateVersion429 = { msg: 'You have exceeded your hourly rate limit. Please contact support@fastly.com if you think this is a mistake.' };
