# JSX No invalid props (jsx-no-invalid-props)

A quick check to see if a typo has been made on a PropType which at the minimum is annoying, but can also lead to debugging red herrings

## Rule Details

This rule checks propTypes on a class and validates the PropTypes against a static list from the React docs

## Rule Options

None yet

## Todo

Make more intelligent when determining PropTypes i.e. could have been imported as "p" which would currently fail:

```js
propTypes: {
    a: p.array
};
```
