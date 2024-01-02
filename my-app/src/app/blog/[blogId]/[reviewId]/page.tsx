type props = {
    params : {
        blogId: string;
        reviewId: string;
    };
};

const BlogDetails = ({params} : props) => {
    return (
        <div>This is blog details page {params.blogId} review {params.reviewId}</div>
    )
}

export default BlogDetails;

