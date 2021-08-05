import React from "react";
import { Counter } from "./Counter";

export function ItemValue({
  to,
  today = false,
}: {
  to: number;
  today?: boolean;
}) {
  return <Counter from={0} to={to} duration={1} today={today} />;
}
