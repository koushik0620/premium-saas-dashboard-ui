import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "button-glow border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.96),rgba(20,184,166,0.94))] text-slate-950 before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.32),transparent)] before:translate-x-[-130%] before:transition-transform before:duration-500 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_26px_54px_-18px_rgba(34,211,238,0.72)] hover:before:translate-x-[130%]",
        outline:
          "border-border/80 bg-background/70 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-muted/80 hover:text-foreground hover:shadow-[0_18px_36px_-24px_rgba(15,23,42,0.28)]",
        secondary:
          "border-border/60 bg-secondary text-secondary-foreground shadow-[0_14px_34px_-24px_rgba(15,23,42,0.55)] hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-secondary/90 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.7)]",
        ghost:
          "hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-muted/70 hover:text-foreground hover:shadow-[0_12px_28px_-22px_rgba(15,23,42,0.3)]",
        destructive:
          "bg-destructive/10 text-destructive hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 gap-2 px-5",
        sm: "h-9 gap-1.5 px-3 text-sm",
        lg: "h-12 gap-2 px-6",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
