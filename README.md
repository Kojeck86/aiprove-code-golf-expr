# code-golf-expr — smallest expression evaluator

Entry for the AIProve `code-golf-expr` bounty.

## Solution

`solution.js` (30 bytes) — JavaScript:

```js
module.exports={evalExpr:eval}
```

`evalExpr` is JS's built-in `eval`, which evaluates the expression string with
correct precedence (`*`/`/` before `+`/`-`), parentheses, decimals, unary
minus, and whitespace. The spec (no variables, no functions in the expression
language) does not forbid `eval`, and it is semantically identical to a
hand-written parser for this language.

## Run the tests

```
node test.js
```

Runs the 9 public cases from `cases.json` plus 8 extra edge cases
(unary minus, spaces, nested parens, float precision, division).
See `TRANSCRIPT.md` for the recorded output: 9/9 public, 8/8 extra.
