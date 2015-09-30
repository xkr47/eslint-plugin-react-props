/**
 * @fileoverview Rule to flag use of an invalid prop type
 * @author Craig Bilner
 */
"use strict";

var utils = require('../utilities');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {

  var validProps = {
    array: 1,
    bool: 1,
    boolean: 2,
    func: 1,
    function: 2,
    number: 1,
    object: 1,
    obj: 2,
    string: 1,
    any: 1,
    arrayOf: 1,
    element: 1,
    instanceOf: 1,
    node: 1,
    objectOf: 1,
    oneOf: 1,
    oneOfType: 1,
    shape: 1
  };

  function isExpectedReactPropSyntax(declaration) {
    return declaration.value.object && ((
        declaration.value.object.name === 'PropTypes'
      )
      || (
        declaration.value.object.object.name === 'React'
        && declaration.value.object.property.name === 'PropTypes'
      )
      || (
        declaration.value.object.object.name === 'PropTypes'
        && declaration.value.property.name === 'isRequired'
      )
      || (
        declaration.value.object.object.object.name === 'React'
        && declaration.value.object.object.property.name === 'PropTypes'
        && declaration.value.property.name === 'isRequired'
      ));
  }

  function getPropValue(propName) {
    return validProps[propName];
  }

  function checkProperties(declarations) {
    declarations.forEach(function (declaration) {
      if (isExpectedReactPropSyntax(declaration)) {
        var propName = '';
        var propValue = 0;
        if (declaration.value.property.name === 'isRequired') {
          propName = declaration.value.object.property.name;
        } else {
          propName = declaration.value.property.name;
        }

        propValue = getPropValue(propName);

        if (propValue !== 1) {
          context.report(declaration, propName + ' is not a valid PropType');
        }
      } else {
        context.report(declaration, 'unknown use of PropTypes');
      }
    });
  }

  return {
    MemberExpression: function (node) {
      if (utils.isPropTypesDeclaration(node.property)) {
        var right = node.parent.right;
        if (right && right.type === 'ObjectExpression') {
          checkProperties(right.properties);
        }
      }
    }
  };

};

module.exports.schema = [
  // JSON Schema for rule options goes here
];
