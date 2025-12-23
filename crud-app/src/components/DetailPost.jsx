import { useEffect, useState } from "react"
import PostInfo from "./PostInfo";
import Comments from "./Comments";

const DetailPost = (props) => {
    const {
        postId,
    } = props;

    const [currentPost, setCurrentPost] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((post) => setCurrentPost(post));

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => response.json())
            .then((comments) => setComments(comments));
    }, [postId]);

    return (
        <>
            {currentPost && <PostInfo currentPost={currentPost} postId={postId} />}
            {comments && <Comments comments={comments} />}
        </>
    )
}

export default DetailPost