/**
 * @fileoverview a collection of prop type rules
 * @author Craig
 * @copyright 2015 Craig. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict';

const jsxNoInvalidProps = require('./rules/jsx-no-invalid-props');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
  rules: {
    'jsx-no-invalid-props': jsxNoInvalidProps,
  },
};
