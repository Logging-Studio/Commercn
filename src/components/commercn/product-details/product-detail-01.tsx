"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Minus, Plus, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const productData = {
    name: "Man Black Cotton T-Shirt",
    description: "A comfortable and durable cotton t-shirt for men. Gives you a perfect fit and a great look for every occasion.",
    category: "Clothing",
    rating: 4.9,
    originalPrice: 25.40,
    discount: 6,
    currency: "$",
    images: [
        "https://images.unsplash.com/photo-1502389614483-e475fc34407e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
        "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=928",
        "https://images.unsplash.com/photo-1618453292507-4959ece6429e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=928",
        "https://images.unsplash.com/photo-1617984102437-a4aa52284d00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stockMessage: "Last 1 left - make it yours!"
}

export function ProductDetailOne() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [selectedSize, setSelectedSize] = useState("S")
    const [selectedColor, setSelectedColor] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % productData.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + productData.images.length) % productData.images.length)
    }

    const incrementQuantity = () => setQuantity(prev => prev + 1)
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

    return (
        <div className="w-full max-w-6xl mx-auto p-6 not-prose">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="flex gap-2">
                    <div className="flex flex-col w-28 gap-2">
                        {productData.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={cn(
                                    "aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors",
                                    currentImageIndex === index ? "border-gray-900" : "border-transparent"
                                )}
                            >
                                <img
                                    src={image}
                                    alt={`${productData.name} ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={productData.images[currentImageIndex]}
                            alt={productData.name}
                            className="w-full h-full object-cover"
                        />

                        {/* Navigation Arrows */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full"
                            onClick={nextImage}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>

                    
                </div>

                {/* Product Info Section */}
                <div className="space-y-6">
                    <div>
                        <a href="#" className="text-gray-600 hover:text-gray-900 inline-block mb-2">
                            Clothing
                        </a>
                        <h1 className="text-3xl font-bold">
                            {productData.name}
                        </h1>
                        <p className="text-muted-foreground">
                            {productData.description}
                        </p>
                    </div>

                    <div className="flex items-end gap-2">
                        <p className="text-3xl font-bold text-gray-900">
                            {productData.currency}{productData.originalPrice - productData.discount}
                        </p>
                        <p className="text-gray-400 font-medium text-2xl line-through">
                            {productData.currency}{productData.originalPrice}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium mb-2">Available Sizes:</h3>
                        <div className="flex gap-2">
                            {productData.sizes.map((size) => (
                                <Button
                                    key={size}
                                    variant={selectedSize === size ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </Button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-10 w-10 rounded-lg hover:bg-gray-100"
                                onClick={decrementQuantity}
                            >
                                <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">{quantity}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-10 w-10 rounded-lg hover:bg-gray-100"
                                onClick={incrementQuantity}
                            >
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>
                        <Button size="lg">
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}