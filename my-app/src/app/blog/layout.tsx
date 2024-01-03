"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type navItem = { name: string; path: string };
type navigation = navItem[];

const navigationItems: navigation = [
	{
		name: "Blog",
		path: "/blog",
	},
	{
		name: "Login",
		path: "/login",
	},
	{
		name: "Register",
		path: "/register",
	},
];

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<html lang="en">
			<body>
				<header className="bg-blue-500 p-5 flex justify-between">
					<h1 className="text-4xl">Header</h1>
					<div className="flex gap-5">
						{navigationItems.map((link: navItem) => {
							const isActive = pathname.startsWith(link.path);
							return (
								<Link
									href={{ pathname: link.path }}
									key={link.name}
									className={
										isActive ? "text-gray-900 font-bold" : "text-gray-300"
									}
								>
									{link.name}
								</Link>
							);
						})}
					</div>
				</header>
				{children}
				<footer className="bg-gray-500 text-4xl py-5 text-center fixed bottom-0 w-full">
					Footer
				</footer>
			</body>
		</html>
	);
}
