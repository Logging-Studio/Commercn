import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Syne } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const geist = Syne({
	subsets: ["latin"],
});

export const metadata = {
	title: "CommerCN | Shadcn Ecommerce UI Blocks",
	description:
		"Shadcn UI blocks for e-commerce websites. Built with React, Next.js, and Tailwind CSS.",
	keywords: ["Commercn", "Shadcn UI", "Shadcn E-commerce"],
	icons: {
		icon: "/favicon.ico",
	},
};

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={geist.className} suppressHydrationWarning>
			<Script
				defer
				src="https://cloud.umami.is/script.js"
				data-website-id="7e98cb80-cce6-440e-8d23-b1a4abd6adfa"
			/>
			<body className="flex flex-col min-h-screen p-">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
