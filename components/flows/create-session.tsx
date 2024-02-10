import { forwardRef } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export interface CreateSessionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CreateSessionButton = forwardRef<
  HTMLButtonElement,
  CreateSessionButtonProps
>(({ className, ...args }, ref) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          ref={ref}
          variant={"gloss"}
          className={cn("create-session", className)}
          {...args}
        >
          Create new session
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Start a new interview session</DialogTitle>
          <DialogDescription>
            You can create a custom or start from the direct options
          </DialogDescription>
        </DialogHeader>
        <div className="dialog-body-content-container"></div>
        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Next</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
