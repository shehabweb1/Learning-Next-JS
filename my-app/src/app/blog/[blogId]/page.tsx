
type props = {
	params: {
		blogId: string;
	};
};

export async function generateMetadata({ params }: props) {
	return {
		title: `Blog ${params.blogId}`,
	};
}

const BlogDetails = ({ params }: props) => {
	return <div>This is blog details page {params.blogId}</div>;
};

export default BlogDetails;
