import { evaluate } from './Evaluate.js'

export function reducer(state, {type, payload}) {
    switch(type)
    {
      case 'add-digit':
        if (state.currentOperand === null || state.currentOperand === undefined)
        {
          if (payload.value === '.')
          {
            return {...state}
          }
          return {...state, currentOperand: payload.value}
        }
  
        if (state.currentOperand.toString().includes('.') && payload.value === '.')
        {
          return {...state}
        }
        return {...state, currentOperand: `${state.currentOperand}${payload.value}`}
  
      case 'choose-operation':
        if (state.currentOperand === null || state.currentOperand === undefined || state.currentOperand === "")
        {
          return {...state}
        }
        if (state.previousOperand === undefined || state.previousOperand === null)
        {
          return {...state, currentOperand: null, previousOperand: `${state.currentOperand}`, operator: payload.value}
        }
        if (state.previousOperand !== null && state.currentOperand !== null)
        {
          return {...state, previousOperand: evaluate(state), currentOperand: null, operator: payload.value}
        }
        break;
        
      case 'clear':
        return {...state, currentOperand: null, previousOperand: null, operator: null}
  
      case 'delete-digit':
        if (state.currentOperand === null || state.currentOperand === null || state.currentOperand === "")
        {
          return {...state}
        }
        return {...state, currentOperand: state.currentOperand.slice(0, -1)}
  
      case 'evaluate':
        if (state.previousOperand === null || state.previousOperand === undefined || state.previousOperand === "")
        {
          return {...state}
        }
        return {...state, previousOperand: evaluate(state), currentOperand: null, operator: null}
        
      default:
        return {...state}
    }
  }