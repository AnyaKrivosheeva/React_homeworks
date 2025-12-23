const Comments = (props) => {
    const {
        comments,
    } = props
    return (
        <>
            <h2>Comments</h2>
            <div className='comments'>
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <div><b>Title</b> - {comment.name}</div>
                        <br></br>
                        <div style={{ maxWidth: '200px' }}><b>Text</b> - {comment.body}</div>
                        <br></br>
                        <div><b>User email</b> - {comment.email}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Comments