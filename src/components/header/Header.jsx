"use client";
import { decrement, increment } from "@/app/lib/features/counter/counterSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Header {count}</h2>
      <Link href={"/wishlist"}>wishlist</Link>
      <br />
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Header;
