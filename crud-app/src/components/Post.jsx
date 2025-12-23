const Post = (props) => {
    const {
        post,
        deletePost,
        selectPost,
        showDetailPost,
    } = props

    return (
        <div className='posts-item'>
            <span onClick={() => selectPost(post)} className='post-title'>
                {post.title}
            </span>
            <button onClick={() => deletePost(post.id)} className='post-button'>Удалить</button>
            <button onClick={() => showDetailPost(post.id)} className='post-button'>Детальный просмотр</button>
        </div>
    )
}

export default Post