import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Post = () => {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('not found');
                }
                return res.json();
            })
            .then(post => setPost(post))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <p>Загрузка поста...</p>;
    }

    return (
        <div>
            <h2>Пост №{id}</h2>
            <div>
                {post.title}
            </div>
            <div>
                {post.body}
            </div>
        </div>
    )
}

export default Post