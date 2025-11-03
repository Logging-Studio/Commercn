"use client"

import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function ProductCardTwo() {
  const [isFavorited, setIsFavorited] = useState(false)

  const productData = {
    name: "Handmade Leather Purple Bag",
    category: "wearable",
    bio: "Turning insights into the impact with creative content.",
    followers: "2.5K",
    following: "522",
    profileImage: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1742",
    isVerified: true,
    isFollowing: false,
    price: 180.00
  }


  return (
    <Card className={cn("w-full max-w-[320px] mx-auto border-0 rounded-3xl not-prose overflow-hidden p-0")}>
      <CardContent className="p-0 overflow-hidden">
        {/* Profile Image */}
        <div className="aspect-[3/2] h-full relative overflow-hidden">
          <img
            src={productData.profileImage}
            alt={productData.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="p-6 -mt-12 z-10 relative bg-card rounded-t-3xl">
          {/* Name and Verification */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <CardTitle>
                {productData.name}
              </CardTitle>
              <CardDescription>
                {productData.category}
              </CardDescription>
            </div>

            <p className="text-2xl font-bold">${productData.price}</p>
          </div>

          {/* Follow Button */}
          <div className="flex items-center justify-between gap-2">
            <Button className="flex-1">
              Buy Now
            </Button>
            <Button size="icon" variant="outline" onClick={() => setIsFavorited(!isFavorited)}>
              <Heart className={cn("w-6 h-6 transition-colors", isFavorited ? "fill-red-500 text-red-500" : "text-gray-800 hover:text-red-500")} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}