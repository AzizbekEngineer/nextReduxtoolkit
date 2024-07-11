"use client";
import { toggleHeart } from "@/app/lib/features/wishlist/wishlistSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const WishlistWrapper = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>WishlistWrapper</h2>
      {wishlist?.map((product) => (
        <div key={product?.id}>
          <Image
            width={200}
            height={200}
            alt={product?.title}
            src={product?.images[0]}
          />

          <h3>{product?.title}</h3>
          <button onClick={() => dispatch(toggleHeart(product))}>like</button>
        </div>
      ))}
    </div>
  );
};

export default WishlistWrapper;
