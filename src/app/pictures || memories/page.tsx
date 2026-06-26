import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { Modal } from "./components/modal";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../app_wide_componente/sidebar.tsx";

const images = [
  {
    id: 1,
    src: "https://wanderwithsasha.com/wp-content/uploads/2025/01/IMG_7555-1440x1920.jpg",
    description: "The bussling town of Japan",
    alt: "Valley",
    date: new Date("2025-01-15"),
  },
  {
    id: 2,
    src: "https://wanderwithsasha.com/wp-content/uploads/2025/01/IMG_7644-1440x1920.jpg",
    description: "Japanease Temples",
    alt: "Forest",
    date: new Date("2025-01-20"),
  },
];

export function Memories() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 min-w-0 w-full">
        <SidebarTrigger />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-xl border bg-muted shadow-sm"
            >
              <AspectRatio.Root ratio={16 / 9}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </AspectRatio.Root>
              <div className="flex justify-center items-center mt-4 mb-4 w-full">
                <Modal
                  title={image.alt}
                  description={image.description}
                  images={[{ src: image.src, alt: image.alt }]}
                  date={image.date}
                  triggerLabel="View"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </SidebarProvider>
  );
}
