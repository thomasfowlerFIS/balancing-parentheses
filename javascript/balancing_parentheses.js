const balancingParentheses = (string) => {
  let parens = string.split('')
  let parensMap = parens.reduce((p, c, i, arr) => {
    if (c === ')' && i === 0) p['(']++
    else if (c === '(' && i === arr.length - 1) p[')']++
    else c === '(' ? p[')']++ : p['(']++
    return p
  }, {'(': 0, ')': 0})
  
  return parensMap['('] === 0 || parensMap[')'] === 0 ? 
    Math.max(parensMap['('], parensMap[')']) : 
      parensMap['('] === parensMap[')'] && parens[0] === ')' && parens[parens.length - 1] === '(' ?
        2 : parensMap['('] === parensMap[')'] && parens[0] === '(' && parens[parens.length - 1] === ')' ?
          0 : Math.max(parensMap['('], parensMap[')']) - Math.min(parensMap['('], parensMap[')'])
}

if (require.main === module) {
  // add your own tests in here
  console.log('(()())')
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log('()))')
  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log(')');
  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
