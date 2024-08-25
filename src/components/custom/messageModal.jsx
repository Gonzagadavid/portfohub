"use client";
import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";

export default function MessageModal({
  children,
  title,
  onClose,
  open,
  buttonText
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>{title}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
        <DialogFooter className="flex justify-center sm:justify-center">
          <DialogClose asChild>
            <Button size="lg" type="button">
              {buttonText ?? "Ok"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
