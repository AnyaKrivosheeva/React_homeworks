import { useEffect, useState } from "react"
import ManagePost from "./ManagePost";
import Post from "./Post";
import DetailPost from "./DetailPost";
import Pagination from "./Pagination";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [postForDetailView, setPostForDetailView] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [userId, setUserId] = useState(1);

    const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const addNewPost = (post) => {
        setPosts([...posts, post]);
    };

    const deletePost = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        })
            .then(() => {
                setPosts(posts.filter((post) => post.id !== postId));
            });
    };

    const selectPost = (post) => {
        setSelectedPost(post);
        setPostForDetailView(null);
    };

    const editPost = (post) => {
        const editedPosts = posts.map((oldPost) => {
            if (oldPost.id === post.id) {
                return post;
            }

            return oldPost;
        });

        setPosts(editedPosts);
    };

    const showDetailPost = (postId) => {
        setSelectedPost(null);
        setPostForDetailView(postId);
    };

    const changePage = (page) => {
        setCurrentPage(page);
    };

    const changeUserId = (e) => {
        setUserId(e.target.value);
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&userId=${userId}&_limit=5`)
            .then((response) => response.json())
            .then((posts) => setPosts(posts));
    }, [currentPage, userId]);

    return (
        <>
            <div className='posts'>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        deletePost={deletePost}
                        selectPost={selectPost}
                        showDetailPost={showDetailPost}
                    />))}
            </div>
            <Pagination pagination={pagination} currentPage={currentPage} changePage={changePage} />
            <div>
                <h2>Filter</h2>
                <input type='text' placeholder='user id' value={userId} onChange={changeUserId} />
            </div>
            {!postForDetailView && <ManagePost addNewPost={addNewPost} selectedPost={selectedPost} editPost={editPost} />}
            {postForDetailView && !selectedPost && <DetailPost postId={postForDetailView} />}
        </>
    )
}

export default Posts