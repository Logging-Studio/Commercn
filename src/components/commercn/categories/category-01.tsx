"use client"

import { Button } from "@/components/ui/button";
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
			<div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8 lg:mb-10">
				<div className="flex flex-col gap-1">
					<h2 className="font-bold text-4xl">
						Shop by Category
					</h2>
					<p className="font-normal text-sm lg:text-base text-muted-foreground">
						Browse our diverse collection of premium products.
					</p>
				</div>

				<Button className="group" asChild>
					<a href="#">
						View all categories
						<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
					</a>
				</Button>
			</div>

			{/* Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
				"group relative overflow-hidden rounded-xl cursor-pointer h-56 flex flex-col justify-end",
				className
			)}
		>
			<div className="absolute inset-0">
				<img
					src={imageSrc}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

			<div className="bottom-0 left-0 p-[24px] w-full flex items-end justify-between gap-4 relative">
				<div className="shrink-0">
					<h3 className="text-zinc-100 text-2xl font-semibold">
						{title}
					</h3>
					<p className="text-white/90 font-medium text-sm">
						{count}
					</p>
				</div>


				<motion.div
					className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center text-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
				>
					<ArrowRight className="w-4 h-4" strokeWidth={2} />
				</motion.div>
			</div>
		</motion.div>
	);
}
