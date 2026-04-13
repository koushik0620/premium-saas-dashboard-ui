import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "../../lib/utils"

type CardProps = ComponentPropsWithoutRef<"div">

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group/card dashboard-panel relative text-card-foreground transition-all duration-300",
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("space-y-1.5 p-6", className)} {...props} />
}

export function CardTitle({
  className,
  ...props
}: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
}

export function CardContent({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("p-6 pt-0", className)} {...props} />
}

export function CardFooter({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
}

export type CardSectionProps = {
  children: ReactNode
}
