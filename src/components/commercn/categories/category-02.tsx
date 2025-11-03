"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const categories = [
    {
        id: 1,
        name: "RetroFit",
        description: "Vintage-inspired athletic wear",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        bgColor: "bg-gradient-to-br from-pink-200 to-pink-300",
        textColor: "text-navy-900"
    },
    {
        id: 2,
        name: "Denimóra",
        description: "Premium denim for the modern rebel",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        bgColor: "bg-gradient-to-br from-blue-200 to-cyan-200",
        textColor: "text-navy-900"
    },
    {
        id: 3,
        name: "Velóra",
        description: "Softness, comfort, and timeless style",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        bgColor: "bg-gradient-to-br from-orange-200 to-yellow-200",
        textColor: "text-navy-900"
    }
]

export function CategoryTwo() {
    return (
        <div className="w-full max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <Card
                        key={category.id}
                        className={cn(
                            "group cursor-pointer border-0 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                            category.bgColor
                        )}
                    >
                        <CardContent className="p-0 relative h-[400px]">
                            {/* Image Section */}
                            <div className="relative h-3/5 overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
                            </div>
                            
                            {/* Text Section */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white/95 to-transparent">
                                <h2 className={cn(
                                    "text-3xl font-bold mb-2 tracking-tight",
                                    category.textColor
                                )}>
                                    {category.name}
                                </h2>
                                <p className={cn(
                                    "text-sm font-medium opacity-80",
                                    category.textColor
                                )}>
                                    {category.description}
                                </p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-6 right-6 w-3 h-3 bg-white/40 rounded-full" />
                            <div className="absolute top-12 right-8 w-2 h-2 bg-white/30 rounded-full" />
                            <div className="absolute bottom-20 left-6 w-4 h-4 bg-white/20 rounded-full" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}