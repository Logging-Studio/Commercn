import { cn } from "@/lib/utils";

const categories = [
  {
    id: 1,
    title: "Electronics",
    count: "1.2k+ Products",
    image:
      "https://images.unsplash.com/photo-1676315636995-a5d5df17b192?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Fashion",
    count: "3.5k+ Products",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Home Decor",
    count: "800+ Products",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1316&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Beauty",
    count: "2.1k+ Products",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

interface CategoryListCardProps {
  title: string;
  imageSrc: string;
  count: string;
  className?: string;
}

export function CategoryThree() {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 lg:p-8 border-4 border-black dark:border-white bg-white dark:bg-neutral-900 transition-colors duration-300">
      {/* Header */}
      <div className="mb-12 flex items-center">
        <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-6xl uppercase tracking-tighter text-neutral-900 dark:text-white transition-colors duration-300">
          Collections
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {categories.map((category) => (
          <CategoryListCard
            key={category.id}
            title={category.title}
            imageSrc={category.image}
            count={category.count}
          />
        ))}
      </div>
    </section>
  );
}

function CategoryListCard({ title, imageSrc, count }: CategoryListCardProps) {
  return (
    <div
      className="relative w-full h-72 overflow-hidden group cursor-pointer border-4 border-black dark:border-white bg-neutral-100 dark:bg-black transition-colors duration-300"
    >
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-white mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h3
          className="font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-white mix-blend-difference opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out"
        >
          {title}
        </h3>
      </div>

      {/* Count Label - Positioned bottom left, flush with border */}
      <div className="absolute left-0 bottom-0 h-9 bg-black dark:bg-white px-4 flex items-center justify-center transition-colors duration-300 min-w-36">
        <span className="text-sm font-normal uppercase text-white dark:text-black">
          {count}
        </span>
      </div>
    </div>
  );
}
