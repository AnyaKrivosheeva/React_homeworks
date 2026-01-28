import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';


export default function Posts() {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(state => state.posts);

    useEffect(() => {
        if (status === 'idle') {       // не делаем повторный запрос если данные уже есть и статус не idle (в реальном проекте нужна еще кнопка для reset)
            dispatch(fetchPosts());
        }
    }, [dispatch, status]);

    if (status === 'loading') return <p>Загрузка...</p>;
    if (status === 'failed') return <p>Ошибка: {error}</p>;

    return (
        <div>
            <p>Статус загрузки: {status}</p>
            <ul style={{ height: '300px', overflowY: 'auto', border: '1px solid black' }}>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};