"use client"

import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const promoBannerData = {
  announcement: "New Collection",
  message: "Summer Sale: Up to 50% off on selected items",
  link: "/collections/summer",
  linkText: "Browse Collection",
  backgroundColor: "bg-secondary",
  textColor: "text-secondary-foreground",
  isDismissible: true,
}

export function PromoBannerTwo() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "relative flex items-center justify-center px-4 py-3.5",
        promoBannerData.backgroundColor,
        promoBannerData.textColor
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="inline-flex items-center rounded-full bg-background/10 px-2.5 py-0.5 text-xs font-semibold">
          {promoBannerData.announcement}
        </span>
        <span className="font-medium">{promoBannerData.message}</span>
        {promoBannerData.link && (
          <a
            href={promoBannerData.link}
            className="inline-flex items-center gap-1 font-semibold hover:underline underline-offset-4"
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
          className="absolute right-2 hover:bg-background/10"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
