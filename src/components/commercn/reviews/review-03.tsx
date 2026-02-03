import { Star } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const review = {
    text: "I've never seen such attention to detail. This product has completely transformed my daily workflow.",
    author: "Emily Davis",
    rating: 4,
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_c.png",
};

export function ReviewThree() {
    return (
        <div className="relative max-w-3xl">
            <div className="absolute top-0 -left-4 -right-4 h-[1px] bg-neutral-400"></div>
            <div className="absolute bottom-0 -left-4 -right-4 h-[1px] bg-neutral-400"></div>
            <div className="absolute left-0 -top-4 -bottom-4 w-[1px] bg-neutral-400"></div>
            <div className="absolute right-0 -top-4 -bottom-4 w-[1px] bg-neutral-400"></div>

            <CardContent className="flex flex-col items-center gap-6 py-12">
                <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`size-5 stroke-1 ${i < review.rating ? "fill-foreground/50 text-foreground" : "fill-muted-foreground/30 text-muted-foreground/30"}`}
                        />
                    ))}
                </div>

                <blockquote className="text-2xl lg:text-3xl font-medium text-center leading-snug">
                    "{review.text}"
                </blockquote>

                <div className="flex flex-col items-center gap-1">
                    <Avatar className="size-12 border border-neutral-400">
                        <AvatarImage src={review.image} alt={review.author} />
                        <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <h5 className="text-md font-medium">{review.author}</h5>
                </div>
            </CardContent>
        </div>
    );
}
