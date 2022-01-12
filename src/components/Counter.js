import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {
  increase,
  decrease,
  increaseByAmount,
} from "../redux/counter/counterSlice"

export const Counter = () => {
  const [amount, setAmount] = useState(0)

  const countValue = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{countValue}</h1>

      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(increase())}>Increase</button>

      <br />
      <br />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(increaseByAmount(amount))}>
        Increase by Amount
      </button>
    </div>
  )
}
