import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const review = {
    author: "Jessica Martinez",
    rating: 4,
    date: "1 month ago",
    title: "Good value for money",
    text: "Considering the price point, this is an excellent deal. The packaging was a bit damaged upon arrival, but the product itself was intact and works great.",
    helpful: 6,
    image: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_c.png",
};

export function ReviewTwo() {
    return (
        <Card className="w-full max-w-xl shadow-none">
            <CardHeader>
                <div className="flex gap-3 items-center">
                    <Avatar className="size-12 rounded-full shrink-0">
                        <AvatarImage src={review.image} alt={review.author} />
                        <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                        <CardTitle className="">{review.author}</CardTitle>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`size-3 ${i < review.rating ? "fill-foreground/50 text-foreground" : "fill-muted-foreground/30 text-muted-foreground/30"}`}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-muted-foreground">• {review.date}</span>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-medium">{review.title}</h4>
                    <p className="font-normal text-muted-foreground leading-relaxed">
                        {review.text}
                    </p>
                </div>

                <Separator />

                {/* Actions */}
                <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                        <ThumbsUp className="size-4" />
                        <span className="font-semibold">Helpful ({review.helpful})</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                        <MessageCircle className="size-4" />
                        <span className="font-semibold">Comment</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
