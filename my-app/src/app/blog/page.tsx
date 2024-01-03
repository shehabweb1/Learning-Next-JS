"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

interface Props {}

const Blog: NextPage<Props> = ({}) => {
	const router = useRouter();
	return (
		<div>
			<h1 className="text-4xl">This is blog page</h1>
			<button
				className="py-2 px-4 text-xl font-semibold m-5 bg-white text-black"
				onClick={() => router.push("/")}
			>
				Home
			</button>
		</div>
	);
};

export default Blog;
