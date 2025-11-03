"use client"

import { Card, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Minus, Plus } from "lucide-react"
import { useState } from "react"

const cartItem = {
    id: 1,
    name: "Mojo Soft Drink",
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/products/mojo_can.png",
    price: 1.25,
    variants: {
        color: ["BLACK", "WHITE", "BROWN"],
        size: ["US 7", "US 8", "US 9", "US 10", "US 11"]
    },
    size: "250 ml",
    selectedColor: "BLACK",
    selectedSize: "US 8",
    quantity: 1
}

export function ShoppingCartTwo() {
    const [selectedColor, setSelectedColor] = useState(cartItem.selectedColor)
    const [selectedSize, setSelectedSize] = useState(cartItem.selectedSize)
    const [quantity, setQuantity] = useState(cartItem.quantity)

    const incrementQuantity = () => setQuantity(prev => prev + 1)
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

    return (
        <Card className="w-full max-w-[400px] border border-black dark:border-white rounded-none shadow-none p-4 flex-row gap-4 not-prose">
            {/* Product Image */}
            <div className="w-28 h-28 border border-black dark:border-white">
                <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <CardTitle className="text-xl font-medium tracking-wide">
                        {cartItem.name} ({cartItem.size})
                    </CardTitle>
                    <p className="text-lg text-red-500 font-bold tracking-wide">
                        ${(cartItem.price * quantity).toFixed(2)}
                    </p>
                </div>

                {/* Variant Selectors */}
                <div className="flex gap-2">
                    <div className="flex items-center border border-black dark:border-white rounded-none">
                        <Button
                            variant="ghost"
                            size="icon-sm"
                            className="rounded-none hover:bg-black hover:text-white"
                            onClick={decrementQuantity}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-4 text-sm text-center font-medium">{quantity}</span>
                        <Button
                            variant="ghost"
                            size="icon-sm"
                            className="rounded-none hover:bg-black hover:text-white"
                            onClick={incrementQuantity}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button size="icon-sm" variant="outline" className="rounded-none border-black dark:border-white hover:bg-black hover:text-white h-full">
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Card>
    )
}