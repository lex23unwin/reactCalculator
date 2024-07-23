import './App.css';
import { useReducer } from 'react';
import AddDigitBtn from './AddDigitBtn.js'
import OperatorBtn from './OperatorBtn.js'
import { reducer } from './Reducer.js'
import { ACTIONS } from './Actions.js'

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
      <button className="span-two" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
      <OperatorBtn dispatch={dispatch} value="/" />
      <AddDigitBtn dispatch={dispatch} value="7" />
      <AddDigitBtn dispatch={dispatch} value="8" />
      <AddDigitBtn dispatch={dispatch} value="9" />
      <OperatorBtn dispatch={dispatch} value="*" />
      <AddDigitBtn dispatch={dispatch} value="4" />
      <AddDigitBtn dispatch={dispatch} value="5" />
      <AddDigitBtn dispatch={dispatch} value="6" />
      <OperatorBtn dispatch={dispatch} value="+" />
      <AddDigitBtn dispatch={dispatch} value="1" />
      <AddDigitBtn dispatch={dispatch} value="2" />
      <AddDigitBtn dispatch={dispatch} value="3" />
      <OperatorBtn dispatch={dispatch} value="-" />
      <AddDigitBtn dispatch={dispatch} value="." />
      <AddDigitBtn dispatch={dispatch} value="0" />
      <button className="span-two" onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>
    </div>
  );
}