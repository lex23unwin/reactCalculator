export function evaluate({ currentOperand, previousOperand, operator })
{
  const prevOp = parseFloat(previousOperand)
  const currOp = parseFloat(currentOperand)
  const op = operator

  console.log(prevOp, ": pO")
  console.log(currOp, ": cO")
  console.log(op, ": operator")

  if (op === "+")
  {
    return prevOp + currOp
  }
  else if (op === "-")
  {
    return prevOp - currOp
  }
  else if (op === "*")
  {
    return prevOp * currOp
  }
  else if (op === "/")
  {
    return prevOp / currOp
  }
}