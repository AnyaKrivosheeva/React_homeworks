'use client';   // клиентский компонент

import { addComment } from '../lib/actions';
import { useTransition, useOptimistic } from 'react';

export default function CommentsClient({ initialComments }) {
    const [isPending, startTransition] = useTransition();

    const [optimisticComments, addOptimistic] = useOptimistic(
        initialComments,
        (state, newComment) => [
            ...state,
            { id: state.length + 1, text: newComment }
        ]
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const text = formData.get("text");

        if (!text.trim()) return;

        // отмечаем переход как “transition”
        startTransition(async () => {
            // мгновенно добавляем в UI
            addOptimistic(text);

            await addComment(formData);  // Server Action
        });

        e.target.reset(); // очищаем форму
    };

    return (
        <>
            <ul>
                {optimisticComments.map((c) => (
                    <li key={c.id}>{c.text}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input name="text" placeholder="Комментарий" />

                <button type="submit" disabled={isPending}>
                    {isPending ? 'Отправка...' : 'Добавить'}
                </button>
            </form>
        </>
    );
};