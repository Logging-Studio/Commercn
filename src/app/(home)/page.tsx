import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-4xl mb-4">
        Shadcn UI Blocks for <br /> E-commerce Websites
      </h1>
      <p className="text-muted-foreground mb-6">
        Ship you e-commerce website fast with pre-built UI Blocks.<br /> Built with React, Tailwind CSS, and Shadcn UI.
      </p>

      <div className="flex gap-4 mx-auto">
        <Button>Get Started</Button>
        <Button variant="outline">Browse Blocks</Button>
      </div>
    </div>
  );
}
