import * as React from "react";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-[43px] text-center",
  {
    variants: {
      variant: {
        default:
          "border-green-200 bg-green-50 text-green-600 hover:cursor-pointer",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:cursor-pointer",
        destructive:
          "border-red-200 bg-red-50 text-red-600 hover:cursor-pointer",
        outline: "text-green-600 hover:cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
