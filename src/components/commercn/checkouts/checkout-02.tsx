import { X, CreditCard, MapPin, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";

const cartItems = [
    {
        id: 1,
        name: "Headphones",
        price: 299,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Watch",
        price: 145.5,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&auto=format&fit=crop",
    },
];

export function CheckoutTwo() {
    return (
        <div className="w-full max-w-xl">
            <div className="flex flex-col gap-8">
                {/* Cart Section */}
                <Card className="shadow-none rounded-2xl">
                    <CardContent>
                        <div className="flex items-center justify-between mb-4">
                            <CardTitle className="font-semibold text-lg">Cart ({cartItems.length})</CardTitle>
                            <Button variant="ghost" size="icon">
                                <Edit className="size-4" />
                            </Button>
                        </div>
                        <div className="flex gap-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex flex-col gap-2 w-24">
                                    <div className="size-24 rounded-xl overflow-hidden">
                                        <img src={item.image} alt={item.name} className="size-full object-cover" />
                                    </div>
                                    <span className="font-medium text-sm lg:text-base">${item.price}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Delivery Section */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <MapPin className="size-4" />
                        <h3 className="font-semibold text-lg">Delivery</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 *:gap-1">
                        <Field>
                            <FieldLabel className="font-semibold text-xs uppercase tracking-wide">First Name</FieldLabel>
                            <Input className="h-12 rounded-xl shadow-none" placeholder="John" />
                        </Field>
                        <Field>
                            <FieldLabel className="font-semibold text-xs uppercase tracking-wide">Last Name</FieldLabel>
                            <Input className="h-12 rounded-xl shadow-none" placeholder="Doe" />
                        </Field>
                        <Field className="col-span-2">
                            <FieldLabel className="font-semibold text-xs uppercase tracking-wide">Address</FieldLabel>
                            <Input className="h-12 rounded-xl shadow-none" placeholder="123 Main St" />
                        </Field>
                        <Field>
                            <FieldLabel className="font-semibold text-xs uppercase tracking-wide">City</FieldLabel>
                            <Input className="h-12 rounded-xl shadow-none" placeholder="New York" />
                        </Field>
                        <Field>
                            <FieldLabel className="font-semibold text-xs uppercase tracking-wide">Postcode</FieldLabel>
                            <Input className="h-12 rounded-xl shadow-none" placeholder="12345" />
                        </Field>
                    </div>
                </section>

                {/* Payment Section */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <CreditCard className="size-4" />
                        <h3 className="font-semibold text-lg">Payment</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="bg-muted rounded-xl border border-foreground flex items-center p-4 gap-4">
                            <div className="w-12 h-8 bg-background rounded border flex items-center justify-center">
                                <CreditCard className="size-5" />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-sm">Mastercard ending in 4242</p>
                                <p className="text-xs text-muted-foreground">Expires 12/25</p>
                            </div>
                            <Button variant="ghost" size="icon">
                                <Edit className="size-3" />
                            </Button>
                        </div>
                        <Button variant="outline" className="shadow-none">
                            + Add new payment method
                        </Button>
                    </div>
                </section>

                <Separator />

                {/* Confirm Section */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-end justify-between w-full">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-muted-foreground">Total to pay</span>
                            <span className="font-bold text-4xl">$444.50</span>
                        </div>
                        <Badge variant="secondary" className="font-bold">Free Shipping</Badge>
                    </div>
                    <Button size="lg" className="w-full">
                        Confirm Payment
                    </Button>
                </div>
            </div>
        </div>
    );
}
