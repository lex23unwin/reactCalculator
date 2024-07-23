import React from 'react'
import { ACTIONS } from './Actions.js'

export default function AddDigitBtn({ dispatch, value }) {
  return (
    <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: { value }})}>{value}</button>
  )
}
