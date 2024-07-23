import React from 'react'
import { ACTIONS } from './Actions.js'

export default function OperatorBtn({ dispatch, value}) {
  return (
    <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: { value }})}>{ value} </button>
  )
}
