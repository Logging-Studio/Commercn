import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type StoryStatus = "default" | "live";

const categories = [
  {
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1670201202961-dce15b9e6939?w=900&auto=format&fit=crop",
    status: "live" as StoryStatus,
  },
  {
    name: "Makeup",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=200&auto=format&fit=crop",
    status: "default" as StoryStatus,
  },
  {
    name: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=200&auto=format&fit=crop",
    status: "default" as StoryStatus,
  },
  {
    name: "Fragrance",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=200&auto=format&fit=crop",
    status: "default" as StoryStatus,
  },
  {
    name: "Tools",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=200&auto=format&fit=crop",
    status: "default" as StoryStatus,
  },
  {
    name: "Organic",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=200&auto=format&fit=crop",
    status: "default" as StoryStatus,
  },
  {
    name: "Hair",
    image: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJlYXV0eSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    status: "default" as StoryStatus,
  }
];

export function CategoryFour() {
  return (
    <section className="w-full max-w-3xl mx-auto overflow-hidden">
      <div className="grid grid-cols-4 md:grid-cols-7 gap-4 scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div
              className={cn(
                "relative size-16 md:size-18 lg:size-20 xl:size-22 rounded-full p-1 transition-all duration-300",
                category.status === "default" && "bg-gray-200 dark:bg-neutral-800",
                category.status === "live" && "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400"
              )}
            >
              <img
                src={category.image}
                alt={category.name}
                className="size-full rounded-full object-cover ring-2 ring-white dark:ring-neutral-950"
              />
              {category.status === "live" && (
                <>
                  <div className="absolute inset-1 rounded-full bg-black/20 flex items-center justify-center">
                    <Play className="size-5 text-white fill-white" />
                  </div>
                  <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500 hover:bg-red-500 text-white text-xs font-bold border-2 border-white dark:border-neutral-950">
                    LIVE
                  </Badge>
                </>
              )}
            </div>
            <span className="text-sm lg:text-base font-bold text-gray-700 dark:text-white">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}