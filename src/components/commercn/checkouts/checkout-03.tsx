import { Gift, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";

const product = {
    name: "Premium Headphones",
    details: "Qty: 1 • Silver",
    price: 304.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop",
};

export function CheckoutThree() {
    return (
        <Card className="w-full max-w-xl rounded-2xl pt-0 overflow-hidden">
            {/* Header */}
            <CardHeader className="flex items-center justify-between bg-accent p-6">
                <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-background flex items-center justify-center">
                        <Gift className="size-6" />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">Send a Gift</h2>
                        <p className="text-sm">Make someone&apos;s day special</p>
                    </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <X className="size-4" />
                </Button>
            </CardHeader>

            <CardContent className="flex flex-col gap-8">
                {/* Recipient Info */}
                <div className="grid grid-cols-2 gap-4 *:gap-1">
                    <Field>
                        <FieldLabel className="font-semibold text-xs uppercase tracking-wide">To (Name)</FieldLabel>
                        <Input className="h-12 rounded-xl shadow-none" placeholder="Recipient's Name" />
                    </Field>
                    <Field>
                        <FieldLabel className="font-semibold text-xs uppercase tracking-wide">From (Name)</FieldLabel>
                        <Input className="h-12 rounded-xl shadow-none" placeholder="Your Name" />
                    </Field>
                </div>

                <Field className="gap-1">
                    <FieldLabel className="font-semibold text-xs uppercase tracking-wide">Recipient Email</FieldLabel>
                    <Input className="h-12 rounded-xl shadow-none" placeholder="hello@friend.com" type="email" />
                </Field>

                {/* Gift Message */}
                <Field className="gap-1">
                    <FieldLabel className="font-semibold text-xs uppercase tracking-wide">Gift Message</FieldLabel>
                    <Textarea
                        className="rounded-xl shadow-none"
                        rows={6}
                        placeholder="Write a personal note... (Optional)"
                    />
                </Field>

                {/* Gift Options */}
                <Card className="shadow-none rounded-2xl">
                    <CardContent className="flex items-center gap-4">
                        <div className="size-16 rounded-xl overflow-hidden shrink-0">
                            <img src={product.image} alt={product.name} className="size-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-base">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">{product.details}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="gift-wrap" />
                            <Label htmlFor="gift-wrap" className="text-sm font-medium cursor-pointer">
                                Gift Wrap (+$5)
                            </Label>
                        </div>
                    </CardContent>
                </Card>
            </CardContent>

            {/* Footer */}
            <CardFooter>
                <Button size="lg" className="w-full text-lg py-6">Proceed to Pay ${product.price.toFixed(2)}</Button>
            </CardFooter>
        </Card>
    );
}
