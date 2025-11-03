"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function ReviewOne() {
    return (
        <Card className="w-full max-w-md border border-gray-300 not-prose p-0">
            <CardContent className="p-6 space-y-6">
                    <Quote className="w-8 h-8 text-gray-300" />

                <p className="text-lg leading-relaxed">
                    Love the headphones. Been using them for a week now, they are comfortable and have a good sound quality.
                </p>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                            src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_c.png"
                            alt="Li Hua"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg">
                            Li Hua
                        </h4>
                        <p className="text-gray-500 text-sm">
                            @lihua_rav
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}