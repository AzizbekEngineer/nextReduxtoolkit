"use client";
import { useGetProductsQuery } from "@/app/lib/api/productApi";
import { toggleHeart } from "@/app/lib/features/wishlist/wishlistSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const ProductWrapper = () => {
  const { data, isLoading } = useGetProductsQuery({ skip: 15, limit: 5 });
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div>
      <h2>ProductWrapper</h2>
      <div>
        {data?.products?.map((product) => (
          <div key={product.id}>
            <Image
              width={200}
              height={200}
              alt={product.title}
              src={product.images[0]}
            />

            <h3>{product.title}</h3>
            <button onClick={() => dispatch(toggleHeart(product))}>like</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductWrapper;
