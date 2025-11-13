"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Field,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
} from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function CheckoutOne() {
	const [shippingMethod, setShippingMethod] = useState<"home" | "pickup">(
		"home",
	);

	return (
		<div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-8">
			<div className="w-full order-2 md:order-1">
				{/* <CardContent> */}
					<form>
						<FieldGroup>
							<FieldSet>
								<FieldLegend>Shipping address</FieldLegend>
								<FieldGroup className="gap-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<Field>
											<FieldLabel htmlFor="first-name">First name</FieldLabel>
											<Input id="first-name" />
										</Field>
										<Field>
											<FieldLabel htmlFor="last-name">Last name</FieldLabel>
											<Input id="last-name" />
										</Field>
									</div>
									<Field>
										<FieldLabel htmlFor="email">Email</FieldLabel>
										<Input
											id="email"
											type="email"
										/>
									</Field>
									<Field>
										<FieldLabel htmlFor="street-address">
											Street Address
										</FieldLabel>
										<Input id="street-address" />
									</Field>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<Field>
											<FieldLabel htmlFor="city">City</FieldLabel>
											<Input id="city" />
										</Field>
										<Field>
											<FieldLabel htmlFor="state">State</FieldLabel>
											<Select>
												<SelectTrigger id="state">
													<SelectValue placeholder="Select state" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="ca">California</SelectItem>
													<SelectItem value="ny">New York</SelectItem>
													<SelectItem value="tx">Texas</SelectItem>
													<SelectItem value="fl">Florida</SelectItem>
												</SelectContent>
											</Select>
										</Field>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<Field>
											<FieldLabel htmlFor="country">Country</FieldLabel>
											<Input id="country" />
										</Field>
										<Field>
											<FieldLabel htmlFor="zip">ZIP code</FieldLabel>
											<Input id="zip" />
										</Field>
									</div>
								</FieldGroup>
							</FieldSet>
							<FieldSet>
								<FieldLegend>Shipping method</FieldLegend>
								<RadioGroup
									defaultValue="home"
									onValueChange={(value) =>
										setShippingMethod(value as "home" | "pickup")
									}
									className="flex flex-col lg:flex-row gap-4"
								>
									<div
										className={`flex flex-1 items-center space-x-3 p-3 rounded-lg border transition-colors ${shippingMethod === "home"
											? "border-gray-500 bg-gray-50"
											: "border-gray-200 hover:border-gray-300"
											}`}
									>
										<RadioGroupItem value="home" id="home" />
										<Label htmlFor="home" className="cursor-pointer flex-col items-start flex-1">
											<div className="font-medium">Home delivery</div>
											<div className="text-sm text-muted-foreground">
												Takes 3-5 business days
											</div>
										</Label>
									</div>
									<div
										className={`flex flex-1 items-center space-x-3 p-3 rounded-lg border transition-colors ${shippingMethod === "pickup"
											? "border-gray-500 bg-gray-50"
											: "border-gray-200 hover:border-gray-300"
											}`}
									>
										<RadioGroupItem value="pickup" id="pickup" />
										<Label htmlFor="pickup" className="cursor-pointer flex-col items-start flex-1">
											<div className="font-medium">In-store pickup</div>
											<div className="text-sm text-muted-foreground">
												Pick from store location
											</div>
										</Label>
									</div>
								</RadioGroup>
							</FieldSet>
							<Field orientation="horizontal">
								<Button className="w-full h-12 bg-black text-white hover:bg-gray-800">
									Continue to Payment
								</Button>
							</Field>
						</FieldGroup>
					</form>
				{/* </CardContent> */}
			</div>

			<div className="w-full max-w-[400px] bg-gray-50 border p-4 rounded-xl order-1 md:order-2">
				<h4 className="text-lg font-medium mb-6">Order Summary</h4>

				<ul className="space-y-2">
					<li className="flex justify-between">
						<h5 className="text-sm">Vintage Denim Jacket</h5>
						<p className="font-medium">1 x $129.00</p>
					</li>
					<li className="flex justify-between">
						<h5 className="text-sm">Handmade Leather Wallet</h5>
						<p className="font-medium">1 x $39.00</p>
					</li>

					<hr className="my-4" />

					<li className="flex justify-between">
						<h5 className="text-sm">Subtotal</h5>
						<p className="font-medium">$168.00</p>
					</li>
					<li className="flex justify-between">
						<h5 className="text-sm">Shipping</h5>
						<p className="font-medium">${shippingMethod === "home" ? 10 : 0}</p>
					</li>
					<li className="flex justify-between">
						<h5 className="text-sm">Tax</h5>
						<p className="font-medium">$12.00</p>
					</li>

					<hr className="my-4" />
					<li className="flex justify-between">
						<h5 className="text-lg font-medium">Total</h5>
						<p className="text-xl font-medium">${(168 + (shippingMethod === "home" ? 10 : 0)).toFixed(2)}</p>
					</li>
				</ul>
			</div>
		</div>
	);
}



// function CartItem()