import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "font-head transition-all rounded-none outline-hidden cursor-pointer duration-200 font-medium flex items-center shadow-[4px_4px_0_0_#5B3B98] hover:shadow-[3px_3px_0_0_#000] active:shadow-[1px_1px_0_0_#000]",
  {
    variants: {
      variant: {
        default:
          "retro-shadow-md hover:retro-shadow active:retro-shadow-none bg-primary text-primary-foreground border border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-primary-hover",
        secondary:
          "retro-shadow-md hover:retro-shadow active:retro-shadow-none bg-secondary shadow-primary text-secondary-foreground border border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-secondary-hover",
        outline:
          "retro-shadow-md hover:retro-shadow active:retro-shadow-none bg-transparent border transition hover:translate-y-1 active:translate-y-2 active:translate-x-1",
        link: "bg-transparent hover:underline",
      },
      size: {
        sm: "px-3 py-1 text-sm shadow hover:shadow-none",
        md: "px-4 py-1.5 text-base",
        lg: "px-6 lg:px-8 py-2 lg:py-3 text-md lg:text-lg",
        icon: "p-2",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
);

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      asChild = false,
      ...props
    }: IButtonProps,
    forwardedRef,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={forwardedRef}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";