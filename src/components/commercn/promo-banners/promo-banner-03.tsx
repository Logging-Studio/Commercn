"use client"

import { ArrowRight, X, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const promoBannerData = {
  icon: Timer,
  message: "Flash Sale Ends Today",
  description: "Free shipping on all orders over $50",
  link: "/sale",
  linkText: "Shop Now",
  backgroundColor: "bg-destructive",
  textColor: "text-white",
  isDismissible: true,
}

export function PromoBannerThree() {
  const [isVisible, setIsVisible] = useState(true)
  const Icon = promoBannerData.icon

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "relative flex items-center justify-center px-4 py-4",
        promoBannerData.backgroundColor,
        promoBannerData.textColor
      )}
    >
      <div className="flex flex-col items-center justify-center gap-1 text-center sm:flex-row sm:gap-3">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5" />}
          <span className="font-bold text-base">{promoBannerData.message}</span>
        </div>
        <span className="text-sm opacity-90">{promoBannerData.description}</span>
        {promoBannerData.link && (
          <a
            href={promoBannerData.link}
            className="inline-flex items-center gap-1.5 rounded-md bg-white/20 px-3 py-1.5 text-sm font-semibold hover:bg-white/30 transition-colors"
          >
            {promoBannerData.linkText}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      {promoBannerData.isDismissible && (
        <Button
          variant="ghost"
          size="icon-sm"
          className="absolute right-2 hover:bg-white/10"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
