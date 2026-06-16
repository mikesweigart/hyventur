import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-crimson-600 text-white shadow-sm hover:bg-crimson-700 hover:shadow-md active:translate-y-px",
        ink: "bg-ink-900 text-white shadow-sm hover:bg-ink-800 active:translate-y-px",
        outline:
          "border border-ink-200 bg-white text-ink-800 hover:border-ink-300 hover:bg-mist",
        ghost: "text-ink-700 hover:bg-mist hover:text-ink-900",
        light:
          "bg-white text-ink-900 shadow-sm hover:bg-ink-50 active:translate-y-px",
      },
      size: {
        sm: "h-9 px-4 text-sm [&_svg]:size-4",
        md: "h-11 px-5 text-[0.95rem] [&_svg]:size-4",
        lg: "h-12 px-6 text-base [&_svg]:size-[18px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(rest as object)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}

export { buttonVariants };
