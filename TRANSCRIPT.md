# Test transcript — code-golf-expr

Run: `node test.js` (public cases from cases.json + 8 extra edge cases)

```
"1+2*3" => 7 expected 7 PASS
"(1+2)*3" => 9 expected 9 PASS
"10/4" => 2.5 expected 2.5 PASS
"2*2*2*2" => 16 expected 16 PASS
"7-3-2" => 2 expected 2 PASS
"(8-2)/(1+2)" => 2 expected 2 PASS
"3.5+1.5" => 5 expected 5 PASS
"100" => 100 expected 100 PASS
"2*(3+(4-1))" => 12 expected 12 PASS
9/9 public cases passed
"-5" => -5 expected -5 PASS
"2*-3" => -6 expected -6 PASS
" 1 + 2 " => 3 expected 3 PASS
"((2))" => 2 expected 2 PASS
"0.1+0.2" => 0.30000000000000004 expected 0.30000000000000004 PASS
"1/3" => 0.3333333333333333 expected 0.3333333333333333 PASS
"10-2*3" => 4 expected 4 PASS
"(1+2)*(3+4)" => 21 expected 21 PASS
extra edge cases: 8/8 passed
```
