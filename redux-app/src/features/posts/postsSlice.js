import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',                       // обычно "_имя slice/название action_"
    async () => {
        const res = await fetch(POSTS_URL);

        if (!res.ok) throw new Error('Ошибка загрузки');

        return await res.json();
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        status: 'idle',                // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},                     // синхронные редьюсеры,созданные в slice
    extraReducers: (builder) => {         //редьюсеры созданнные вне slice
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export default postsSlice.reducer;