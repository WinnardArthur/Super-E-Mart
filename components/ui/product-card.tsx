"use client";

import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import { Currency } from "./currency";

type ProductCardProps = {
  data: Product;
};

export const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl relative bg-gray-100 ">
        <Image
          alt="Image"
          //   @ts-ignore
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div className="">
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-gray-500 text-sm ">{data.category.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};