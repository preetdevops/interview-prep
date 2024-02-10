import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface SectionContainerProps extends BoxProps {}

export const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
    ({className, ...args}, ref) => {
        return <div ref={ref} className={cn("section-container py-6", className)} {...args} />
    }
)

SectionContainer.displayName = "SectionContainer";