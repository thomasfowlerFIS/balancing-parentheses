const balancingParentheses = (string) => {
  let parens = string.split('')
  let parensMap = parens.reduce((p, c) => {
    c === '(' ? p[')']++ : p['(']++
    return p
  }, {'(': 0, ')': 0})
  let lCount = parensMap['(']
  let rCount =  parensMap[')']
  return lCount === rCount && parens[0] === ')' && parens[parens.length - 1] === '(' ?
         2 : Math.abs(lCount - rCount)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// if the counts are equal and we begin
// and end with ) and ( respectively return 2
// otherwise we return the difference between the counts 