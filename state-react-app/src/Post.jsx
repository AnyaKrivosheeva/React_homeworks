import { useState } from "react";

const Post = () => {
    const [id, setId] = useState("");
    const [post, setPost] = useState(null);

    const handleChange = (e) => {
        setId(e.target.value);
    }

    const handleClick = async () => {
        const postId = Number(id);

        if (postId > 0 && !isNaN(postId)) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                const post = await response.json();
                setPost(post);
            } catch (err) {
                alert(err);
            }
        } else {
            alert("Введите корректный id больше 0.");
        }
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <input placeholder="Введите id поста" value={id} onChange={handleChange}></input>

            <button onClick={handleClick}>Показать пост</button>

            {post !== null && (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    )
}

export default Post