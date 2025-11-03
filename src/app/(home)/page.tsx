import { Button } from "@/components/retroui/Button";
import Link from "next/link";


export default function HomePage() {
  return (
    <main className="px-4 lg:px-12 max-w-8xl h-[calc(100vh-116px)] w-full mx-auto flex w-full justify-between items-center">
      {/* <div className="h-full border-r w-3"></div> */}
      <div className="relative w-full">
        <div className="flex flex-col justify-center text-center py-12">
          <h1 className="text-4xl lg:text-5xl mb-4 font-bold">
            Shadcn UI Blocks for <br /> E-commerce Websites
          </h1>
          <p className="text-gray-500 mb-6 text-lg">
            Ship you e-commerce website fast with pre-built UI Blocks.<br /> Built with React, Tailwind CSS, and Shadcn UI.
          </p>

          <div className="flex gap-4 mx-auto">
           
            <Button asChild>
              <Link href="/docs/carts/cart-item-01">Browse Blocks</Link>
            </Button>

             <Button variant="outline" asChild>
              <Link href="https://github.com/Logging-Studio/commercn">Star on GitHub</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="h-full border-l w-3"></div> */}
    </main>
  );
}
