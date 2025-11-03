"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bookmark, PlusIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const data = {
    title: "Mojo Soft Drink",
    varients: [
        {
            size: "250 ML",
            price: 1.25
        },
        {
            size: "500 ML",
            price: 2.50
        }
    ],
    currency: "$",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/products/mojo_can.png",
}

export function ProductCardThree() {
    const [selectedVariant, setSelectedVariant] = useState(0)
    const [isBookmarked, setIsBookmarked] = useState(false)

    return (
        <Card className={cn("w-full max-w-[320px] mx-auto border-2 border-black shadow-none rounded-none overflow-hidden p-0 not-prose")}>
            <CardContent className="p-0">
                <div className="relative aspect-[1/1]">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover"
                    />

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-4 right-4 rounded-none border-2 border-black"
                        onClick={() => setIsBookmarked(!isBookmarked)}
                    >
                        <Bookmark
                            className={cn(
                                "w-5 h-5 transition-colors",
                                isBookmarked
                                    ? "fill-black text-black"
                                    : "text-foreground"
                            )}
                        />
                    </Button>
                </div>

                <div className="p-4">
                    <div className="text-center mb-4">
                        <h3 className="text-2xl mb-1">
                            {data.title}
                        </h3>
                        <p className="text-4xl font-bold">
                            {data.currency}
                            <span key={selectedVariant} className="inline-block animate-in fade-in slide-in-from-top-2 duration-300">
                                {data.varients[selectedVariant].price.toFixed(2)}
                            </span>
                        </p>
                    </div>

                    <div className="flex gap-2 mb-6 justify-center">
                        {data.varients.map((variant, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedVariant(index)}
                                className={cn(
                                    "rounded-none border-2",
                                    selectedVariant === index
                                        ? "border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
                                        : "border-foreground text-foreground"
                                )}
                            >
                                {variant.size}
                            </Button>
                        ))}
                    </div>

                    <Button size="lg" className="rounded-none w-full">
                        <PlusIcon className="ml-2 size-4" />Add to Cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}