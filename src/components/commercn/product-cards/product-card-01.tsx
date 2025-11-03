import { cn } from "@/lib/utils"
import { Heart } from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProductCardOneProps {
  className?: string
  product?: {
    name: string
    description: string
    price: number
    image: string
    isBestSeller?: boolean
    isFavorited?: boolean
  }
}

export function ProductCardOne({ className, product }: ProductCardOneProps) {
  const defaultProduct = {
    name: 'Vintage Denim Jacket',
    description: "A classic denim jacket with a vintage wash and durable stitching. Perfect for everyday streetwear.",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1649937408746-4d2f603f91c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1226",
    isBestSeller: true,
    isFavorited: false
  }

  const productData = product || defaultProduct

  return (
    <Card className={cn("w-full max-w-[320px] mx-auto not-prose", className)}>
      <CardContent>
        {/* Product Image */}
        <div className="relative mb-6">
          <div className="bg-gray-100 rounded-2xl flex items-center justify-center h-[280px] relative overflow-hidden">
            <img 
              src={productData.image} 
              alt={productData.name}
              className="w-full h-full object-fit"
            />

            <Button variant="ghost" size="icon" className="absolute top-2 right-2">
              <Heart
                className={cn(
                  "w-6 h-6 transition-colors",
                  productData.isFavorited
                    ? "fill-red-500 text-red-500"
                    : "text-gray-800 hover:text-red-500"
                )}
              />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="mb-4">
          <CardTitle className="text-xl leading-tight mb-2">
            {productData.name}
          </CardTitle>
          <CardDescription className="text-sm">
            {productData.description}
          </CardDescription>
        </div>
        

        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">
            ${productData.price.toFixed(2)}
          </p>

          <Button>
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}