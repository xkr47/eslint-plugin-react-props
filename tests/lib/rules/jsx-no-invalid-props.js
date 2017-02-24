'use strict';

require('babel-eslint');
var fs = require('fs');
var path = require('path');

var rule = require('../../../lib/rules/jsx-no-invalid-props');
var RuleTester = require('eslint').RuleTester;
var ruleTester = new RuleTester();

var ANY_ERROR_MESSAGE = 'Check your prop types';

ruleTester.run('jsx-no-invalid-props', rule, {
  valid: [
    {
      code: fs.readFileSync(path.join(__dirname, 'jsx-no-invalid-props', 'valid-1.js'), 'utf-8')
    },
    {
      code: fs.readFileSync(path.join(__dirname, 'jsx-no-invalid-props', 'valid-2.js'), 'utf-8')
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
        '};'
      ].join('\n'),
      ecmaFeatures: {
        jsx: true,
        modules: true,
        classes: true
      },
      errors: [
        {
          message: 'property \'h\': arrayOf expects to be called like a function with an argument of type proptype or function',
          line: 21,
          column: 4,
          type: 'MemberExpression'
        },
        {
          message: 'property \'j\': instanceOf expects to be called like a function with an argument of type JavaScript type',
          line: 23,
          column: 4,
          type: 'MemberExpression'
        },
        {
          message: 'property \'l\': objectOf expects to be called like a function with an argument of type proptype or function',
          line: 25,
          column: 4,
          type: 'MemberExpression'
        },
        {
          message: 'property \'m\': oneOf expects to be called like a function with an argument of type array with strings',
          line: 26,
          column: 4,
          type: 'MemberExpression'
        },
        {
          message: 'property \'n\': oneOfType expects to be called like a function with an argument of type array with proptypes',
          line: 27,
          column: 4,
          type: 'MemberExpression'
        },
        {
          message: 'property \'o\': shape expects to be called like a function with an argument of type object with proptypes as values',
          line: 28,
          column: 4,
          type: 'MemberExpression'
        },
        {
          message: 'property \'w\': arrayOf expects to be called like a function with an argument of type proptype or function',
          line: 36,
          column: 4,
          type: 'MemberExpression'
        },
        {
          message: 'property \'y\': instanceOf expects to be called like a function with an argument of type JavaScript type',
          line: 38,
          column: 4,
          type: 'MemberExpression'
        },
        {
          message: 'property \'aa\': objectOf expects to be called like a function with an argument of type proptype or function',
          line: 40,
          column: 5,
          type: 'MemberExpression'
        },
        {
          message: 'property \'ab\': oneOf expects to be called like a function with an argument of type array with strings',
          line: 41,
          column: 5,
          type: 'MemberExpression'
        },
        {
          message: 'property \'ac\': oneOfType expects to be called like a function with an argument of type array with proptypes',
          line: 42,
          column: 5,
          type: 'MemberExpression'
        },
        {
          message: 'property \'ad\': shape expects to be called like a function with an argument of type object with proptypes as values',
          line: 43,
          column: 5,
          type: 'MemberExpression'
        }
      ]
    },
    {
      code: fs.readFileSync(path.join(__dirname, 'jsx-no-invalid-props', 'invalid-1.js'), 'utf-8'),
      errors: [
        {
          message: 'property \'badBool\': boolean is a misspelled prop type. Please correct spelling',
          line: 9,
          column: 12,
          type: 'MemberExpression'
        },
        {
          message: 'property \'badFunc\': function is a misspelled prop type. Please correct spelling',
          line: 10,
          column: 12,
          type: 'MemberExpression'
        },
        {
          message: 'property \'badUnknown\': unknown is not a valid PropType',
          line: 11,
          column: 15,
          type: 'MemberExpression'
        },
        {
          message: 'property \'badMessage\': instanceOf argument must not be a literal',
          line: 12,
          column: 15,
          type: 'CallExpression'
        },
        {
          message: 'property \'badEnum\': oneOf array entries must be literals',
          line: 13,
          column: 12,
          type: 'CallExpression'
        },
        {
          message: 'property \'badUnion\': please move isRequired qualifier outside the oneOfType() declaration e.g. \'(React.)PropTypes.oneOfType(...).isRequired\'',
          line: 15,
          column: 41,
          type: 'MemberExpression'
        },
        {
          message: 'property \'badUnion\': please move isRequired qualifier outside the oneOfType() declaration e.g. \'(React.)PropTypes.oneOfType(...).isRequired\'',
          line: 16,
          column: 41,
          type: 'MemberExpression'
        },
        {
          message: 'property \'badArrayOf\': unknown use of PropTypes',
          line: 18,
          column: 39,
          type: 'Literal'
        },
        {
          message: 'property \'badObjectOf\': unknown use of PropTypes',
          line: 19,
          column: 41,
          type: 'Literal'
        },
        {
          message: 'property \'badObjectWithShape\': unknown use of PropTypes',
          line: 21,
          column: 54,
          type: 'Literal'
        },
        {
          message: 'property \'badObjectWithShape\': unknown use of PropTypes',
          line: 22,
          column: 57,
          type: 'Literal',
        },
        {
          message: 'property \'nonFuncArray\': array is a simple prop type, should not be called like a function',
          line: 25,
          column: 17,
          type: 'CallExpression'
        },
        {
          message: 'property \'nonFuncBool\': bool is a simple prop type, should not be called like a function',
          line: 26,
          column: 16,
          type: 'CallExpression'
        },
        {
          message: 'property \'nonFuncFunc\': func is a simple prop type, should not be called like a function',
          line: 27,
          column: 16,
          type: 'CallExpression'
        },
        {
          message: 'property \'nonFuncNumber\': number is a simple prop type, should not be called like a function',
          line: 28,
          column: 18,
          type: 'CallExpression'
        },
        {
          message: 'property \'nonFuncObject\': object is a simple prop type, should not be called like a function',
          line: 29,
          column: 18,
          type: 'CallExpression'
        },
        {
          message: 'property \'nonFuncString\': string is a simple prop type, should not be called like a function',
          line: 30,
          column: 18,
          type: 'CallExpression'
        },
        {
          message: 'property \'nonFuncSymbol\': symbol is a simple prop type, should not be called like a function',
          line: 31,
          column: 18,
          type: 'CallExpression'
        },
        {
          message: 'property \'nonFuncNode\': node is a simple prop type, should not be called like a function',
          line: 32,
          column: 16,
          type: 'CallExpression'
        },
        {
          message: 'property \'nonFuncElement\': element is a simple prop type, should not be called like a function',
          line: 33,
          column: 19,
          type: 'CallExpression'
        },
        {
          message: 'property \'nonFuncAny\': any is a simple prop type, should not be called like a function',
          line: 34,
          column: 15,
          type: 'CallExpression'
        },
        {
          message: 'property \'missingArgMessage\': instanceOf expects exactly one argument of type JavaScript type',
          line: 36,
          column: 22,
          type: 'CallExpression'
        },
        {
          message: 'property \'missingArgEnum\': oneOf expects exactly one argument of type array with strings',
          line: 37,
          column: 19,
          type: 'CallExpression'
        },
        {
          message: 'property \'missingArgUnion\': oneOfType expects exactly one argument of type array with proptypes',
          line: 38,
          column: 20,
          type: 'CallExpression'
        },
        {
          message: 'property \'missingArgArrayOf\': arrayOf expects exactly one argument of type proptype or function',
          line: 39,
          column: 22,
          type: 'CallExpression'
        },
        {
          message: 'property \'missingArgObjectOf\': objectOf expects exactly one argument of type proptype or function',
          line: 40,
          column: 23,
          type: 'CallExpression'
        },
        {
          message: 'property \'missingArgObjectWithShape\': shape expects exactly one argument of type object with proptypes as values',
          line: 41,
          column: 30,
          type: 'CallExpression'
        },
        {
          message: 'property \'tooManyArgMessage\': instanceOf expects exactly one argument of type JavaScript type',
          line: 43,
          column: 22,
          type: 'CallExpression'
        },
        {
          message: 'property \'tooManyArgEnum\': oneOf expects exactly one argument of type array with strings',
          line: 44,
          column: 19,
          type: 'CallExpression'
        },
        {
          message: 'property \'tooManyArgUnion\': oneOfType expects exactly one argument of type array with proptypes',
          line: 45,
          column: 20,
          type: 'CallExpression'
        },
        {
          message: 'property \'tooManyArgArrayOf\': arrayOf expects exactly one argument of type proptype or function',
          line: 46,
          column: 22,
          type: 'CallExpression'
        },
        {
          message: 'property \'tooManyArgObjectOf\': objectOf expects exactly one argument of type proptype or function',
          line: 47,
          column: 23,
          type: 'CallExpression'
        },
        {
          message: 'property \'tooManyArgObjectWithShape\': shape expects exactly one argument of type object with proptypes as values',
          line: 48,
          column: 30,
          type: 'CallExpression'
        },
        {
          message: 'property \'badArgMessage\': instanceOf expects exactly one argument of type JavaScript type',
          line: 50,
          column: 18,
          type: 'CallExpression'
        },
        {
          message: 'property \'badArgEnum\': oneOf expects exactly one argument of type array with strings',
          line: 51,
          column: 15,
          type: 'CallExpression'
        },
        {
          message: 'property \'badArgUnion\': oneOfType expects exactly one argument of type array with proptypes',
          line: 52,
          column: 16,
          type: 'CallExpression'
        },
        {
          message: 'property \'badArgArrayOf\': arrayOf expects exactly one argument of type proptype or function',
          line: 53,
          column: 18,
          type: 'CallExpression'
        },
        {
          message: 'property \'badArgObjectOf\': objectOf expects exactly one argument of type proptype or function',
          line: 54,
          column: 19,
          type: 'CallExpression'
        },
        {
          message: 'property \'badArgObjectWithShape\': shape expects exactly one argument of type object with proptypes as values',
          line: 55,
          column: 26,
          type: 'CallExpression'
        }
      ]
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
        'a: PropTypes.arr,',
        '};'
      ].join('\n'),
      ecmaFeatures: {
        jsx: true,
        modules: true,
        classes: true
      },
      errors: [{
        message: 'property \'a\': arr is not a valid PropType',
        line: 14,
        column: 4,
        type: 'MemberExpression'
      }]
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
        '};'
      ].join('\n'),
      ecmaFeatures: {
        jsx: true,
        modules: true,
        classes: true
      },
      errors: [{
        message: 'property \'a\': unknown use of PropTypes',
        line: 14,
        column: 4,
        type: 'Identifier'
      }]
    }
  ]
});
