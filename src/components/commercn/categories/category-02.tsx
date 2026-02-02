'use client'

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
	{
		title: "Sports",
		count: "1.5k+ Products",
		image: "https://images.unsplash.com/photo-1762077656142-e359ebffb2f4?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Watches",
		count: "400+ Products",
		image: "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Footwear",
		count: "2.8k+ Products",
		image: "https://images.unsplash.com/photo-1742392787511-8158c243b772?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Accessories",
		count: "1.9k+ Products",
		image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

export function CategoryTwo() {
	return (
		<div className="flex flex-col lg:flex-row w-full items-center lg:items-stretch justify-center gap-4 max-w-4xl">
			{/* Featured Left Card */}
			<Card className="relative w-full lg:max-w-[300px] overflow-hidden bg-foreground border-none">
				<div className="bg-gradient-to-bl from-gray-400 to-gray-400/10 absolute inset-0 absolute w-full h-full" />
				<CardHeader className="relative h-full flex flex-col justify-between items-start">
					<div className="mb-auto">
						<h2 className="text-2xl mb-2 text-background font-medium">
							New Arrivals
						</h2>
						<p className="text-muted text-sm">
							Check out the latest additions to our store. Updated daily.
						</p>
					</div>

					{/* Button */}
					<Button variant="link" className="text-background text-lg group hover:no-underline">
						View All
						<ArrowRight className="w-4 h-4 text-background transition-transform group-hover:translate-x-2" />
					</Button>
				</CardHeader>
			</Card>

			{/* Right Grid */}
			<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
				{categories.map((cat) => (
					<CategoryListCard
						key={cat.title}
						title={cat.title}
						count={cat.count}
						imageSrc={cat.image}
					/>
				))}
			</div>
		</div>
	);
}

interface CategoryListCardProps {
	title: string;
	count: string;
	imageSrc: string;
}

export function CategoryListCard({ title, count, imageSrc }: CategoryListCardProps) {
	return (
		<Card className="w-full p-4 group">
			<CardHeader className="flex p-0">
				<div className="shrink-0 w-[64px] h-[64px] rounded-lg overflow-hidden">
					<img
						src={imageSrc}
						alt={title}
						className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
					/>
				</div>

				{/* Text Content */}
				<div className="flex flex-col flex-1">
					<CardTitle className="text-xl">{title}</CardTitle>
					<CardDescription>{count}</CardDescription>
				</div>

				{/* Arrow Icon - Visible on hover */}
				<div className="flex h-full items-center">
					<ArrowRight className="w-4 h-4 text-black dark:text-white transition-all -translate-x-1 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 duration-400" />
				</div>
			</CardHeader>
		</Card>
	);
}
