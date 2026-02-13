'use server';   // серверный компонент

import CommentsClient from './CommentsClient';
import { fetchComments } from '../lib/db';

export default async function CommentsList() {
    const comments = await fetchComments();   // запрос напрямую из бд


    // подключаем клиентский компонент в серверном
    return (
        <div>
            <CommentsClient initialComments={comments} />
        </div>
    );
};