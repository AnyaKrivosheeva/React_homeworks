const PostInfo = (props) => {
    const {
        currentPost,
        postId,
    } = props

    return (
        <div>
            <h2>post - {postId}</h2>
            <div><b>Title</b> - {currentPost.title}</div>
            <br></br>
            <div style={{ maxWidth: '200px' }}><b>Text</b> - {currentPost.body}</div>
            <br></br>
            <div><b>User id</b> - {currentPost.userId}</div>
        </div>
    )
}

export default PostInfo