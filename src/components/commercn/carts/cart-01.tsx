"use client"

import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const cartItem = {
    id: 1,
    name: "Apple AirPods Pro (2nd gen)",
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1624258919367-5dc28f5dc293?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160",
    price: 129.00,
    originalPrice: 129,
    quantity: 1,
}

export function ShoppingCartOne() {
    const [quantity, setQuantity] = useState(cartItem.quantity)

    const incrementQuantity = () => setQuantity(prev => prev + 1)
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

    return (
        <Card className="w-full max-w-[480px] bg-muted border-0 shadow-none rounded-xl not-prose p-4 flex-row gap-4">
            <div className="w-24 h-24 bg-white rounded-xl overflow-hidden flex-shrink-0">
                <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 flex flex-col space-y-4">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <CardDescription>
                            {cartItem.category}
                        </CardDescription>
                        <CardTitle className="text-lg">
                            {cartItem.name}
                        </CardTitle>
                    </div>

                    <Button size="icon" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center bg-background text-foreground rounded-lg border border-gray-200">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-lg hover:bg-muted"
                            onClick={decrementQuantity}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{quantity}</span>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-lg hover:bg-muted"
                            onClick={incrementQuantity}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    <p className="text-2xl font-semibold">
                        ${(cartItem.price * quantity).toFixed(2)}
                    </p>
                </div>
            </div>
        </Card>
    )
}