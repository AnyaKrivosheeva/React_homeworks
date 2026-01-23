import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Posts.css';


const Posts = () => {
    const [posts, setPosts] = useState([]);

    const [searchParams] = useSearchParams();
    const filter = searchParams.get('filter');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
            .then((response) => response.json())
            .then((posts) => setPosts(posts));
    }, []);

    return (
        <>
            <h1>Здесь живут посты</h1>
            <div className="posts-wrapper">
                {posts.map((post) => (
                    <Link key={post.id} to={`/posts/${post.id}`} className='link-to-post'>
                        {post.title}
                    </Link>
                ))}
            </div>
            <Link to="/posts?filter=top" className='show-top'>Показать top</Link>
            <Link to="/posts/this-does-not-exist" className='show-top'>Проверить 404</Link>
            {filter && <p>Фильтр: {filter}</p>}
        </>
    )
}

export default Posts