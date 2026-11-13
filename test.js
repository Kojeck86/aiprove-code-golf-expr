const { evalExpr } = require('./solution.js');
const cases = require('./cases.json');
let pass = 0;
for (const c of cases) {
  const got = evalExpr(c.in);
  const ok = Object.is(got, c.out) || Math.abs(got - c.out) < 1e-9;
  console.log(JSON.stringify(c.in), '=>', got, 'expected', c.out, ok ? 'PASS' : 'FAIL');
  if (ok) pass++;
}
console.log(pass + '/' + cases.length + ' public cases passed');
const extra = [['-5', -5], ['2*-3', -6], [' 1 + 2 ', 3], ['((2))', 2], ['0.1+0.2', 0.30000000000000004], ['1/3', 1 / 3], ['10-2*3', 4], ['(1+2)*(3+4)', 21]];
let ep = 0;
for (const [inp, exp] of extra) {
  const got = evalExpr(inp);
  const ok = Math.abs(got - exp) < 1e-9;
  console.log(JSON.stringify(inp), '=>', got, 'expected', exp, ok ? 'PASS' : 'FAIL');
  if (ok) ep++;
}
console.log('extra edge cases: ' + ep + '/' + extra.length + ' passed');
if (pass !== cases.length || ep !== extra.length) process.exit(1);
