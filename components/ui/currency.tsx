"use client";

import { formatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type CurrencyProps = {
  value?: string | number;
};

export const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
