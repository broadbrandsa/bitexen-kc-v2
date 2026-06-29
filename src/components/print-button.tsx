"use client";

import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Button>, "onClick">;

export function PrintButton(props: Props) {
  return (
    <Button
      {...props}
      onClick={() => typeof window !== "undefined" && window.print()}
    />
  );
}
