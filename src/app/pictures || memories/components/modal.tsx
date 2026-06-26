import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  date: Date; // pass a real Date (or ISO string) and format at render
  triggerLabel?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Modal({
  title,
  description,
  images,
  date,
  triggerLabel = "View",
  onSubmit,
}: ModalProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(date);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
            <p className="text-sm text-muted-foreground">{formattedDate}</p>
          </DialogHeader>

          <div className="flex justify-center py-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="max-h-[70vh] w-auto rounded-md object-contain"
              />
            ))}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
