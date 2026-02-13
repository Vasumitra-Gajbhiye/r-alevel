"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { name: string; email: string; certType: string }) => void;
};

export function AddCertificateModal({ open, onOpenChange, onSubmit }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Certificate</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-1">
            <Label>Name</Label>
            <Input placeholder="Student name" />
          </div>

          <div className="space-y-1">
            <Label>Email</Label>
            <Input placeholder="student@email.com" />
          </div>

          <div className="space-y-1">
            <Label>Certificate Type</Label>
            <Input placeholder="Completion / Merit / Participation" />
          </div>

          <Button className="w-full" disabled>
            Save Certificate (coming soon)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
