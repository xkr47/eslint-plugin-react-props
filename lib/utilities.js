/*
Borrowed from https://github.com/yannickcr/eslint-plugin-react
*/

/**
 * Checks if node is `propTypes` declaration
 * @param {ASTNode} node The AST node being checked.
 * @returns {Boolean} True if node is `propTypes` declaration, false if not.
 */
function isPropTypesDeclaration(node) {

  // Special case for class properties
  // (babel-eslint does not expose property name so we have to rely on tokens)
  if (node.type === 'ClassProperty') {
    var tokens = context.getFirstTokens(node, 2);
    if (tokens[0].value === 'propTypes' || tokens[1].value === 'propTypes') {
      return true;
    }
    return false;
  }

  return Boolean(
    node &&
    node.name === 'propTypes'
  );
}

module.exports = {
  isPropTypesDeclaration: isPropTypesDeclaration
};