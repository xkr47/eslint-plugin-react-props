'use strict';

require('babel-eslint');

const rule = require('../../../lib/rules/jsx-no-invalid-props');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('jsx-no-invalid-props', rule, {
  valid: [
    {
      code: [
        'import React, {PropTypes} from "react";',
        'export default class TestComponent extends React.Component {',
        'constructor(props) {',
        'super(props);',
        'this.state = {};',
        '}',
        'render() {',
        'return (',
        '<div></div>',
        ');',
        '}',
        '}',
        'TestComponent.propTypes = {',
        'a: PropTypes.array,',
        'b: PropTypes.bool,',
        'c: PropTypes.func,',
        'd: PropTypes.number,',
        'e: PropTypes.object,',
        'f: PropTypes.string,',
        'g: PropTypes.any,',
        'h: PropTypes.arrayOf,',
        'i: PropTypes.element,',
        'j: PropTypes.instanceOf,',
        'k: PropTypes.node,',
        'l: PropTypes.objectOf,',
        'm: PropTypes.oneOf,',
        'n: PropTypes.oneOfType,',
        'o: PropTypes.shape,',
        'p: PropTypes.array,',
        'q: PropTypes.bool,',
        'r: PropTypes.func,',
        's: PropTypes.number,',
        't: PropTypes.object,',
        'u: PropTypes.string,',
        'v: PropTypes.any,',
        'w: PropTypes.arrayOf,',
        'x: PropTypes.element,',
        'y: PropTypes.instanceOf,',
        'z: PropTypes.node,',
        'aa: PropTypes.objectOf,',
        'ab: PropTypes.oneOf,',
        'ac: PropTypes.oneOfType,',
        'ad: PropTypes.shape',
        '};',
      ].join('\n'),
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  invalid: [
    {
      code: [
        'import React, {PropTypes} from "react";',
        'export default class TestComponent extends React.Component {',
        'constructor(props) {',
        'super(props);',
        'this.state = {};',
        '}',
        'render() {',
        'return (',
        '<div></div>',
        ');',
        '}',
        '}',
        'TestComponent.propTypes = {',
        'a: PropTypes.arr,',
        '};',
      ].join('\n'),
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'arr is not a valid PropType',
          line: 14,
          column: 1,
          type: 'Property',
        },
      ],
    },
    {
      code: [
        'import React, {PropTypes} from "react";',
        'export default class TestComponent extends React.Component {',
        'constructor(props) {',
        'super(props);',
        'this.state = {};',
        '}',
        'render() {',
        'return (',
        '<div></div>',
        ');',
        '}',
        '}',
        'TestComponent.propTypes = {',
        'a: PropTypes,',
        '};',
      ].join('\n'),
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'unknown use of PropTypes',
          line: 14,
          column: 1,
          type: 'Property',
        },
      ],
    },
  ],
});
