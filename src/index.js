module.exports = function solveEquation(equation) {
  let answer = [];
  let indexOfA = equation.indexOf(" * x^2");
  let indexOfB = equation.indexOf(" * x ");
  let a = parseInt(equation.substring(0,indexOfA));
  let b = parseInt(equation.substring(indexOfA+6,indexOfB).replace(/\s/g,''));
  let c = parseInt(equation.substring(indexOfB+5).replace(/\s/g,''));
  let discriminant = Math.pow(b,2)-4*a*c;
  let x1 = Math.round(((-1)*b - Math.sqrt(discriminant))/(2*a));
  let x2 = Math.round(((-1)*b + Math.sqrt(discriminant))/(2*a));
  answer.push(x1);
  answer.push(x2);
  return answer.sort(function(a,b){
    return a-b;
  });
};