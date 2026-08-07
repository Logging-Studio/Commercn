import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { Footer } from "./footer";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<HomeLayout {...baseOptions()} className="retro-theme">
			{children}
			<Footer />
		</HomeLayout>
	);
}
