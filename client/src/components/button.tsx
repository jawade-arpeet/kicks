import React from "react";
import cn from "../utils/cn";

function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "bg-zinc-950 text-zinc-50 px-6 py-3 h-12 font-medium text-sm inline-block",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
