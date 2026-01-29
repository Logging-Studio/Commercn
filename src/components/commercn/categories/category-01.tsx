"use client"

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const categories = [
	{
		id: 1,
		title: "Electronics",
		count: "1.2k+ Products",
		image:
			"https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
		title: "Home & Decor",
		count: "800+ Products",
		image:
			"https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 4,
		title: "Beauty",
		count: "2.1k+ Products",
		image:
			"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 5,
		title: "Sports",
		count: "1.5k+ Products",
		image:
			"https://images.unsplash.com/photo-1768647417374-5a31c61dc5d0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 6,
		title: "Watches",
		count: "400+ Products",
		image:
			"https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

export function CategoryOne() {
	return (
		<section className="w-full max-w-7xl mx-auto">
			{/* Header */}
			<div className="flex flex-col md:flex-row justify-between gap-4 mb-8 lg:mb-10">
				<div className="flex flex-col gap-1">
					<h2 className="font-bold text-4xl">
						Shop by Category
					</h2>
					<p className="font-normal text-sm lg:text-base text-muted-foreground">
						Browse our diverse collection of premium products.
					</p>
				</div>

				<button className="group flex items-center gap-2 font-['Syne'] font-medium text-[16px] text-black dark:text-white hover:opacity-70 transition-opacity pb-1">
					View all categories
					<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
				</button>
			</div>

			{/* Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
				{categories.map((category) => (
					<CategoryCard
						key={category.id}
						title={category.title}
						count={category.count}
						imageSrc={category.image}
					/>
				))}
			</div>
		</section>
	);
}

interface CategoryCardProps {
	title: string;
	count: string;
	imageSrc: string;
	className?: string;
}

export function CategoryCard({ title, count, imageSrc, className }: CategoryCardProps) {
	return (
		<motion.div
			className={cn(
				"group relative overflow-hidden rounded-[16px] cursor-pointer h-[216px]",
				className
			)}
			whileHover="hover"
			initial="rest"
		>
			{/* Background Image */}
			<div className="absolute inset-0">
				<img
					src={imageSrc}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
			</div>

			{/* Gradient Overlay - Matches Figma: from black/60 to transparent */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

			{/* Content */}
			<div className="absolute bottom-0 left-0 p-[24px] w-full flex flex-col gap-1">
				{/* Title */}
				<h3 className="text-white font-['Syne'] font-bold text-[24px] leading-[32px]">
					{title}
				</h3>

				{/* Row: Count + Arrow Button */}
				<div className="flex items-center justify-between w-full">
					<p className="text-white/90 font-['Syne'] font-medium text-[14px] leading-[20px]">
						{count}
					</p>

					{/* Hover Arrow Button - 32px size */}
					<motion.div
						className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center text-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
					>
						<ArrowRight className="w-4 h-4" strokeWidth={2} />
					</motion.div>
				</div>
			</div>

			{/* Border overlay (Inactive) */}
			<div className="absolute inset-0 border border-white/10 dark:border-black/50 rounded-[16px] pointer-events-none transition-colors" />

			{/* Active/Hover state border - Solid Black (Light) / Solid White (Dark) */}
			<div className="absolute inset-0 border-[2px] border-transparent group-hover:border-black dark:group-hover:border-white rounded-[16px] pointer-events-none transition-colors duration-300" />

		</motion.div>
	);
}
