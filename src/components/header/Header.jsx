"use client";
import { decrement, increment } from "@/app/lib/features/counter/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Header {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Header;
