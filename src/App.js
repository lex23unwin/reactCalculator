import './App.css';
import { useReducer } from 'react';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
  switch(type)
  {
    case 'add-digit':
      return {...state, currentOperand: payload.value}

    default:
      return {...state}
  }
}

export default function App() {

  const [{currentOperand, previousOperand, operator}, dispatch] = useReducer(reducer, {})

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
            {previousOperand}{operator}
        </div>
        <div className="current-operand">
          {currentOperand}
        </div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button onClick={() => {dispatch({type: ACTIONS.ADD_DIGIT, payload: {value: 7}})}}>7</button>
      <button onClick={() => {dispatch({type: ACTIONS.ADD_DIGIT, payload: {value: 8}})}}>8</button>
      <button onClick={() => {dispatch({type: ACTIONS.ADD_DIGIT, payload: {value: 9}})}}>9</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}