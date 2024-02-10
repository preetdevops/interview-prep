import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ViewContainerProps extends BoxProps {}

export const ViewContainer = forwardRef<HTMLDivElement, ViewContainerProps>(
    ({className, ...args}, ref) => {
        return (
            <div 
                ref={ref}
                className={cn("view-container", 
                    'box-border mx-auto',
                    'w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px]',
                    className
                )}
                {...args}
            />
        )
    }
)

ViewContainer.displayName = "ViewContainer";